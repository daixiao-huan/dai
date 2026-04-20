import React from 'react';
import PracticeModule from '../components/PracticeModule';

const Practice: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">练习中心</h1>
          <p className="text-gray-600">通过不同类型的练习巩固你的Python和数据分析技能</p>
        </div>
        <PracticeModule />
      </div>
    </div>
  );
};

export default Practice;