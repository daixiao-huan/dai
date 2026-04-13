import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Award, Star } from 'lucide-react';
import { useCourseStore } from '../lib/store';

// Mock data for courses
const mockCourses = [
  {
    id: 1,
    title: '数据分析Python基础',
    description: '学习数据分析所需的Python编程基础',
    category: 'Python',
    difficulty: '入门',
    duration: 10,
    image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20programming%20for%20data%20analysis%20classroom%20setting&image_size=landscape_16_9',
    rating: 4.8
  },
  {
    id: 2,
    title: 'Python数据可视化',
    description: '使用Matplotlib和Seaborn创建精美的可视化',
    category: '数据可视化',
    difficulty: '中级',
    duration: 8,
    image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20visualization%20charts%20and%20graphs%20using%20Python&image_size=landscape_16_9',
    rating: 4.9
  },
  {
    id: 3,
    title: '机器学习基础',
    description: '机器学习概念和算法入门',
    category: '机器学习',
    difficulty: '中级',
    duration: 12,
    image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Machine%20learning%20algorithms%20and%20data%20models&image_size=landscape_16_9',
    rating: 4.7
  }
];

const FeaturedCourses: React.FC = () => {
  const { courses, setCourses } = useCourseStore();

  useEffect(() => {
    // In a real app, we would fetch courses from the API
    setCourses(mockCourses);
  }, [setCourses]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">精选课程</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Link key={course.id} to={`/courses/${course.id}`} className="group">
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 hover:shadow-lg">
                <div className="relative">
                  <img 
                    src={course.image_url} 
                    alt={course.title} 
                    className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-[#4A6FA5] text-white text-xs font-medium py-1 px-3 rounded-full">
                    {course.difficulty}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {course.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[#4A6FA5] transition duration-300">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Clock size={16} className="text-gray-500 mr-1" />
                      <span className="text-sm text-gray-600">{course.duration} hours</span>
                    </div>
                    <div className="flex items-center">
                      <Star size={16} className="text-yellow-400 mr-1" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link 
            to="/courses" 
            className="inline-flex items-center text-[#4A6FA5] font-medium hover:underline"
          >
            查看全部课程
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;