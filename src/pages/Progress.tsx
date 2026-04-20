import React from 'react';
import ProgressTracker from '../components/ProgressTracker';

const Progress: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">学习进度</h1>
          <p className="text-gray-600">跟踪你的学习进展和成就</p>
        </div>
        <ProgressTracker />
      </div>
    </div>
  );
};

export default Progress;