import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, CheckCircle, Lock } from 'lucide-react';

interface CourseLevel {
  id: number;
  title: string;
  description: string;
  courses: Course[];
  isExpanded: boolean;
}

interface Course {
  id: number;
  title: string;
  description: string;
  duration: number;
  level: string;
  completed: boolean;
  locked: boolean;
}

const courseSystemData: CourseLevel[] = [
  {
    id: 1,
    title: '入门级',
    description: '适合零基础或初学者，掌握数据分析的基础概念和技能',
    isExpanded: true,
    courses: [
      {
        id: 101,
        title: '数据分析Python基础',
        description: '学习数据分析所需的Python编程基础',
        duration: 10,
        level: '入门',
        completed: true,
        locked: false
      },
      {
        id: 102,
        title: '数据分析师SQL',
        description: '学习数据查询和分析所需的SQL',
        duration: 6,
        level: '入门',
        completed: false,
        locked: false
      },
      {
        id: 103,
        title: '数据分析基础概念',
        description: '了解数据分析的基本概念和方法',
        duration: 8,
        level: '入门',
        completed: false,
        locked: true
      }
    ]
  },
  {
    id: 2,
    title: '进阶级',
    description: '适合有一定基础的学习者，深入学习数据可视化和高级分析技能',
    isExpanded: false,
    courses: [
      {
        id: 201,
        title: 'Python数据可视化',
        description: '使用Matplotlib和Seaborn创建精美的可视化',
        duration: 8,
        level: '中级',
        completed: false,
        locked: true
      },
      {
        id: 202,
        title: 'Pandas高级数据处理',
        description: '掌握Pandas库的高级数据处理技巧',
        duration: 12,
        level: '中级',
        completed: false,
        locked: true
      },
      {
        id: 203,
        title: '统计分析基础',
        description: '学习统计分析的基本方法和应用',
        duration: 10,
        level: '中级',
        completed: false,
        locked: true
      }
    ]
  },
  {
    id: 3,
    title: '高级级',
    description: '适合有丰富经验的学习者，掌握机器学习和商业分析技能',
    isExpanded: false,
    courses: [
      {
        id: 301,
        title: '机器学习基础',
        description: '机器学习概念和算法入门',
        duration: 12,
        level: '中级',
        completed: false,
        locked: true
      },
      {
        id: 302,
        title: 'Python商务分析',
        description: '将数据分析技术应用于商务问题',
        duration: 15,
        level: '高级',
        completed: false,
        locked: true
      },
      {
        id: 303,
        title: '数据科学项目实战',
        description: '完成真实数据科学项目，掌握完整工作流程',
        duration: 20,
        level: '高级',
        completed: false,
        locked: true
      }
    ]
  }
];

const CourseSystem: React.FC = () => {
  const [courseLevels, setCourseLevels] = useState<CourseLevel[]>(courseSystemData);

  const toggleLevel = (levelId: number) => {
    setCourseLevels(courseLevels.map(level => 
      level.id === levelId ? { ...level, isExpanded: !level.isExpanded } : level
    ));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">完整课程体系</h2>
        
        <div className="space-y-4">
          {courseLevels.map((level) => (
            <div key={level.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <div 
                className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer"
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
                    {level.courses.map((course) => (
                      <div key={course.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4">
                            {course.completed ? (
                              <CheckCircle size={20} className="text-green-500" />
                            ) : course.locked ? (
                              <Lock size={20} className="text-gray-400" />
                            ) : (
                              <BookOpen size={20} className="text-[#4A6FA5]" />
                            )}
                          </div>
                          <div>
                            <h4 className="font-medium">{course.title}</h4>
                            <div className="flex items-center text-sm text-gray-600">
                              <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full mr-2">
                                {course.level}
                              </span>
                              <span>{course.duration} 小时</span>
                            </div>
                          </div>
                        </div>
                        <button 
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition duration-300 ${
                            course.locked 
                              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                              : 'bg-[#4A6FA5] text-white hover:bg-[#3A5A85]'
                          }`}
                          disabled={course.locked}
                        >
                          {course.completed ? '已完成' : course.locked ? '未解锁' : '开始学习'}
                        </button>
                      </div>
                    ))}
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