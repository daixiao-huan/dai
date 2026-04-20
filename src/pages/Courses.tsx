import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Clock, Award, Star, Filter } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CourseSystem from '../components/CourseSystem';
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
  },
  {
    id: 4,
    title: 'Python商务分析',
    description: '将数据分析技术应用于商务问题',
    category: '商务分析',
    difficulty: '高级',
    duration: 15,
    image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Business%20analytics%20dashboard%20with%20Python&image_size=landscape_16_9',
    rating: 4.6
  },
  {
    id: 5,
    title: '数据分析师SQL',
    description: '学习数据查询和分析所需的SQL',
    category: 'SQL与数据库',
    difficulty: '入门',
    duration: 6,
    image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=SQL%20database%20queries%20for%20data%20analysis&image_size=landscape_16_9',
    rating: 4.8
  }
];

const Courses: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredCourses, setFilteredCourses] = useState(mockCourses);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '全部');
  const [selectedDifficulty, setSelectedDifficulty] = useState('全部');
  
  const categories = ['全部', 'Python', '数据可视化', '机器学习', 'SQL与数据库', '商务分析'];
  const difficulties = ['全部', '入门', '中级', '高级'];

  useEffect(() => {
    let result = mockCourses;
    
    if (selectedCategory !== '全部') {
      result = result.filter(course => course.category === selectedCategory);
    }
    
    if (selectedDifficulty !== '全部') {
      result = result.filter(course => course.difficulty === selectedDifficulty);
    }
    
    setFilteredCourses(result);
  }, [selectedCategory, selectedDifficulty]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSearchParams(category === '全部' ? {} : { category });
  };

  const handleDifficultyChange = (difficulty: string) => {
    setSelectedDifficulty(difficulty);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-8">全部课程</h1>
            
            {/* 系统化课程体系 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">课程体系</h2>
              <CourseSystem />
            </div>
            
            {/* Filters */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center space-x-2">
                  <Filter size={18} className="text-gray-500" />
                  <span className="font-medium">筛选:</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
                          selectedCategory === category
                            ? 'bg-[#4A6FA5] text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {difficulties.map((difficulty) => (
                      <button
                        key={difficulty}
                        onClick={() => handleDifficultyChange(difficulty)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
                          selectedDifficulty === difficulty
                            ? 'bg-[#F9A826] text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {difficulty}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Course Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course) => (
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
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500">没有找到匹配筛选条件的课程。</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;