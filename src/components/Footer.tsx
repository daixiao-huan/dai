import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[#F9A826] rounded-full flex items-center justify-center">
                <Book className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold">DataLearn</span>
            </div>
            <p className="text-gray-400 mb-4">
              一个专为商务数据分析专业学生设计的综合在线学习平台，专注于Python数据技能。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition duration-300">首页</Link></li>
              <li><Link to="/courses" className="text-gray-400 hover:text-white transition duration-300">课程</Link></li>
              <li><Link to="/dashboard" className="text-gray-400 hover:text-white transition duration-300">仪表盘</Link></li>
              <li><Link to="/achievements" className="text-gray-400 hover:text-white transition duration-300">成就</Link></li>
              <li><Link to="/login" className="text-gray-400 hover:text-white transition duration-300">登录</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">课程分类</h3>
            <ul className="space-y-2">
              <li><Link to="/courses?category=Python" className="text-gray-400 hover:text-white transition duration-300">Python</Link></li>
              <li><Link to="/courses?category=数据可视化" className="text-gray-400 hover:text-white transition duration-300">数据可视化</Link></li>
              <li><Link to="/courses?category=机器学习" className="text-gray-400 hover:text-white transition duration-300">机器学习</Link></li>
              <li><Link to="/courses?category=SQL与数据库" className="text-gray-400 hover:text-white transition duration-300">SQL与数据库</Link></li>
              <li><Link to="/courses?category=商务分析" className="text-gray-400 hover:text-white transition duration-300">商务分析</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <ul className="space-y-2 text-gray-400">
              <li>邮箱: contact@datalearn.com</li>
              <li>电话: +86 (123) 456-7890</li>
              <li>地址: 数据大道123号, 分析城市</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} DataLearn. 版权所有.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;