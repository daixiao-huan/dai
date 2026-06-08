import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Clock, Award, Star, Filter } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CourseSystem from '../components/CourseSystem';
import { useCourseStore } from '../lib/store';
import { courses } from '../data/courses';

const Courses: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '全部');
  const [selectedDifficulty, setSelectedDifficulty] = useState('全部');
  
  const categories = ['全部', ...new Set(courses.map(course => course.category))];
  const difficulties = ['全部', '入门', '中级', '高级'];

  useEffect(() => {
    let result = courses;
    
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