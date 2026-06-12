import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, CheckCircle, PlayCircle, Clock, Award, BookOpen, FileText } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { courses, Course, Lesson } from '../data/courses';

const getCourseById = (id: string): Course => {
  return courses.find(course => course.id === parseInt(id)) || courses[0];
};

const LessonView: React.FC = () => {
  const { id, lessonId } = useParams<{ id: string; lessonId: string }>();
  const navigate = useNavigate();
  const [course, setCourse] = useState<Course>(getCourseById(id || '1'));
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [lessonIndex, setLessonIndex] = useState<number>(0);

  useEffect(() => {
    if (id) {
      const foundCourse = getCourseById(id);
      setCourse(foundCourse);
    }
  }, [id]);

  useEffect(() => {
    if (lessonId && course) {
      const idx = course.lessons.findIndex(l => l.id === parseInt(lessonId));
      if (idx >= 0) {
        setLessonIndex(idx);
        setLesson(course.lessons[idx]);
      } else {
        setLessonIndex(0);
        setLesson(course.lessons[0]);
      }
    }
  }, [lessonId, course]);

  if (!lesson) {
    return null;
  }

  const isLastLesson = lessonIndex === course.lessons.length - 1;
  const isFirstLesson = lessonIndex === 0;
  const progress = ((lessonIndex + 1) / course.lessons.length) * 100;

  const goToNextLesson = () => {
    if (!isLastLesson) {
      const nextLesson = course.lessons[lessonIndex + 1];
      navigate(`/courses/${course.id}/lessons/${nextLesson.id}`);
    }
  };

  const goToPrevLesson = () => {
    if (!isFirstLesson) {
      const prevLesson = course.lessons[lessonIndex - 1];
      navigate(`/courses/${course.id}/lessons/${prevLesson.id}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* 侧边栏 - 课程目录 */}
            <div className="lg:w-80">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                <Link to={`/courses/${course.id}`} className="flex items-center text-[#4A6FA5] hover:underline mb-4">
                  <ChevronLeft size={16} className="mr-1" />
                  返回课程详情
                </Link>
                
                <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{course.duration} 小时 · {course.lessons.length} 节课</p>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>学习进度</span>
                    <span>{lessonIndex + 1} / {course.lessons.length}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-[#4A6FA5] h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-sm mb-3 text-gray-700">课程目录</h4>
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {course.lessons.map((l, idx) => (
                      <Link
                        key={l.id}
                        to={`/courses/${course.id}/lessons/${l.id}`}
                        className={`flex items-start p-3 rounded-lg transition-colors ${
                          idx === lessonIndex
                            ? 'bg-blue-50 border-l-4 border-[#4A6FA5]'
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <div className="mr-3 mt-0.5">
                          {idx < lessonIndex ? (
                            <CheckCircle size={18} className="text-green-500" />
                          ) : idx === lessonIndex ? (
                            <PlayCircle size={18} className="text-[#4A6FA5]" />
                          ) : (
                            <div className="w-[18px] h-[18px] rounded-full border-2 border-gray-300 flex items-center justify-center text-xs text-gray-400">
                              {idx + 1}
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <h5 className={`text-sm font-medium ${
                            idx === lessonIndex ? 'text-[#4A6FA5]' : 'text-gray-700'
                          }`}>
                            {l.title}
                          </h5>
                          <p className="text-xs text-gray-500 mt-1">
                            <Clock size={10} className="inline mr-1" />
                            {l.duration} 分钟
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 主要内容区 */}
            <div className="lg:flex-1">
              <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
                <div className="mb-6">
                  <span className="text-sm text-[#4A6FA5] font-medium">
                    第 {lessonIndex + 1} 课 / 共 {course.lessons.length} 课
                  </span>
                  <h1 className="text-3xl font-bold mt-2 mb-3">{lesson.title}</h1>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock size={16} className="mr-1" />
                    <span>预计学习时间：{lesson.duration} 分钟</span>
                  </div>
                </div>

                {/* 课程内容 */}
                <div className="prose max-w-none">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6 border-l-4 border-[#4A6FA5]">
                    <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                      <BookOpen size={20} className="mr-2" />
                      课程概述
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-lg">{lesson.content}</p>
                  </div>

                  {/* 学习要点 */}
                  <div className="mb-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <FileText size={20} className="mr-2 text-[#4A6FA5]" />
                      学习要点
                    </h2>
                    <div className="space-y-3">
                      {generateLearningPoints(lesson.title, course).map((point, idx) => (
                        <div key={idx} className="flex items-start p-4 bg-gray-50 rounded-lg">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4A6FA5] text-white flex items-center justify-center text-sm font-bold mr-3">
                            {idx + 1}
                          </div>
                          <p className="text-gray-700 leading-relaxed">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 详细内容 */}
                  <div className="mb-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <Award size={20} className="mr-2 text-yellow-500" />
                      详细内容
                    </h2>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
                      {generateDetailedContent(lesson.title, course).map((paragraph, idx) => (
                        <p key={idx} className="text-gray-700 leading-relaxed">{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  {/* 小贴士 */}
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                    <h3 className="font-bold text-yellow-800 mb-2">💡 学习小贴士</h3>
                    <p className="text-yellow-700 text-sm">
                      在学习过程中，建议结合实际操作来巩固知识点。完成本节学习后，可以尝试做相关的练习题，将理论知识应用到实践中。
                    </p>
                  </div>
                </div>
              </div>

              {/* 底部导航 */}
              <div className="flex items-center justify-between bg-white rounded-xl shadow-sm p-6">
                <button
                  onClick={goToPrevLesson}
                  disabled={isFirstLesson}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                    isFirstLesson
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <ChevronLeft size={20} className="mr-1" />
                  上一课
                </button>

                <div className="text-sm text-gray-500">
                  {isLastLesson ? '🎉 恭喜你完成了本课程的所有学习内容！' : `还剩 ${course.lessons.length - lessonIndex - 1} 课`}
                </div>

                {isLastLesson ? (
                  <Link
                    to={`/courses/${course.id}`}
                    className="flex items-center px-6 py-3 rounded-lg font-medium bg-[#4A6FA5] text-white hover:bg-[#3A5A85] transition-colors"
                  >
                    返回课程
                    <ChevronRight size={20} className="ml-1" />
                  </Link>
                ) : (
                  <button
                    onClick={goToNextLesson}
                    className="flex items-center px-6 py-3 rounded-lg font-medium bg-[#4A6FA5] text-white hover:bg-[#3A5A85] transition-colors"
                  >
                    下一课
                    <ChevronRight size={20} className="ml-1" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

function generateLearningPoints(lessonTitle: string, course: Course): string[] {
  const category = course.category;
  
  const pointMap: { [key: string]: string[] } = {
    'Python': [
      `理解 ${lessonTitle} 的核心概念和基本原理`,
      '掌握相关的语法规则和最佳实践',
      '学习如何在实际项目中应用这些知识',
      '了解常见的错误和调试技巧'
    ],
    'SQL': [
      `掌握 ${lessonTitle} 的语法和用法`,
      '学习如何在数据库查询中应用这些知识',
      '理解查询优化的基本原理',
      '通过实例练习巩固知识点'
    ],
    '数据可视化': [
      `学习 ${lessonTitle} 的基本概念和应用场景`,
      '掌握相关图表的创建和定制方法',
      '理解如何选择最合适的图表类型展示数据',
      '实践创建专业的数据可视化作品'
    ],
    '机器学习': [
      `理解 ${lessonTitle} 的核心算法原理`,
      '学习算法的数学基础和直觉理解',
      '掌握使用 Python 实现相关算法',
      '了解算法的优缺点和适用场景'
    ]
  };

  for (const key in pointMap) {
    if (category.includes(key) || lessonTitle.includes(key)) {
      return pointMap[key];
    }
  }
  
  return [
    `理解 ${lessonTitle} 的核心概念`,
    '学习相关的理论和实践知识',
    '掌握应用技能和工具使用',
    '通过练习巩固所学内容'
  ];
}

function generateDetailedContent(lessonTitle: string, course: Course): string[] {
  const category = course.category;
  const prefix = `在"${lessonTitle}"这一课中，`;
  
  const contentMap: { [key: string]: string[] } = {
    'Python': [
      prefix + '我们将从基础概念入手，循序渐进地学习相关知识。首先，你会了解这个主题在数据分析领域的重要性和应用场景，建立起整体的认知框架。',
      '接下来，我们会深入学习具体的语法和使用方法。通过大量的代码示例，你将看到如何在实际编程中运用这些知识解决问题。每个例子都配有详细的注释和解释，帮助你理解每一行代码的作用。',
      '然后，我们会介绍一些高级技巧和最佳实践。这些是在长期实践中总结出来的经验，可以帮助你写出更高效、更优雅、更易于维护的代码。',
      '最后，通过一个综合实例，你将有机会把本节课学到的所有知识整合起来，完成一个有意义的小项目。这将是检验和巩固学习成果的重要环节。'
    ],
    'SQL': [
      prefix + '我们将系统地学习相关的数据库操作知识。从最基本的概念讲起，帮助你理解关系型数据库的工作原理。',
      '通过具体的查询例子，我们将展示如何构建高效的 SQL 语句来获取所需的数据。你将学习如何从单个表或多个关联表中提取信息。',
      '我们还会介绍一些高级查询技巧，包括如何进行聚合操作、排序、过滤，以及如何处理复杂的查询场景。',
      '最后，我们会讨论查询性能优化的基本方法和注意事项，帮助你写出高效且可维护的 SQL 代码。'
    ],
    '数据可视化': [
      prefix + '我们将探索如何使用 Python 创建美观且有信息量的数据可视化作品。好的图表不仅能展示数据，更能讲述数据背后的故事。',
      '我们将学习不同类型图表的特点和适用场景，包括折线图、柱状图、散点图、热力图等多种形式。每种图表都有其最擅长表达的信息类型。',
      '接下来，我们将深入研究如何自定义图表的各个元素，包括颜色、字体、图例、标注等，让你的作品更加专业和个性化。',
      '最后，通过一个完整的项目实例，我们将展示如何从原始数据开始，经过数据处理、分析，最终生成一组有洞察力的数据可视化作品。'
    ],
    '机器学习': [
      prefix + '我们将深入探索相关算法的核心原理和实现方法。机器学习是人工智能的核心技术，理解其工作原理对于解决复杂问题至关重要。',
      '我们将从直觉和数学两个层面讲解算法。首先建立直观的理解，然后用数学公式加以精确描述，最后用代码实现来验证理论。',
      '你将学习如何准备数据、选择合适的模型、训练和评估模型，以及如何调优参数以获得最佳性能。这是一个完整的机器学习工作流程。',
      '通过实际的项目案例，你将看到这些算法如何应用于真实世界的问题，例如预测、分类、聚类等常见的机器学习任务。'
    ]
  };

  for (const key in contentMap) {
    if (category.includes(key) || lessonTitle.includes(key)) {
      return contentMap[key];
    }
  }

  return [
    prefix + '我们将从基础概念入手，系统地学习相关知识和技能。通过理论讲解与实践操作相结合的方式，帮助你建立扎实的知识基础。',
    '在学习过程中，我们会通过大量实例来演示知识点的应用。每个实例都配有详细的说明和解释，确保你能够理解其中的每一个步骤。',
    '同时，我们还会介绍一些实用的技巧和注意事项。这些都是在实际工作中总结出来的经验，能够帮助你更高效地完成任务。',
    '最后，建议你在学习完本节内容后，通过练习题来巩固所学知识。实践是检验真理的唯一标准，动手操作会让你有更深刻的理解。'
  ];
}

export default LessonView;
