import React from 'react';
import { TrendingUp, Book, CheckSquare, FileText, Award } from 'lucide-react';

interface CourseProgress {
  id: number;
  title: string;
  completedLessons: number;
  totalLessons: number;
  progress: number;
}

interface OverallProgress {
  courses: CourseProgress[];
  totalCourses: number;
  completedCourses: number;
  totalLessons: number;
  completedLessons: number;
  totalExercises: number;
  completedExercises: number;
  totalQuizzes: number;
  completedQuizzes: number;
  averageScore: number;
}

const progressData: OverallProgress = {
  courses: [
    {
      id: 1,
      title: 'Python基础',
      completedLessons: 8,
      totalLessons: 10,
      progress: 80
    },
    {
      id: 2,
      title: '数据分析入门',
      completedLessons: 5,
      totalLessons: 12,
      progress: 41.67
    },
    {
      id: 3,
      title: '数据可视化',
      completedLessons: 2,
      totalLessons: 8,
      progress: 25
    }
  ],
  totalCourses: 5,
  completedCourses: 1,
  totalLessons: 30,
  completedLessons: 15,
  totalExercises: 20,
  completedExercises: 8,
  totalQuizzes: 5,
  completedQuizzes: 2,
  averageScore: 85
};

const ProgressTracker: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">学习进度</h2>
          <div className="flex items-center text-sm text-gray-600">
            <TrendingUp size={16} className="mr-1" />
            <span>总体进度</span>
          </div>
        </div>
        
        {/* 总体进度卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <Book size={20} className="text-[#4A6FA5] mr-2" />
              <h3 className="font-medium">课程进度</h3>
            </div>
            <div className="text-2xl font-bold mb-2">
              {progressData.completedCourses}/{progressData.totalCourses}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-[#4A6FA5] h-2 rounded-full" 
                style={{ width: `${(progressData.completedCourses / progressData.totalCourses) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <CheckSquare size={20} className="text-green-500 mr-2" />
              <h3 className="font-medium">练习完成</h3>
            </div>
            <div className="text-2xl font-bold mb-2">
              {progressData.completedExercises}/{progressData.totalExercises}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-500 h-2 rounded-full" 
                style={{ width: `${(progressData.completedExercises / progressData.totalExercises) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <FileText size={20} className="text-purple-500 mr-2" />
              <h3 className="font-medium">测验成绩</h3>
            </div>
            <div className="text-2xl font-bold mb-2">
              {progressData.averageScore}%
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-purple-500 h-2 rounded-full" 
                style={{ width: `${progressData.averageScore}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        {/* 课程进度列表 */}
        <h3 className="text-lg font-medium mb-4">课程详情</h3>
        <div className="space-y-4">
          {progressData.courses.map((course) => (
            <div key={course.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium">{course.title}</h4>
                <span className="text-sm font-medium text-gray-600">
                  {course.completedLessons}/{course.totalLessons} 课时
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div 
                  className="bg-[#4A6FA5] h-2 rounded-full" 
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>进度</span>
                <span>{course.progress.toFixed(1)}%</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* 学习统计 */}
        <div className="mt-8">
          <h3 className="text-lg font-medium mb-4">学习统计</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">{progressData.totalLessons}</div>
              <div className="text-sm text-gray-600">总课时</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">{progressData.completedLessons}</div>
              <div className="text-sm text-gray-600">已完成课时</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">{progressData.completedQuizzes}</div>
              <div className="text-sm text-gray-600">已完成测验</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">{progressData.averageScore}</div>
              <div className="text-sm text-gray-600">平均分数</div>
            </div>
          </div>
        </div>
        
        {/* 最近活动 */}
        <div className="mt-8">
          <h3 className="text-lg font-medium mb-4">最近活动</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <Book size={16} className="text-blue-500" />
              </div>
              <div>
                <p className="text-sm">完成了 <span className="font-medium">Python基础</span> 课程的第8课时</p>
                <p className="text-xs text-gray-500">今天 14:30</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                <CheckSquare size={16} className="text-green-500" />
              </div>
              <div>
                <p className="text-sm">完成了 <span className="font-medium">Python变量类型识别</span> 练习</p>
                <p className="text-xs text-gray-500">今天 13:15</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                <FileText size={16} className="text-purple-500" />
              </div>
              <div>
                <p className="text-sm">完成了 <span className="font-medium">Python基础单元测验</span>，得分 85/100</p>
                <p className="text-xs text-gray-500">昨天 16:45</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;