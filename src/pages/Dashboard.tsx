import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import { useProjectStore } from '../stores/projectStore';

const Dashboard = () => {
  const { user } = useAuthStore();
  const { projects, progress, getProjects } = useProjectStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    getProjects();
  }, [user, navigate, getProjects]);

  // 计算学习进度
  const totalProjects = projects.length;
  const completedProjects = progress.filter(p => p.completed).length;
  const overallProgress = totalProjects > 0 ? (completedProjects / totalProjects) * 100 : 0;

  // 按难度统计完成情况
  const beginnerProjects = projects.filter(p => p.difficulty === 'beginner').length;
  const intermediateProjects = projects.filter(p => p.difficulty === 'intermediate').length;
  const advancedProjects = projects.filter(p => p.difficulty === 'advanced').length;

  const completedBeginner = progress.filter(p => {
    const project = projects.find(proj => proj.id === p.project_id);
    return project && project.difficulty === 'beginner' && p.completed;
  }).length;

  const completedIntermediate = progress.filter(p => {
    const project = projects.find(proj => proj.id === p.project_id);
    return project && project.difficulty === 'intermediate' && p.completed;
  }).length;

  const completedAdvanced = progress.filter(p => {
    const project = projects.find(proj => proj.id === p.project_id);
    return project && project.difficulty === 'advanced' && p.completed;
  }).length;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold font-poppins">学习仪表盘</h1>
        <span className="text-gray-600">欢迎回来，{user?.name || user?.email}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 整体进度 */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">学习进度</h2>
            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">整体完成度</span>
                <span className="font-medium">{Math.round(overallProgress)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div 
                  className="bg-gradient-to-r from-[#4361ee] to-[#3a0ca3] h-4 rounded-full" 
                  style={{ width: `${overallProgress}%` }}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">初级项目</h3>
                <div className="flex justify-between items-center">
                  <span>{completedBeginner}/{beginnerProjects}</span>
                  <span className="font-medium">
                    {beginnerProjects > 0 ? Math.round((completedBeginner / beginnerProjects) * 100) : 0}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full" 
                    style={{ width: `${beginnerProjects > 0 ? (completedBeginner / beginnerProjects) * 100 : 0}%` }}
                  ></div>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">中级项目</h3>
                <div className="flex justify-between items-center">
                  <span>{completedIntermediate}/{intermediateProjects}</span>
                  <span className="font-medium">
                    {intermediateProjects > 0 ? Math.round((completedIntermediate / intermediateProjects) * 100) : 0}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full" 
                    style={{ width: `${intermediateProjects > 0 ? (completedIntermediate / intermediateProjects) * 100 : 0}%` }}
                  ></div>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">高级项目</h3>
                <div className="flex justify-between items-center">
                  <span>{completedAdvanced}/{advancedProjects}</span>
                  <span className="font-medium">
                    {advancedProjects > 0 ? Math.round((completedAdvanced / advancedProjects) * 100) : 0}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className="bg-red-500 h-2 rounded-full" 
                    style={{ width: `${advancedProjects > 0 ? (completedAdvanced / advancedProjects) * 100 : 0}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-3">项目状态</h3>
            <div className="space-y-4">
              {projects.map((project) => {
                const projectProgress = progress.find(p => p.project_id === project.id);
                const isCompleted = projectProgress?.completed || false;
                const progressPercentage = projectProgress?.progress_percentage || 0;
                
                return (
                  <div key={project.id} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <h4 className="font-medium">{project.title}</h4>
                        <p className="text-sm text-gray-500">
                          {project.difficulty === 'beginner' ? '初级' : 
                           project.difficulty === 'intermediate' ? '中级' : '高级'}
                        </p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        isCompleted ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {isCompleted ? '已完成' : '进行中'}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div 
                        className={`h-2 rounded-full ${
                          isCompleted ? 'bg-green-500' : 'bg-[#4361ee]'
                        }`} 
                        style={{ width: `${progressPercentage}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>进度</span>
                      <span>{progressPercentage}%</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 技能评估 */}
        <div>
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">技能评估</h2>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">数据清洗</span>
                  <span className="font-medium">
                    {completedBeginner > 0 ? '已掌握' : '学习中'}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-[#4361ee] h-2 rounded-full" 
                    style={{ width: `${completedBeginner > 0 ? 100 : 0}%` }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">数据分析</span>
                  <span className="font-medium">
                    {completedIntermediate > 0 ? '已掌握' : '学习中'}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-[#4361ee] h-2 rounded-full" 
                    style={{ width: `${completedIntermediate > 0 ? 100 : 0}%` }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">业务解读</span>
                  <span className="font-medium">
                    {completedAdvanced > 0 ? '已掌握' : '学习中'}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-[#4361ee] h-2 rounded-full" 
                    style={{ width: `${completedAdvanced > 0 ? 100 : 0}%` }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">可视化</span>
                  <span className="font-medium">
                    {completedProjects > 5 ? '已掌握' : '学习中'}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-[#4361ee] h-2 rounded-full" 
                    style={{ width: `${completedProjects > 5 ? 100 : (completedProjects / 5) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">学习建议</h2>
            <ul className="space-y-3">
              {completedBeginner === 0 && (
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4361ee] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>开始学习初级项目，掌握基础数据清洗技能</span>
                </li>
              )}
              {completedBeginner > 0 && completedIntermediate === 0 && (
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4361ee] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>继续学习中级项目，提升数据分析能力</span>
                </li>
              )}
              {completedIntermediate > 0 && completedAdvanced === 0 && (
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4361ee] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>挑战高级项目，掌握复杂分析技能</span>
                </li>
              )}
              {completedAdvanced > 0 && (
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4361ee] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>恭喜！你已经掌握了所有技能，尝试将所学应用到实际项目中</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;