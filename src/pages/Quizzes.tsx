import React from 'react';
import QuizModule from '../components/QuizModule';

const Quizzes: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">测验中心</h1>
          <p className="text-gray-600">测试你的Python和数据分析知识掌握程度</p>
        </div>
        <QuizModule />
      </div>
    </div>
  );
};

export default Quizzes;