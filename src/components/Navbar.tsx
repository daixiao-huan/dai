import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogIn, LogOut, Book, Award, BarChart3 } from 'lucide-react';
import { useUserStore } from '../lib/store';
import { supabase } from '../lib/supabase';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, setUser } = useUserStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#4A6FA5] rounded-full flex items-center justify-center">
              <Book className="text-white" size={20} />
            </div>
            <span className="text-xl font-bold text-[#4A6FA5]">DataLearn</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-[#4A6FA5] font-medium">首页</Link>
            <Link to="/courses" className="text-gray-700 hover:text-[#4A6FA5] font-medium">课程</Link>
            {user ? (
              <>
                <Link to="/dashboard" className="text-gray-700 hover:text-[#4A6FA5] font-medium">仪表盘</Link>
                <Link to="/achievements" className="text-gray-700 hover:text-[#4A6FA5] font-medium">成就</Link>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-700">{user.email}</span>
                  <button onClick={handleLogout} className="text-gray-700 hover:text-red-500">
                    <LogOut size={20} />
                  </button>
                </div>
              </>
            ) : (
              <Link to="/login" className="text-gray-700 hover:text-[#4A6FA5] font-medium">登录</Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-[#4A6FA5] font-medium py-2">首页</Link>
              <Link to="/courses" className="text-gray-700 hover:text-[#4A6FA5] font-medium py-2">课程</Link>
              {user ? (
                <>
                  <Link to="/dashboard" className="text-gray-700 hover:text-[#4A6FA5] font-medium py-2">仪表盘</Link>
                  <Link to="/achievements" className="text-gray-700 hover:text-[#4A6FA5] font-medium py-2">成就</Link>
                  <div className="flex items-center space-x-2 py-2">
                    <span className="text-gray-700">{user.email}</span>
                    <button onClick={handleLogout} className="text-gray-700 hover:text-red-500">
                      <LogOut size={20} />
                    </button>
                  </div>
                </>
              ) : (
                <Link to="/login" className="text-gray-700 hover:text-[#4A6FA5] font-medium py-2">登录</Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;