import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold font-poppins mb-4">Pandas 训练</h3>
            <p className="text-gray-400">
              AI时代的数据分析课程训练平台，提供实战导向的pandas技能培训。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-[#f72585] transition-colors">首页</Link></li>
              <li><Link to="/dashboard" className="text-gray-400 hover:text-[#f72585] transition-colors">学习仪表盘</Link></li>
              <li><Link to="/login" className="text-gray-400 hover:text-[#f72585] transition-colors">登录</Link></li>
              <li><Link to="/register" className="text-gray-400 hover:text-[#f72585] transition-colors">注册</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <p className="text-gray-400">
              邮箱: contact@pandastraining.com
            </p>
            <p className="text-gray-400">
              电话: +86 123 4567 8910
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© 2026 Pandas 训练. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;