import { create } from 'zustand';

interface User {
  id: string;
  email: string;
  name?: string;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  checkAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  error: null,
  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      // 模拟登录成功
      setTimeout(() => {
        set({
          user: {
            id: '1',
            email,
            name: email.split('@')[0]
          },
          isLoading: false
        });
      }, 1000);
    } catch (error) {
      set({
        error: '登录失败，请检查邮箱和密码',
        isLoading: false
      });
    }
  },
  register: async (email, password, name) => {
    set({ isLoading: true, error: null });
    try {
      // 模拟注册成功
      setTimeout(() => {
        set({
          user: {
            id: '1',
            email,
            name
          },
          isLoading: false
        });
      }, 1000);
    } catch (error) {
      set({
        error: '注册失败，请稍后重试',
        isLoading: false
      });
    }
  },
  logout: () => {
    set({ user: null });
  },
  checkAuth: () => {
    // 模拟检查认证状态
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      set({ user: JSON.parse(storedUser) });
    }
  }
}));