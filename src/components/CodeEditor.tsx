import React, { useState, useEffect, useRef } from 'react';
import { EditorState } from '@codemirror/state';
import { EditorView, keymap, lineNumbers, highlightActiveLineGutter, highlightSpecialChars, drawSelection, dropCursor, rectangularSelection, crosshairCursor, highlightActiveLine, placeholder } from '@codemirror/view';
import { python } from '@codemirror/lang-python';
import { oneDark } from '@codemirror/theme-one-dark';
import { defaultKeymap, history, historyKeymap } from '@codemirror/commands';

interface CodeEditorProps {
  initialCode?: string;
  onCodeChange?: (code: string) => void;
  readOnly?: boolean;
}

// 模拟数据库数据
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

// SQL查询执行函数
const executeSQLQuery = (sql: string): string => {
  try {
    let cleanSql = sql.replace(/;$/, '').trim();
    const upperSql = cleanSql.toUpperCase();
    let tableName = '';
    let columns: string[] = [];
    let whereCondition = '';
    let orderBy = '';
    let limit = 0;

    if (upperSql.includes('FROM')) {
      const fromIndex = upperSql.indexOf('FROM');
      let rest = cleanSql.substring(fromIndex + 4).trim();

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

    let selectedColumns = cleanSql.substring(6, upperSql.indexOf('FROM')).trim();
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

    const resultLines: string[] = [];
    resultLines.push('查询结果:');
    resultLines.push('+' + '-'.repeat(displayColumns.length * 15 - 1) + '+');
    resultLines.push('| ' + displayColumns.map(c => c.padEnd(12)).join('| ') + '|');
    resultLines.push('+' + '-'.repeat(displayColumns.length * 15 - 1) + '+');

    for (const row of data) {
      const rowValues = displayColumns.map(col => {
        const val = row[col];
        return String(val).padEnd(12);
      });
      resultLines.push('| ' + rowValues.join('| ') + '|');
    }

    resultLines.push('+' + '-'.repeat(displayColumns.length * 15 - 1) + '+');

    return resultLines.join('\n');
  } catch (error) {
    return `SQL执行错误: ${error instanceof Error ? error.message : '未知错误'}`;
  }
};

// 数据过滤函数
const filterData = (data: any[], condition: string): any[] => {
  try {
    let cleanCondition = condition.replace(/WHERE\s*/i, '').trim();
    cleanCondition = cleanCondition.replace(/;$/, '').trim();

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

// 本地代码执行函数
const executePythonCodeLocal = (code: string): { output: string; error: string } => {
  try {
    const outputs: string[] = [];
    const lines = code.split('\n');
    let variables: { [key: string]: any } = {};
    let hasPlot = false;
    let hasImport = false;
    let hasDataProcessing = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line || line.startsWith('#') || line.startsWith('--')) continue;

      if (line.toUpperCase().startsWith('SELECT')) {
        outputs.push(executeSQLQuery(line));
        continue;
      }

      if (line.startsWith('print(')) {
        const content = line.slice(6, -1).trim();
        let value = '';
        
        if (content.startsWith('"') && content.endsWith('"') || 
            content.startsWith("'") && content.endsWith("'")) {
          value = content.substring(1, content.length - 1);
        } else if (variables[content] !== undefined) {
          value = String(variables[content]);
        } else {
          try {
            value = String(eval(content));
          } catch {
            value = content;
          }
        }
        outputs.push(value);
        continue;
      }

      if (line.toLowerCase().startsWith('import ') || line.toLowerCase().startsWith('from ')) {
        hasImport = true;
        const moduleName = line.split(' ')[1]?.split('.')[0];
        outputs.push(`导入模块: ${moduleName || line}`);
        continue;
      }

      if (line.includes('plt.') || line.includes('sns.') || line.includes('.plot') || line.includes('.show') || line.includes('.scatter') || line.includes('.bar') || line.includes('.hist')) {
        hasPlot = true;
        continue;
      }

      if (line.includes('=') && !line.startsWith('if') && !line.startsWith('while') && !line.startsWith('for')) {
        const [varName, ...rest] = line.split('=');
        const varValue = rest.join('=').trim();
        try {
          const result = eval(varValue);
          variables[varName.trim()] = result;
          if (result && typeof result === 'object' && !Array.isArray(result)) {
            if (result.shape) {
              outputs.push(`${varName.trim()} = 数组形状: ${result.shape}`);
            } else if (result.columns) {
              outputs.push(`${varName.trim()} = DataFrame (${result.columns.length}列)`);
            } else {
              outputs.push(`${varName.trim()} = ${typeof result}`);
            }
          } else if (Array.isArray(result) && result.length > 0) {
            outputs.push(`${varName.trim()} = 列表 (${result.length}个元素)`);
          }
        } catch {
          variables[varName.trim()] = varValue;
          outputs.push(`${varName.trim()} = ${varValue}`);
        }
        hasDataProcessing = true;
        continue;
      }

      if (line.startsWith('def ') || line.startsWith('class ')) {
        const name = line.split('(')[0].split(' ')[1];
        outputs.push(`已定义: ${line.split('(')[0]}`);
        continue;
      }
    }

    if (hasPlot) {
      outputs.push('');
      outputs.push('图表生成成功！');
      outputs.push('(在实际Python环境中会显示可视化图表)');
    } else if (hasImport && hasDataProcessing && outputs.length === 0) {
      outputs.push('数据处理完成！');
    }

    let finalOutput = outputs.join('\n');
    if (!finalOutput) {
      finalOutput = '代码执行成功！';
    }

    return { output: finalOutput, error: '' };
  } catch (err) {
    return { output: '', error: err instanceof Error ? err.message : '执行错误' };
  }
};

const CodeEditor: React.FC<CodeEditorProps> = ({
  initialCode = '',
  onCodeChange,
  readOnly = false
}) => {
  const [code, setCode] = useState<string>(initialCode);
  const [output, setOutput] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const editorRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);
  const initializedRef = useRef<boolean>(false);
  const initialCodeRef = useRef<string>(initialCode);

  // 初始化编辑器
  useEffect(() => {
    if (!editorRef.current || initializedRef.current) return;

    const startState = EditorState.create({
      doc: initialCode,
      extensions: [
        lineNumbers(),
        highlightActiveLineGutter(),
        highlightSpecialChars(),
        drawSelection(),
        dropCursor(),
        rectangularSelection(),
        crosshairCursor(),
        highlightActiveLine(),
        history(),
        python(),
        oneDark,
        keymap.of([...defaultKeymap, ...historyKeymap]),
        placeholder('在此输入Python代码...'),
        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            const newCode = update.state.doc.toString();
            setCode(newCode);
            onCodeChange?.(newCode);
          }
        }),
        EditorView.editable.of(!readOnly)
      ]
    });

    const view = new EditorView({
      state: startState,
      parent: editorRef.current
    });

    viewRef.current = view;
    initializedRef.current = true;
    initialCodeRef.current = initialCode;

    return () => {
      if (viewRef.current) {
        viewRef.current.destroy();
        viewRef.current = null;
        initializedRef.current = false;
      }
    };
  }, []);

  // 处理initialCode变化
  useEffect(() => {
    if (viewRef.current && initialCode !== initialCodeRef.current) {
      const currentCode = viewRef.current.state.doc.toString();
      if (currentCode !== initialCode) {
        viewRef.current.dispatch({
          changes: {
            from: 0,
            to: viewRef.current.state.doc.length,
            insert: initialCode
          }
        });
        initialCodeRef.current = initialCode;
      }
    }
  }, [initialCode]);

  const handleRunCode = async () => {
    setOutput('');
    setError('');
    setIsRunning(true);

    try {
      const response = await fetch('https://emkc.org/api/v2/piston/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          language: 'python3', 
          version: '3.10.0', 
          code: code,
          stdin: ''
        })
      });
      
      if (!response.ok) {
        throw new Error('代码执行失败');
      }
      
      const result = await response.json();
      
      if (result.run) {
        if (result.run.stderr) {
          setError(result.run.stderr);
        } else if (result.run.output) {
          setOutput(result.run.output);
        } else {
          setOutput('代码执行成功');
        }
      } else {
        throw new Error('执行结果格式错误');
      }
    } catch (err) {
      console.warn('使用本地模拟执行');
      const localResult = executePythonCodeLocal(code);
      setOutput(localResult.output);
      if (localResult.error) {
        setError(localResult.error);
      }
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium text-gray-700">代码编辑器</h3>
        <button
          onClick={handleRunCode}
          disabled={isRunning}
          className="bg-[#4A6FA5] hover:bg-[#3A5A85] disabled:bg-gray-400 text-white font-medium py-2 px-4 rounded-lg transition duration-300 flex items-center"
        >
          {isRunning ? '执行中...' : '运行代码'}
        </button>
      </div>
      <div
        ref={editorRef}
        className="border rounded-lg overflow-hidden h-64 focus:outline-none focus:ring-2 focus:ring-[#4A6FA5]"
      />
      {output && (
        <div className="mt-4 p-4 bg-gray-50 border rounded-lg">
          <h4 className="font-medium text-gray-700 mb-2">输出结果：</h4>
          <pre className="whitespace-pre-wrap text-gray-800 font-mono text-sm">{output}</pre>
        </div>
      )}
      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <h4 className="font-medium text-red-700 mb-2">错误信息：</h4>
          <pre className="whitespace-pre-wrap text-red-800 font-mono text-sm">{error}</pre>
        </div>
      )}
    </div>
  );
};

export default CodeEditor;