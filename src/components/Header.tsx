import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuthStore } from '../stores/authStore';

const Header = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-gradient-to-r from-[#4361ee] to-[#3a0ca3] text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold font-poppins">Pandas 训练</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="hover:text-[#f72585] transition-colors">首页</Link>
          <Link to="/dashboard" className="hover:text-[#f72585] transition-colors">学习仪表盘</Link>
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="font-medium">{user.email}</span>
              <button 
                onClick={handleLogout}
                className="px-4 py-2 bg-[#f72585] rounded-lg hover:bg-[#e61e79] transition-colors"
              >
                退出登录
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link to="/login" className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-[#4361ee] transition-colors">
                登录
              </Link>
              <Link to="/register" className="px-4 py-2 bg-[#f72585] rounded-lg hover:bg-[#e61e79] transition-colors">
                注册
              </Link>
            </div>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#3a0ca3] px-4 py-3">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="hover:text-[#f72585] transition-colors" onClick={() => setIsMenuOpen(false)}>
              首页
            </Link>
            <Link to="/dashboard" className="hover:text-[#f72585] transition-colors" onClick={() => setIsMenuOpen(false)}>
              学习仪表盘
            </Link>
            {user ? (
              <div className="flex flex-col space-y-4">
                <span className="font-medium">{user.email}</span>
                <button 
                  onClick={handleLogout}
                  className="px-4 py-2 bg-[#f72585] rounded-lg hover:bg-[#e61e79] transition-colors"
                >
                  退出登录
                </button>
              </div>
            ) : (
              <div className="flex flex-col space-y-4">
                <Link to="/login" className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-[#4361ee] transition-colors" onClick={() => setIsMenuOpen(false)}>
                  登录
                </Link>
                <Link to="/register" className="px-4 py-2 bg-[#f72585] rounded-lg hover:bg-[#e61e79] transition-colors" onClick={() => setIsMenuOpen(false)}>
                  注册
                </Link>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;