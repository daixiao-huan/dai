import React, { useState } from 'react';
import { CheckCircle, XCircle, FileText, Clock, Award, ChevronRight } from 'lucide-react';

interface Quiz {
  id: number;
  title: string;
  type: '单元测验' | '阶段测验' | '期末测验';
  difficulty: '入门' | '中级' | '高级';
  description: string;
  duration: number; // 分钟
  questions: number;
  completed: boolean;
  score: number | null;
  maxScore: number;
}

const quizzes: Quiz[] = [
  {
    id: 1,
    title: 'Python基础单元测验',
    type: '单元测验',
    difficulty: '入门',
    description: '测试Python基础语法和数据类型的掌握程度',
    duration: 30,
    questions: 15,
    completed: true,
    score: 85,
    maxScore: 100
  },
  {
    id: 2,
    title: '数据结构阶段测验',
    type: '阶段测验',
    difficulty: '中级',
    description: '测试数据结构和算法的理解',
    duration: 45,
    questions: 20,
    completed: false,
    score: null,
    maxScore: 100
  },
  {
    id: 3,
    title: '数据分析综合测验',
    type: '期末测验',
    difficulty: '高级',
    description: '综合测试数据分析能力',
    duration: 60,
    questions: 25,
    completed: false,
    score: null,
    maxScore: 100
  }
];

const QuizModule: React.FC = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);

  const getQuizIcon = (type: Quiz['type']) => {
    switch (type) {
      case '单元测验':
        return <FileText size={20} className="text-blue-500" />;
      case '阶段测验':
        return <FileText size={20} className="text-green-500" />;
      case '期末测验':
        return <FileText size={20} className="text-purple-500" />;
      default:
        return <FileText size={20} className="text-gray-500" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">测验中心</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quizzes.map((quiz) => (
            <div key={quiz.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition duration-300">
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                      {getQuizIcon(quiz.type)}
                    </div>
                    <div>
                      <h3 className="font-medium">{quiz.title}</h3>
                      <div className="flex items-center text-sm mt-1">
                        <span className={`px-2 py-0.5 rounded-full mr-2 ${
                          quiz.difficulty === '入门' ? 'bg-blue-100 text-blue-600' :
                          quiz.difficulty === '中级' ? 'bg-green-100 text-green-600' :
                          'bg-orange-100 text-orange-600'
                        }`}>
                          {quiz.difficulty}
                        </span>
                        <span className="text-gray-600">{quiz.type}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {quiz.completed ? (
                      <div className="flex items-center text-green-500">
                        <CheckCircle size={18} className="mr-1" />
                        <span className="text-sm">{quiz.score}/{quiz.maxScore}</span>
                      </div>
                    ) : (
                      <div className="flex items-center text-gray-600">
                        <Clock size={18} className="mr-1" />
                        <span className="text-sm">{quiz.duration}分钟</span>
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">{quiz.description}</p>
                <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <FileText size={14} className="mr-1" />
                    <span>{quiz.questions} 题</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    <span>{quiz.duration} 分钟</span>
                  </div>
                </div>
                <button 
                  className={`w-full py-2 rounded-lg text-sm font-medium transition duration-300 ${
                    quiz.completed 
                      ? 'bg-gray-100 text-gray-600' 
                      : 'bg-[#4A6FA5] text-white hover:bg-[#3A5A85]'
                  }`}
                  onClick={() => setSelectedQuiz(quiz)}
                >
                  {quiz.completed ? '查看结果' : '开始测验'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 测验详情模态框 */}
        {selectedQuiz && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{selectedQuiz.title}</h3>
                <button 
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setSelectedQuiz(null)}
                >
                  <XCircle size={24} />
                </button>
              </div>
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <span className={`px-2 py-0.5 rounded-full mr-2 ${
                    selectedQuiz.difficulty === '入门' ? 'bg-blue-100 text-blue-600' :
                    selectedQuiz.difficulty === '中级' ? 'bg-green-100 text-green-600' :
                    'bg-orange-100 text-orange-600'
                  }`}>
                    {selectedQuiz.difficulty}
                  </span>
                  <span className="text-gray-600">{selectedQuiz.type}</span>
                  <span className="ml-auto text-sm font-medium text-[#4A6FA5]">{selectedQuiz.maxScore} 分</span>
                </div>
                <p className="text-gray-700 mb-3">{selectedQuiz.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <FileText size={14} className="mr-1" />
                    <span>{selectedQuiz.questions} 题</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    <span>{selectedQuiz.duration} 分钟</span>
                  </div>
                </div>
              </div>
              
              {/* 测验内容 */}
              <div className="mb-6">
                {selectedQuiz.completed ? (
                  <div className="text-center py-8">
                    <Award size={64} className="mx-auto text-yellow-500 mb-4" />
                    <h4 className="text-xl font-bold mb-2">测验完成！</h4>
                    <p className="text-gray-600 mb-4">你的得分：{selectedQuiz.score}/{selectedQuiz.maxScore}</p>
                    <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                      <div 
                        className="bg-green-500 h-4 rounded-full" 
                        style={{ width: `${(selectedQuiz.score! / selectedQuiz.maxScore) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600">
                      {selectedQuiz.score! >= 80 ? '优秀！' : selectedQuiz.score! >= 60 ? '及格' : '需要再接再厉'}
                    </p>
                  </div>
                ) : (
                  <div>
                    <h4 className="font-medium mb-3">测验说明：</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 mb-6">
                      <li>本测验包含 {selectedQuiz.questions} 道题目</li>
                      <li>测验时间为 {selectedQuiz.duration} 分钟</li>
                      <li>请在规定时间内完成所有题目</li>
                      <li>提交后将立即显示得分</li>
                    </ul>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                      <p className="text-sm text-blue-700">
                        <strong>注意：</strong> 一旦开始测验，计时器将开始倒计时，中途离开页面将视为放弃测验。
                      </p>
                    </div>
                    <h4 className="font-medium mb-3">样题示例：</h4>
                    <div className="border rounded-lg p-4 mb-4">
                      <p className="font-medium mb-2">1. 以下哪个是Python的正确注释方式？</p>
                      <div className="space-y-2">
                        <div className="flex items-center p-2 border rounded-lg">
                          <input type="radio" id="quiz-option1" name="quiz-answer" className="mr-2" />
                          <label htmlFor="quiz-option1">// 这是注释</label>
                        </div>
                        <div className="flex items-center p-2 border rounded-lg">
                          <input type="radio" id="quiz-option2" name="quiz-answer" className="mr-2" />
                          <label htmlFor="quiz-option2">/* 这是注释 */</label>
                        </div>
                        <div className="flex items-center p-2 border rounded-lg">
                          <input type="radio" id="quiz-option3" name="quiz-answer" className="mr-2" />
                          <label htmlFor="quiz-option3"># 这是注释</label>
                        </div>
                        <div className="flex items-center p-2 border rounded-lg">
                          <input type="radio" id="quiz-option4" name="quiz-answer" className="mr-2" />
                          <label htmlFor="quiz-option4">-- 这是注释</label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex justify-end space-x-2">
                <button 
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  onClick={() => setSelectedQuiz(null)}
                >
                  取消
                </button>
                {selectedQuiz.completed ? (
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                    重新测验
                  </button>
                ) : (
                  <button className="px-4 py-2 bg-[#4A6FA5] text-white rounded-lg hover:bg-[#3A5A85]">
                    开始测验
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizModule;