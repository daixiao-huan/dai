import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useProjectStore } from '../stores/projectStore';

const Home = () => {
  const { projects, getProjects, isLoading } = useProjectStore();

  useEffect(() => {
    getProjects();
  }, [getProjects]);

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">初级</span>;
      case 'intermediate':
        return <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">中级</span>;
      case 'advanced':
        return <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">高级</span>;
      default:
        return null;
    }
  };

  if (isLoading) {
    return <div className="container mx-auto px-4 py-8">加载中...</div>;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#4361ee] to-[#3a0ca3] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
              AI时代的数据分析课程
            </h1>
            <p className="text-xl mb-8">
              通过10个电商/零售场景的实战项目，掌握pandas数据分析技能，为AI时代做好准备。
            </p>
            <Link 
              to="/register" 
              className="inline-block px-6 py-3 bg-[#f72585] rounded-lg hover:bg-[#e61e79] transition-colors font-medium"
            >
              开始学习
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-poppins mb-8 text-center">
            实战项目
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            从基础数据清洗到高级分析，循序渐进掌握pandas核心技能，解决真实电商/零售场景中的数据分析问题。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-100">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold font-poppins mb-2">{project.title}</h3>
                    {getDifficultyBadge(project.difficulty)}
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link 
                    to={`/project/${project.id}`} 
                    className="inline-block px-4 py-2 bg-[#4361ee] text-white rounded-lg hover:bg-[#3a0ca3] transition-colors"
                  >
                    开始项目
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-poppins mb-8 text-center">
            学习成果
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-[#4361ee] rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">数据清洗技能</h3>
              <p className="text-gray-600">处理缺失值、异常值、格式统一，确保数据质量</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-[#4361ee] rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">数据分析技能</h3>
              <p className="text-gray-600">掌握分组、聚合、透视表、关联分析等核心操作</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-[#4361ee] rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">业务解读能力</h3>
              <p className="text-gray-600">从数据中提取有价值的业务洞察，做出数据驱动决策</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-[#4361ee] rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">可视化能力</h3>
              <p className="text-gray-600">使用pandas和相关库创建数据可视化，直观展示分析结果</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;