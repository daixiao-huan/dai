import React from 'react';
import { Link } from 'react-router-dom';
import { Code, BarChart3, Brain, Database, TrendingUp } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Python基础',
    icon: <Code size={24} />,
    description: '学习Python编程基础',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    id: 2,
    name: '数据可视化',
    icon: <BarChart3 size={24} />,
    description: '创建精美的数据可视化',
    color: 'bg-green-100 text-green-600'
  },
  {
    id: 3,
    name: '机器学习',
    icon: <Brain size={24} />,
    description: '机器学习概念入门',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    id: 4,
    name: 'SQL与数据库',
    icon: <Database size={24} />,
    description: '学习SQL数据查询与分析',
    color: 'bg-yellow-100 text-yellow-600'
  },
  {
    id: 5,
    name: '商务分析',
    icon: <TrendingUp size={24} />,
    description: '将数据分析应用于商务问题',
    color: 'bg-red-100 text-red-600'
  }
];

const CourseCategories: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">探索课程分类</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/courses?category=${category.name}`} 
              className="group"
            >
              <div className="bg-white rounded-xl shadow-md p-6 transition duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-100">
                <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#4A6FA5] transition duration-300">{category.name}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;