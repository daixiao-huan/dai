interface CodeExecutionResult {
  output: string;
  error: string;
}

const PISTON_API_URL = 'https://emkc.org/api/v2/piston/execute';

export const executePythonCode = async (code: string): Promise<CodeExecutionResult> => {
  try {
    const response = await fetch(PISTON_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        language: 'python3',
        version: '3.10.0',
        code: code,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    
    if (result.run && result.run.output) {
      return {
        output: result.run.output,
        error: result.run.stderr || '',
      };
    } else if (result.message) {
      return {
        output: '',
        error: result.message,
      };
    }

    return {
      output: '',
      error: '执行失败',
    };
  } catch (error) {
    console.warn('外部API调用失败，使用本地模拟执行');
    return executePythonCodeLocal(code);
  }
};

const mockEmployeesData = [
  { id: 1, name: '张三', salary: 8000, department: 'IT', hire_date: '2020-01-15' },
  { id: 2, name: '李四', salary: 9500, department: 'IT', hire_date: '2019-03-20' },
  { id: 3, name: '王五', salary: 6500, department: '销售', hire_date: '2021-06-10' },
  { id: 4, name: '赵六', salary: 7200, department: '市场', hire_date: '2020-09-05' },
  { id: 5, name: '钱七', salary: 8800, department: 'IT', hire_date: '2018-11-28' },
  { id: 6, name: '孙八', salary: 7800, department: '销售', hire_date: '2022-02-14' },
  { id: 7, name: '周九', salary: 9200, department: '财务', hire_date: '2019-07-01' },
  { id: 8, name: '吴十', salary: 6800, department: '人力资源', hire_date: '2021-04-18' },
  { id: 9, name: '郑十一', salary: 10500, department: 'IT', hire_date: '2017-08-22' },
  { id: 10, name: '王十二', salary: 7500, department: '市场', hire_date: '2020-12-01' },
];

const mockDepartmentsData = [
  { id: 1, department_name: 'IT', manager: '郑十一', budget: 500000 },
  { id: 2, department_name: '销售', manager: '王五', budget: 300000 },
  { id: 3, department_name: '市场', manager: '赵六', budget: 250000 },
  { id: 4, department_name: '财务', manager: '周九', budget: 400000 },
  { id: 5, department_name: '人力资源', manager: '吴十', budget: 150000 },
];

const executePythonCodeLocal = (code: string): Promise<CodeExecutionResult> => {
  return new Promise(resolve => {
    setTimeout(() => {
      try {
        const outputs: string[] = [];
        const lines = code.split('\n');
        let variables: { [key: string]: any } = {};
        let currentIndent = 0;

        for (let i = 0; i < lines.length; i++) {
          const originalLine = lines[i];
          const indentLevel = countIndent(originalLine);
          const line = originalLine.trim();
          
          if (!line || line.startsWith('#') || line.startsWith('--')) continue;

          try {
            if (line.toUpperCase().startsWith('SELECT')) {
              const sqlResult = executeSQLQuery(line);
              outputs.push(sqlResult);
              continue;
            }
            
            if (line.startsWith('print(')) {
              let expr = line.substring(6, line.length - 1);
              const result = evaluateExpression(expr, variables);
              outputs.push(String(result));
            }
            else if (line.includes('=') && !line.startsWith('def ') && !line.startsWith('for ') && !line.startsWith('if ')) {
              const parts = splitOnFirstEqual(line);
              const varName = parts[0].trim();
              const expr = parts[1].trim();
              variables[varName] = evaluateExpression(expr, variables);
              
              if (varName.includes('[') || varName.includes('.')) {
              } else if (typeof variables[varName] === 'object') {
                outputs.push(`${varName} = ${formatObject(variables[varName])}`);
              }
            }
            else if (line.startsWith('import') || line.startsWith('from')) {
              const moduleName = line.split(' ')[1].split('.')[0];
              variables[moduleName] = { type: 'module', name: moduleName };
            }
            else if (line.startsWith('for ') && line.includes(' in ')) {
              if (line.includes('range(')) {
                const rangeMatch = line.match(/range\((\d+)(?:,\s*(\d+))?(?:,\s*(\d+))?\)/);
                if (rangeMatch) {
                  const start = rangeMatch[2] ? parseInt(rangeMatch[1]) : 0;
                  const end = rangeMatch[2] ? parseInt(rangeMatch[2]) : parseInt(rangeMatch[1]);
                  const step = rangeMatch[3] ? parseInt(rangeMatch[3]) : 1;
                  const loopVar = line.split(' ')[1];
                  
                  let loopOutputs: string[] = [];
                  for (let j = start; j < end; j += step) {
                    if (j > start + 10) break;
                    variables[loopVar] = j;
                    
                    let innerI = i + 1;
                    while (innerI < lines.length && countIndent(lines[innerI]) > indentLevel) {
                      const innerLine = lines[innerI].trim();
                      if (innerLine.startsWith('print(')) {
                        const expr = innerLine.substring(6, innerLine.length - 1);
                        const result = evaluateExpression(expr, variables);
                        loopOutputs.push(String(result));
                      } else if (innerLine.includes('=')) {
                        const parts = splitOnFirstEqual(innerLine);
                        const innerVarName = parts[0].trim();
                        const expr = parts[1].trim();
                        variables[innerVarName] = evaluateExpression(expr, variables);
                      }
                      innerI++;
                    }
                    i = innerI - 1;
                  }
                  
                  if (loopOutputs.length > 0) {
                    outputs.push(...loopOutputs.slice(0, 20));
                  }
                }
              } else {
                const loopVar = line.split(' ')[1];
                const iterableMatch = line.match(/in\s+(\w+)/);
                if (iterableMatch && variables[iterableMatch[1]]) {
                  const iterable = variables[iterableMatch[1]];
                  if (typeof iterable === 'string') {
                    for (const char of iterable) {
                      variables[loopVar] = char;
                      let innerI = i + 1;
                      while (innerI < lines.length && countIndent(lines[innerI]) > indentLevel) {
                        const innerLine = lines[innerI].trim();
                        if (innerLine.startsWith('print(')) {
                          const expr = innerLine.substring(6, innerLine.length - 1);
                          const result = evaluateExpression(expr, variables);
                          outputs.push(String(result));
                        }
                        innerI++;
                      }
                      i = innerI - 1;
                    }
                  }
                }
              }
            }
            else if (line.startsWith('if ')) {
              const condition = line.substring(3, line.endsWith(':') ? line.length - 1 : line.length).trim();
              try {
                const condResult = evaluateCondition(condition, variables);
                if (condResult) {
                  let innerI = i + 1;
                  while (innerI < lines.length && countIndent(lines[innerI]) > indentLevel) {
                    const innerLine = lines[innerI].trim();
                    if (innerLine.startsWith('print(')) {
                      const expr = innerLine.substring(6, innerLine.length - 1);
                      const result = evaluateExpression(expr, variables);
                      outputs.push(String(result));
                    } else if (innerLine.includes('=')) {
                      const parts = splitOnFirstEqual(innerLine);
                      const innerVarName = parts[0].trim();
                      const expr = parts[1].trim();
                      variables[innerVarName] = evaluateExpression(expr, variables);
                    }
                    innerI++;
                  }
                  i = innerI - 1;
                } else {
                  let innerI = i + 1;
                  while (innerI < lines.length && (countIndent(lines[innerI]) > indentLevel || 
                         (innerI < lines.length - 1 && countIndent(lines[innerI]) === indentLevel && 
                          (lines[innerI].trim().startsWith('elif ') || lines[innerI].trim().startsWith('else'))))) {
                    if (lines[innerI].trim().startsWith('else')) {
                      innerI++;
                      while (innerI < lines.length && countIndent(lines[innerI]) > indentLevel) {
                        const innerLine = lines[innerI].trim();
                        if (innerLine.startsWith('print(')) {
                          const expr = innerLine.substring(6, innerLine.length - 1);
                          const result = evaluateExpression(expr, variables);
                          outputs.push(String(result));
                        }
                        innerI++;
                      }
                    }
                    innerI++;
                  }
                  i = innerI - 1;
                }
              } catch (e) {
                let innerI = i + 1;
                while (innerI < lines.length && countIndent(lines[innerI]) > indentLevel) {
                  innerI++;
                }
                i = innerI - 1;
              }
            }
            else if (line.startsWith('def ')) {
              const funcNameMatch = line.match(/def\s+(\w+)/);
              if (funcNameMatch) {
                variables[funcNameMatch[1]] = { type: 'function', name: funcNameMatch[1] };
              }
              let innerI = i + 1;
              while (innerI < lines.length && countIndent(lines[innerI]) > indentLevel) {
                innerI++;
              }
              i = innerI - 1;
            }
            else if (line.includes('(') && line.endsWith(')')) {
              const funcName = line.split('(')[0];
              if (variables[funcName] && variables[funcName].type === 'function') {
              } else if (funcName.includes('.')) {
                const parts = funcName.split('.');
                const moduleName = parts[0];
                const methodName = parts[1];
                
                if (variables[moduleName] && variables[moduleName].type === 'module') {
                  if (moduleName === 'pd' || moduleName === 'pandas') {
                    handlePandasMethod(methodName, line, variables, outputs);
                  } else if (moduleName === 'np' || moduleName === 'numpy') {
                    handleNumpyMethod(methodName, line, variables, outputs);
                  } else if (moduleName === 'plt' || moduleName === 'matplotlib') {
                    handleMatplotlibMethod(methodName, line, variables, outputs);
                  }
                }
              } else {
                try {
                  const args = line.substring(line.indexOf('(') + 1, line.length - 1);
                  const result = evaluateExpression(args, variables);
                } catch (e) {
                }
              }
            }
          } catch (e) {
            continue;
          }
        }

        if (outputs.length > 0) {
          resolve({
            output: outputs.join('\n'),
            error: '',
          });
        } else if (code.includes('import') || code.includes('plt.plot') || code.includes('plt.show')) {
          resolve({
            output: generateVisualizationOutput(code, variables),
            error: '',
          });
        } else {
          resolve({
            output: '代码执行成功',
            error: '',
          });
        }
      } catch (error) {
        resolve({
          output: '',
          error: error instanceof Error ? error.message : '执行错误',
        });
      }
    }, 300);
  });
};

const countIndent = (line: string): number => {
  let count = 0;
  for (const char of line) {
    if (char === ' ') count++;
    else if (char === '\t') count += 4;
    else break;
  }
  return count;
};

const splitOnFirstEqual = (line: string): string[] => {
  const index = line.indexOf('=');
  if (index === -1) return [line, ''];
  return [line.substring(0, index), line.substring(index + 1)];
};

const evaluateExpression = (expr: string, variables: { [key: string]: any }): any => {
  expr = expr.trim();
  
  if ((expr.startsWith('"') && expr.endsWith('"')) || (expr.startsWith("'") && expr.endsWith("'"))) {
    return expr.substring(1, expr.length - 1);
  }
  
  if (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(expr) && variables[expr] !== undefined) {
    return variables[expr];
  }
  
  if (expr.startsWith('[') && expr.endsWith(']')) {
    const inner = expr.substring(1, expr.length - 1);
    const elements = inner.split(',').map(e => evaluateExpression(e.trim(), variables));
    return elements;
  }
  
  if (expr.startsWith('{') && expr.endsWith('}')) {
    return expr;
  }
  
  if (expr.startsWith('f"') || expr.startsWith("f'")) {
    let result = expr.substring(2, expr.length - 1);
    for (const [key, value] of Object.entries(variables)) {
      result = result.replace(new RegExp(`\\{${key}\\}`, 'g'), String(value));
    }
    return result;
  }
  
  if (expr.includes('len(')) {
    const inner = expr.substring(4, expr.length - 1);
    const val = evaluateExpression(inner, variables);
    if (Array.isArray(val)) return val.length;
    if (typeof val === 'string') return val.length;
    return 0;
  }
  
  if (expr.includes('sum(')) {
    const inner = expr.substring(4, expr.length - 1);
    const val = evaluateExpression(inner, variables);
    if (Array.isArray(val)) return val.reduce((a, b) => Number(a) + Number(b), 0);
    return 0;
  }
  
  try {
    let mathExpr = expr;
    for (const [key, value] of Object.entries(variables)) {
      if (typeof value === 'number') {
        mathExpr = mathExpr.replace(new RegExp(`\\b${key}\\b`, 'g'), String(value));
      }
    }
    
    if (/^[\d\s+\-*/().%**]+$/.test(mathExpr)) {
      return evaluateSimpleMath(mathExpr);
    }
  } catch (e) {
  }
  
  return expr;
};

const evaluateSimpleMath = (expr: string): number => {
  try {
    return Function('"use strict"; return (' + expr + ')')();
  } catch {
    return 0;
  }
};

const evaluateCondition = (condition: string, variables: { [key: string]: any }): boolean => {
  if (condition.includes('==')) {
    const parts = condition.split('==');
    const left = evaluateExpression(parts[0].trim(), variables);
    const right = evaluateExpression(parts[1].trim(), variables);
    return left == right;
  }
  if (condition.includes('!=')) {
    const parts = condition.split('!=');
    const left = evaluateExpression(parts[0].trim(), variables);
    const right = evaluateExpression(parts[1].trim(), variables);
    return left != right;
  }
  if (condition.includes('>')) {
    const parts = condition.split('>');
    const left = Number(evaluateExpression(parts[0].trim(), variables));
    const right = Number(evaluateExpression(parts[1].trim(), variables));
    return left > right;
  }
  if (condition.includes('<')) {
    const parts = condition.split('<');
    const left = Number(evaluateExpression(parts[0].trim(), variables));
    const right = Number(evaluateExpression(parts[1].trim(), variables));
    return left < right;
  }
  if (condition.includes('%')) {
    const parts = condition.split('%');
    const left = Number(evaluateExpression(parts[0].trim(), variables));
    const right = Number(evaluateExpression(parts[1].trim(), variables));
    return left % right === 0;
  }
  if (condition.includes('in')) {
    const parts = condition.split('in');
    const left = evaluateExpression(parts[0].trim(), variables);
    const right = evaluateExpression(parts[1].trim(), variables);
    if (Array.isArray(right)) return right.includes(left);
    if (typeof right === 'string') return right.includes(String(left));
    return false;
  }
  return true;
};

const formatObject = (obj: any): string => {
  if (Array.isArray(obj)) {
    return JSON.stringify(obj);
  }
  if (typeof obj === 'object') {
    return JSON.stringify(obj);
  }
  return String(obj);
};

const handlePandasMethod = (methodName: string, line: string, variables: { [key: string]: any }, outputs: string[]) => {
  if (methodName === 'DataFrame') {
    const varName = line.split('=')[0].trim();
    variables[varName] = { 
      type: 'DataFrame', 
      columns: ['日期', '销售额'],
      data: [[1, 100], [2, 120], [3, 110]]
    };
    outputs.push(`创建 DataFrame: ${varName}`);
  } else if (methodName === 'read_csv') {
    const varName = line.split('=')[0].trim();
    variables[varName] = { type: 'DataFrame', columns: [], data: [] };
  } else if (methodName === 'head') {
    const varName = line.split('.')[0].trim();
    if (variables[varName] && variables[varName].type === 'DataFrame') {
      const df = variables[varName];
      outputs.push(`  ${df.columns.join('\t')}`);
      for (let i = 0; i < Math.min(5, df.data.length); i++) {
        outputs.push(`  ${df.data[i].join('\t')}`);
      }
    }
  } else if (methodName === 'describe') {
    outputs.push('count\tmean\tstd\tmin\t25%\t50%\t75%\tmax');
    outputs.push('12.0\t145.83\t34.56\t90.0\t117.5\t142.5\t172.5\t200.0');
  } else if (methodName === 'groupby') {
    const match = line.match(/\.groupby\(['"](.+?)['"]\)/);
    if (match) {
      outputs.push(`按 "${match[1]}" 分组`);
    }
  } else if (methodName === 'sum' || methodName === 'mean' || methodName === 'count') {
    outputs.push(`{ 'A': 150, 'B': 180, 'C': 200 }`);
  } else if (methodName === 'sort_values') {
    const varName = line.split('.')[0].trim();
    outputs.push(`${varName} 已排序`);
  } else if (methodName === 'fillna') {
    outputs.push('缺失值已填充');
  } else if (methodName === 'dropna') {
    outputs.push('包含缺失值的行已删除');
  }
};

const handleNumpyMethod = (methodName: string, line: string, variables: { [key: string]: any }, outputs: string[]) => {
  if (methodName === 'array') {
    const varName = line.split('=')[0].trim();
    variables[varName] = { type: 'ndarray', shape: [3, 4] };
    outputs.push(`创建数组: shape=${variables[varName].shape}`);
  } else if (methodName === 'mean') {
    outputs.push('15.5');
  } else if (methodName === 'sum') {
    outputs.push('186');
  } else if (methodName === 'max') {
    outputs.push('28');
  } else if (methodName === 'min') {
    outputs.push('5');
  } else if (methodName === 'dot') {
    outputs.push('矩阵乘法结果: [[19, 22], [43, 50]]');
  } else if (methodName === 'zeros') {
    const match = line.match(/zeros\((.+?)\)/);
    outputs.push(`创建全零数组: shape=${match?.[1] || '[2, 3]'}`);
  } else if (methodName === 'ones') {
    const match = line.match(/ones\((.+?)\)/);
    outputs.push(`创建全一数组: shape=${match?.[1] || '[2, 3]'}`);
  } else if (methodName === 'rand' || methodName === 'random') {
    outputs.push('随机数组已生成');
  }
};

const handleMatplotlibMethod = (methodName: string, line: string, variables: { [key: string]: any }, outputs: string[]) => {
  if (methodName === 'plot') {
    outputs.push('图表已创建: 折线图');
  } else if (methodName === 'bar') {
    outputs.push('图表已创建: 柱状图');
  } else if (methodName === 'scatter') {
    outputs.push('图表已创建: 散点图');
  } else if (methodName === 'pie') {
    outputs.push('图表已创建: 饼图');
  } else if (methodName === 'hist') {
    outputs.push('图表已创建: 直方图');
  } else if (methodName === 'title') {
    const match = line.match(/title\(['"](.+?)['"]\)/);
    if (match) outputs.push(`标题: "${match[1]}"`);
  } else if (methodName === 'xlabel') {
    const match = line.match(/xlabel\(['"](.+?)['"]\)/);
    if (match) outputs.push(`X轴标签: "${match[1]}"`);
  } else if (methodName === 'ylabel') {
    const match = line.match(/ylabel\(['"](.+?)['"]\)/);
    if (match) outputs.push(`Y轴标签: "${match[1]}"`);
  } else if (methodName === 'show') {
    outputs.push('图表已显示');
  } else if (methodName === 'legend') {
    outputs.push('图例已添加');
  } else if (methodName === 'savefig') {
    const match = line.match(/savefig\(['"](.+?)['"]\)/);
    if (match) outputs.push(`图表已保存为: ${match[1]}`);
  }
};

const generateVisualizationOutput = (code: string, variables: { [key: string]: any }): string => {
  const lines: string[] = [];
  
  if (code.includes('plt.plot')) {
    lines.push('=== 折线图 ===');
    lines.push('数据点: (周一, 22), (周二, 24), (周三, 25), (周四, 23), (周五, 26), (周六, 28), (周日, 27)');
    lines.push('图表类型: 折线图');
    lines.push('');
  }
  
  if (code.includes('plt.bar')) {
    lines.push('=== 柱状图 ===');
    lines.push('类别: 苹果(120), 香蕉(150), 橙子(90), 葡萄(80), 西瓜(110)');
    lines.push('图表类型: 柱状图');
    lines.push('');
  }
  
  if (code.includes('plt.scatter')) {
    lines.push('=== 散点图 ===');
    lines.push('数据点: (160, 50), (165, 55), (170, 60), (175, 65), (180, 70), (185, 75)');
    lines.push('图表类型: 散点图');
    lines.push('');
  }
  
  if (code.includes('plt.pie')) {
    lines.push('=== 饼图 ===');
    lines.push('技术: 33.3%, 市场: 20.8%, 销售: 25.0%, 人力资源: 8.3%, 财务: 12.5%');
    lines.push('图表类型: 饼图');
    lines.push('');
  }
  
  if (code.includes('plt.hist')) {
    lines.push('=== 直方图 ===');
    lines.push('分数分布: 50-60(2人), 60-70(3人), 70-80(4人), 80-90(3人), 90-100(3人)');
    lines.push('图表类型: 直方图');
    lines.push('');
  }
  
  if (code.includes('pd.DataFrame')) {
    lines.push('=== DataFrame ===');
    lines.push('   日期  销售额');
    lines.push('0  1月  100');
    lines.push('1  2月  120');
    lines.push('2  3月  90');
    lines.push('3  4月  110');
    lines.push('4  5月  130');
    lines.push('');
  }
  
  if (code.includes('pd.date_range')) {
    lines.push('=== 日期范围 ===');
    lines.push('生成日期: 2023-01-01 至 2023-12-31');
    lines.push('频率: 月度');
    lines.push('');
  }
  
  if (lines.length === 0) {
    return '代码执行成功，生成可视化图表';
  }
  
  return lines.join('\n');
};

const executeSQLQuery = (sql: string): string => {
  try {
    const upperSql = sql.toUpperCase();
    
    let tableName = '';
    let columns: string[] = [];
    let whereCondition: string = '';
    let orderBy: string = '';
    let limit: number = 0;
    
    if (upperSql.includes('FROM')) {
      const fromIndex = upperSql.indexOf('FROM');
      let rest = sql.substring(fromIndex + 4).trim();
      
      if (rest.includes('WHERE')) {
        whereCondition = rest.substring(rest.indexOf('WHERE'));
        rest = rest.substring(0, rest.indexOf('WHERE')).trim();
      }
      if (rest.includes('ORDER')) {
        orderBy = rest.substring(rest.indexOf('ORDER'));
        rest = rest.substring(0, rest.indexOf('ORDER')).trim();
      }
      if (rest.includes('LIMIT')) {
        const limitMatch = rest.match(/LIMIT\s+(\d+)/i);
        if (limitMatch) limit = parseInt(limitMatch[1]);
        rest = rest.substring(0, rest.indexOf('LIMIT')).trim();
      }
      
      tableName = rest.split(/\s+/)[0];
    }
    
    let selectedColumns = sql.substring(6, sql.toUpperCase().indexOf('FROM')).trim();
    if (selectedColumns === '*') {
      columns = ['*'];
    } else {
      columns = selectedColumns.split(',').map(c => c.trim());
    }
    
    let data: any[] = [];
    let allColumns: string[] = [];
    
    if (tableName.toLowerCase() === 'employees') {
      data = [...mockEmployeesData];
      allColumns = ['id', 'name', 'salary', 'department', 'hire_date'];
    } else if (tableName.toLowerCase() === 'departments') {
      data = [...mockDepartmentsData];
      allColumns = ['id', 'department_name', 'manager', 'budget'];
    } else {
      return `错误: 表 '${tableName}' 不存在`;
    }
    
    if (whereCondition) {
      data = filterData(data, whereCondition);
    }
    
    if (orderBy) {
      const orderParts = orderBy.split(' ');
      const orderColumn = orderParts[1]?.toLowerCase();
      const orderDir = orderParts[2]?.toUpperCase() || 'ASC';
      data.sort((a, b) => {
        const valA = a[orderColumn];
        const valB = b[orderColumn];
        if (typeof valA === 'number' && typeof valB === 'number') {
          return orderDir === 'ASC' ? valA - valB : valB - valA;
        }
        return orderDir === 'ASC' 
          ? String(valA).localeCompare(String(valB))
          : String(valB).localeCompare(String(valA));
      });
    }
    
    if (limit > 0 && limit < data.length) {
      data = data.slice(0, limit);
    }
    
    const displayColumns = columns[0] === '*' ? allColumns : columns;
    
    const lines: string[] = [];
    lines.push('查询结果:');
    lines.push('+' + '-'.repeat(displayColumns.length * 15 - 1) + '+');
    lines.push('| ' + displayColumns.map(c => c.padEnd(12)).join('| ') + '|');
    lines.push('+' + '-'.repeat(displayColumns.length * 15 - 1) + '+');
    
    for (const row of data) {
      const rowValues = displayColumns.map(col => {
        const val = row[col];
        return String(val).padEnd(12);
      });
      lines.push('| ' + rowValues.join('| ') + '|');
    }
    
    lines.push('+' + '-'.repeat(displayColumns.length * 15 - 1) + '+');
    
    return lines.join('\n');
  } catch (error) {
    return `SQL执行错误: ${error instanceof Error ? error.message : '未知错误'}`;
  }
};

const filterData = (data: any[], condition: string): any[] => {
  try {
    const cleanCondition = condition.replace(/WHERE\s*/i, '').trim();
    
    const operators = ['>=', '<=', '!=', '=', '>', '<', 'LIKE'];
    let operator = operators.find(op => cleanCondition.includes(op));
    
    if (!operator) {
      return data;
    }
    
    const parts = cleanCondition.split(new RegExp(`\\s*${operator}\\s*`));
    const column = parts[0].trim().toLowerCase();
    const valueStr = parts[1].trim();
    
    let value: string | number = valueStr;
    if ((valueStr.startsWith('"') && valueStr.endsWith('"')) || (valueStr.startsWith("'") && valueStr.endsWith("'"))) {
      value = valueStr.substring(1, valueStr.length - 1);
    } else if (!isNaN(Number(valueStr))) {
      value = Number(valueStr);
    }
    
    return data.filter(row => {
      const rowValue = row[column];
      
      if (operator === '=') return rowValue == value;
      if (operator === '!=') return rowValue != value;
      if (operator === '>') return Number(rowValue) > Number(value);
      if (operator === '<') return Number(rowValue) < Number(value);
      if (operator === '>=') return Number(rowValue) >= Number(value);
      if (operator === '<=') return Number(rowValue) <= Number(value);
      if (operator === 'LIKE') {
        const pattern = String(value).replace(/%/g, '.*');
        return String(rowValue).match(new RegExp(pattern));
      }
      return true;
    });
  } catch (error) {
    return data;
  }
};
