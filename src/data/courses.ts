export interface ExerciseItem {
  question: string;
  initialCode: string;
}

export interface Exercise {
  id: number;
  title: string;
  description: string;
  difficulty: string;
  type: string;
  questions: number;
  duration: number;
  content: ExerciseItem[];
}

export interface Assessment {
  id: number;
  title: string;
  type: string;
  passing_score: number;
  content: string[] | ExerciseItem[];
}

export interface Lesson {
  id: number;
  title: string;
  content: string;
  duration: number;
  completed: boolean;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  category: string;
  difficulty: string;
  duration: number;
  image_url: string;
  rating: number;
  instructor: string;
  instructor_bio: string;
  prerequisites: string[];
  lessons: Lesson[];
  exercises: Exercise[];
  assessments: Assessment[];
}

export const courses: Course[] = [
  {
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
      { id: 1, title: 'Python简介', content: '了解什么是Python以及为什么它在数据分析中很受欢迎。', duration: 45, completed: false },
      { id: 2, title: 'Python基础', content: '变量、数据类型和基本操作。', duration: 60, completed: false },
      { id: 3, title: '控制结构', content: 'Python中的条件语句和循环。', duration: 50, completed: false },
      { id: 4, title: '函数', content: '在Python中创建和使用函数。', duration: 40, completed: false },
      { id: 5, title: 'NumPy基础', content: 'NumPy数值计算入门。', duration: 60, completed: false },
      { id: 6, title: 'Pandas基础', content: 'Pandas数据操作入门。', duration: 70, completed: false },
      { id: 7, title: '数据可视化', content: '使用matplotlib创建基本可视化。', duration: 55, completed: false },
      { id: 8, title: '最终项目', content: '将你的技能应用到实际的数据分析项目中。', duration: 90, completed: false }
    ],
    exercises: [
      {
        id: 1,
        title: 'Python基础练习',
        description: '练习基本的Python语法和操作，包括变量定义、数据类型转换、基本运算符等。',
        difficulty: '入门',
        type: '编程题',
        questions: 10,
        duration: 30,
        content: [
          { question: '1. 定义一个变量存储你的名字，并打印出来。', initialCode: '# 定义变量并打印\nname = "张三"\nprint(name)' },
          { question: '2. 将字符串"123"转换为整数并计算其平方。', initialCode: '# 字符串转整数并计算平方\nnum_str = "123"\nnum = int(num_str)\nresult = num ** 2\nprint(f"平方结果: {result}")' },
          { question: '3. 使用算术运算符计算10 + 5 * 3，并打印结果。', initialCode: '# 计算表达式\nresult = 10 + 5 * 3\nprint(f"10 + 5 * 3 = {result}")' },
          { question: '4. 编写程序判断一个数是否为偶数。', initialCode: '# 判断偶数\nnum = 10\nif num % 2 == 0:\n    print(f"{num}是偶数")\nelse:\n    print(f"{num}是奇数")' },
          { question: '5. 计算列表[1, 2, 3, 4, 5]的和。', initialCode: '# 计算列表和\nnumbers = [1, 2, 3, 4, 5]\ntotal = sum(numbers)\nprint(f"列表和: {total}")' },
          { question: '6. 将列表[1, 2, 3, 4, 5]反转。', initialCode: '# 列表反转\nnumbers = [1, 2, 3, 4, 5]\nreversed_numbers = numbers[::-1]\nprint(f"反转后: {reversed_numbers}")' },
          { question: '7. 检查字符串"Hello World"是否包含子字符串"World"。', initialCode: '# 检查字符串包含\ntext = "Hello World"\ncontains = "World" in text\nprint(f"包含World: {contains}")' },
          { question: '8. 使用欧几里得算法计算两个数的最大公约数。', initialCode: '# 最大公约数\ndef gcd(a, b):\n    while b:\n        a, b = b, a % b\n    return a\n\nprint(f"GCD(48, 18) = {gcd(48, 18)}")' },
          { question: '9. 将摄氏度转换为华氏度（公式：华氏度 = 摄氏度 * 9/5 + 32）。', initialCode: '# 温度转换\ncelsius = 25\nfahrenheit = celsius * 9/5 + 32\nprint(f"{celsius}°C = {fahrenheit}°F")' },
          { question: '10. 生成一个包含10个随机数的列表。', initialCode: '# 生成随机数\nimport random\nrandom_list = [random.randint(1, 100) for _ in range(10)]\nprint(f"随机列表: {random_list}")' }
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
          { question: '1. 判断一个数是正数、负数还是零。', initialCode: '# 判断正负零\nnum = 5.5\nif num > 0:\n    print(f"{num}是正数")\nelif num < 0:\n    print(f"{num}是负数")\nelse:\n    print("是零")' },
          { question: '2. 使用for循环打印1到100之间的所有偶数。', initialCode: '# 打印偶数\nfor i in range(1, 101):\n    if i % 2 == 0:\n        print(i, end=" ")' },
          { question: '3. 使用while循环计算1到100的和。', initialCode: '# while循环求和\ntotal = 0\ni = 1\nwhile i <= 100:\n    total += i\n    i += 1\nprint(f"1到100的和: {total}")' },
          { question: '4. 判断一个年份是否为闰年。', initialCode: '# 判断闰年\nyear = 2024\nif (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):\n    print(f"{year}是闰年")\nelse:\n    print(f"{year}不是闰年")' },
          { question: '5. 使用循环计算斐波那契数列的前10项。', initialCode: '# 斐波那契数列\nfib = [0, 1]\nfor i in range(2, 10):\n    fib.append(fib[i-1] + fib[i-2])\nprint(f"斐波那契前10项: {fib}")' }
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
          { question: '1. 创建一个形状为(3, 4)的随机数组并打印。', initialCode: '# NumPy随机数组\nimport numpy as np\narr = np.random.rand(3, 4)\nprint("数组:\\n", arr)\nprint("形状:", arr.shape)' },
          { question: '2. 计算数组的平均值、最大值和最小值。', initialCode: '# 数组统计\nimport numpy as np\narr = np.array([[1, 2, 3], [4, 5, 6]])\nprint(f"平均值: {np.mean(arr)}")\nprint(f"最大值: {np.max(arr)}")\nprint(f"最小值: {np.min(arr)}")' },
          { question: '3. 对数组进行切片，获取前两行。', initialCode: '# 数组切片\nimport numpy as np\narr = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])\nprint("原数组:\\n", arr)\nprint("前两行:\\n", arr[:2, :])' },
          { question: '4. 实现矩阵乘法。', initialCode: '# 矩阵乘法\nimport numpy as np\nm1 = np.array([[1, 2], [3, 4]])\nm2 = np.array([[5, 6], [7, 8]])\nresult = m1 @ m2\nprint("矩阵乘法结果:\\n", result)' },
          { question: '5. 使用NumPy计算数组元素的平方和。', initialCode: '# 平方和\nimport numpy as np\narr = np.array([1, 2, 3, 4, 5])\nsquare_sum = np.sum(arr ** 2)\nprint(f"平方和: {square_sum}")' },
          { question: '6. 创建一个全零数组和全一数组。', initialCode: '# 全零全一数组\nimport numpy as np\nzeros = np.zeros((2, 3))\nones = np.ones((2, 3))\nprint("全零:\\n", zeros)\nprint("全一:\\n", ones)' },
          { question: '7. 对数组进行排序。', initialCode: '# 数组排序\nimport numpy as np\narr = np.array([3, 1, 4, 1, 5, 9])\nprint("排序前:", arr)\nprint("排序后:", np.sort(arr))' },
          { question: '8. 计算矩阵的转置和逆。', initialCode: '# 矩阵运算\nimport numpy as np\nmatrix = np.array([[1, 2], [3, 4]])\nprint("原矩阵:\\n", matrix)\nprint("转置:\\n", matrix.T)\nif np.linalg.det(matrix) != 0:\n    print("逆矩阵:\\n", np.linalg.inv(matrix))' }
        ]
      },
      {
        id: 4,
        title: 'Pandas练习',
        description: '练习使用pandas进行数据操作，包括数据读取、清洗、转换和分析。',
        difficulty: '中级',
        type: '编程题',
        questions: 6,
        duration: 75,
        content: [
          { question: '1. 创建DataFrame并显示前5行。', initialCode: '# Pandas DataFrame\nimport pandas as pd\ndata = {"姓名": ["张三", "李四", "王五"], "年龄": [25, 30, 35], "工资": [8000, 9000, 7500]}\ndf = pd.DataFrame(data)\nprint(df.head())' },
          { question: '2. 处理数据中的缺失值。', initialCode: '# 处理缺失值\nimport pandas as pd\nimport numpy as np\ndata = {"姓名": ["张三", None, "王五"], "年龄": [25, np.nan, 35]}\ndf = pd.DataFrame(data)\nprint("原始:\\n", df)\ndf_filled = df.fillna({"姓名": "未知", "年龄": df["年龄"].mean()})\nprint("填充后:\\n", df_filled)' },
          { question: '3. 按某一列对数据进行排序。', initialCode: '# 数据排序\nimport pandas as pd\ndf = pd.DataFrame({"姓名": ["张三", "李四", "王五"], "工资": [8000, 9000, 7500]})\nprint("原始:\\n", df)\nprint("按工资降序:\\n", df.sort_values("工资", ascending=False))' },
          { question: '4. 使用groupby进行数据分组和聚合。', initialCode: '# 分组聚合\nimport pandas as pd\ndf = pd.DataFrame({\n    "部门": ["技术", "市场", "技术", "市场"],\n    "工资": [8000, 9000, 8500, 9500]\n})\nresult = df.groupby("部门").agg({"工资": ["mean", "sum"]})\nprint(result)' },
          { question: '5. 计算数据的基本统计信息。', initialCode: '# 统计信息\nimport pandas as pd\ndf = pd.DataFrame({"年龄": [25, 30, 35, 28], "工资": [8000, 9000, 7500, 8500]})\nprint(df.describe())' },
          { question: '6. 使用布尔索引筛选数据。', initialCode: '# 数据筛选\nimport pandas as pd\ndf = pd.DataFrame({\n    "姓名": ["张三", "李四", "王五"],\n    "年龄": [25, 30, 35],\n    "工资": [8000, 9000, 7500]\n})\nfiltered = df[(df["工资"] > 8000) & (df["年龄"] < 35)]\nprint(filtered)' }
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
          '1. 使用Python分析一个销售数据集，包括读取数据、处理缺失值、分析趋势和生成可视化图表。',
          '2. 撰写一份数据分析报告，包括数据处理过程、分析结果和业务建议。'
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Python数据可视化',
    description: '使用Matplotlib和Seaborn创建精美的数据可视化。本课程将教授你如何使用Python的可视化库创建各种类型的图表。',
    category: '数据可视化',
    difficulty: '中级',
    duration: 8,
    image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20visualization%20charts%20and%20graphs%20using%20Python&image_size=landscape_16_9',
    rating: 4.9,
    instructor: '李四',
    instructor_bio: '李老师是一位数据可视化专家，拥有8年的数据可视化经验。',
    prerequisites: ['Python基础', 'NumPy和Pandas基础'],
    lessons: [
      { id: 1, title: 'Matplotlib基础', content: '了解Matplotlib库的基本结构和使用方法。', duration: 60, completed: false },
      { id: 2, title: '基本图表类型', content: '学习创建折线图、柱状图、散点图等基本图表。', duration: 75, completed: false },
      { id: 3, title: '图表定制', content: '学习如何定制图表的标题、标签、颜色等。', duration: 65, completed: false },
      { id: 4, title: 'Seaborn入门', content: '了解Seaborn库的基本使用方法。', duration: 60, completed: false },
      { id: 5, title: '高级可视化', content: '学习创建热力图、小提琴图等高级图表。', duration: 70, completed: false },
      { id: 6, title: '交互式可视化', content: '学习使用Plotly创建交互式图表。', duration: 80, completed: false },
      { id: 7, title: '最佳实践', content: '学习数据可视化的原则和最佳实践。', duration: 55, completed: false }
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
          { question: '1. 使用Matplotlib创建折线图展示一周温度变化。', initialCode: '# 折线图\nimport matplotlib.pyplot as plt\ndays = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]\ntemps = [22, 24, 25, 23, 26, 28, 27]\nplt.plot(days, temps)\nplt.title("一周温度变化")\nplt.xlabel("日期")\nplt.ylabel("温度(°C)")\nplt.show()' },
          { question: '2. 创建柱状图展示不同水果的销量。', initialCode: '# 柱状图\nimport matplotlib.pyplot as plt\nfruits = ["苹果", "香蕉", "橙子", "葡萄", "西瓜"]\nsales = [120, 150, 90, 80, 110]\nplt.bar(fruits, sales)\nplt.title("水果销量")\nplt.xlabel("水果")\nplt.ylabel("销量")\nplt.show()' },
          { question: '3. 使用散点图展示身高和体重的关系。', initialCode: '# 散点图\nimport matplotlib.pyplot as plt\nheight = [160, 165, 170, 175, 180, 185]\nweight = [50, 55, 60, 65, 70, 75]\nplt.scatter(height, weight)\nplt.title("身高体重关系")\nplt.xlabel("身高(cm)")\nplt.ylabel("体重(kg)")\nplt.show()' },
          { question: '4. 创建饼图展示不同部门的员工比例。', initialCode: '# 饼图\nimport matplotlib.pyplot as plt\ndepts = ["技术", "市场", "销售", "人力资源", "财务"]\nemployees = [40, 25, 30, 10, 15]\nplt.pie(employees, labels=depts, autopct="%1.1f%%")\nplt.title("部门人员分布")\nplt.show()' },
          { question: '5. 创建直方图展示学生考试成绩分布。', initialCode: '# 直方图\nimport matplotlib.pyplot as plt\nscores = [65, 72, 81, 55, 90, 78, 62, 85, 70, 68, 92, 88, 75, 60, 80]\nplt.hist(scores, bins=5)\nplt.title("考试成绩分布")\nplt.xlabel("分数")\nplt.ylabel("人数")\nplt.show()' },
          { question: '6. 使用子图同时展示多个图表。', initialCode: '# 子图\nimport matplotlib.pyplot as plt\nfig, axes = plt.subplots(1, 2, figsize=(10, 4))\naxes[0].plot([1, 2, 3], [4, 5, 6])\naxes[0].set_title("折线图")\naxes[1].bar(["A", "B", "C"], [10, 20, 15])\naxes[1].set_title("柱状图")\nplt.tight_layout()\nplt.show()' }
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
          { question: '1. 为折线图添加标题和轴标签。', initialCode: '# 添加标题和标签\nimport matplotlib.pyplot as plt\ndays = ["周一", "周二", "周三"]\ntemps = [22, 24, 25]\nplt.plot(days, temps, color="red", linestyle="--", marker="o")\nplt.title("温度变化趋势", fontsize=14)\nplt.xlabel("日期", fontsize=12)\nplt.ylabel("温度(°C)", fontsize=12)\nplt.grid(True)\nplt.show()' },
          { question: '2. 自定义图表颜色和样式。', initialCode: '# 自定义样式\nimport matplotlib.pyplot as plt\nfruits = ["苹果", "香蕉", "橙子"]\nsales = [120, 150, 90]\ncolors = ["#ff9999", "#66b3ff", "#99ff99"]\nplt.bar(fruits, sales, color=colors, edgecolor="black")\nplt.title("水果销量对比")\nplt.show()' },
          { question: '3. 在图表中添加图例和注释。', initialCode: '# 图例和注释\nimport matplotlib.pyplot as plt\nx = [1, 2, 3, 4, 5]\ny1 = [1, 4, 9, 16, 25]\ny2 = [1, 2, 3, 4, 5]\nplt.plot(x, y1, label="平方")\nplt.plot(x, y2, label="线性")\nplt.legend()\nplt.annotate("最大值", xy=(5, 25), xytext=(4, 20), arrowprops=dict(arrowstyle="->"))\nplt.show()' },
          { question: '4. 创建2x2子图布局。', initialCode: '# 2x2子图\nimport matplotlib.pyplot as plt\nfig, axes = plt.subplots(2, 2, figsize=(8, 6))\naxes[0, 0].plot([1, 2, 3], [4, 5, 6])\naxes[0, 1].bar(["A", "B"], [10, 20])\naxes[1, 0].scatter([1, 2, 3], [4, 5, 6])\naxes[1, 1].pie([30, 20, 50])\nplt.tight_layout()\nplt.show()' },
          { question: '5. 保存图表为图片文件。', initialCode: '# 保存图表\nimport matplotlib.pyplot as plt\ndays = ["周一", "周二", "周三"]\ntemps = [22, 24, 25]\nplt.plot(days, temps)\nplt.title("温度变化")\nplt.savefig("temperature.png", dpi=300, bbox_inches="tight")\nprint("图表已保存为 temperature.png")' }
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
          { question: '1. 使用Seaborn创建热力图。', initialCode: '# 热力图\nimport seaborn as sns\nimport numpy as np\nimport matplotlib.pyplot as plt\n# 创建模拟温度数据\ntemp_data = np.random.randn(12, 5) * 5 + 15\nsns.heatmap(temp_data, annot=True, cmap="coolwarm")\nplt.title("城市月度温度热力图")\nplt.show()' },
          { question: '2. 创建小提琴图展示数据分布。', initialCode: '# 小提琴图\nimport seaborn as sns\nimport numpy as np\nimport matplotlib.pyplot as plt\ncategories = ["A", "B", "C", "D"]\nvalues = [np.random.normal(i, 1, 100) for i in range(4)]\ndf = {"类别": np.repeat(categories, 100), "值": np.concatenate(values)}\nsns.violinplot(x="类别", y="值", data=df)\nplt.title("数据分布")\nplt.show()' },
          { question: '3. 使用Seaborn的pairplot展示变量关系。', initialCode: '# Pairplot\nimport seaborn as sns\nimport matplotlib.pyplot as plt\niris = sns.load_dataset("iris")\nsns.pairplot(iris, hue="species")\nplt.suptitle("Iris数据集变量关系", y=1.02)\nplt.show()' },
          { question: '4. 使用catplot展示分类数据。', initialCode: '# Catplot\nimport seaborn as sns\nimport matplotlib.pyplot as plt\ntitanic = sns.load_dataset("titanic")\nsns.catplot(x="class", y="age", data=titanic, kind="box")\nplt.title("不同舱位年龄分布")\nplt.show()' }
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
          '1. 使用Matplotlib和Seaborn创建数据可视化仪表板，包括折线图、柱状图、散点图和饼图。',
          '2. 确保图表具有适当的标题、标签、图例和颜色方案。'
        ]
      }
    ]
  },
  {
    id: 3,
    title: '机器学习基础',
    description: '机器学习概念和算法入门。本课程将介绍机器学习的基本概念、常用算法和应用场景。',
    category: '机器学习',
    difficulty: '中级',
    duration: 12,
    image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Machine%20learning%20algorithms%20and%20data%20models&image_size=landscape_16_9',
    rating: 4.7,
    instructor: '王五',
    instructor_bio: '王老师是一位机器学习专家，拥有5年的机器学习研究和应用经验。',
    prerequisites: ['Python基础', '线性代数基础', '概率统计基础'],
    lessons: [
      { id: 1, title: '机器学习简介', content: '了解机器学习的基本概念和应用场景。', duration: 60, completed: false },
      { id: 2, title: '监督学习', content: '学习监督学习的基本概念和算法。', duration: 75, completed: false },
      { id: 3, title: '无监督学习', content: '学习无监督学习的基本概念和算法。', duration: 70, completed: false },
      { id: 4, title: '回归算法', content: '学习线性回归、逻辑回归等回归算法。', duration: 80, completed: false },
      { id: 5, title: '分类算法', content: '学习决策树、随机森林等分类算法。', duration: 85, completed: false },
      { id: 6, title: '聚类算法', content: '学习K-means等聚类算法。', duration: 70, completed: false },
      { id: 7, title: '模型评估', content: '学习如何评估机器学习模型的性能。', duration: 65, completed: false },
      { id: 8, title: '项目实战', content: '通过实际项目练习机器学习技能。', duration: 90, completed: false }
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
          { question: '1. 使用线性回归预测房价。', initialCode: '# 线性回归\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import mean_squared_error\nimport numpy as np\n\nX = np.array([[60, 3], [80, 4], [100, 3]]).reshape(-1, 2)\ny = np.array([100, 150, 200])\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)\npreds = model.predict(X_test)\nprint(f"MSE: {mean_squared_error(y_test, preds):.2f}")' },
          { question: '2. 使用逻辑回归进行分类。', initialCode: '# 逻辑回归\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\n\niris = load_iris()\nX_train, X_test, y_train, y_test = train_test_split(iris.data, iris.target, test_size=0.2)\nmodel = LogisticRegression()\nmodel.fit(X_train, y_train)\nacc = model.score(X_test, y_test)\nprint(f"准确率: {acc:.2f}")' },
          { question: '3. 使用决策树进行分类。', initialCode: '# 决策树\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.datasets import load_wine\n\nwine = load_wine()\nX_train, X_test, y_train, y_test = train_test_split(wine.data, wine.target, test_size=0.2)\nmodel = DecisionTreeClassifier(max_depth=3)\nmodel.fit(X_train, y_train)\nacc = model.score(X_test, y_test)\nprint(f"准确率: {acc:.2f}")' },
          { question: '4. 使用随机森林进行回归。', initialCode: '# 随机森林回归\nfrom sklearn.ensemble import RandomForestRegressor\nfrom sklearn.datasets import fetch_california_housing\n\nhousing = fetch_california_housing()\nX_train, X_test, y_train, y_test = train_test_split(housing.data, housing.target, test_size=0.2)\nmodel = RandomForestRegressor(n_estimators=100)\nmodel.fit(X_train, y_train)\nscore = model.score(X_test, y_test)\nprint(f"R²: {score:.2f}")' }
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
          { question: '1. 使用K-means进行聚类。', initialCode: '# K-means聚类\nfrom sklearn.cluster import KMeans\nfrom sklearn.datasets import load_iris\nimport matplotlib.pyplot as plt\n\niris = load_iris()\nX = iris.data[:, :2]\nkmeans = KMeans(n_clusters=3, random_state=42)\nlabels = kmeans.fit_predict(X)\n\nplt.scatter(X[:, 0], X[:, 1], c=labels)\nplt.scatter(kmeans.cluster_centers_[:, 0], kmeans.cluster_centers_[:, 1], marker="x", s=100)\nplt.show()' },
          { question: '2. 使用PCA进行数据降维。', initialCode: '# PCA降维\nfrom sklearn.decomposition import PCA\nfrom sklearn.datasets import load_digits\nimport matplotlib.pyplot as plt\n\ndigits = load_digits()\npca = PCA(n_components=2)\nX_pca = pca.fit_transform(digits.data)\n\nplt.scatter(X_pca[:, 0], X_pca[:, 1], c=digits.target, cmap="tab10")\nplt.colorbar()\nplt.show()\nprint(f"方差解释率: {pca.explained_variance_ratio_.sum():.2f}")' },
          { question: '3. 使用层次聚类分析数据。', initialCode: '# 层次聚类\nfrom sklearn.cluster import AgglomerativeClustering\nfrom sklearn.datasets import make_blobs\n\nX, _ = make_blobs(n_samples=100, centers=3)\nmodel = AgglomerativeClustering(n_clusters=3)\nlabels = model.fit_predict(X)\nprint(f"聚类标签: {labels[:10]}")' }
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
          { question: '1. 计算分类模型的准确率、精确率和召回率。', initialCode: '# 模型评估指标\nfrom sklearn.metrics import accuracy_score, precision_score, recall_score\ny_true = [0, 1, 0, 1, 0, 1]\ny_pred = [0, 1, 1, 1, 0, 0]\n\nacc = accuracy_score(y_true, y_pred)\nprec = precision_score(y_true, y_pred)\nrec = recall_score(y_true, y_pred)\n\nprint(f"准确率: {acc:.2f}, 精确率: {prec:.2f}, 召回率: {rec:.2f}")' },
          { question: '2. 绘制ROC曲线并计算AUC值。', initialCode: '# ROC曲线\nfrom sklearn.metrics import roc_curve, auc\nimport matplotlib.pyplot as plt\n\ny_true = [0, 0, 1, 1, 0, 1]\ny_scores = [0.1, 0.3, 0.6, 0.8, 0.2, 0.9]\n\nfpr, tpr, _ = roc_curve(y_true, y_scores)\nroc_auc = auc(fpr, tpr)\n\nplt.plot(fpr, tpr, label=f"AUC = {roc_auc:.2f}")\nplt.plot([0, 1], [0, 1], "k--")\nplt.legend()\nplt.show()' },
          { question: '3. 使用交叉验证评估模型性能。', initialCode: '# 交叉验证\nfrom sklearn.model_selection import cross_val_score\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.datasets import load_iris\n\niris = load_iris()\nmodel = DecisionTreeClassifier()\nscores = cross_val_score(model, iris.data, iris.target, cv=5)\nprint(f"交叉验证分数: {scores}")\nprint(f"平均分: {scores.mean():.2f}")' },
          { question: '4. 分析模型的混淆矩阵。', initialCode: '# 混淆矩阵\nfrom sklearn.metrics import confusion_matrix\nimport seaborn as sns\nimport matplotlib.pyplot as plt\n\ny_true = [0, 1, 0, 1, 0, 1, 0, 1]\ny_pred = [0, 1, 1, 1, 0, 0, 0, 1]\n\ncm = confusion_matrix(y_true, y_pred)\nsns.heatmap(cm, annot=True, fmt="d")\nplt.xlabel("预测")\nplt.ylabel("真实")\nplt.show()' }
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
          '1. 使用机器学习算法预测房价，包括数据预处理、模型训练和评估。',
          '2. 撰写项目报告，包括数据处理过程、模型选择、评估结果和预测分析。'
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'Python商务分析',
    description: '将数据分析技术应用于商务问题。本课程将教授你如何使用Python分析商务数据。',
    category: '商务分析',
    difficulty: '高级',
    duration: 15,
    image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Business%20analytics%20dashboard%20with%20Python&image_size=landscape_16_9',
    rating: 4.6,
    instructor: '赵六',
    instructor_bio: '赵老师是一位商务分析专家，拥有10年的商务分析经验。',
    prerequisites: ['Python基础', '数据可视化基础', '商务知识基础'],
    lessons: [
      { id: 1, title: '商务分析简介', content: '了解商务分析的基本概念和应用场景。', duration: 60, completed: false },
      { id: 2, title: '商务数据获取与处理', content: '学习如何获取和处理商务数据。', duration: 80, completed: false },
      { id: 3, title: '销售数据分析', content: '学习如何分析销售数据，识别销售趋势和模式。', duration: 75, completed: false },
      { id: 4, title: '客户数据分析', content: '学习如何分析客户数据，了解客户行为和偏好。', duration: 70, completed: false },
      { id: 5, title: '市场数据分析', content: '学习如何分析市场数据，了解市场趋势和竞争情况。', duration: 75, completed: false },
      { id: 6, title: '财务数据分析', content: '学习如何分析财务数据，评估企业财务状况。', duration: 80, completed: false },
      { id: 7, title: '商务预测模型', content: '学习如何构建商务预测模型。', duration: 90, completed: false },
      { id: 8, title: '商务分析报告', content: '学习如何编写有效的商务分析报告。', duration: 65, completed: false },
      { id: 9, title: '项目实战', content: '通过实际项目练习商务分析技能。', duration: 120, completed: false }
    ],
    exercises: [
      {
        id: 1,
        title: '销售数据分析练习',
        description: '练习分析销售数据，识别销售趋势和模式，为业务决策提供支持。',
        difficulty: '高级',
        type: '编程题',
        questions: 5,
        duration: 90,
        content: [
          { question: '1. 分析销售数据的时间趋势。', initialCode: '# 销售趋势分析\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\n# 创建模拟销售数据\ndates = pd.date_range(start="2023-01-01", periods=12, freq="M")\nsales = [100, 120, 90, 110, 130, 150, 140, 160, 180, 170, 190, 200]\ndf = pd.DataFrame({"日期": dates, "销售额": sales})\n\nplt.plot(df["日期"], df["销售额"])\nplt.title("月度销售趋势")\nplt.xlabel("日期")\nplt.ylabel("销售额")\nplt.xticks(rotation=45)\nplt.show()' },
          { question: '2. 识别销售最好的产品和地区。', initialCode: '# Top产品分析\nimport pandas as pd\n\ndata = {\n    "产品": ["A", "B", "C", "A", "B", "C"],\n    "地区": ["北", "北", "北", "南", "南", "南"],\n    "销售额": [100, 80, 120, 90, 110, 130]\n}\ndf = pd.DataFrame(data)\n\n# 按产品分组\ntop_product = df.groupby("产品")["销售额"].sum().sort_values(ascending=False)\nprint("Top产品:\\n", top_product)\n\n# 按地区分组\ntop_region = df.groupby("地区")["销售额"].sum()\nprint("\\n各地区销售:\\n", top_region)' },
          { question: '3. 分析销售季节性模式。', initialCode: '# 季节性分析\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\nmonths = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]\nsales = [80, 75, 90, 100, 110, 120, 130, 125, 115, 105, 95, 135]\n\nplt.bar(months, sales)\nplt.title("月度销售季节性")\nplt.xlabel("月份")\nplt.ylabel("销售额")\nplt.xticks(rotation=45)\nplt.show()' },
          { question: '4. 计算销售增长率和同比变化。', initialCode: '# 增长率计算\nimport pandas as pd\n\ndata = {"月份": ["1月", "2月", "3月", "4月"], "销售额": [100, 120, 110, 130]}\ndf = pd.DataFrame(data)\ndf["增长率"] = df["销售额"].pct_change() * 100\nprint(df)\nprint(f"\\n平均增长率: {df[\'增长率\'].mean():.2f}%")' },
          { question: '5. 创建销售仪表板展示关键指标。', initialCode: '# 销售仪表板\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\nfig, axes = plt.subplots(1, 3, figsize=(15, 5))\n\n# 折线图\naxes[0].plot([1, 2, 3, 4], [100, 120, 110, 130])\naxes[0].set_title("销售趋势")\n\n# 柱状图\naxes[1].bar(["A", "B", "C"], [150, 120, 180])\naxes[1].set_title("产品销售")\n\n# 饼图\naxes[2].pie([40, 30, 30], labels=["北", "南", "东"], autopct="%1.1f%%")\naxes[2].set_title("地区分布")\n\nplt.tight_layout()\nplt.show()' }
        ]
      },
      {
        id: 2,
        title: '客户数据分析练习',
        description: '练习分析客户数据，了解客户行为和偏好，提高客户满意度和忠诚度。',
        difficulty: '高级',
        type: '编程题',
        questions: 4,
        duration: 75,
        content: [
          { question: '1. 分析客户demographics。', initialCode: '# 客户特征分析\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\ndata = {\n    "年龄": [25, 30, 35, 40, 45, 30, 28, 32],\n    "性别": ["男", "女", "男", "女", "男", "女", "男", "女"],\n    "地区": ["北", "北", "南", "南", "北", "南", "北", "南"]\n}\ndf = pd.DataFrame(data)\n\nprint("年龄分布:\\n", df["年龄"].describe())\nprint("\\n性别分布:\\n", df["性别"].value_counts())\nprint("\\n地区分布:\\n", df["地区"].value_counts())' },
          { question: '2. 进行客户分群分析。', initialCode: '# 客户分群\nfrom sklearn.cluster import KMeans\nimport pandas as pd\n\ndata = {\n    "消费金额": [1000, 2000, 500, 3000, 1500, 800, 2500, 1200],\n    "购买频率": [5, 10, 2, 15, 8, 3, 12, 6]\n}\ndf = pd.DataFrame(data)\n\nkmeans = KMeans(n_clusters=3, random_state=42)\ndf["群组"] = kmeans.fit_predict(df)\nprint(df)\nprint("\\n各群组人数:\\n", df["群组"].value_counts())' },
          { question: '3. 分析客户购买行为和偏好。', initialCode: '# 购买行为分析\nimport pandas as pd\n\ndata = {\n    "客户ID": [1, 1, 2, 2, 3, 3],\n    "产品类别": ["电子产品", "服装", "食品", "电子产品", "服装", "食品"],\n    "金额": [500, 200, 100, 800, 300, 150]\n}\ndf = pd.DataFrame(data)\n\n# 按客户分组\ncustomer_pref = df.groupby(["客户ID", "产品类别"])["金额"].sum().unstack()\nprint(customer_pref.fillna(0))' },
          { question: '4. 预测客户流失风险。', initialCode: '# 客户流失预测\nfrom sklearn.linear_model import LogisticRegression\nimport pandas as pd\n\ndata = {\n    "购买频率": [5, 2, 10, 1, 8, 3],\n    "最近购买天数": [10, 30, 5, 60, 15, 45],\n    "是否流失": [0, 1, 0, 1, 0, 1]\n}\ndf = pd.DataFrame(data)\n\nmodel = LogisticRegression()\nmodel.fit(df[["购买频率", "最近购买天数"]], df["是否流失"])\nprint("特征系数:", model.coef_)' }
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
          { question: '1. 使用时间序列分析预测销售。', initialCode: '# 时间序列预测\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\n# 模拟时间序列数据\ndates = pd.date_range(start="2023-01-01", periods=12, freq="M")\nsales = [100, 120, 90, 110, 130, 150, 140, 160, 180, 170, 190, 200]\ndf = pd.DataFrame({"日期": dates, "销售额": sales})\ndf["月份"] = df["日期"].dt.month\n\n# 简单移动平均预测\nwindow = 3\ndf["预测"] = df["销售额"].rolling(window=window).mean().shift(-window + 1)\nprint(df[["日期", "销售额", "预测"]])' },
          { question: '2. 构建回归模型预测客户需求。', initialCode: '# 需求预测\nfrom sklearn.linear_model import LinearRegression\nimport pandas as pd\n\ndata = {\n    "价格": [100, 90, 80, 70, 60],\n    "促销活动": [0, 1, 0, 1, 1],\n    "需求量": [50, 70, 60, 85, 95]\n}\ndf = pd.DataFrame(data)\n\nmodel = LinearRegression()\nmodel.fit(df[["价格", "促销活动"]], df["需求量"])\nprint(f"系数: {model.coef_}, 截距: {model.intercept_}")' },
          { question: '3. 使用机器学习模型预测业务指标。', initialCode: '# 业务指标预测\nfrom sklearn.ensemble import RandomForestRegressor\nimport pandas as pd\n\ndata = {\n    "广告支出": [10, 15, 12, 18, 20, 16],\n    "客户数量": [100, 150, 120, 180, 200, 160],\n    "销售额": [1000, 1500, 1200, 1800, 2000, 1600]\n}\ndf = pd.DataFrame(data)\n\nmodel = RandomForestRegressor()\nmodel.fit(df[["广告支出", "客户数量"]], df["销售额"])\nprint(f"特征重要性: {model.feature_importances_}")' }
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
          '1. 分析一家零售企业的销售数据，包括销售趋势、季节性模式和地区差异分析。',
          '2. 基于分析结果，提出具体的业务改进建议。',
          '3. 创建数据可视化仪表板展示关键发现。'
        ]
      }
    ]
  },
  {
    id: 5,
    title: '数据分析师SQL',
    description: '学习数据查询和分析所需的SQL。本课程将教授你如何使用SQL查询和分析数据。',
    category: 'SQL与数据库',
    difficulty: '入门',
    duration: 6,
    image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=SQL%20database%20queries%20for%20data%20analysis&image_size=landscape_16_9',
    rating: 4.8,
    instructor: '孙七',
    instructor_bio: '孙老师是一位数据库专家，拥有8年的SQL和数据库管理经验。',
    prerequisites: ['基本计算机技能', '无需编程经验'],
    lessons: [
      { id: 1, title: 'SQL简介', content: '了解SQL的基本概念和应用场景。', duration: 45, completed: false },
      { id: 2, title: '基本查询', content: '学习使用SELECT语句进行基本查询。', duration: 60, completed: false },
      { id: 3, title: '条件查询', content: '学习使用WHERE子句进行条件查询。', duration: 55, completed: false },
      { id: 4, title: '数据排序', content: '学习使用ORDER BY子句进行数据排序。', duration: 40, completed: false },
      { id: 5, title: '数据聚合', content: '学习使用GROUP BY和聚合函数进行数据聚合。', duration: 65, completed: false },
      { id: 6, title: '表连接', content: '学习使用JOIN语句进行表连接。', duration: 70, completed: false },
      { id: 7, title: '子查询', content: '学习使用子查询进行复杂查询。', duration: 60, completed: false }
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
          { question: '1. 从employees表中选择所有列。', initialCode: '-- 查询所有列\nSELECT * FROM employees;' },
          { question: '2. 从employees表中选择name和salary列。', initialCode: '-- 查询指定列\nSELECT name, salary FROM employees;' },
          { question: '3. 从employees表中选择所有列并按salary降序排序。', initialCode: '-- 按工资降序排序\nSELECT * FROM employees ORDER BY salary DESC;' },
          { question: '4. 从employees表中选择前10条记录。', initialCode: '-- 限制结果数量\nSELECT * FROM employees LIMIT 10;' },
          { question: '5. 从employees表中选择唯一的department值。', initialCode: '-- 查询唯一值\nSELECT DISTINCT department FROM employees;' },
          { question: '6. 从employees表中选择name以"A"开头的员工。', initialCode: '-- 模糊查询\nSELECT * FROM employees WHERE name LIKE "A%";' },
          { question: '7. 从employees表中选择salary大于5000的员工数量。', initialCode: '-- 条件计数\nSELECT COUNT(*) FROM employees WHERE salary > 5000;' },
          { question: '8. 从employees表中选择department为"IT"的员工。', initialCode: '-- 等值查询\nSELECT * FROM employees WHERE department = "IT";' }
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
          { question: '1. 从employees表中选择salary大于5000的员工。', initialCode: '-- 大于条件\nSELECT * FROM employees WHERE salary > 5000;' },
          { question: '2. 从employees表中选择department为"IT"的员工。', initialCode: '-- 等值条件\nSELECT * FROM employees WHERE department = "IT";' },
          { question: '3. 从employees表中选择salary在3000到6000之间的员工。', initialCode: '-- 范围查询\nSELECT * FROM employees WHERE salary BETWEEN 3000 AND 6000;' },
          { question: '4. 从employees表中选择name以"J"开头的员工。', initialCode: '-- 前缀匹配\nSELECT * FROM employees WHERE name LIKE "J%";' },
          { question: '5. 从employees表中选择department为"IT"且salary大于4000的员工。', initialCode: '-- 多条件查询\nSELECT * FROM employees WHERE department = "IT" AND salary > 4000;' },
          { question: '6. 从employees表中选择name包含"son"的员工。', initialCode: '-- 包含匹配\nSELECT * FROM employees WHERE name LIKE "%son%";' },
          { question: '7. 从employees表中选择hire_date在2020年之后的员工。', initialCode: '-- 日期条件\nSELECT * FROM employees WHERE hire_date > "2020-01-01";' }
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
          { question: '1. 计算每个department的员工数量。', initialCode: '-- 分组计数\nSELECT department, COUNT(*) AS count FROM employees GROUP BY department;' },
          { question: '2. 计算每个department的平均salary。', initialCode: '-- 分组求平均\nSELECT department, AVG(salary) AS avg_salary FROM employees GROUP BY department;' },
          { question: '3. 计算每个department的最高和最低salary。', initialCode: '-- 分组求最值\nSELECT department, MAX(salary) AS max_sal, MIN(salary) AS min_sal FROM employees GROUP BY department;' },
          { question: '4. 计算所有员工的总salary。', initialCode: '-- 总和计算\nSELECT SUM(salary) AS total_salary FROM employees;' },
          { question: '5. 计算每个department中salary大于4000的员工数量。', initialCode: '-- 分组过滤\nSELECT department, COUNT(*) AS count FROM employees WHERE salary > 4000 GROUP BY department;' },
          { question: '6. 计算每个department的salary总和。', initialCode: '-- 分组求和\nSELECT department, SUM(salary) AS total_sal FROM employees GROUP BY department;' }
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
          { question: '1. 使用INNER JOIN连接employees和departments表。', initialCode: '-- 内连接\nSELECT e.name, d.department_name FROM employees e INNER JOIN departments d ON e.department_id = d.id;' },
          { question: '2. 使用LEFT JOIN连接employees和departments表。', initialCode: '-- 左连接\nSELECT e.name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.id;' },
          { question: '3. 使用RIGHT JOIN连接employees和departments表。', initialCode: '-- 右连接\nSELECT e.name, d.department_name FROM employees e RIGHT JOIN departments d ON e.department_id = d.id;' },
          { question: '4. 连接employees、departments和projects表。', initialCode: '-- 多表连接\nSELECT e.name, d.name, p.name FROM employees e JOIN departments d ON e.dept_id = d.id JOIN projects p ON e.project_id = p.id;' },
          { question: '5. 使用自连接查询员工的经理信息。', initialCode: '-- 自连接\nSELECT e.name, m.name AS manager FROM employees e JOIN employees m ON e.manager_id = m.id;' }
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
          '1. 基于给定的表结构，编写SQL查询回答业务问题。',
          '2. 包括：每个部门的平均工资、找出工资高于部门平均的员工、列出每个项目的参与人数。'
        ]
      }
    ]
  },
  {
    id: 6,
    title: '数据清洗与预处理',
    description: '学习数据清洗和预处理技术，包括处理缺失值、异常值、数据转换等。',
    category: '数据处理',
    difficulty: '中级',
    duration: 8,
    image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20cleaning%20and%20preprocessing%20workflow&image_size=landscape_16_9',
    rating: 4.7,
    instructor: '周八',
    instructor_bio: '周老师是一位数据处理专家，专注于数据清洗和预处理领域。',
    prerequisites: ['Python基础', 'Pandas基础'],
    lessons: [
      { id: 1, title: '数据质量评估', content: '学习评估数据质量的方法。', duration: 60, completed: false },
      { id: 2, title: '缺失值处理', content: '学习处理缺失值的各种方法。', duration: 70, completed: false },
      { id: 3, title: '异常值检测', content: '学习检测和处理异常值。', duration: 65, completed: false },
      { id: 4, title: '数据转换', content: '学习数据类型转换和格式标准化。', duration: 60, completed: false },
      { id: 5, title: '数据集成', content: '学习合并和整合多个数据源。', duration: 70, completed: false },
      { id: 6, title: '特征工程', content: '学习特征提取和特征选择。', duration: 80, completed: false },
      { id: 7, title: '数据标准化', content: '学习数据标准化和归一化技术。', duration: 60, completed: false }
    ],
    exercises: [
      {
        id: 1,
        title: '缺失值处理练习',
        description: '练习处理数据中的缺失值，包括检测、删除和填充。',
        difficulty: '中级',
        type: '编程题',
        questions: 4,
        duration: 60,
        content: [
          { question: '1. 检测数据中的缺失值并统计数量。', initialCode: '# 检测缺失值\nimport pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({\n    "A": [1, 2, np.nan, 4],\n    "B": [5, np.nan, 7, 8],\n    "C": [9, 10, 11, 12]\n})\nprint("缺失值数量:\\n", df.isnull().sum())' },
          { question: '2. 删除包含缺失值的行。', initialCode: '# 删除缺失值\nimport pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({\n    "A": [1, 2, np.nan, 4],\n    "B": [5, np.nan, 7, 8]\n})\ndf_clean = df.dropna()\nprint("删除缺失值后:\\n", df_clean)' },
          { question: '3. 使用均值填充缺失值。', initialCode: '# 均值填充\nimport pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({\n    "年龄": [25, np.nan, 35, 28, np.nan],\n    "工资": [8000, 9000, np.nan, 8500, 9500]\n})\ndf_filled = df.fillna(df.mean())\nprint("填充后:\\n", df_filled)' },
          { question: '4. 使用前向填充和后向填充处理缺失值。', initialCode: '# 前后填充\nimport pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({"值": [1, np.nan, 3, np.nan, 5]})\ndf_ffill = df.fillna(method="ffill")\ndf_bfill = df.fillna(method="bfill")\nprint("前向填充:\\n", df_ffill)\nprint("后向填充:\\n", df_bfill)' }
        ]
      }
    ],
    assessments: [
      {
        id: 1,
        title: '数据清洗测验',
        type: '测验',
        passing_score: 70,
        content: [
          '1. 以下哪个方法用于检测缺失值？ A. fillna() B. dropna() C. isnull() D. notnull()',
          '2. 以下哪个方法用于填充缺失值？ A. dropna() B. fillna() C. isnull() D. drop()',
          '3. 以下哪个参数可以用于向前填充缺失值？ A. method="ffill" B. method="bfill" C. method="mean" D. method="median"',
          '4. IQR方法通常用于检测什么？ A. 缺失值 B. 异常值 C. 重复值 D. 重复行',
          '5. 以下哪个方法可以删除重复行？ A. drop_duplicates() B. dropna() C. unique() D. distinct()'
        ]
      },
      {
        id: 2,
        title: '数据清洗项目',
        type: '项目',
        passing_score: 75,
        content: [
          '1. 对给定的数据集进行完整的数据清洗流程，包括处理缺失值、异常值和重复数据。',
          '2. 进行数据类型转换和格式标准化。',
          '3. 生成清洗后的数据集和清洗报告。'
        ]
      }
    ]
  },
  {
    id: 7,
    title: '时间序列分析',
    description: '学习时间序列分析技术，包括时间序列数据处理、趋势分析、季节性分析和预测。',
    category: '数据分析',
    difficulty: '高级',
    duration: 10,
    image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Time%20series%20analysis%20charts%20and%20forecasting&image_size=landscape_16_9',
    rating: 4.8,
    instructor: '吴九',
    instructor_bio: '吴老师是一位时间序列分析专家，拥有多年的时间序列预测经验。',
    prerequisites: ['Python基础', 'Pandas基础', '统计学基础'],
    lessons: [
      { id: 1, title: '时间序列概述', content: '了解时间序列数据的特点和应用场景。', duration: 60, completed: false },
      { id: 2, title: '时间序列数据处理', content: '学习处理时间序列数据的方法。', duration: 70, completed: false },
      { id: 3, title: '趋势分析', content: '学习分析时间序列的趋势成分。', duration: 65, completed: false },
      { id: 4, title: '季节性分析', content: '学习检测和分析季节性模式。', duration: 65, completed: false },
      { id: 5, title: '平稳性检验', content: '学习检验时间序列的平稳性。', duration: 60, completed: false },
      { id: 6, title: 'ARIMA模型', content: '学习ARIMA时间序列预测模型。', duration: 80, completed: false },
      { id: 7, title: 'Prophet预测', content: '学习使用Prophet进行时间序列预测。', duration: 75, completed: false },
      { id: 8, title: '项目实战', content: '通过实际项目练习时间序列分析技能。', duration: 90, completed: false }
    ],
    exercises: [
      {
        id: 1,
        title: '时间序列数据处理',
        description: '练习处理时间序列数据，包括数据读取、索引设置和时间转换。',
        difficulty: '高级',
        type: '编程题',
        questions: 4,
        duration: 60,
        content: [
          { question: '1. 将日期字符串转换为datetime格式。', initialCode: '# 日期转换\nimport pandas as pd\n\ndf = pd.DataFrame({"日期": ["2023-01-01", "2023-01-02", "2023-01-03"], "销售额": [100, 120, 110]})\ndf["日期"] = pd.to_datetime(df["日期"])\nprint(df.dtypes)\nprint(df)' },
          { question: '2. 设置日期为索引并按时间排序。', initialCode: '# 设置时间索引\nimport pandas as pd\n\ndf = pd.DataFrame({\n    "日期": pd.date_range("2023-01-01", periods=5),\n    "值": [10, 20, 15, 25, 30]\n})\ndf = df.set_index("日期").sort_index()\nprint(df)' },
          { question: '3. 按月份重采样并计算月度总和。', initialCode: '# 时间重采样\nimport pandas as pd\n\ndates = pd.date_range("2023-01-01", periods=365, freq="D")\nvalues = [i % 30 for i in range(365)]\ndf = pd.DataFrame({"值": values}, index=dates)\nmonthly = df.resample("M").sum()\nprint(monthly)' },
          { question: '4. 计算滚动平均值。', initialCode: '# 滚动平均\nimport pandas as pd\n\ndf = pd.DataFrame({"值": [10, 20, 15, 25, 30, 28, 35]})\ndf["滚动平均"] = df["值"].rolling(window=3).mean()\nprint(df)' }
        ]
      },
      {
        id: 2,
        title: '趋势和季节性分析',
        description: '练习分析时间序列的趋势和季节性模式。',
        difficulty: '高级',
        type: '编程题',
        questions: 3,
        duration: 60,
        content: [
          { question: '1. 使用移动平均法分析趋势。', initialCode: '# 趋势分析\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\ndates = pd.date_range("2023-01-01", periods=12, freq="M")\nvalues = [100, 110, 105, 120, 130, 125, 140, 135, 150, 145, 160, 155]\ndf = pd.DataFrame({"值": values}, index=dates)\ndf["趋势"] = df["值"].rolling(window=3).mean()\nplt.plot(df["值"], label="原始")\nplt.plot(df["趋势"], label="趋势")\nplt.legend()\nplt.show()' },
          { question: '2. 使用差分法检测季节性。', initialCode: '# 季节性检测\nimport pandas as pd\n\ndf = pd.DataFrame({"值": [100, 120, 110, 130, 150, 140, 160, 150, 170, 160, 180, 170]})\ndf["差分"] = df["值"].diff(12)\nprint(df)' },
          { question: '3. 使用季节性分解分析时间序列。', initialCode: '# 季节性分解\nfrom statsmodels.tsa.seasonal import seasonal_decompose\nimport pandas as pd\n\ndates = pd.date_range("2023-01-01", periods=48, freq="M")\nvalues = [100 + i + (i % 12) * 5 for i in range(48)]\ndf = pd.DataFrame({"值": values}, index=dates)\nresult = seasonal_decompose(df["值"], model="additive")\nresult.plot()\nplt.show()' }
        ]
      },
      {
        id: 3,
        title: '时间序列预测',
        description: '练习使用ARIMA和Prophet进行时间序列预测。',
        difficulty: '高级',
        type: '编程题',
        questions: 3,
        duration: 90,
        content: [
          { question: '1. 使用ARIMA模型进行预测。', initialCode: '# ARIMA预测\nfrom statsmodels.tsa.arima.model import ARIMA\nimport pandas as pd\n\ndates = pd.date_range("2023-01-01", periods=24, freq="M")\nvalues = [100 + i * 2 for i in range(24)]\ndf = pd.DataFrame({"值": values}, index=dates)\nmodel = ARIMA(df["值"], order=(1, 1, 1))\nresult = model.fit()\nforecast = result.forecast(steps=6)\nprint("预测结果:\\n", forecast)' },
          { question: '2. 使用Prophet进行时间序列预测。', initialCode: '# Prophet预测\nfrom prophet import Prophet\nimport pandas as pd\n\ndf = pd.DataFrame({\n    "ds": pd.date_range("2023-01-01", periods=365, freq="D"),\n    "y": [100 + i % 30 for i in range(365)]\n})\nmodel = Prophet()\nmodel.fit(df)\nfuture = model.make_future_dataframe(periods=30)\nforecast = model.predict(future)\nmodel.plot(forecast)\nplt.show()' },
          { question: '3. 评估时间序列预测模型的性能。', initialCode: '# 模型评估\nfrom sklearn.metrics import mean_absolute_error\nimport pandas as pd\n\ny_true = [100, 110, 120, 130, 140]\ny_pred = [98, 108, 118, 132, 138]\nmae = mean_absolute_error(y_true, y_pred)\nprint(f"MAE: {mae:.2f}")' }
        ]
      }
    ],
    assessments: [
      {
        id: 1,
        title: '时间序列测验',
        type: '测验',
        passing_score: 70,
        content: [
          '1. 以下哪个方法用于将日期字符串转换为datetime格式？ A. pd.to_datetime() B. pd.date_range() C. pd.as_datetime() D. pd.parse_date()',
          '2. 以下哪个参数用于月度重采样？ A. "D" B. "W" C. "M" D. "Y"',
          '3. ARIMA模型中的I代表什么？ A. 自回归 B. 差分 C. 移动平均 D. 积分',
          '4. 以下哪个库常用于时间序列预测？ A. Pandas B. NumPy C. Prophet D. Scikit-learn',
          '5. 季节性分解通常将时间序列分解为哪几个部分？ A. 趋势、季节、残差 B. 均值、方差、标准差 C. 最大值、最小值、平均值 D. 以上都不是'
        ]
      },
      {
        id: 2,
        title: '时间序列预测项目',
        type: '项目',
        passing_score: 75,
        content: [
          '1. 使用时间序列分析方法分析销售数据的趋势和季节性模式。',
          '2. 构建ARIMA或Prophet模型进行销售预测。',
          '3. 评估模型性能并生成预测报告。'
        ]
      }
    ]
  },
  {
    id: 8,
    title: '深度学习与神经网络',
    description: '学习深度学习和神经网络基础，包括神经网络架构、训练方法和应用。',
    category: '深度学习',
    difficulty: '高级',
    duration: 14,
    image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Deep%20learning%20neural%20network%20visualization&image_size=landscape_16_9',
    rating: 4.9,
    instructor: '郑十',
    instructor_bio: '郑老师是一位深度学习专家，专注于神经网络研究和应用。',
    prerequisites: ['Python基础', 'NumPy基础', '机器学习基础'],
    lessons: [
      { id: 1, title: '神经网络基础', content: '了解神经网络的基本概念和结构。', duration: 70, completed: false },
      { id: 2, title: '前向传播', content: '学习神经网络的前向传播过程。', duration: 65, completed: false },
      { id: 3, title: '反向传播', content: '学习反向传播算法和梯度下降。', duration: 80, completed: false },
      { id: 4, title: '激活函数', content: '学习常用的激活函数。', duration: 60, completed: false },
      { id: 5, title: '卷积神经网络', content: '学习CNN的原理和应用。', duration: 85, completed: false },
      { id: 6, title: '循环神经网络', content: '学习RNN和LSTM的原理。', duration: 80, completed: false },
      { id: 7, title: '模型训练', content: '学习神经网络的训练技巧。', duration: 75, completed: false },
      { id: 8, title: '深度学习框架', content: '学习使用PyTorch或TensorFlow。', duration: 90, completed: false },
      { id: 9, title: '项目实战', content: '通过实际项目练习深度学习技能。', duration: 120, completed: false }
    ],
    exercises: [
      {
        id: 1,
        title: '神经网络基础练习',
        description: '练习构建简单的神经网络，理解前向传播和反向传播。',
        difficulty: '高级',
        type: '编程题',
        questions: 4,
        duration: 90,
        content: [
          { question: '1. 实现一个简单的感知器。', initialCode: '# 简单感知器\nimport numpy as np\n\ndef perceptron(x, weights, bias):\n    z = np.dot(x, weights) + bias\n    return 1 if z >= 0 else 0\n\nweights = np.array([0.5, 0.5])\nbias = -0.7\nprint(perceptron(np.array([0, 0]), weights, bias))\nprint(perceptron(np.array([1, 1]), weights, bias))' },
          { question: '2. 实现前向传播。', initialCode: '# 前向传播\nimport numpy as np\n\ndef sigmoid(z):\n    return 1 / (1 + np.exp(-z))\n\nX = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])\nW1 = np.array([[0.5, 0.5], [0.5, 0.5]])\nb1 = np.array([0, 0])\nW2 = np.array([0.5, 0.5])\nb2 = 0\n\nhidden = sigmoid(np.dot(X, W1) + b1)\noutput = sigmoid(np.dot(hidden, W2) + b2)\nprint("输出:", output)' },
          { question: '3. 计算均方误差损失。', initialCode: '# MSE损失\nimport numpy as np\n\ndef mse_loss(y_true, y_pred):\n    return np.mean((y_true - y_pred) ** 2)\n\ny_true = np.array([0, 1, 1, 0])\ny_pred = np.array([0.1, 0.9, 0.8, 0.2])\nloss = mse_loss(y_true, y_pred)\nprint(f"MSE损失: {loss:.4f}")' },
          { question: '4. 实现梯度下降。', initialCode: '# 梯度下降\nimport numpy as np\n\nX = np.array([1, 2, 3, 4, 5])\ny = np.array([2, 4, 6, 8, 10])\nw = 0\nb = 0\nlr = 0.01\n\nfor _ in range(100):\n    y_pred = w * X + b\n    error = y_pred - y\n    w -= lr * np.mean(error * X)\n    b -= lr * np.mean(error)\n\nprint(f"最终权重: w={w:.2f}, b={b:.2f}")' }
        ]
      },
      {
        id: 2,
        title: 'PyTorch练习',
        description: '练习使用PyTorch构建和训练神经网络。',
        difficulty: '高级',
        type: '编程题',
        questions: 3,
        duration: 90,
        content: [
          { question: '1. 使用PyTorch构建简单神经网络。', initialCode: '# PyTorch神经网络\nimport torch\nimport torch.nn as nn\n\nclass SimpleNN(nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.fc1 = nn.Linear(2, 4)\n        self.fc2 = nn.Linear(4, 1)\n        self.sigmoid = nn.Sigmoid()\n    \n    def forward(self, x):\n        x = self.sigmoid(self.fc1(x))\n        x = self.sigmoid(self.fc2(x))\n        return x\n\nmodel = SimpleNN()\nprint(model)' },
          { question: '2. 训练神经网络。', initialCode: '# 训练神经网络\nimport torch\nimport torch.nn as nn\n\nX = torch.tensor([[0, 0], [0, 1], [1, 0], [1, 1]], dtype=torch.float32)\ny = torch.tensor([[0], [1], [1], [0]], dtype=torch.float32)\n\nmodel = nn.Sequential(\n    nn.Linear(2, 4),\n    nn.Sigmoid(),\n    nn.Linear(4, 1),\n    nn.Sigmoid()\n)\n\ncriterion = nn.MSELoss()\noptimizer = torch.optim.SGD(model.parameters(), lr=0.1)\n\nfor epoch in range(1000):\n    y_pred = model(X)\n    loss = criterion(y_pred, y)\n    optimizer.zero_grad()\n    loss.backward()\n    optimizer.step()\n\nprint("训练完成")' },
          { question: '3. 使用PyTorch实现线性回归。', initialCode: '# PyTorch线性回归\nimport torch\nimport torch.nn as nn\n\nX = torch.tensor([[1], [2], [3], [4], [5]], dtype=torch.float32)\ny = torch.tensor([[2], [4], [6], [8], [10]], dtype=torch.float32)\n\nmodel = nn.Linear(1, 1)\ncriterion = nn.MSELoss()\noptimizer = torch.optim.SGD(model.parameters(), lr=0.01)\n\nfor epoch in range(100):\n    y_pred = model(X)\n    loss = criterion(y_pred, y)\n    optimizer.zero_grad()\n    loss.backward()\n    optimizer.step()\n\nprint(f"权重: {model.weight.item():.2f}, 偏置: {model.bias.item():.2f}")' }
        ]
      },
      {
        id: 3,
        title: 'CNN练习',
        description: '练习使用卷积神经网络处理图像数据。',
        difficulty: '高级',
        type: '编程题',
        questions: 3,
        duration: 90,
        content: [
          { question: '1. 使用PyTorch构建CNN模型。', initialCode: '# CNN模型\nimport torch\nimport torch.nn as nn\n\nclass CNN(nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.conv1 = nn.Conv2d(1, 16, kernel_size=3, padding=1)\n        self.conv2 = nn.Conv2d(16, 32, kernel_size=3, padding=1)\n        self.pool = nn.MaxPool2d(2, 2)\n        self.fc = nn.Linear(32 * 7 * 7, 10)\n    \n    def forward(self, x):\n        x = self.pool(torch.relu(self.conv1(x)))\n        x = self.pool(torch.relu(self.conv2(x)))\n        x = x.view(-1, 32 * 7 * 7)\n        x = self.fc(x)\n        return x\n\nmodel = CNN()\nprint(model)' },
          { question: '2. 实现卷积操作。', initialCode: '# 卷积操作\nimport torch\nimport torch.nn.functional as F\n\ninput = torch.randn(1, 1, 5, 5)  # batch, channels, height, width\nkernel = torch.randn(16, 1, 3, 3)  # out_channels, in_channels, kernel_size\noutput = F.conv2d(input, kernel, padding=1)\nprint(f"输入形状: {input.shape}")\nprint(f"输出形状: {output.shape}")' },
          { question: '3. 使用预训练模型进行图像分类。', initialCode: '# 预训练模型\nimport torch\nfrom torchvision import models\n\nmodel = models.resnet18(pretrained=True)\nmodel.eval()\n\ninput = torch.randn(1, 3, 224, 224)\noutput = model(input)\nprint(f"输出类别数: {output.shape[1]}")' }
        ]
      }
    ],
    assessments: [
      {
        id: 1,
        title: '深度学习测验',
        type: '测验',
        passing_score: 70,
        content: [
          '1. 神经网络中的激活函数主要作用是什么？ A. 加速训练 B. 引入非线性 C. 减少过拟合 D. 提高准确率',
          '2. 反向传播算法的主要目的是什么？ A. 计算损失 B. 更新权重 C. 初始化参数 D. 选择激活函数',
          '3. CNN中的池化层主要作用是什么？ A. 增加特征图大小 B. 减少参数数量 C. 增加计算量 D. 提高精度',
          '4. LSTM是哪种类型的神经网络？ A. 卷积神经网络 B. 循环神经网络 C. 生成对抗网络 D. 自编码器',
          '5. PyTorch中哪个函数用于计算梯度？ A. backward() B. forward() C. step() D. zero_grad()'
        ]
      },
      {
        id: 2,
        title: '深度学习项目',
        type: '项目',
        passing_score: 75,
        content: [
          '1. 使用PyTorch构建一个神经网络模型进行MNIST手写数字识别。',
          '2. 训练模型并评估性能。',
          '3. 分析模型的准确率和损失曲线。'
        ]
      }
    ]
  }
];