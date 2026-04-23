import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import { useProjectStore } from '../stores/projectStore';
import { useAuthStore } from '../stores/authStore';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { getProjectById, submitSolution, isLoading, updateProgress } = useProjectStore();
  
  const [project, setProject] = useState<any>(null);
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  useEffect(() => {
    if (id) {
      const projectData = getProjectById(id);
      if (projectData) {
        setProject(projectData);
        setCode(projectData.sample_code || '');
      } else {
        navigate('/');
      }
    }
  }, [id, getProjectById, navigate]);

  const handleRunCode = () => {
    setIsRunning(true);
    setOutput('运行中...');
    
    // 模拟代码运行
    setTimeout(() => {
      setOutput('代码运行成功！\n\n模拟输出结果:\n- 数据清洗完成\n- 分析结果已生成\n- 可视化图表已创建');
      setIsRunning(false);
      // 更新进度
      updateProgress(id!, 50, false);
    }, 1500);
  };

  const handleSubmitSolution = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    
    submitSolution(id!, code);
    setOutput('解决方案已提交！');
  };

  const toggleSolution = () => {
    setShowSolution(!showSolution);
  };

  if (!project) {
    return <div className="container mx-auto px-4 py-8">加载中...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center text-[#4361ee] hover:text-[#3a0ca3]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          返回项目列表
        </button>
        <div className="flex space-x-4">
          <button 
            onClick={toggleSolution}
            className="px-4 py-2 border border-[#4361ee] text-[#4361ee] rounded-lg hover:bg-[#4361ee] hover:text-white transition-colors"
          >
            {showSolution ? '隐藏答案' : '查看答案'}
          </button>
          {user && (
            <button 
              onClick={handleSubmitSolution}
              className="px-4 py-2 bg-[#f72585] text-white rounded-lg hover:bg-[#e61e79] transition-colors"
            >
              提交解决方案
            </button>
          )}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold font-poppins mb-4">{project.title}</h1>
          <p className="text-gray-600 mb-6">{project.description}</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 项目详情 */}
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">输入数据格式</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <pre className="whitespace-pre-wrap text-sm">{project.input_format}</pre>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">任务目标</h2>
                <ul className="list-disc pl-5 space-y-2">
                  {project.task_goals.split('\n').map((goal: string, index: number) => (
                    <li key={index} className="text-gray-700">{goal}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">输出要求</h2>
                <ul className="list-disc pl-5 space-y-2">
                  {project.output_requirements.split('\n').map((req: string, index: number) => (
                    <li key={index} className="text-gray-700">{req}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 代码编辑器 */}
            <div>
              <div className="mb-4">
                <h2 className="text-xl font-semibold mb-3">代码编辑器</h2>
                <div className="h-96">
                  <Editor
                    height="100%"
                    defaultLanguage="python"
                    value={code}
                    onChange={(value) => setCode(value || '')}
                    options={{
                      minimap: { enabled: true },
                      fontSize: 14,
                      tabSize: 4,
                      scrollBeyondLastLine: false,
                      wordWrap: 'on',
                    }}
                  />
                </div>
              </div>

              <div className="flex space-x-4 mb-4">
                <button 
                  onClick={handleRunCode}
                  disabled={isRunning}
                  className="px-4 py-2 bg-[#4361ee] text-white rounded-lg hover:bg-[#3a0ca3] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isRunning ? '运行中...' : '运行代码'}
                </button>
                {user && (
                  <button 
                    onClick={handleSubmitSolution}
                    className="px-4 py-2 bg-[#f72585] text-white rounded-lg hover:bg-[#e61e79] transition-colors"
                  >
                    提交解决方案
                  </button>
                )}
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">输出结果</h2>
                <div className="bg-gray-50 p-4 rounded-lg h-40 overflow-auto">
                  <pre className="whitespace-pre-wrap text-sm">{output}</pre>
                </div>
              </div>
            </div>
          </div>

          {/* 答案展示 */}
          {showSolution && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-3">参考解决方案</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-sm">{project.sample_solution}</pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;