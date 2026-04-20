import React, { useState } from 'react';
import { CheckCircle, XCircle, Code, BarChart3, FileText, ChevronRight } from 'lucide-react';

interface Exercise {
  id: number;
  title: string;
  type: 'multiple-choice' | 'fill-blank' | 'coding' | 'data-analysis';
  difficulty: '入门' | '中级' | '高级';
  description: string;
  completed: boolean;
  points: number;
}

const exercises: Exercise[] = [
  {
    id: 1,
    title: 'Python变量类型识别',
    type: 'multiple-choice',
    difficulty: '入门',
    description: '识别Python中的不同变量类型',
    completed: true,
    points: 10
  },
  {
    id: 2,
    title: '函数参数填空',
    type: 'fill-blank',
    difficulty: '入门',
    description: '填写函数的正确参数',
    completed: false,
    points: 15
  },
  {
    id: 3,
    title: '列表操作编程',
    type: 'coding',
    difficulty: '中级',
    description: '编写代码实现列表的特定操作',
    completed: false,
    points: 20
  },
  {
    id: 4,
    title: '数据可视化分析',
    type: 'data-analysis',
    difficulty: '中级',
    description: '分析数据集并创建可视化',
    completed: false,
    points: 25
  },
  {
    id: 5,
    title: 'Pandas数据处理',
    type: 'coding',
    difficulty: '高级',
    description: '使用Pandas处理和分析复杂数据集',
    completed: false,
    points: 30
  }
];

const PracticeModule: React.FC = () => {
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);

  const getExerciseIcon = (type: Exercise['type']) => {
    switch (type) {
      case 'multiple-choice':
        return <FileText size={20} className="text-blue-500" />;
      case 'fill-blank':
        return <FileText size={20} className="text-green-500" />;
      case 'coding':
        return <Code size={20} className="text-purple-500" />;
      case 'data-analysis':
        return <BarChart3 size={20} className="text-orange-500" />;
      default:
        return <FileText size={20} className="text-gray-500" />;
    }
  };

  const getExerciseTypeLabel = (type: Exercise['type']) => {
    switch (type) {
      case 'multiple-choice':
        return '选择题';
      case 'fill-blank':
        return '填空题';
      case 'coding':
        return '编程题';
      case 'data-analysis':
        return '数据分析题';
      default:
        return '练习';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">练习中心</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {exercises.map((exercise) => (
            <div key={exercise.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition duration-300">
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                      {getExerciseIcon(exercise.type)}
                    </div>
                    <div>
                      <h3 className="font-medium">{exercise.title}</h3>
                      <div className="flex items-center text-sm mt-1">
                        <span className={`px-2 py-0.5 rounded-full mr-2 ${
                          exercise.difficulty === '入门' ? 'bg-blue-100 text-blue-600' :
                          exercise.difficulty === '中级' ? 'bg-green-100 text-green-600' :
                          'bg-orange-100 text-orange-600'
                        }`}>
                          {exercise.difficulty}
                        </span>
                        <span className="text-gray-600">{getExerciseTypeLabel(exercise.type)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {exercise.completed ? (
                      <div className="flex items-center text-green-500">
                        <CheckCircle size={18} className="mr-1" />
                        <span className="text-sm">已完成</span>
                      </div>
                    ) : (
                      <span className="text-sm font-medium text-[#4A6FA5]">{exercise.points} 分</span>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">{exercise.description}</p>
                <button 
                  className={`w-full py-2 rounded-lg text-sm font-medium transition duration-300 ${
                    exercise.completed 
                      ? 'bg-gray-100 text-gray-600' 
                      : 'bg-[#4A6FA5] text-white hover:bg-[#3A5A85]'
                  }`}
                  onClick={() => setSelectedExercise(exercise)}
                >
                  {exercise.completed ? '查看结果' : '开始练习'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 练习详情模态框 */}
        {selectedExercise && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{selectedExercise.title}</h3>
                <button 
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setSelectedExercise(null)}
                >
                  <XCircle size={24} />
                </button>
              </div>
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <span className={`px-2 py-0.5 rounded-full mr-2 ${
                    selectedExercise.difficulty === '入门' ? 'bg-blue-100 text-blue-600' :
                    selectedExercise.difficulty === '中级' ? 'bg-green-100 text-green-600' :
                    'bg-orange-100 text-orange-600'
                  }`}>
                    {selectedExercise.difficulty}
                  </span>
                  <span className="text-gray-600">{getExerciseTypeLabel(selectedExercise.type)}</span>
                  <span className="ml-auto text-sm font-medium text-[#4A6FA5]">{selectedExercise.points} 分</span>
                </div>
                <p className="text-gray-700">{selectedExercise.description}</p>
              </div>
              
              {/* 练习内容 */}
              <div className="mb-6">
                {selectedExercise.type === 'multiple-choice' && (
                  <div>
                    <h4 className="font-medium mb-3">选择题示例：</h4>
                    <p className="mb-3">以下哪个不是Python的内置数据类型？</p>
                    <div className="space-y-2">
                      <div className="flex items-center p-2 border rounded-lg">
                        <input type="radio" id="option1" name="answer" className="mr-2" />
                        <label htmlFor="option1">list</label>
                      </div>
                      <div className="flex items-center p-2 border rounded-lg">
                        <input type="radio" id="option2" name="answer" className="mr-2" />
                        <label htmlFor="option2">dict</label>
                      </div>
                      <div className="flex items-center p-2 border rounded-lg">
                        <input type="radio" id="option3" name="answer" className="mr-2" />
                        <label htmlFor="option3">tuple</label>
                      </div>
                      <div className="flex items-center p-2 border rounded-lg">
                        <input type="radio" id="option4" name="answer" className="mr-2" />
                        <label htmlFor="option4">array</label>
                      </div>
                    </div>
                  </div>
                )}
                
                {selectedExercise.type === 'fill-blank' && (
                  <div>
                    <h4 className="font-medium mb-3">填空题示例：</h4>
                    <p className="mb-3">请填写以下函数的参数，使其能够正确计算两个数的和。</p>
                    <div className="bg-gray-50 p-4 rounded-lg mb-3">
                      <pre className="text-sm">
                        <code>
def add_numbers(____, ____):
    return a + b

result = add_numbers(5, 3)
print(result)</code>
                      </pre>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-sm mb-1">第一个参数</label>
                        <input type="text" className="w-full p-2 border rounded" placeholder="输入参数名" />
                      </div>
                      <div>
                        <label className="block text-sm mb-1">第二个参数</label>
                        <input type="text" className="w-full p-2 border rounded" placeholder="输入参数名" />
                      </div>
                    </div>
                  </div>
                )}
                
                {selectedExercise.type === 'coding' && (
                  <div>
                    <h4 className="font-medium mb-3">编程题示例：</h4>
                    <p className="mb-3">编写一个函数，接收一个列表，返回列表中所有偶数的平方和。</p>
                    <div className="bg-gray-900 text-white p-4 rounded-lg mb-3">
                      <pre className="text-sm">
                        <code>
# 请在此处编写代码
def sum_of_squares(numbers):
    # 你的代码
    pass

# 测试示例
print(sum_of_squares([1, 2, 3, 4, 5]))  # 应返回 20 (2² + 4²)
                        </code>
                      </pre>
                    </div>
                    <div className="mb-3">
                      <label className="block text-sm mb-1">代码编辑器</label>
                      <textarea 
                        className="w-full p-2 border rounded h-40" 
                        placeholder="在此处编写代码"
                      ></textarea>
                    </div>
                    <button className="bg-green-600 text-white px-4 py-2 rounded">
                      运行代码
                    </button>
                  </div>
                )}
                
                {selectedExercise.type === 'data-analysis' && (
                  <div>
                    <h4 className="font-medium mb-3">数据分析题示例：</h4>
                    <p className="mb-3">使用提供的销售数据集，创建一个可视化图表，展示不同产品类别的销售额。</p>
                    <div className="bg-gray-50 p-4 rounded-lg mb-3">
                      <p className="text-sm mb-2">数据集包含以下字段：</p>
                      <ul className="text-sm list-disc list-inside space-y-1">
                        <li>product_id: 产品ID</li>
                        <li>product_category: 产品类别</li>
                        <li>sales: 销售额</li>
                        <li>date: 销售日期</li>
                      </ul>
                    </div>
                    <div className="mb-3">
                      <label className="block text-sm mb-1">代码编辑器</label>
                      <textarea 
                        className="w-full p-2 border rounded h-40" 
                        placeholder="使用pandas和matplotlib编写代码"
                      ></textarea>
                    </div>
                    <button className="bg-green-600 text-white px-4 py-2 rounded">
                      生成可视化
                    </button>
                  </div>
                )}
              </div>
              
              <div className="flex justify-end space-x-2">
                <button 
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  onClick={() => setSelectedExercise(null)}
                >
                  取消
                </button>
                <button className="px-4 py-2 bg-[#4A6FA5] text-white rounded-lg hover:bg-[#3A5A85]">
                  提交答案
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PracticeModule;