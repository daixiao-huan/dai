import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Code, Award, BookOpen, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#1a2a6c] via-[#b21f1f] to-[#fdbb2d] text-white py-24 md:py-36 overflow-hidden">
      {/* 装饰性背景元素 */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-white/15 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium mb-6">
              商务数据分析专业课程
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              掌握Python数据分析<br />
              <span className="text-[#fdbb2d]">开启数据驱动决策</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-lg">
              通过我们专为商务数据分析专业学生设计的互动课程，学习实用的商务数据分析技能，成为数据时代的佼佼者。
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                to="/courses" 
                className="bg-[#fdbb2d] hover:bg-[#e6a61f] text-[#1a2a6c] font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-center group flex items-center justify-center"
              >
                浏览课程
                <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/register" 
                className="bg-transparent border-2 border-white hover:bg-white/10 font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-center"
              >
                立即开始
              </Link>
            </div>
            
            {/* 统计数据 */}
            <div className="flex flex-wrap gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold">5000+</div>
                <div className="text-sm opacity-80">注册学员</div>
              </div>
              <div>
                <div className="text-3xl font-bold">98%</div>
                <div className="text-sm opacity-80">满意度</div>
              </div>
              <div>
                <div className="text-3xl font-bold">5</div>
                <div className="text-sm opacity-80">专业课程</div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 transform hover:scale-105 transition-transform duration-500">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col items-center p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#4A6FA5] to-[#6B8EB5] rounded-full flex items-center justify-center mb-4">
                    <BarChart3 size={28} />
                  </div>
                  <span className="text-center font-medium">数据可视化</span>
                </div>
                <div className="flex flex-col items-center p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#b21f1f] to-[#d33f3f] rounded-full flex items-center justify-center mb-4">
                    <Code size={28} />
                  </div>
                  <span className="text-center font-medium">互动编程</span>
                </div>
                <div className="flex flex-col items-center p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#fdbb2d] to-[#f59e0b] rounded-full flex items-center justify-center mb-4">
                    <Award size={28} />
                  </div>
                  <span className="text-center font-medium">成就系统</span>
                </div>
                <div className="flex flex-col items-center p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-full flex items-center justify-center mb-4">
                    <BookOpen size={28} />
                  </div>
                  <span className="text-center font-medium">完整课程体系</span>
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