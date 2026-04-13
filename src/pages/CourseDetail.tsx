import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Clock, Award, Star, ChevronRight, Play, CheckCircle, BookOpen } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Mock data for course details
const mockCourseDetail = {
  id: 1,
  title: '数据分析Python基础',
  description: '学习数据分析所需的Python编程基础。本课程涵盖数据分析所需的Python核心技能，包括数据类型、控制结构、函数，以及使用NumPy和pandas等库进行数据操作。',
  category: 'Python',
  difficulty: '入门',
  duration: 10,
  image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20programming%20for%20data%20analysis%20classroom%20setting&image_size=landscape_16_9',
  rating: 4.8,
  instructor: '张三',
  instructor_bio: '张老师是一位拥有10年以上Python编程和数据分析经验的数据科学家。他通过在线课程教授了超过10,000名学生。',
  prerequisites: ['基本计算机技能', '无需编程经验'],
  lessons: [
    {
      id: 1,
      title: 'Python简介',
      content: '了解什么是Python以及为什么它在数据分析中很受欢迎。',
      duration: 45,
      completed: false
    },
    {
      id: 2,
      title: 'Python基础',
      content: '变量、数据类型和基本操作。',
      duration: 60,
      completed: false
    },
    {
      id: 3,
      title: '控制结构',
      content: 'Python中的条件语句和循环。',
      duration: 50,
      completed: false
    },
    {
      id: 4,
      title: '函数',
      content: '在Python中创建和使用函数。',
      duration: 40,
      completed: false
    },
    {
      id: 5,
      title: 'NumPy基础',
      content: 'NumPy数值计算入门。',
      duration: 60,
      completed: false
    },
    {
      id: 6,
      title: 'Pandas基础',
      content: 'Pandas数据操作入门。',
      duration: 70,
      completed: false
    },
    {
      id: 7,
      title: '数据可视化',
      content: '使用matplotlib创建基本可视化。',
      duration: 55,
      completed: false
    },
    {
      id: 8,
      title: '最终项目',
      content: '将你的技能应用到实际的数据分析项目中。',
      duration: 90,
      completed: false
    }
  ],
  exercises: [
    {
      id: 1,
      title: 'Python基础练习',
      description: '练习基本的Python语法和操作。',
      difficulty: '入门'
    },
    {
      id: 2,
      title: '控制结构练习',
      description: '练习使用条件语句和循环。',
      difficulty: '入门'
    },
    {
      id: 3,
      title: 'NumPy练习',
      description: '练习使用NumPy进行数值运算。',
      difficulty: '中级'
    },
    {
      id: 4,
      title: 'Pandas练习',
      description: '练习使用pandas进行数据操作。',
      difficulty: '中级'
    }
  ],
  assessments: [
    {
      id: 1,
      title: 'Python基础测验',
      type: '测验',
      passing_score: 70
    },
    {
      id: 2,
      title: '数据分析项目',
      type: '项目',
      passing_score: 75
    }
  ]
};

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [course, setCourse] = useState(mockCourseDetail);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [expandedModule, setExpandedModule] = useState<number | null>(0);

  useEffect(() => {
    // In a real app, we would fetch course details from the API
    // For now, we'll use the mock data
    setCourse(mockCourseDetail);
  }, [id]);

  const handleEnroll = () => {
    setIsEnrolled(true);
    // In a real app, we would handle enrollment via API
  };

  const toggleModule = (index: number) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  const handleStartLesson = (lessonId: number) => {
    navigate(`/courses/${course.id}/lessons/${lessonId}`);
  };

  const handleStartExercise = (exerciseId: number) => {
    navigate(`/courses/${course.id}/exercises/${exerciseId}`);
  };

  const handleStartAssessment = (assessmentId: number) => {
    navigate(`/courses/${course.id}/assessments/${assessmentId}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Course Hero */}
        <section className="relative bg-gray-900 text-white">
          <div className="container mx-auto px-4 py-12 md:py-20">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img 
                  src={course.image_url} 
                  alt={course.title} 
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3">
                <div className="flex items-center mb-2">
                  <span className="bg-[#4A6FA5] text-white text-xs font-medium py-1 px-3 rounded-full mr-2">
                    {course.category}
                  </span>
                  <span className="bg-[#F9A826] text-white text-xs font-medium py-1 px-3 rounded-full">
                    {course.difficulty}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    <Star size={16} className="text-yellow-400 mr-1" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <Clock size={16} className="mr-1" />
                    <span>{course.duration} hours</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen size={16} className="mr-1" />
                    <span>{course.lessons.length} lessons</span>
                  </div>
                </div>
                <p className="mb-6 text-gray-300">{course.description}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  {isEnrolled ? (
                    <Link 
                      to={`/courses/${course.id}/lessons/1`} 
                      className="bg-[#4A6FA5] hover:bg-[#3A5A85] text-white font-medium py-3 px-6 rounded-lg transition duration-300 text-center"
                    >
                      继续学习
                    </Link>
                  ) : (
                    <button 
                      onClick={handleEnroll}
                      className="bg-[#F9A826] hover:bg-[#E6951F] text-white font-medium py-3 px-6 rounded-lg transition duration-300 text-center"
                    >
                      立即报名
                    </button>
                  )}
                  <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 font-medium py-3 px-6 rounded-lg transition duration-300 text-center">
                    加入愿望清单
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Content */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Course Curriculum */}
              <div className="lg:w-2/3">
                <h2 className="text-2xl font-bold mb-6">课程大纲</h2>
                <div className="bg-gray-50 rounded-xl p-6">
                  {course.lessons.map((lesson, index) => (
                    <div key={lesson.id} className="mb-4">
                      <div 
                        className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm cursor-pointer hover:bg-gray-50 transition duration-300"
                        onClick={() => toggleModule(index)}
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                            {lesson.completed ? (
                              <CheckCircle size={18} className="text-green-500" />
                            ) : (
                              <Play size={18} className="text-[#4A6FA5]" />
                            )}
                          </div>
                          <div>
                            <h3 className="font-medium">{lesson.title}</h3>
                            <p className="text-sm text-gray-500">{lesson.duration} minutes</p>
                          </div>
                        </div>
                        <ChevronRight 
                          size={20} 
                          className={`text-gray-500 transition duration-300 ${expandedModule === index ? 'transform rotate-90' : ''}`} 
                        />
                      </div>
                      {expandedModule === index && (
                        <div className="pl-12 pr-4 py-4 border-l-2 border-gray-200 mt-2">
                          <p className="text-gray-600 mb-4">{lesson.content}</p>
                          <button 
                            onClick={() => handleStartLesson(lesson.id)}
                            className="inline-flex items-center text-[#4A6FA5] font-medium hover:underline"
                          >
                            开始课程
                            <ChevronRight size={16} className="ml-1" />
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Exercises */}
                <h2 className="text-2xl font-bold mt-12 mb-6">练习</h2>
                <div className="bg-gray-50 rounded-xl p-6">
                  {course.exercises.map((exercise) => (
                    <div key={exercise.id} className="mb-4 p-4 bg-white rounded-lg shadow-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">{exercise.title}</h3>
                          <p className="text-sm text-gray-500">{exercise.description}</p>
                        </div>
                        <div className="flex items-center">
                          <span className="text-xs font-medium bg-blue-100 text-blue-600 px-2 py-1 rounded-full mr-3">
                            {exercise.difficulty}
                          </span>
                          <button 
                            onClick={() => handleStartExercise(exercise.id)}
                            className="text-[#4A6FA5] font-medium hover:underline"
                          >
                            开始练习
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Assessments */}
                <h2 className="text-2xl font-bold mt-12 mb-6">测评</h2>
                <div className="bg-gray-50 rounded-xl p-6">
                  {course.assessments.map((assessment) => (
                    <div key={assessment.id} className="mb-4 p-4 bg-white rounded-lg shadow-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">{assessment.title}</h3>
                          <p className="text-sm text-gray-500">{assessment.type} • Passing score: {assessment.passing_score}%</p>
                        </div>
                        <button 
                          onClick={() => handleStartAssessment(assessment.id)}
                          className="text-[#4A6FA5] font-medium hover:underline"
                        >
                          开始测评
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Sidebar */}
              <div className="lg:w-1/3">
                <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
                  <h3 className="text-lg font-semibold mb-4">课程信息</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1">•</span>
                      <span><strong>分类:</strong> {course.category}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1">•</span>
                      <span><strong>难度:</strong> {course.difficulty}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1">•</span>
                      <span><strong>时长:</strong> {course.duration} 小时</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1">•</span>
                      <span><strong>课程数:</strong> {course.lessons.length}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1">•</span>
                      <span><strong>练习数:</strong> {course.exercises.length}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1">•</span>
                      <span><strong>测评数:</strong> {course.assessments.length}</span>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold mt-8 mb-4">前置条件</h3>
                  <ul className="space-y-2 text-gray-600">
                    {course.prerequisites.map((prerequisite, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>{prerequisite}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-lg font-semibold mt-8 mb-4">讲师</h3>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center mr-3">
                      <span className="font-semibold text-gray-600">张</span>
                    </div>
                    <div>
                      <h4 className="font-medium">{course.instructor}</h4>
                      <p className="text-sm text-gray-500">数据科学家</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{course.instructor_bio}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetail;