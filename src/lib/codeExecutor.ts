// 模拟代码执行服务
// 在实际生产环境中，应该使用安全的沙箱环境执行代码

interface CodeExecutionResult {
  output: string;
  error: string;
}

export const executePythonCode = async (code: string): Promise<CodeExecutionResult> => {
  // 模拟执行延迟
  await new Promise(resolve => setTimeout(resolve, 1000));

  try {
    // 这里是模拟执行，实际应该调用后端API
    // 为了演示，我们处理一些简单的Python代码
    if (code.includes('print')) {
      // 提取print语句的内容
      const printMatches = code.match(/print\((.*?)\)/g);
      if (printMatches) {
        const outputs = printMatches.map(match => {
          const content = match.replace(/print\((.*?)\)/, '$1');
          // 移除引号
          return content.replace(/['"`]/g, '');
        });
        return {
          output: outputs.join('\n'),
          error: ''
        };
      }
    }

    if (code.includes('10 + 5')) {
      return {
        output: '15',
        error: ''
      };
    }

    if (code.includes('for i in range')) {
      return {
        output: '0\n1\n2\n3\n4',
        error: ''
      };
    }

    // 默认输出
    return {
      output: '代码执行成功',
      error: ''
    };
  } catch (error) {
    return {
      output: '',
      error: error instanceof Error ? error.message : '执行错误'
    };
  }
};