import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Code, Award, BookOpen } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#4A6FA5] to-[#6B8EB5] text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              掌握Python数据分析
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              通过我们专为商务数据分析专业学生设计的互动课程，学习实用的商务数据分析技能。
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/courses" 
                className="bg-[#F9A826] hover:bg-[#E6951F] text-white font-medium py-3 px-6 rounded-lg transition duration-300 text-center"
              >
                浏览课程
              </Link>
              <Link 
                to="/register" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-[#4A6FA5] font-medium py-3 px-6 rounded-lg transition duration-300 text-center"
              >
                立即开始
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center p-4 bg-white/5 rounded-lg">
                  <BarChart3 size={32} className="mb-3" />
                  <span className="text-center">数据可视化</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white/5 rounded-lg">
                  <Code size={32} className="mb-3" />
                  <span className="text-center">互动编程</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white/5 rounded-lg">
                  <Award size={32} className="mb-3" />
                  <span className="text-center">成就系统</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white/5 rounded-lg">
                  <BookOpen size={32} className="mb-3" />
                  <span className="text-center">完整课程体系</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,181.3C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;