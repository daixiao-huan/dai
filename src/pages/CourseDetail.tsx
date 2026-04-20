import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Clock, Award, Star, ChevronRight, Play, CheckCircle, BookOpen, XCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CodeEditor from '../components/CodeEditor';
import { executePythonCode } from '../lib/codeExecutor';

// Mock data for course details
const courseDetails = {
  '1': {
    id: 1,
    title: '数据分析Python基础',
    description: '学习数据分析所需的Python编程基础。本课程涵盖数据分析所需的Python核心技能，包括数据类型、控制结构、函数，以及使用NumPy和pandas等库进行数据操作。',
    category: 'Python',
    difficulty: '入门',
    duration: 10,
    image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20programming%20for%20data%20analysis%20classroom%20setting&image_size=landscape_16_9',
    rating: 4.8,
    instructor: '张三',
    instructor_bio: '张老师是一位拥有10年以上Python编程和数据分析经验的数据科学家。他通过在线课程教授了超过10,000名学生。',
    prerequisites: ['基本计算机技能', '无需编程经验'],
    lessons: [
      {
        id: 1,
        title: 'Python简介',
        content: '了解什么是Python以及为什么它在数据分析中很受欢迎。',
        duration: 45,
        completed: false
      },
      {
        id: 2,
        title: 'Python基础',
        content: '变量、数据类型和基本操作。',
        duration: 60,
        completed: false
      },
      {
        id: 3,
        title: '控制结构',
        content: 'Python中的条件语句和循环。',
        duration: 50,
        completed: false
      },
      {
        id: 4,
        title: '函数',
        content: '在Python中创建和使用函数。',
        duration: 40,
        completed: false
      },
      {
        id: 5,
        title: 'NumPy基础',
        content: 'NumPy数值计算入门。',
        duration: 60,
        completed: false
      },
      {
        id: 6,
        title: 'Pandas基础',
        content: 'Pandas数据操作入门。',
        duration: 70,
        completed: false
      },
      {
        id: 7,
        title: '数据可视化',
        content: '使用matplotlib创建基本可视化。',
        duration: 55,
        completed: false
      },
      {
        id: 8,
        title: '最终项目',
        content: '将你的技能应用到实际的数据分析项目中。',
        duration: 90,
        completed: false
      }
    ],
    exercises: [
      {
        id: 1,
        title: 'Python基础练习',
        description: '练习基本的Python语法和操作，包括变量定义、数据类型转换、基本运算符等。',
        difficulty: '入门',
        type: '混合练习',
        questions: 10,
        duration: 30,
        content: [
          '1. 定义一个变量存储你的名字，并打印出来：',
          '   a. 使用变量name存储你的名字',
          '   b. 使用print()函数打印出来',
          '   c. 例如：name = "张三"; print(name)',
          '2. 将字符串"123"转换为整数并计算其平方：',
          '   a. 使用int()函数将字符串转换为整数',
          '   b. 计算转换后数字的平方',
          '   c. 打印结果',
          '3. 使用算术运算符计算10 + 5 * 3：',
          '   a. 直接计算表达式10 + 5 * 3',
          '   b. 注意运算符优先级',
          '   c. 打印结果',
          '4. 编写一个程序判断一个数是否为偶数：',
          '   a. 输入一个整数',
          '   b. 使用取模运算符(%)判断是否为偶数',
          '   c. 根据判断结果打印相应的信息',
          '5. 计算列表[1, 2, 3, 4, 5]的和：',
          '   a. 使用sum()函数计算列表元素的和',
          '   b. 或者使用循环计算',
          '   c. 打印结果',
          '6. 将列表[1, 2, 3, 4, 5]反转：',
          '   a. 使用reverse()方法反转列表',
          '   b. 或者使用切片[::-1]',
          '   c. 打印反转后的列表',
          '7. 检查字符串"Hello World"是否包含子字符串"World"：',
          '   a. 使用in运算符检查',
          '   b. 打印检查结果',
          '8. 计算两个数的最大公约数：',
          '   a. 输入两个正整数',
          '   b. 使用欧几里得算法计算最大公约数',
          '   c. 打印结果',
          '9. 将摄氏度转换为华氏度：',
          '   a. 输入摄氏度温度',
          '   b. 使用公式：华氏度 = 摄氏度 * 9/5 + 32',
          '   c. 打印转换后的温度',
          '10. 生成一个包含10个随机数的列表：',
          '   a. 导入random模块',
          '   b. 使用random.randint()生成随机数',
          '   c. 创建包含10个随机数的列表',
          '   d. 打印生成的列表'
        ]
      },
      {
        id: 2,
        title: '控制结构练习',
        description: '练习使用条件语句和循环，包括if-else语句、for循环和while循环。',
        difficulty: '入门',
        type: '编程题',
        questions: 5,
        duration: 45,
        content: [
          '1. 编写一个程序，输入一个数，判断它是正数、负数还是零：',
          '   a. 使用input()函数获取用户输入',
          '   b. 将输入转换为浮点数',
          '   c. 使用if-elif-else语句进行判断',
          '   d. 打印相应的结果',
          '2. 使用for循环打印1到100之间的所有偶数：',
          '   a. 使用range()函数生成1到100的数字',
          '   b. 使用if语句判断是否为偶数',
          '   c. 打印所有偶数',
          '3. 使用while循环计算1到100的和：',
          '   a. 初始化变量sum为0，i为1',
          '   b. 使用while循环，当i<=100时执行',
          '   c. 在循环中累加sum，并递增i',
          '   d. 循环结束后打印sum',
          '4. 编写一个程序，输入一个年份，判断它是否为闰年：',
          '   a. 输入一个年份',
          '   b. 闰年的判断条件：能被4整除但不能被100整除，或者能被400整除',
          '   c. 使用if-else语句进行判断',
          '   d. 打印相应的结果',
          '5. 使用循环计算斐波那契数列的前10项：',
          '   a. 初始化前两个数为0和1',
          '   b. 使用循环计算并打印前10项',
          '   c. 每一项都是前两项的和'
        ]
      },
      {
        id: 3,
        title: 'NumPy练习',
        description: '练习使用NumPy进行数值运算，包括数组创建、索引、切片和基本运算。',
        difficulty: '中级',
        type: '编程题',
        questions: 8,
        duration: 60,
        content: [
          '1. 创建一个形状为(3, 4)的随机数组：',
          '   a. 导入numpy库',
          '   b. 使用np.random.rand()创建随机数组',
          '   c. 打印数组及其形状',
          '2. 计算数组的平均值、最大值和最小值：',
          '   a. 使用np.mean()计算平均值',
          '   b. 使用np.max()计算最大值',
          '   c. 使用np.min()计算最小值',
          '   d. 打印结果',
          '3. 对数组进行切片，获取前两行：',
          '   a. 创建一个形状为(3, 4)的数组',
          '   b. 使用切片操作获取前两行',
          '   c. 打印切片结果',
          '4. 实现矩阵乘法：',
          '   a. 创建两个可相乘的矩阵',
          '   b. 使用np.dot()或@运算符进行矩阵乘法',
          '   c. 打印结果',
          '5. 使用NumPy计算数组中元素的平方和：',
          '   a. 创建一个数组',
          '   b. 计算每个元素的平方',
          '   c. 求和',
          '   d. 打印结果',
          '6. 创建一个全零数组和全一数组：',
          '   a. 使用np.zeros()创建全零数组',
          '   b. 使用np.ones()创建全一数组',
          '   c. 打印结果',
          '7. 对数组进行排序：',
          '   a. 创建一个随机数组',
          '   b. 使用np.sort()对数组进行排序',
          '   c. 打印排序前后的数组',
          '8. 使用NumPy实现线性代数运算：',
          '   a. 创建一个矩阵',
          '   b. 计算矩阵的转置',
          '   c. 计算矩阵的逆（如果可逆）',
          '   d. 打印结果'
        ]
      },
      {
        id: 4,
        title: 'Pandas练习',
        description: '练习使用pandas进行数据操作，包括数据读取、清洗、转换和分析。',
        difficulty: '中级',
        type: '数据分析题',
        questions: 6,
        duration: 75,
        content: [
          '1. 读取CSV文件并显示前5行数据：',
          '   a. 导入pandas库',
          '   b. 使用pd.read_csv()读取CSV文件',
          '   c. 使用head()方法显示前5行',
          '   d. 例如：df = pd.read_csv("data.csv"); print(df.head())',
          '2. 处理数据中的缺失值：',
          '   a. 创建包含缺失值的DataFrame',
          '   b. 使用isnull()检测缺失值',
          '   c. 使用dropna()删除缺失值或fillna()填充缺失值',
          '   d. 打印处理前后的数据',
          '3. 按某一列对数据进行排序：',
          '   a. 创建一个DataFrame',
          '   b. 使用sort_values()方法按指定列排序',
          '   c. 可以指定升序或降序',
          '   d. 打印排序结果',
          '4. 使用groupby进行数据分组和聚合：',
          '   a. 创建一个包含分类数据的DataFrame',
          '   b. 使用groupby()按分类列分组',
          '   c. 使用聚合函数如sum(), mean()等计算统计信息',
          '   d. 打印分组聚合结果',
          '5. 计算数据的基本统计信息：',
          '   a. 创建一个DataFrame',
          '   b. 使用describe()方法计算基本统计信息',
          '   c. 包括计数、均值、标准差、最小值、最大值等',
          '   d. 打印统计结果',
          '6. 对数据进行筛选和过滤：',
          '   a. 创建一个DataFrame',
          '   b. 使用布尔索引筛选满足条件的行',
          '   c. 可以使用&（与）、|（或）组合多个条件',
          '   d. 打印筛选结果'
        ]
      }
    ],
    assessments: [
      {
        id: 1,
        title: 'Python基础测验',
        type: '测验',
        passing_score: 70,
        content: [
          '1. 以下哪个不是Python的内置数据类型？ A. list B. dict C. array D. tuple',
          '2. 如何在Python中定义一个函数？ A. def function(): B. function(): C. define function(): D. func function():',
          '3. 以下哪个语句用于处理异常？ A. if B. for C. try-except D. while',
          '4. NumPy库主要用于什么？ A. 网页开发 B. 数值计算 C. 数据库操作 D. 机器学习',
          '5. Pandas库中，以下哪个函数用于读取CSV文件？ A. read_csv() B. load_csv() C. import_csv() D. get_csv()'
        ]
      },
      {
        id: 2,
        title: '数据分析项目',
        type: '项目',
        passing_score: 75,
        content: [
          '1. 使用Python分析一个销售数据集，包括以下步骤：',
          '   a. 读取CSV格式的销售数据',
          '   b. 处理数据中的缺失值',
          '   c. 分析销售趋势和模式',
          '   d. 生成销售报表和可视化图表',
          '2. 撰写一份数据分析报告，包括数据处理过程、分析结果和业务建议'
        ]
      }
    ]
  },
  '2': {
    id: 2,
    title: 'Python数据可视化',
    description: '使用Matplotlib和Seaborn创建精美的数据可视化。本课程将教授你如何使用Python的可视化库创建各种类型的图表，包括折线图、柱状图、散点图、热力图等，以及如何美化和定制图表。',
    category: '数据可视化',
    difficulty: '中级',
    duration: 8,
    image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20visualization%20charts%20and%20graphs%20using%20Python&image_size=landscape_16_9',
    rating: 4.9,
    instructor: '李四',
    instructor_bio: '李老师是一位数据可视化专家，拥有8年的数据可视化经验，曾为多家企业提供数据可视化解决方案。',
    prerequisites: ['Python基础', 'NumPy和Pandas基础'],
    lessons: [
      {
        id: 1,
        title: 'Matplotlib基础',
        content: '了解Matplotlib库的基本结构和使用方法。',
        duration: 60,
        completed: false
      },
      {
        id: 2,
        title: '基本图表类型',
        content: '学习创建折线图、柱状图、散点图等基本图表。',
        duration: 75,
        completed: false
      },
      {
        id: 3,
        title: '图表定制',
        content: '学习如何定制图表的标题、标签、颜色等。',
        duration: 65,
        completed: false
      },
      {
        id: 4,
        title: 'Seaborn入门',
        content: '了解Seaborn库的基本使用方法。',
        duration: 60,
        completed: false
      },
      {
        id: 5,
        title: '高级可视化',
        content: '学习创建热力图、小提琴图等高级图表。',
        duration: 70,
        completed: false
      },
      {
        id: 6,
        title: '交互式可视化',
        content: '学习使用Plotly创建交互式图表。',
        duration: 80,
        completed: false
      },
      {
        id: 7,
        title: '数据可视化最佳实践',
        content: '学习数据可视化的原则和最佳实践。',
        duration: 55,
        completed: false
      }
    ],
    exercises: [
      {
        id: 1,
        title: '基本图表练习',
        description: '练习创建各种基本图表，包括折线图、柱状图、散点图等。',
        difficulty: '中级',
        type: '编程题',
        questions: 6,
        duration: 60,
        content: [
          '1. 使用Matplotlib创建一个简单的折线图，展示一周内的温度变化。数据：days = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]，temperatures = [22, 24, 25, 23, 26, 28, 27]',
          '2. 创建一个柱状图展示不同类别的数据，比较不同水果的销量。数据：fruits = ["苹果", "香蕉", "橙子", "葡萄", "西瓜"]，sales = [120, 150, 90, 80, 110]',
          '3. 使用散点图展示两个变量之间的关系，分析身高和体重的相关性。数据：height = [160, 165, 170, 175, 180, 185]，weight = [50, 55, 60, 65, 70, 75]',
          '4. 创建一个饼图展示数据的分布，显示不同部门的员工比例。数据：departments = ["技术", "市场", "销售", "人力资源", "财务"]，employees = [40, 25, 30, 10, 15]',
          '5. 使用子图同时展示多个图表，在一个 figure 中创建折线图、柱状图和散点图。',
          '6. 创建一个直方图展示数据的分布情况，分析学生考试成绩的分布。数据：scores = [65, 72, 81, 55, 90, 78, 62, 85, 70, 68, 92, 88, 75, 60, 80]'
        ]
      },
      {
        id: 2,
        title: '图表定制练习',
        description: '练习定制图表的各种元素，包括标题、标签、颜色、图例等。',
        difficulty: '中级',
        type: '编程题',
        questions: 5,
        duration: 75,
        content: [
          '1. 为图表添加标题和轴标签，使用之前的温度数据创建折线图，并添加适当的标题和轴标签。',
          '2. 自定义图表的颜色和样式，使用不同的颜色方案和线型创建柱状图，展示水果销量数据。',
          '3. 添加图例和注释，在散点图中添加图例，并使用annotate函数添加注释。',
          '4. 调整图表的大小和布局，创建一个2x2的子图布局，展示不同类型的图表。',
          '5. 保存图表为图片文件，将创建的图表保存为PNG格式，并指定分辨率。'
        ]
      },
      {
        id: 3,
        title: 'Seaborn练习',
        description: '练习使用Seaborn创建统计图表，包括热力图、小提琴图等。',
        difficulty: '中级',
        type: '编程题',
        questions: 4,
        duration: 60,
        content: [
          '1. 使用Seaborn创建一个热力图，展示不同月份和不同城市的温度数据。数据：创建一个12x5的矩阵，模拟一年中5个城市的月度温度。',
          '2. 创建一个小提琴图展示数据分布，使用Seaborn的violinplot展示不同类别的数据分布。数据：categories = ["A", "B", "C", "D"]，values = [np.random.normal(0, 1, 100), np.random.normal(1, 1, 100), np.random.normal(2, 1, 100), np.random.normal(3, 1, 100)]',
          '3. 使用Seaborn的pairplot展示变量之间的关系，使用iris数据集创建pairplot。',
          '4. 创建一个分类图展示不同类别的数据，使用Seaborn的catplot展示不同类别的数据分布。数据：使用titanic数据集，展示不同舱位等级的乘客年龄分布。'
        ]
      }
    ],
    assessments: [
      {
        id: 1,
        title: '数据可视化测验',
        type: '测验',
        passing_score: 70,
        content: [
          '1. 以下哪个库不是Python中常用的数据可视化库？ A. Matplotlib B. Seaborn C. NumPy D. Plotly',
          '2. 在Matplotlib中，哪个函数用于创建折线图？ A. bar() B. scatter() C. plot() D. pie()',
          '3. 以下哪个图表类型最适合展示数据的分布情况？ A. 折线图 B. 柱状图 C. 散点图 D. 直方图',
          '4. 在Seaborn中，哪个函数用于创建热力图？ A. heatmap() B. violinplot() C. pairplot() D. catplot()',
          '5. 以下哪个参数用于设置图表的标题？ A. xlabel B. ylabel C. title D. legend'
        ]
      },
      {
        id: 2,
        title: '数据可视化项目',
        type: '项目',
        passing_score: 75,
        content: [
          '1. 使用Matplotlib和Seaborn创建一个数据可视化仪表板，展示以下内容：',
          '   a. 折线图：展示过去12个月的销售趋势',
          '   b. 柱状图：展示不同产品类别的销售额',
          '   c. 散点图：展示广告支出与销售额的关系',
          '   d. 饼图：展示市场份额分布',
          '2. 确保图表具有适当的标题、标签、图例和颜色方案',
          '3. 将仪表板保存为图片文件'
        ]
      }
    ]
  },
  '3': {
    id: 3,
    title: '机器学习基础',
    description: '机器学习概念和算法入门。本课程将介绍机器学习的基本概念、常用算法和应用场景，帮助你建立机器学习的基础框架。',
    category: '机器学习',
    difficulty: '中级',
    duration: 12,
    image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Machine%20learning%20algorithms%20and%20data%20models&image_size=landscape_16_9',
    rating: 4.7,
    instructor: '王五',
    instructor_bio: '王老师是一位机器学习专家，拥有5年的机器学习研究和应用经验，曾参与多个机器学习项目的开发。',
    prerequisites: ['Python基础', '线性代数基础', '概率统计基础'],
    lessons: [
      {
        id: 1,
        title: '机器学习简介',
        content: '了解机器学习的基本概念和应用场景。',
        duration: 60,
        completed: false
      },
      {
        id: 2,
        title: '监督学习',
        content: '学习监督学习的基本概念和算法。',
        duration: 75,
        completed: false
      },
      {
        id: 3,
        title: '无监督学习',
        content: '学习无监督学习的基本概念和算法。',
        duration: 70,
        completed: false
      },
      {
        id: 4,
        title: '回归算法',
        content: '学习线性回归、逻辑回归等回归算法。',
        duration: 80,
        completed: false
      },
      {
        id: 5,
        title: '分类算法',
        content: '学习决策树、随机森林等分类算法。',
        duration: 85,
        completed: false
      },
      {
        id: 6,
        title: '聚类算法',
        content: '学习K-means等聚类算法。',
        duration: 70,
        completed: false
      },
      {
        id: 7,
        title: '模型评估',
        content: '学习如何评估机器学习模型的性能。',
        duration: 65,
        completed: false
      },
      {
        id: 8,
        title: '机器学习项目实战',
        content: '通过实际项目练习机器学习技能。',
        duration: 90,
        completed: false
      }
    ],
    exercises: [
      {
        id: 1,
        title: '监督学习练习',
        description: '练习使用监督学习算法解决问题，包括线性回归、逻辑回归等。',
        difficulty: '中级',
        type: '编程题',
        questions: 4,
        duration: 90,
        content: [
          '1. 使用线性回归预测房价：',
          '   a. 加载房价数据集（如Boston房价数据集）',
          '   b. 划分训练集和测试集',
          '   c. 训练线性回归模型',
          '   d. 评估模型性能（计算MSE和R²）',
          '   e. 可视化预测值与真实值的对比',
          '2. 使用逻辑回归进行分类：',
          '   a. 加载分类数据集（如Iris数据集）',
          '   b. 划分训练集和测试集',
          '   c. 训练逻辑回归模型',
          '   d. 评估模型性能（计算准确率、精确率、召回率）',
          '   e. 绘制混淆矩阵',
          '3. 使用决策树进行分类：',
          '   a. 加载分类数据集',
          '   b. 训练决策树模型',
          '   c. 调整决策树的超参数（如最大深度）',
          '   d. 评估模型性能',
          '   e. 可视化决策树结构',
          '4. 使用随机森林进行回归：',
          '   a. 加载回归数据集',
          '   b. 训练随机森林回归模型',
          '   c. 调整森林中树的数量和最大深度',
          '   d. 评估模型性能',
          '   e. 分析特征重要性'
        ]
      },
      {
        id: 2,
        title: '无监督学习练习',
        description: '练习使用无监督学习算法解决问题，包括聚类和降维。',
        difficulty: '中级',
        type: '编程题',
        questions: 3,
        duration: 75,
        content: [
          '1. 使用K-means进行聚类：',
          '   a. 加载聚类数据集（如Iris数据集）',
          '   b. 使用肘部法则确定最佳聚类数K',
          '   c. 训练K-means模型',
          '   d. 可视化聚类结果',
          '   e. 评估聚类质量（如使用轮廓系数）',
          '2. 使用层次聚类分析数据：',
          '   a. 加载数据集',
          '   b. 计算距离矩阵',
          '   c. 执行层次聚类',
          '   d. 绘制 dendrogram（树状图）',
          '   e. 确定最佳聚类数并分配聚类标签',
          '3. 使用PCA进行数据降维：',
          '   a. 加载高维数据集',
          '   b. 标准化数据',
          '   c. 执行PCA并选择主成分数量',
          '   d. 可视化降维后的数据',
          '   e. 计算各主成分的方差解释率'
        ]
      },
      {
        id: 3,
        title: '模型评估练习',
        description: '练习评估机器学习模型的性能，包括准确率、精确率、召回率等指标。',
        difficulty: '中级',
        type: '编程题',
        questions: 4,
        duration: 60,
        content: [
          '1. 计算分类模型的准确率、精确率和召回率：',
          '   a. 加载分类数据集',
          '   b. 训练分类模型（如逻辑回归）',
          '   c. 生成预测结果',
          '   d. 手动计算准确率、精确率和召回率',
          '   e. 使用sklearn中的metrics模块验证计算结果',
          '2. 绘制ROC曲线并计算AUC值：',
          '   a. 加载分类数据集',
          '   b. 训练分类模型',
          '   c. 获取模型的预测概率',
          '   d. 计算不同阈值下的TPR和FPR',
          '   e. 绘制ROC曲线并计算AUC值',
          '3. 使用交叉验证评估模型性能：',
          '   a. 加载数据集',
          '   b. 定义模型',
          '   c. 使用K折交叉验证评估模型',
          '   d. 计算交叉验证的平均性能指标',
          '   e. 比较不同模型的交叉验证结果',
          '4. 分析模型的混淆矩阵：',
          '   a. 加载分类数据集',
          '   b. 训练分类模型',
          '   c. 生成预测结果',
          '   d. 计算混淆矩阵',
          '   e. 从混淆矩阵中提取TP、TN、FP、FN并计算相关指标'
        ]
      }
    ],
    assessments: [
      {
        id: 1,
        title: '机器学习基础测验',
        type: '测验',
        passing_score: 70,
        content: [
          '1. 以下哪个是监督学习算法？ A. K-means B. 层次聚类 C. 线性回归 D. PCA',
          '2. 以下哪个指标用于评估分类模型的性能？ A. MSE B. RMSE C. 准确率 D. R²',
          '3. 过拟合是指什么？ A. 模型在训练集上表现差 B. 模型在测试集上表现差 C. 模型在训练集和测试集上表现都差 D. 模型在训练集上表现好但在测试集上表现差',
          '4. 以下哪个算法是聚类算法？ A. 决策树 B. 随机森林 C. K-means D. 逻辑回归',
          '5. 交叉验证的目的是什么？ A. 减少过拟合 B. 增加模型复杂度 C. 加快模型训练速度 D. 减少模型训练时间'
        ]
      },
      {
        id: 2,
        title: '机器学习项目',
        type: '项目',
        passing_score: 75,
        content: [
          '1. 使用机器学习算法预测房价，包括以下步骤：',
          '   a. 收集和预处理房价数据集',
          '   b. 选择合适的特征',
          '   c. 训练和评估多个机器学习模型',
          '   d. 选择最佳模型并进行调优',
          '2. 撰写一份项目报告，包括数据处理过程、模型选择、评估结果和预测分析'
        ]
      }
    ]
  },
  '4': {
    id: 4,
    title: 'Python商务分析',
    description: '将数据分析技术应用于商务问题。本课程将教授你如何使用Python分析商务数据，提取有价值的见解，并为业务决策提供支持。',
    category: '商务分析',
    difficulty: '高级',
    duration: 15,
    image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Business%20analytics%20dashboard%20with%20Python&image_size=landscape_16_9',
    rating: 4.6,
    instructor: '赵六',
    instructor_bio: '赵老师是一位商务分析专家，拥有10年的商务分析经验，曾为多家企业提供数据分析解决方案。',
    prerequisites: ['Python基础', '数据可视化基础', '商务知识基础'],
    lessons: [
      {
        id: 1,
        title: '商务分析简介',
        content: '了解商务分析的基本概念和应用场景。',
        duration: 60,
        completed: false
      },
      {
        id: 2,
        title: '商务数据获取与处理',
        content: '学习如何获取和处理商务数据。',
        duration: 80,
        completed: false
      },
      {
        id: 3,
        title: '销售数据分析',
        content: '学习如何分析销售数据，识别销售趋势和模式。',
        duration: 75,
        completed: false
      },
      {
        id: 4,
        title: '客户数据分析',
        content: '学习如何分析客户数据，了解客户行为和偏好。',
        duration: 70,
        completed: false
      },
      {
        id: 5,
        title: '市场数据分析',
        content: '学习如何分析市场数据，了解市场趋势和竞争情况。',
        duration: 75,
        completed: false
      },
      {
        id: 6,
        title: '财务数据分析',
        content: '学习如何分析财务数据，评估企业财务状况。',
        duration: 80,
        completed: false
      },
      {
        id: 7,
        title: '商务预测模型',
        content: '学习如何构建商务预测模型，预测业务趋势。',
        duration: 90,
        completed: false
      },
      {
        id: 8,
        title: '商务分析报告',
        content: '学习如何编写有效的商务分析报告。',
        duration: 65,
        completed: false
      },
      {
        id: 9,
        title: '商务分析项目实战',
        content: '通过实际项目练习商务分析技能。',
        duration: 120,
        completed: false
      }
    ],
    exercises: [
      {
        id: 1,
        title: '销售数据分析练习',
        description: '练习分析销售数据，识别销售趋势和模式，为业务决策提供支持。',
        difficulty: '高级',
        type: '数据分析题',
        questions: 5,
        duration: 90,
        content: [
          '1. 分析销售数据的时间趋势：',
          '   a. 加载销售数据集（包含日期和销售额）',
          '   b. 按月份和季度聚合销售数据',
          '   c. 绘制销售趋势图',
          '   d. 分析销售增长或下降的趋势',
          '   e. 识别销售高峰和低谷期',
          '2. 识别销售最好的产品和地区：',
          '   a. 按产品类别和地区分组销售数据',
          '   b. 计算每个产品和地区的总销售额',
          '   c. 排序找出销售额最高的前5个产品和地区',
          '   d. 分析这些产品和地区的共同特点',
          '   e. 提出针对表现不佳产品和地区的改进建议',
          '3. 分析销售季节性模式：',
          '   a. 按月份分析销售数据',
          '   b. 计算每个月份的平均销售额',
          '   c. 绘制季节性销售模式图',
          '   d. 识别季节性高峰和低谷',
          '   e. 分析季节性因素对销售的影响',
          '4. 计算销售增长率和同比变化：',
          '   a. 计算月度和季度销售增长率',
          '   b. 计算同比销售变化（与去年同期相比）',
          '   c. 绘制增长率趋势图',
          '   d. 分析增长最快和最慢的产品/地区',
          '   e. 分析增长趋势的原因',
          '5. 创建销售仪表板展示关键指标：',
          '   a. 选择关键销售指标（如总销售额、增长率、Top产品等）',
          '   b. 使用Matplotlib或Seaborn创建仪表板',
          '   c. 包含趋势图、柱状图和饼图',
          '   d. 确保仪表板美观易读',
          '   e. 添加适当的标题和注释'
        ]
      },
      {
        id: 2,
        title: '客户数据分析练习',
        description: '练习分析客户数据，了解客户行为和偏好，提高客户满意度和忠诚度。',
        difficulty: '高级',
        type: '数据分析题',
        questions: 4,
        duration: 75,
        content: [
          '1. 分析客户demographics：',
          '   a. 加载客户数据集（包含年龄、性别、地区等信息）',
          '   b. 分析客户年龄分布',
          '   c. 分析客户性别比例',
          '   d. 分析客户地区分布',
          '   e. 识别主要客户群体',
          '2. 进行客户分群分析：',
          '   a. 选择客户特征（如消费金额、购买频率、最近购买时间等）',
          '   b. 使用K-means或层次聚类算法对客户进行分群',
          '   c. 确定最佳客户群数量',
          '   d. 分析每个客户群的特点',
          '   e. 为每个客户群制定针对性的营销策略',
          '3. 分析客户购买行为和偏好：',
          '   a. 分析客户购买频率和购买金额',
          '   b. 分析客户购买的产品类别偏好',
          '   c. 分析客户购买时间模式',
          '   d. 识别高价值客户和低价值客户',
          '   e. 分析客户留存率和流失率',
          '4. 预测客户流失风险：',
          '   a. 定义客户流失的标准',
          '   b. 选择预测特征（如购买频率、最近购买时间、客户满意度等）',
          '   c. 构建分类模型（如逻辑回归、随机森林）预测客户流失',
          '   d. 评估模型性能',
          '   e. 识别流失风险高的客户群体并提出挽留策略'
        ]
      },
      {
        id: 3,
        title: '商务预测练习',
        description: '练习构建商务预测模型，预测业务趋势和需求。',
        difficulty: '高级',
        type: '编程题',
        questions: 3,
        duration: 120,
        content: [
          '1. 使用时间序列分析预测销售：',
          '   a. 加载历史销售时间序列数据',
          '   b. 分析时间序列的趋势和季节性',
          '   c. 使用ARIMA或Prophet模型进行预测',
          '   d. 评估预测模型的性能',
          '   e. 预测未来3个月的销售额',
          '2. 构建回归模型预测客户需求：',
          '   a. 收集客户需求相关数据（如价格、促销活动、竞争对手价格等）',
          '   b. 选择相关特征',
          '   c. 构建多元线性回归模型',
          '   d. 评估模型性能',
          '   e. 分析特征对需求的影响程度',
          '3. 使用机器学习模型预测业务指标：',
          '   a. 选择要预测的业务指标（如销售额、客户数量、转化率等）',
          '   b. 收集相关特征数据',
          '   c. 构建机器学习模型（如随机森林、梯度提升树）',
          '   d. 调整模型超参数',
          '   e. 评估模型性能并进行预测'
        ]
      }
    ],
    assessments: [
      {
        id: 1,
        title: '商务分析测验',
        type: '测验',
        passing_score: 70,
        content: [
          '1. 商务分析的主要目的是什么？ A. 预测未来趋势 B. 分析历史数据 C. 支持业务决策 D. 所有选项都是',
          '2. 以下哪个是销售数据分析的关键指标？ A. 客户满意度 B. 员工周转率 C. 销售增长率 D. 库存水平',
          '3. 客户分群分析属于哪种分析类型？ A. 描述性分析 B. 诊断性分析 C. 预测性分析 D. 规范性分析',
          '4. 以下哪个工具最适合创建商务数据仪表板？ A. Excel B. Python C. Tableau D. 所有选项都是',
          '5. 商务分析报告的核心部分是什么？ A. 数据收集方法 B. 分析结果 C. 业务建议 D. 所有选项都是'
        ]
      },
      {
        id: 2,
        title: '商务分析项目',
        type: '项目',
        passing_score: 75,
        content: [
          '1. 分析一家零售企业的销售数据，包括以下步骤：',
          '   a. 收集和预处理销售数据',
          '   b. 分析销售趋势、季节性模式和地区差异',
          '   c. 识别表现最佳和最差的产品',
          '   d. 分析客户购买行为和偏好',
          '2. 基于分析结果，提出具体的业务改进建议',
          '3. 创建数据可视化仪表板展示关键发现'
        ]
      }
    ]
  },
  '5': {
    id: 5,
    title: '数据分析师SQL',
    description: '学习数据查询和分析所需的SQL。本课程将教授你如何使用SQL查询和分析数据，包括基本查询、高级查询、数据聚合和数据转换等。',
    category: 'SQL与数据库',
    difficulty: '入门',
    duration: 6,
    image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=SQL%20database%20queries%20for%20data%20analysis&image_size=landscape_16_9',
    rating: 4.8,
    instructor: '孙七',
    instructor_bio: '孙老师是一位数据库专家，拥有8年的SQL和数据库管理经验，曾为多家企业设计和优化数据库系统。',
    prerequisites: ['基本计算机技能', '无需编程经验'],
    lessons: [
      {
        id: 1,
        title: 'SQL简介',
        content: '了解SQL的基本概念和应用场景。',
        duration: 45,
        completed: false
      },
      {
        id: 2,
        title: '基本查询',
        content: '学习使用SELECT语句进行基本查询。',
        duration: 60,
        completed: false
      },
      {
        id: 3,
        title: '条件查询',
        content: '学习使用WHERE子句进行条件查询。',
        duration: 55,
        completed: false
      },
      {
        id: 4,
        title: '数据排序',
        content: '学习使用ORDER BY子句进行数据排序。',
        duration: 40,
        completed: false
      },
      {
        id: 5,
        title: '数据聚合',
        content: '学习使用GROUP BY和聚合函数进行数据聚合。',
        duration: 65,
        completed: false
      },
      {
        id: 6,
        title: '表连接',
        content: '学习使用JOIN语句进行表连接。',
        duration: 70,
        completed: false
      },
      {
        id: 7,
        title: '子查询',
        content: '学习使用子查询进行复杂查询。',
        duration: 60,
        completed: false
      }
    ],
    exercises: [
      {
        id: 1,
        title: '基本查询练习',
        description: '练习使用基本SELECT语句进行查询，包括选择列、排序和限制结果。',
        difficulty: '入门',
        type: 'SQL查询',
        questions: 8,
        duration: 45,
        content: [
          '1. 从employees表中选择所有列',
          '2. 从employees表中选择name和salary列',
          '3. 从employees表中选择所有列并按salary降序排序',
          '4. 从employees表中选择前10条记录',
          '5. 从employees表中选择唯一的department值',
          '6. 从employees表中选择name以"A"开头的员工',
          '7. 从employees表中选择salary大于5000的员工数量',
          '8. 从employees表中选择department为"IT"的员工'
        ]
      },
      {
        id: 2,
        title: '条件查询练习',
        description: '练习使用WHERE子句进行条件查询，包括比较运算符、逻辑运算符和通配符。',
        difficulty: '入门',
        type: 'SQL查询',
        questions: 7,
        duration: 60,
        content: [
          '1. 从employees表中选择salary大于5000的员工',
          '2. 从employees表中选择department为"IT"的员工',
          '3. 从employees表中选择salary在3000到6000之间的员工',
          '4. 从employees表中选择name以"J"开头的员工',
          '5. 从employees表中选择department为"IT"且salary大于4000的员工',
          '6. 从employees表中选择name包含"son"的员工',
          '7. 从employees表中选择hire_date在2020年之后的员工'
        ]
      },
      {
        id: 3,
        title: '数据聚合练习',
        description: '练习使用GROUP BY和聚合函数进行数据聚合，包括COUNT、SUM、AVG、MAX和MIN。',
        difficulty: '中级',
        type: 'SQL查询',
        questions: 6,
        duration: 60,
        content: [
          '1. 计算每个department的员工数量',
          '2. 计算每个department的平均salary',
          '3. 计算每个department的最高和最低salary',
          '4. 计算所有员工的总salary',
          '5. 计算每个department中salary大于4000的员工数量',
          '6. 计算每个department的salary总和'
        ]
      },
      {
        id: 4,
        title: '表连接练习',
        description: '练习使用JOIN语句进行表连接，包括INNER JOIN、LEFT JOIN和RIGHT JOIN。',
        difficulty: '中级',
        type: 'SQL查询',
        questions: 5,
        duration: 75,
        content: [
          '1. 使用INNER JOIN连接employees和departments表，显示员工姓名和部门名称',
          '2. 使用LEFT JOIN连接employees和departments表，显示所有员工及其部门（如果有）',
          '3. 使用RIGHT JOIN连接employees和departments表，显示所有部门及其员工（如果有）',
          '4. 连接employees、departments和projects表，显示员工姓名、部门名称和项目名称',
          '5. 使用自连接查询员工的经理信息'
        ]
      }
    ],
    assessments: [
      {
        id: 1,
        title: 'SQL基础测验',
        type: '测验',
        passing_score: 70,
        content: [
          '1. 以下哪个SQL语句用于从表中选择数据？ A. INSERT B. UPDATE C. SELECT D. DELETE',
          '2. 以下哪个子句用于过滤查询结果？ A. GROUP BY B. ORDER BY C. WHERE D. HAVING',
          '3. 以下哪个函数用于计算平均值？ A. SUM() B. AVG() C. COUNT() D. MAX()',
          '4. 以下哪个语句用于连接两个或多个表？ A. JOIN B. UNION C. INTERSECT D. EXCEPT',
          '5. 以下哪个子句用于对结果集进行排序？ A. GROUP BY B. ORDER BY C. WHERE D. HAVING'
        ]
      },
      {
        id: 2,
        title: 'SQL查询项目',
        type: '项目',
        passing_score: 75,
        content: [
          '1. 基于以下表结构，编写SQL查询：',
          '   - employees表：employee_id, name, department_id, salary, hire_date',
          '   - departments表：department_id, department_name, location',
          '   - projects表：project_id, project_name, start_date, end_date',
          '   - employee_projects表：employee_id, project_id, role',
          '2. 编写查询回答以下问题：',
          '   a. 每个部门的平均工资是多少？',
          '   b. 找出工资高于部门平均工资的员工',
          '   c. 列出每个项目的参与人数',
          '   d. 找出在多个项目中工作的员工',
          '   e. 计算每个部门的员工人数和总工资'
        ]
      }
    ]
  }
};

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [course, setCourse] = useState(courseDetails[id || '1'] || courseDetails['1']);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [expandedModule, setExpandedModule] = useState<number | null>(0);
  const [selectedExercise, setSelectedExercise] = useState<any>(null);
  const [selectedAssessment, setSelectedAssessment] = useState<any>(null);
  const [codeOutput, setCodeOutput] = useState<string>('');
  const [codeError, setCodeError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // In a real app, we would fetch course details from the API
    // For now, we'll use the mock data
    if (id && courseDetails[id]) {
      setCourse(courseDetails[id]);
    } else {
      setCourse(courseDetails['1']);
    }
  }, [id]);

  const handleEnroll = () => {
    setIsEnrolled(true);
    // In a real app, we would handle enrollment via API
  };

  const toggleModule = (index: number) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  const handleStartLesson = (lessonId: number) => {
    navigate(`/courses/${course.id}/lessons/${lessonId}`);
  };

  const handleStartExercise = (exerciseId: number) => {
    const exercise = course.exercises.find(ex => ex.id === exerciseId);
    if (exercise) {
      setSelectedExercise(exercise);
    }
  };

  const handleStartAssessment = (assessmentId: number) => {
    const assessment = course.assessments.find(as => as.id === assessmentId);
    if (assessment) {
      setSelectedAssessment(assessment);
      setCodeOutput('');
      setCodeError('');
    }
  };

  const handleRunCode = async (code: string) => {
    setLoading(true);
    setCodeOutput('');
    setCodeError('');
    try {
      const result = await executePythonCode(code);
      setCodeOutput(result.output);
      setCodeError(result.error);
    } catch (error) {
      setCodeError('执行过程中发生错误');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Course Hero */}
        <section className="relative bg-gradient-to-br from-[#1a2a6c] via-[#2a4365] to-[#2d3748] text-white">
          {/* 装饰性背景元素 */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-2/5">
                <div className="relative">
                  <img 
                    src={course.image_url} 
                    alt={course.title} 
                    className="w-full h-72 md:h-96 object-cover rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-[#fdbb2d] text-[#1a2a6c] font-bold py-2 px-4 rounded-lg shadow-lg">
                    {course.rating} ★
                  </div>
                </div>
              </div>
              <div className="md:w-3/5">
                <div className="flex items-center mb-4">
                  <span className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium py-1.5 px-4 rounded-full mr-3">
                    {course.category}
                  </span>
                  <span className="bg-[#fdbb2d] text-[#1a2a6c] text-xs font-medium py-1.5 px-4 rounded-full">
                    {course.difficulty}
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{course.title}</h1>
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center">
                    <Star size={18} className="text-yellow-400 mr-2" />
                    <span>{course.rating} (4.8k 评价)</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={18} className="mr-2" />
                    <span>{course.duration} 小时</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen size={18} className="mr-2" />
                    <span>{course.lessons.length} 课程</span>
                  </div>
                  <div className="flex items-center">
                    <Award size={18} className="mr-2" />
                    <span>认证证书</span>
                  </div>
                </div>
                <p className="text-lg mb-8 text-gray-200 leading-relaxed">{course.description}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  {isEnrolled ? (
                    <Link 
                      to={`/courses/${course.id}/lessons/1`} 
                      className="bg-[#4A6FA5] hover:bg-[#3A5A85] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-center flex items-center justify-center group"
                    >
                      继续学习
                      <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ) : (
                    <button 
                      onClick={handleEnroll}
                      className="bg-[#fdbb2d] hover:bg-[#e6a61f] text-[#1a2a6c] font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-center flex items-center justify-center group"
                    >
                      立即报名
                      <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  )}
                  <button className="bg-transparent border-2 border-white hover:bg-white/10 font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-center">
                    加入愿望清单
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Content */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Course Curriculum */}
              <div className="lg:w-2/3">
                <h2 className="text-2xl font-bold mb-6">课程大纲</h2>
                <div className="bg-gray-50 rounded-xl p-6">
                  {course.lessons.map((lesson, index) => (
                    <div key={lesson.id} className="mb-4">
                      <div 
                        className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm cursor-pointer hover:bg-gray-50 transition duration-300"
                        onClick={() => toggleModule(index)}
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                            {lesson.completed ? (
                              <CheckCircle size={18} className="text-green-500" />
                            ) : (
                              <Play size={18} className="text-[#4A6FA5]" />
                            )}
                          </div>
                          <div>
                            <h3 className="font-medium">{lesson.title}</h3>
                            <p className="text-sm text-gray-500">{lesson.duration} minutes</p>
                          </div>
                        </div>
                        <ChevronRight 
                          size={20} 
                          className={`text-gray-500 transition duration-300 ${expandedModule === index ? 'transform rotate-90' : ''}`} 
                        />
                      </div>
                      {expandedModule === index && (
                        <div className="pl-12 pr-4 py-4 border-l-2 border-gray-200 mt-2">
                          <p className="text-gray-600 mb-4">{lesson.content}</p>
                          <button 
                            onClick={() => handleStartLesson(lesson.id)}
                            className="inline-flex items-center text-[#4A6FA5] font-medium hover:underline"
                          >
                            开始课程
                            <ChevronRight size={16} className="ml-1" />
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Exercises */}
                <h2 className="text-2xl font-bold mt-12 mb-6">练习</h2>
                <div className="bg-gray-50 rounded-xl p-6">
                  {course.exercises.map((exercise) => (
                    <div key={exercise.id} className="mb-4 p-4 bg-white rounded-lg shadow-sm">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="mb-4 md:mb-0">
                          <h3 className="font-medium">{exercise.title}</h3>
                          <p className="text-sm text-gray-500 mb-2">{exercise.description}</p>
                          <div className="flex flex-wrap gap-2 text-xs">
                            <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                              {exercise.difficulty}
                            </span>
                            <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full">
                              {exercise.type}
                            </span>
                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                              {exercise.questions} 题
                            </span>
                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                              {exercise.duration} 分钟
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <button 
                            onClick={() => handleStartExercise(exercise.id)}
                            className="text-[#4A6FA5] font-medium hover:underline"
                          >
                            开始练习
                          </button>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>

                {/* Assessments */}
                <h2 className="text-2xl font-bold mt-12 mb-6">测评</h2>
                <div className="bg-gray-50 rounded-xl p-6">
                  {course.assessments.map((assessment) => (
                    <div key={assessment.id} className="mb-4 p-4 bg-white rounded-lg shadow-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">{assessment.title}</h3>
                          <p className="text-sm text-gray-500">{assessment.type} • Passing score: {assessment.passing_score}%</p>
                        </div>
                        <button 
                          onClick={() => handleStartAssessment(assessment.id)}
                          className="text-[#4A6FA5] font-medium hover:underline"
                        >
                          开始测评
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Sidebar */}
              <div className="lg:w-1/3">
                <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
                  <h3 className="text-lg font-semibold mb-4">课程信息</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1">•</span>
                      <span><strong>分类:</strong> {course.category}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1">•</span>
                      <span><strong>难度:</strong> {course.difficulty}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1">•</span>
                      <span><strong>时长:</strong> {course.duration} 小时</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1">•</span>
                      <span><strong>课程数:</strong> {course.lessons.length}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1">•</span>
                      <span><strong>练习数:</strong> {course.exercises.length}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1">•</span>
                      <span><strong>测评数:</strong> {course.assessments.length}</span>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold mt-8 mb-4">前置条件</h3>
                  <ul className="space-y-2 text-gray-600">
                    {course.prerequisites.map((prerequisite, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>{prerequisite}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-lg font-semibold mt-8 mb-4">讲师</h3>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center mr-3">
                      <span className="font-semibold text-gray-600">张</span>
                    </div>
                    <div>
                      <h4 className="font-medium">{course.instructor}</h4>
                      <p className="text-sm text-gray-500">数据科学家</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{course.instructor_bio}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 练习详情模态框 */}
        {selectedExercise && selectedExercise.content && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{selectedExercise.title}</h3>
                <button 
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => {
                    setSelectedExercise(null);
                    setCodeOutput('');
                    setCodeError('');
                  }}
                >
                  <XCircle size={24} />
                </button>
              </div>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2 text-xs mb-2">
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                    {selectedExercise.difficulty}
                  </span>
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full">
                    {selectedExercise.type}
                  </span>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {selectedExercise.questions} 题
                  </span>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {selectedExercise.duration} 分钟
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{selectedExercise.description}</p>
              </div>
              
              {/* 练习题目 */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">练习题目：</h4>
                <ul className="space-y-6">
                  {selectedExercise.content.map((item: string, index: number) => (
                    <li key={index} className="p-4 border rounded-lg">
                      <div className="font-medium mb-4">{index + 1}. {item}</div>
                      
                      {/* 代码编辑器（仅对编程题） */}
                      {selectedExercise.type === '编程题' && (
                        <CodeEditor
                          initialCode="# 在此输入Python代码..."
                          onRunCode={handleRunCode}
                          output={codeOutput}
                          error={codeError}
                        />
                      )}
                      
                      {/* 普通答题区域 */}
                      {selectedExercise.type !== '编程题' && (
                        <div className="mt-2">
                          <textarea 
                            className="w-full p-3 border rounded-lg" 
                            placeholder="在此处输入答案" 
                            rows={4}
                          ></textarea>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex justify-end space-x-2">
                <button 
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  onClick={() => {
                    setSelectedExercise(null);
                    setCodeOutput('');
                    setCodeError('');
                  }}
                >
                  取消
                </button>
                <button className="px-4 py-2 bg-[#4A6FA5] text-white rounded-lg hover:bg-[#3A5A85]">
                  提交答案
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 测评详情模态框 */}
        {selectedAssessment && selectedAssessment.content && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{selectedAssessment.title}</h3>
                <button 
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => {
                    setSelectedAssessment(null);
                    setCodeOutput('');
                    setCodeError('');
                  }}
                >
                  <XCircle size={24} />
                </button>
              </div>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2 text-xs mb-2">
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full">
                    {selectedAssessment.type}
                  </span>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    及格分数: {selectedAssessment.passing_score}%
                  </span>
                </div>
              </div>
              
              {/* 测评题目 */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">测评题目：</h4>
                <ul className="space-y-6">
                  {selectedAssessment.content.map((item: string, index: number) => (
                    <li key={index} className="p-4 border rounded-lg">
                      <div className="font-medium mb-4">{index + 1}. {item}</div>
                      
                      {/* 代码编辑器（对于需要编程的测评题） */}
                      {(selectedAssessment.type === '项目' || item.includes('Python') || item.includes('代码')) && (
                        <CodeEditor
                          initialCode="# 在此输入Python代码..."
                          onRunCode={handleRunCode}
                          output={codeOutput}
                          error={codeError}
                        />
                      )}
                      
                      {/* 普通答题区域 */}
                      {!(selectedAssessment.type === '项目' || item.includes('Python') || item.includes('代码')) && (
                        <div className="mt-2">
                          <textarea 
                            className="w-full p-3 border rounded-lg" 
                            placeholder="在此处输入答案" 
                            rows={4}
                          ></textarea>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex justify-end space-x-2">
                <button 
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  onClick={() => {
                    setSelectedAssessment(null);
                    setCodeOutput('');
                    setCodeError('');
                  }}
                >
                  取消
                </button>
                <button className="px-4 py-2 bg-[#4A6FA5] text-white rounded-lg hover:bg-[#3A5A85]">
                  提交答案
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetail;