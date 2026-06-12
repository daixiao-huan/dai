import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, CheckCircle, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { courses } from '../data/courses';

interface CourseLevel {
  id: number;
  title: string;
  description: string;
  courseIds: number[];
  statusMap: { [key: number]: 'completed' | 'available' | 'locked' };
  isExpanded: boolean;
}

const courseLevelsData: CourseLevel[] = [
  {
    id: 1,
    title: '入门级',
    description: '适合零基础或初学者，掌握数据分析的基础概念和技能',
    isExpanded: true,
    courseIds: [1, 5, 6],
    statusMap: { 1: 'completed', 5: 'available', 6: 'locked' }
  },
  {
    id: 2,
    title: '进阶级',
    description: '适合有一定基础的学习者，深入学习数据可视化和高级分析技能',
    isExpanded: false,
    courseIds: [2, 4, 7],
    statusMap: { 2: 'locked', 4: 'locked', 7: 'locked' }
  },
  {
    id: 3,
    title: '高级级',
    description: '适合有丰富经验的学习者，掌握机器学习和深度学习技能',
    isExpanded: false,
    courseIds: [3, 8, 10],
    statusMap: { 3: 'locked', 8: 'locked', 10: 'locked' }
  }
];

const CourseSystem: React.FC = () => {
  const [courseLevels, setCourseLevels] = useState<CourseLevel[]>(courseLevelsData);

  const toggleLevel = (levelId: number) => {
    setCourseLevels(courseLevels.map(level => 
      level.id === levelId ? { ...level, isExpanded: !level.isExpanded } : level
    ));
  };

  const getCourseById = (id: number) => courses.find(c => c.id === id);

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">完整课程体系</h2>
        
        <div className="space-y-4">
          {courseLevels.map((level) => (
            <div key={level.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <div 
                className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => toggleLevel(level.id)}
              >
                <div>
                  <h3 className="text-lg font-semibold">{level.title}</h3>
                  <p className="text-sm text-gray-600">{level.description}</p>
                </div>
                <button className="text-gray-500">
                  {level.isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
              </div>
              
              {level.isExpanded && (
                <div className="p-4">
                  <div className="space-y-3">
                    {level.courseIds.map((courseId) => {
                      const course = getCourseById(courseId);
                      const status = level.statusMap[courseId];
                      
                      if (!course) return null;

                      const isCompleted = status === 'completed';
                      const isLocked = status === 'locked';
                      const isAvailable = status === 'available';

                      return (
                        <div key={courseId} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4">
                              {isCompleted ? (
                                <CheckCircle size={20} className="text-green-500" />
                              ) : isLocked ? (
                                <Lock size={20} className="text-gray-400" />
                              ) : (
                                <BookOpen size={20} className="text-[#4A6FA5]" />
                              )}
                            </div>
                            <div>
                              <h4 className="font-medium">{course.title}</h4>
                              <div className="flex items-center text-sm text-gray-600">
                                <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full mr-2">
                                  {course.difficulty}
                                </span>
                                <span>{course.duration} 小时</span>
                              </div>
                            </div>
                          </div>
                          <Link 
                            to={`/courses/${course.id}`}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition duration-300 ${
                              isLocked 
                                ? 'bg-gray-200 text-gray-500 hover:bg-gray-300'
                                : isCompleted
                                  ? 'bg-green-500 text-white hover:bg-green-600'
                                  : 'bg-[#4A6FA5] text-white hover:bg-[#3A5A85]'
                            }`}
                          >
                            {isCompleted ? '已完成' : isLocked ? '未解锁' : '开始学习'}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSystem;
