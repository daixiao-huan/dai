import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Clock, Award, Star, ChevronRight, Play, CheckCircle, BookOpen, XCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CodeEditor from '../components/CodeEditor';
import { executePythonCode } from '../lib/codeExecutor';
import { courses, Course } from '../data/courses';

// Get course details from data file
const getCourseById = (id: string): Course => {
  return courses.find(course => course.id === parseInt(id)) || courses[0];
};
const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [course, setCourse] = useState<Course>(getCourseById(id || '1'));
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [expandedModule, setExpandedModule] = useState<number | null>(0);
  const [selectedExercise, setSelectedExercise] = useState<any>(null);
  const [selectedAssessment, setSelectedAssessment] = useState<any>(null);
  const [codeOutput, setCodeOutput] = useState<string>('');
  const [codeError, setCodeError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      setCourse(getCourseById(id));
    }
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
    const exercise = course.exercises.find(ex => ex.id === exerciseId);
    if (exercise) {
      setSelectedExercise(exercise);
    }
  };

  const handleStartAssessment = (assessmentId: number) => {
    const assessment = course.assessments.find(as => as.id === assessmentId);
    if (assessment) {
      setSelectedAssessment(assessment);
      setCodeOutput('');
      setCodeError('');
    }
  };

  const handleRunCode = async (code: string) => {
    setLoading(true);
    setCodeOutput('');
    setCodeError('');
    try {
      const result = await executePythonCode(code);
      setCodeOutput(result.output);
      setCodeError(result.error);
    } catch (error) {
      setCodeError('执行过程中发生错误');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Course Hero */}
        <section className="relative bg-gradient-to-br from-[#1a2a6c] via-[#2a4365] to-[#2d3748] text-white">
          {/* 装饰性背景元素 */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-2/5">
                <div className="relative">
                  <img 
                    src={course.image_url} 
                    alt={course.title} 
                    className="w-full h-72 md:h-96 object-cover rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-[#fdbb2d] text-[#1a2a6c] font-bold py-2 px-4 rounded-lg shadow-lg">
                    {course.rating} ★
                  </div>
                </div>
              </div>
              <div className="md:w-3/5">
                <div className="flex items-center mb-4">
                  <span className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium py-1.5 px-4 rounded-full mr-3">
                    {course.category}
                  </span>
                  <span className="bg-[#fdbb2d] text-[#1a2a6c] text-xs font-medium py-1.5 px-4 rounded-full">
                    {course.difficulty}
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{course.title}</h1>
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center">
                    <Star size={18} className="text-yellow-400 mr-2" />
                    <span>{course.rating} (4.8k 评价)</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={18} className="mr-2" />
                    <span>{course.duration} 小时</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen size={18} className="mr-2" />
                    <span>{course.lessons.length} 课程</span>
                  </div>
                  <div className="flex items-center">
                    <Award size={18} className="mr-2" />
                    <span>认证证书</span>
                  </div>
                </div>
                <p className="text-lg mb-8 text-gray-200 leading-relaxed">{course.description}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  {isEnrolled ? (
                    <Link 
                      to={`/courses/${course.id}/lessons/1`} 
                      className="bg-[#4A6FA5] hover:bg-[#3A5A85] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-center flex items-center justify-center group"
                    >
                      继续学习
                      <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ) : (
                    <button 
                      onClick={handleEnroll}
                      className="bg-[#fdbb2d] hover:bg-[#e6a61f] text-[#1a2a6c] font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-center flex items-center justify-center group"
                    >
                      立即报名
                      <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  )}
                  <button className="bg-transparent border-2 border-white hover:bg-white/10 font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-center">
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
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="mb-4 md:mb-0">
                          <h3 className="font-medium">{exercise.title}</h3>
                          <p className="text-sm text-gray-500 mb-2">{exercise.description}</p>
                          <div className="flex flex-wrap gap-2 text-xs">
                            <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                              {exercise.difficulty}
                            </span>
                            <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full">
                              {exercise.type}
                            </span>
                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                              {exercise.questions} 题
                            </span>
                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                              {exercise.duration} 分钟
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center">
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

        {/* 练习详情模态框 */}
        {selectedExercise && selectedExercise.content && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{selectedExercise.title}</h3>
                <button 
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => {
                    setSelectedExercise(null);
                    setCodeOutput('');
                    setCodeError('');
                  }}
                >
                  <XCircle size={24} />
                </button>
              </div>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2 text-xs mb-2">
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                    {selectedExercise.difficulty}
                  </span>
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full">
                    {selectedExercise.type}
                  </span>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {selectedExercise.questions} 题
                  </span>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {selectedExercise.duration} 分钟
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{selectedExercise.description}</p>
              </div>
              
              {/* 练习题目 */}
              <div className="mb-6">
                <ul className="space-y-6">
                  {selectedExercise.content.map((item: any, index: number) => {
                    const question = typeof item === 'string' ? item : item.question;
                    const initialCode = typeof item === 'string' ? '# 在此输入Python代码...' : item.initialCode;
                    
                    return (
                      <li key={index} className="p-4 border rounded-lg">
                        <div className="font-medium mb-4">{question}</div>
                        
                        {/* 代码编辑器（所有类型都显示） */}
                        <CodeEditor
                          initialCode={initialCode}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
              
              <div className="flex justify-end space-x-2">
                <button 
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  onClick={() => {
                    setSelectedExercise(null);
                    setCodeOutput('');
                    setCodeError('');
                  }}
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

        {/* 测评详情模态框 */}
        {selectedAssessment && selectedAssessment.content && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{selectedAssessment.title}</h3>
                <button 
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => {
                    setSelectedAssessment(null);
                    setCodeOutput('');
                    setCodeError('');
                  }}
                >
                  <XCircle size={24} />
                </button>
              </div>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2 text-xs mb-2">
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full">
                    {selectedAssessment.type}
                  </span>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    及格分数: {selectedAssessment.passing_score}%
                  </span>
                </div>
              </div>
              
              {/* 测评题目 */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">测评题目：</h4>
                <ul className="space-y-6">
                  {selectedAssessment.content.map((item: any, index: number) => {
                    const isObjectType = typeof item === 'object' && item !== null;
                    const question = isObjectType ? item.question : item;
                    const initialCode = isObjectType ? item.initialCode : '# 在此输入Python代码...';
                    const hasCodeEditor = isObjectType || selectedAssessment.type === '项目' || question.includes('Python') || question.includes('代码');
                    
                    return (
                      <li key={index} className="p-4 border rounded-lg">
                        <div className="font-medium mb-4">{question}</div>
                        
                        {/* 代码编辑器 */}
                        {hasCodeEditor && (
                          <CodeEditor
                            initialCode={initialCode}
                          />
                        )}
                        
                        {/* 普通答题区域 */}
                        {!hasCodeEditor && (
                          <div className="mt-2">
                            <textarea 
                              className="w-full p-3 border rounded-lg" 
                              placeholder="在此处输入答案" 
                              rows={4}
                            ></textarea>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
              
              <div className="flex justify-end space-x-2">
                <button 
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  onClick={() => {
                    setSelectedAssessment(null);
                    setCodeOutput('');
                    setCodeError('');
                  }}
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
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetail;