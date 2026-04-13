import { create } from 'zustand';

interface UserState {
  user: any;
  setUser: (user: any) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  isLoading: false,
  setIsLoading: (loading) => set({ isLoading: loading }),
}));

interface CourseState {
  courses: any[];
  setCourses: (courses: any[]) => void;
  currentCourse: any;
  setCurrentCourse: (course: any) => void;
}

export const useCourseStore = create<CourseState>((set) => ({
  courses: [],
  setCourses: (courses) => set({ courses }),
  currentCourse: null,
  setCurrentCourse: (course) => set({ currentCourse: course }),
}));

interface ProgressState {
  progress: any[];
  setProgress: (progress: any[]) => void;
  addProgress: (item: any) => void;
}

export const useProgressStore = create<ProgressState>((set) => ({
  progress: [],
  setProgress: (progress) => set({ progress }),
  addProgress: (item) => set((state) => ({ progress: [...state.progress, item] })),
}));

interface AchievementState {
  achievements: any[];
  setAchievements: (achievements: any[]) => void;
  addAchievement: (achievement: any) => void;
}

export const useAchievementStore = create<AchievementState>((set) => ({
  achievements: [],
  setAchievements: (achievements) => set({ achievements }),
  addAchievement: (achievement) => set((state) => ({ achievements: [...state.achievements, achievement] })),
}));