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
          { question: '1. 使用Matplotlib创建折线图展示一周温度变化。', initialCode: '# 折线图\nimport matplotlib.pyplot as plt\ndays = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]\ntemps = [22, 24, 25, 23, 26, 28, 27]\nprint("数据准备完成，创建折线图...")\nplt.plot(days, temps)\nplt.title("一周温度变化")\nplt.xlabel("日期")\nplt.ylabel("温度(°C)")\nprint("折线图创建成功！")\nprint("平均温度:", sum(temps) / len(temps), "°C")\nprint("最高温度:", max(temps), "°C")\nprint("最低温度:", min(temps), "°C")\nplt.show()' },
          { question: '2. 创建柱状图展示不同水果的销量。', initialCode: '# 柱状图\nimport matplotlib.pyplot as plt\nfruits = ["苹果", "香蕉", "橙子", "葡萄", "西瓜"]\nsales = [120, 150, 90, 80, 110]\nprint("水果销量数据:")\nfor f, s in zip(fruits, sales):\n    print(f"{f}: {s}")\nplt.bar(fruits, sales)\nplt.title("水果销量")\nplt.xlabel("水果")\nplt.ylabel("销量")\nprint("\\n总销量:", sum(sales))\nprint("最受欢迎水果:", fruits[sales.index(max(sales))])\nplt.show()' },
          { question: '3. 使用散点图展示身高和体重的关系。', initialCode: '# 散点图\nimport matplotlib.pyplot as plt\nheight = [160, 165, 170, 175, 180, 185]\nweight = [50, 55, 60, 65, 70, 75]\nprint("身高体重数据:")\nfor h, w in zip(height, weight):\n    print(f"{h}cm - {w}kg")\nplt.scatter(height, weight)\nplt.title("身高体重关系")\nplt.xlabel("身高(cm)")\nplt.ylabel("体重(kg)")\nprint("\\n平均身高:", sum(height)/len(height), "cm")\nprint("平均体重:", sum(weight)/len(weight), "kg")\nplt.show()' },
          { question: '4. 创建饼图展示不同部门的员工比例。', initialCode: '# 饼图\nimport matplotlib.pyplot as plt\ndepts = ["技术", "市场", "销售", "人力资源", "财务"]\nemployees = [40, 25, 30, 10, 15]\nprint("部门人员分布:")\nfor d, e in zip(depts, employees):\n    print(f"{d}: {e}人 ({e/sum(employees)*100:.1f}%)")\nplt.pie(employees, labels=depts, autopct="%1.1f%%")\nplt.title("部门人员分布")\nprint("\\n总人数:", sum(employees))\nplt.show()' },
          { question: '5. 创建直方图展示学生考试成绩分布。', initialCode: '# 直方图\nimport matplotlib.pyplot as plt\nscores = [65, 72, 81, 55, 90, 78, 62, 85, 70, 68, 92, 88, 75, 60, 80]\nprint("考试成绩:", scores)\nplt.hist(scores, bins=5)\nplt.title("考试成绩分布")\nplt.xlabel("分数")\nplt.ylabel("人数")\nprint("\\n平均分:", sum(scores)/len(scores))\nprint("最高分:", max(scores))\nprint("最低分:", min(scores))\nplt.show()' },
          { question: '6. 使用子图同时展示多个图表。', initialCode: '# 子图\nimport matplotlib.pyplot as plt\nfig, axes = plt.subplots(1, 2, figsize=(10, 4))\naxes[0].plot([1, 2, 3], [4, 5, 6])\naxes[0].set_title("折线图")\naxes[1].bar(["A", "B", "C"], [10, 20, 15])\naxes[1].set_title("柱状图")\nplt.tight_layout()\nprint("子图创建完成！")\nprint("左图: 折线图，数据点 [4, 5, 6]")\nprint("右图: 柱状图，数据 [10, 20, 15]")\nplt.show()' }
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
          { question: '1. 为折线图添加标题和轴标签。', initialCode: '# 添加标题和标签\nimport matplotlib.pyplot as plt\ndays = ["周一", "周二", "周三"]\ntemps = [22, 24, 25]\nprint("温度数据:", days, temps)\nplt.plot(days, temps, color="red", linestyle="--", marker="o")\nplt.title("温度变化趋势", fontsize=14)\nplt.xlabel("日期", fontsize=12)\nplt.ylabel("温度(°C)", fontsize=12)\nplt.grid(True)\nprint("图表定制完成！红色虚线，圆点标记")\nplt.show()' },
          { question: '2. 自定义图表颜色和样式。', initialCode: '# 自定义样式\nimport matplotlib.pyplot as plt\nfruits = ["苹果", "香蕉", "橙子"]\nsales = [120, 150, 90]\ncolors = ["#ff9999", "#66b3ff", "#99ff99"]\nprint("水果销量数据:")\nfor f, s, c in zip(fruits, sales, colors):\n    print(f"{f}: {s} (颜色: {c})")\nplt.bar(fruits, sales, color=colors, edgecolor="black")\nplt.title("水果销量对比")\nprint("颜色已应用：红、蓝、绿")\nplt.show()' },
          { question: '3. 在图表中添加图例和注释。', initialCode: '# 图例和注释\nimport matplotlib.pyplot as plt\nx = [1, 2, 3, 4, 5]\ny1 = [1, 4, 9, 16, 25]\ny2 = [1, 2, 3, 4, 5]\nprint("折线图数据:")\nprint("平方:", y1)\nprint("线性:", y2)\nplt.plot(x, y1, label="平方")\nplt.plot(x, y2, label="线性")\nplt.legend()\nplt.annotate("最大值", xy=(5, 25), xytext=(4, 20), arrowprops=dict(arrowstyle="->"))\nprint("已添加图例和注释！")\nplt.show()' },
          { question: '4. 创建2x2子图布局。', initialCode: '# 2x2子图\nimport matplotlib.pyplot as plt\nfig, axes = plt.subplots(2, 2, figsize=(8, 6))\naxes[0, 0].plot([1, 2, 3], [4, 5, 6])\naxes[0, 0].set_title("折线图")\naxes[0, 1].bar(["A", "B"], [10, 20])\naxes[0, 1].set_title("柱状图")\naxes[1, 0].scatter([1, 2, 3], [4, 5, 6])\naxes[1, 0].set_title("散点图")\naxes[1, 1].pie([30, 20, 50], labels=["A", "B", "C"])\naxes[1, 1].set_title("饼图")\nplt.tight_layout()\nprint("2x2子图创建完成！")\nprint("左上: 折线图，右上: 柱状图，左下: 散点图，右下: 饼图")\nplt.show()' },
          { question: '5. 保存图表为图片文件。', initialCode: '# 保存图表\nimport matplotlib.pyplot as plt\ndays = ["周一", "周二", "周三"]\ntemps = [22, 24, 25]\nplt.plot(days, temps)\nplt.title("温度变化")\nplt.savefig("temperature.png", dpi=300, bbox_inches="tight")\nprint("图表已成功保存为 temperature.png")\nprint("分辨率: 300 DPI")\nplt.show()' }
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
          { question: '1. 使用Seaborn创建热力图。', initialCode: '# 热力图\nimport seaborn as sns\nimport numpy as np\nimport matplotlib.pyplot as plt\n# 创建模拟温度数据\ntemp_data = np.random.randn(12, 5) * 5 + 15\nprint("热力图数据形状:", temp_data.shape)\nprint("温度范围:", np.round(temp_data.min(), 1), "°C 到", np.round(temp_data.max(), 1), "°C")\nsns.heatmap(temp_data, annot=True, cmap="coolwarm")\nplt.title("城市月度温度热力图")\nprint("热力图创建成功！")\nplt.show()' },
          { question: '2. 创建小提琴图展示数据分布。', initialCode: '# 小提琴图\nimport seaborn as sns\nimport numpy as np\nimport matplotlib.pyplot as plt\ncategories = ["A", "B", "C", "D"]\nvalues = [np.random.normal(i, 1, 100) for i in range(4)]\nprint("类别:", categories)\nprint("每个类别样本数:", 100)\nfor i, cat in enumerate(categories):\n    print(f"{cat}类: 均值={np.mean(values[i]):.2f}, 标准差={np.std(values[i]):.2f}")\ndf = {"类别": np.repeat(categories, 100), "值": np.concatenate(values)}\nsns.violinplot(x="类别", y="值", data=df)\nplt.title("数据分布")\nprint("小提琴图创建成功！")\nplt.show()' },
          { question: '3. 使用简单统计代替Seaborn。', initialCode: '# 数据统计（Seaborn替代）\nimport numpy as np\nimport pandas as pd\n# 创建模拟数据\nnp.random.seed(42)\ndata = {\n    "花萼长度": np.random.normal(5, 1, 50),\n    "花萼宽度": np.random.normal(3, 0.5, 50),\n    "花瓣长度": np.random.normal(4, 1, 50),\n    "花瓣宽度": np.random.normal(1.5, 0.3, 50)\n}\ndf = pd.DataFrame(data)\nprint("数据统计:")\nprint(df.describe())\nprint("\\n变量相关关系:")\nprint("花萼长度与花萼宽度:", np.corrcoef(df["花萼长度"], df["花萼宽度"])[0, 1].round(3))\nprint("花萼长度与花瓣长度:", np.corrcoef(df["花萼长度"], df["花瓣长度"])[0, 1].round(3))\nprint("花萼长度与花瓣宽度:", np.corrcoef(df["花萼长度"], df["花瓣宽度"])[0, 1].round(3))\nprint("统计分析完成！")' },
          { question: '4. 使用基础数据分析代替分类图表。', initialCode: '# 分类数据分析（Catplot替代）\nimport numpy as np\nimport pandas as pd\n# 创建模拟数据\nclasses = ["一等舱", "二等舱", "三等舱"]\nages = []\nages.extend(np.random.normal(40, 10, 50))\nages.extend(np.random.normal(35, 8, 60))\nages.extend(np.random.normal(30, 7, 70))\ndf = pd.DataFrame({"舱位": np.repeat(classes, [50, 60, 70]), "年龄": ages})\nprint("各舱位统计:")\nfor c in classes:\n    age_data = df[df["舱位"] == c]["年龄"]\n    print(f"{c}:")\n    print(f"  人数: {len(age_data)}")\n    print(f"  平均年龄: {age_data.mean():.1f}岁")\n    print(f"  最小年龄: {age_data.min():.1f}岁")\n    print(f"  最大年龄: {age_data.max():.1f}岁")\nprint("\\n整体统计完成！")' }
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
          { question: '1. 使用最小二乘法实现简单线性回归，根据房屋面积预测房价。', initialCode: 'import math\n\n# 房屋面积(平方米)和房价(万元)\nareas = [50, 60, 70, 80, 90, 100, 110, 120]\nprices = [120, 150, 170, 200, 220, 250, 280, 310]\n\nn = len(areas)\nsum_x = sum(areas)\nsum_y = sum(prices)\nsum_xy = sum(x * y for x, y in zip(areas, prices))\nsum_x2 = sum(x * x for x in areas)\n\nslope = (n * sum_xy - sum_x * sum_y) / (n * sum_x2 - sum_x * sum_x)\nintercept = (sum_y - slope * sum_x) / n\n\nprint("线性回归模型: 房价 = " + str(round(slope, 2)) + " * 面积 + " + str(round(intercept, 2)))\n\n# 预测\nfor area in [65, 85, 95, 115]:\n    pred = slope * area + intercept\n    print("面积 " + str(area) + " 平方米 -> 预测房价 " + str(round(pred, 2)) + " 万元")\n\n# 计算R²\ny_mean = sum_y / n\nss_tot = sum((y - y_mean) ** 2 for y in prices)\nss_res = sum((y - (slope * x + intercept)) ** 2 for x, y in zip(areas, prices))\nr2 = 1 - ss_res / ss_tot\nprint("R² 决定系数: " + str(round(r2, 4)))' },
          { question: '2. 实现K最近邻(KNN)分类算法，根据身高和体重判断体型类别。', initialCode: 'import math\nimport random\n\nrandom.seed(42)\n\n# 训练数据: (身高cm, 体重kg, 标签) 标签: 0=偏瘦 1=正常 2=偏胖\ndata = [\n    (165, 50, 0), (170, 55, 0), (155, 48, 0),\n    (170, 65, 1), (175, 70, 1), (168, 62, 1), (172, 68, 1),\n    (160, 75, 2), (170, 85, 2), (165, 80, 2), (155, 70, 2)\n]\n\nlabel_names = ["偏瘦", "正常", "偏胖"]\nk = 3\n\ndef knn_predict(h, w):\n    distances = []\n    for item in data:\n        dist = math.sqrt((h - item[0]) ** 2 + (w - item[1]) ** 2)\n        distances.append((dist, item[2]))\n    distances.sort(key=lambda x: x[0])\n    neighbors = distances[:k]\n    votes = {0: 0, 1: 0, 2: 0}\n    for nb in neighbors:\n        votes[nb[1]] = votes[nb[1]] + 1\n    return max(votes, key=votes.get)\n\ntest_cases = [(170, 52), (175, 68), (160, 78), (180, 82), (150, 45)]\nfor tc in test_cases:\n    pred = knn_predict(tc[0], tc[1])\n    print("身高 " + str(tc[0]) + "cm, 体重 " + str(tc[1]) + "kg -> 预测: " + label_names[pred])\n\n# 计算训练集准确率\ncorrect = 0\nfor item in data:\n    if knn_predict(item[0], item[1]) == item[2]:\n        correct = correct + 1\nprint("KNN(k=" + str(k) + ") 训练集准确率: " + str(round(correct / len(data), 4)))' },
          { question: '3. 实现一个简单的决策树分类器，使用信息增益选择最优划分特征。', initialCode: 'import math\n\n# 训练数据: (是否有房, 婚姻状态, 年收入, 是否拖欠贷款)\n# 有房: 1=是 0=否, 婚姻: 0=单身 1=已婚 2=离异, 收入: 0=<50k 1=>=50k, 拖欠: 0=否 1=是\ndata = [\n    (1, 1, 1, 0), (0, 0, 1, 1), (0, 1, 0, 0),\n    (1, 0, 1, 0), (0, 2, 0, 1), (0, 1, 0, 0),\n    (1, 2, 1, 0), (0, 0, 1, 1), (0, 1, 0, 0), (0, 0, 0, 1)\n]\n\ndef entropy(labels):\n    n = len(labels)\n    if n == 0:\n        return 0\n    counts = {}\n    for lbl in labels:\n        counts[lbl] = counts.get(lbl, 0) + 1\n    ent = 0.0\n    for cnt in counts.values():\n        p = cnt / n\n        if p > 0:\n            ent = ent - p * math.log2(p)\n    return ent\n\ndef info_gain(dataset, feat_idx):\n    base_ent = entropy([row[3] for row in dataset])\n    groups = {}\n    for row in dataset:\n        key = row[feat_idx]\n        if key not in groups:\n            groups[key] = []\n        groups[key].append(row)\n    new_ent = 0.0\n    for g in groups.values():\n        new_ent = new_ent + len(g) / len(dataset) * entropy([row[3] for row in g])\n    return base_ent - new_ent\n\nfeat_names = ["是否有房", "婚姻状态", "年收入"]\nfor idx in range(3):\n    gain = info_gain(data, idx)\n    print("特征[" + feat_names[idx] + "] 信息增益: " + str(round(gain, 4)))\n\n# 按最优特征(婚姻状态)划分并预测\nprint("\\n按婚姻状态划分后的子节点:")\nmarital_groups = {}\nfor row in data:\n    key = row[1]\n    if key not in marital_groups:\n        marital_groups[key] = []\n    marital_groups[key].append(row)\nmarital_names = ["单身", "已婚", "离异"]\nfor key in sorted(marital_groups.keys()):\n    group = marital_groups[key]\n    labels = [row[3] for row in group]\n    pred = 1 if sum(labels) > len(labels) / 2 else 0\n    print("  " + marital_names[key] + ": 样本数=" + str(len(group)) + ", 拖欠数=" + str(sum(labels)) + ", 预测拖欠=" + str(pred))' },
          { question: '4. 计算分类模型的评估指标：准确率、精确率、召回率、F1分数。', initialCode: 'import math\n\n# 真实标签和预测标签 (0=正常 1=异常)\ny_true = [0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0]\ny_pred = [0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1]\n\ntp, fp, tn, fn = 0, 0, 0, 0\nfor t, p in zip(y_true, y_pred):\n    if t == 1 and p == 1:\n        tp = tp + 1\n    elif t == 0 and p == 1:\n        fp = fp + 1\n    elif t == 0 and p == 0:\n        tn = tn + 1\n    else:\n        fn = fn + 1\n\nprint("混淆矩阵:")\nprint("  预测=正常(0): 真实=正常 -> " + str(tn) + ", 真实=异常 -> " + str(fn))\nprint("  预测=异常(1): 真实=正常 -> " + str(fp) + ", 真实=异常 -> " + str(tp))\n\naccuracy = (tp + tn) / (tp + fp + tn + fn)\nprecision = tp / (tp + fp) if (tp + fp) > 0 else 0\nrecall = tp / (tp + fn) if (tp + fn) > 0 else 0\nf1 = 2 * precision * recall / (precision + recall) if (precision + recall) > 0 else 0\n\nprint("\\n评估指标:")\nprint("准确率 Accuracy: " + str(round(accuracy, 4)))\nprint("精确率 Precision: " + str(round(precision, 4)))\nprint("召回率 Recall: " + str(round(recall, 4)))\nprint("F1分数: " + str(round(f1, 4)))\n\n# 模拟随机预测做对比\nimport random\nrandom.seed(7)\nrandom_preds = [random.randint(0, 1) for _ in range(len(y_true))]\nrandom_acc = sum(1 for t, p in zip(y_true, random_preds) if t == p) / len(y_true)\nprint("\\n随机猜测准确率: " + str(round(random_acc, 4)))' },
          { question: '5. 实现训练集和测试集的随机拆分，并使用留出法评估模型性能。', initialCode: 'import random\nimport math\n\nrandom.seed(123)\n\n# 模拟100条样本数据 (特征1, 特征2, 标签)\nall_data = []\nfor i in range(50):\n    all_data.append((50 + random.randint(0, 30), 30 + random.randint(0, 20), 0))\nfor i in range(50):\n    all_data.append((70 + random.randint(0, 30), 50 + random.randint(0, 20), 1))\n\ndef train_test_split(data, test_ratio):\n    shuffled = data[:]\n    random.shuffle(shuffled)\n    split_idx = int(len(shuffled) * (1 - test_ratio))\n    return shuffled[:split_idx], shuffled[split_idx:]\n\ntrain, test = train_test_split(all_data, 0.3)\nprint("总样本数: " + str(len(all_data)))\nprint("训练集大小: " + str(len(train)) + ", 测试集大小: " + str(len(test)))\n\ntrain_pos = sum(1 for d in train if d[2] == 1)\ntest_pos = sum(1 for d in test if d[2] == 1)\nprint("训练集正例: " + str(train_pos) + ", 测试集正例: " + str(test_pos))\n\n# 使用简单阈值分类器 (基于特征1均值)\ntrain_mean_0 = sum(d[0] for d in train if d[2] == 0) / (len(train) - train_pos)\ntrain_mean_1 = sum(d[0] for d in train if d[2] == 1) / train_pos\nthreshold = (train_mean_0 + train_mean_1) / 2\nprint("\\n类别0特征1均值: " + str(round(train_mean_0, 2)))\nprint("类别1特征1均值: " + str(round(train_mean_1, 2)))\nprint("分类阈值: " + str(round(threshold, 2)))\n\n# 在测试集上评估\ntest_correct = 0\nfor d in test:\n    pred = 1 if d[0] > threshold else 0\n    if pred == d[2]:\n        test_correct = test_correct + 1\nprint("\\n测试集准确率: " + str(round(test_correct / len(test), 4)))\n\n# 在训练集上评估(观察是否过拟合)\ntrain_correct = 0\nfor d in train:\n    pred = 1 if d[0] > threshold else 0\n    if pred == d[2]:\n        train_correct = train_correct + 1\nprint("训练集准确率: " + str(round(train_correct / len(train), 4)))' }
        ]
      },
      {
        id: 2,
        title: '机器学习项目',
        type: '项目',
        passing_score: 75,
        content: [
          { question: '1. 房价预测模拟：使用多元线性回归（梯度下降法）根据面积、房间数、地段评分预测房价。', initialCode: 'import math\nimport random\n\nrandom.seed(456)\n\n# 模拟数据: (面积, 房间数, 地段评分, 房价)\n# 真实关系: 房价 = 2.5*面积 + 10*房间数 + 15*地段评分 + 50 + 噪声\nraw_data = []\nfor _ in range(50):\n    area = random.randint(50, 150)\n    rooms = random.randint(2, 6)\n    location = random.randint(1, 10)\n    noise = random.randint(-20, 20)\n    price = 2.5 * area + 10 * rooms + 15 * location + 50 + noise\n    raw_data.append((area, rooms, location, price))\n\n# 归一化\ndef normalize(col_vals):\n    mn = min(col_vals)\n    mx = max(col_vals)\n    return [(v - mn) / (mx - mn) for v in col_vals], mn, mx\n\nareas_n = [d[0] for d in raw_data]\nrooms_n = [d[1] for d in raw_data]\nlocs_n = [d[2] for d in raw_data]\nprices_raw = [d[3] for d in raw_data]\n\narea_norm, area_min, area_max = normalize(areas_n)\nroom_norm, room_min, room_max = normalize(rooms_n)\nloc_norm, loc_min, loc_max = normalize(locs_n)\nprice_norm, price_min, price_max = normalize(prices_raw)\n\n# 梯度下降训练\nweights = [0.0, 0.0, 0.0, 0.0]  # w0(bias), w1, w2, w3\nlr = 0.05\nepochs = 2000\nn = len(raw_data)\n\nfor ep in range(epochs):\n    grads = [0.0, 0.0, 0.0, 0.0]\n    for i in range(n):\n        pred = weights[0] + weights[1] * area_norm[i] + weights[2] * room_norm[i] + weights[3] * loc_norm[i]\n        err = pred - price_norm[i]\n        grads[0] = grads[0] + err\n        grads[1] = grads[1] + err * area_norm[i]\n        grads[2] = grads[2] + err * room_norm[i]\n        grads[3] = grads[3] + err * loc_norm[i]\n    for g in range(4):\n        weights[g] = weights[g] - lr * grads[g] / n\n\nprint("训练完成, 归一化权重:")\nprint("w0=" + str(round(weights[0], 4)) + ", w1=" + str(round(weights[1], 4)) + ", w2=" + str(round(weights[2], 4)) + ", w3=" + str(round(weights[3], 4)))\n\n# 预测3个测试样本\ntest_samples = [(80, 3, 7), (110, 4, 8), (130, 5, 9), (65, 2, 5), (95, 3, 6)]\nprint("\\n房价预测结果:")\ntotal_err = 0\nfor area, rooms, loc in test_samples:\n    an = (area - area_min) / (area_max - area_min)\n    rn = (rooms - room_min) / (room_max - room_min)\n    ln = (loc - loc_min) / (loc_max - loc_min)\n    pn = weights[0] + weights[1] * an + weights[2] * rn + weights[3] * ln\n    predicted = pn * (price_max - price_min) + price_min\n    actual = 2.5 * area + 10 * rooms + 15 * loc + 50\n    err = abs(predicted - actual)\n    total_err = total_err + err\n    print("面积 " + str(area) + ", 房间 " + str(rooms) + ", 地段 " + str(loc) + " -> 预测 " + str(round(predicted, 1)) + "万, 真实 " + str(actual) + "万, 误差 " + str(round(err, 1)) + "万")\nprint("平均绝对误差: " + str(round(total_err / len(test_samples), 2)) + "万元")' },
          { question: '2. 客户流失预测：使用逻辑回归实现二分类器，根据客户特征预测是否流失。', initialCode: 'import math\nimport random\n\nrandom.seed(789)\n\n# 模拟客户数据: (使用月数, 月消费, 客服投诉次数, 是否流失 1=流失 0=留存)\ndef sigmoid(z):\n    if z >= 0:\n        ez = math.exp(-z)\n        return 1.0 / (1.0 + ez)\n    else:\n        ez = math.exp(z)\n        return ez / (1.0 + ez)\n\ncustomers = []\nfor _ in range(80):\n    months = random.randint(1, 60)\n    spend = random.randint(50, 500)\n    complaints = random.randint(0, 10)\n    # 流失倾向: 月份越少越容易流失, 消费越低越容易流失, 投诉越多越容易流失\n    score = -0.02 * months - 0.005 * spend + 0.3 * complaints + 1.0\n    churn_prob = sigmoid(score)\n    churn = 1 if random.random() < churn_prob else 0\n    customers.append((months, spend, complaints, churn))\n\n# 数据归一化\ndef norm_col(idx):\n    vals = [c[idx] for c in customers]\n    mn, mx = min(vals), max(vals)\n    return [(v - mn) / (mx - mn) for v in vals]\n\nmonths_n = norm_col(0)\nspend_n = norm_col(1)\ncomp_n = norm_col(2)\nlabels = [c[3] for c in customers]\n\n# 逻辑回归训练\nw = [0.0, 0.0, 0.0, 0.0]\nlr = 0.1\nfor ep in range(3000):\n    gw = [0.0, 0.0, 0.0, 0.0]\n    for i in range(len(customers)):\n        z = w[0] + w[1] * months_n[i] + w[2] * spend_n[i] + w[3] * comp_n[i]\n        pred = sigmoid(z)\n        err = pred - labels[i]\n        gw[0] = gw[0] + err\n        gw[1] = gw[1] + err * months_n[i]\n        gw[2] = gw[2] + err * spend_n[i]\n        gw[3] = gw[3] + err * comp_n[i]\n    for j in range(4):\n        w[j] = w[j] - lr * gw[j] / len(customers)\n\nprint("逻辑回归权重:")\nprint("w0=" + str(round(w[0], 4)) + ", 使用月数=" + str(round(w[1], 4)) + ", 月消费=" + str(round(w[2], 4)) + ", 投诉=" + str(round(w[3], 4)))\n\n# 测试预测\ntest_cases = [(3, 80, 8), (50, 400, 0), (10, 120, 5), (36, 350, 1), (6, 100, 7)]\nprint("\\n客户流失预测:")\ncorrect = 0\nfor months, spend, comp in test_cases:\n    months_vals = [c[0] for c in customers]\n    spend_vals = [c[1] for c in customers]\n    comp_vals = [c[2] for c in customers]\n    mn_s = (months - min(months_vals)) / (max(months_vals) - min(months_vals))\n    sp_s = (spend - min(spend_vals)) / (max(spend_vals) - min(spend_vals))\n    cp_s = (comp - min(comp_vals)) / (max(comp_vals) - min(comp_vals))\n    z = w[0] + w[1] * mn_s + w[2] * sp_s + w[3] * cp_s\n    prob = sigmoid(z)\n    pred_label = 1 if prob > 0.5 else 0\n    actual_score = -0.02 * months - 0.005 * spend + 0.3 * comp + 1.0\n    actual = 1 if sigmoid(actual_score) > 0.5 else 0\n    status = "正确" if pred_label == actual else "偏差"\n    if pred_label == actual:\n        correct = correct + 1\n    label_str = "流失" if pred_label == 1 else "留存"\n    actual_str = "流失" if actual == 1 else "留存"\n    print("使用 " + str(months) + "月, 消费 " + str(spend) + ", 投诉 " + str(comp) + "次 -> 预测=" + label_str + "(概率 " + str(round(prob, 3)) + "), 真实=" + actual_str + " [" + status + "]")\nprint("\\n测试集准确率: " + str(round(correct / len(test_cases), 4)))' },
          { question: '3. 模型评估与对比：实现朴素贝叶斯分类器并与逻辑回归对比性能。', initialCode: 'import math\nimport random\n\nrandom.seed(321)\n\n# 构建邮件分类数据集: (关键词数量, 附件数量, 发送时间, 是否垃圾邮件 1=是 0=否)\ndataset = []\nfor _ in range(100):\n    kw = random.randint(0, 10)\n    attach = random.randint(0, 5)\n    hour = random.randint(0, 23)\n    if random.random() < 0.4:  # 40% 垃圾邮件\n        # 垃圾邮件: 关键词多, 附件多, 凌晨发送概率高\n        kw = kw + random.randint(3, 8)\n        attach = attach + random.randint(1, 4)\n        hour = random.choice([0, 1, 2, 3, 22, 23, hour])\n        label = 1\n    else:\n        label = 0\n    dataset.append((kw, attach, hour, label))\n\n# 拆分训练/测试\nrandom.shuffle(dataset)\nsplit_pt = int(len(dataset) * 0.7)\ntrain_set = dataset[:split_pt]\ntest_set = dataset[split_pt:]\n\n# 方法1: 朴素贝叶斯 (高斯假设)\ndef gaussian_prob(x, mean, var):\n    if var == 0:\n        return 1.0 if x == mean else 0.001\n    exponent = -((x - mean) ** 2) / (2 * var)\n    return math.exp(exponent) / math.sqrt(2 * math.pi * var)\n\n# 按类别分组\nclass_data = {0: [], 1: []}\nfor d in train_set:\n    class_data[d[3]].append(d)\n\n# 计算先验概率和各特征的均值/方差\nstats = {}\nfor cls in [0, 1]:\n    samples = class_data[cls]\n    n_cls = len(samples)\n    priors = n_cls / len(train_set)\n    feat_means = []\n    feat_vars = []\n    for fi in range(3):\n        vals = [s[fi] for s in samples]\n        m = sum(vals) / n_cls\n        v = sum((x - m) ** 2 for x in vals) / n_cls\n        feat_means.append(m)\n        feat_vars.append(v)\n    stats[cls] = (priors, feat_means, feat_vars)\n\ndef nb_predict(kw, attach, hour):\n    results = {}\n    for cls in [0, 1]:\n        prior, means, vars_s = stats[cls]\n        log_prob = math.log(prior) if prior > 0 else -999\n        feats = [kw, attach, hour]\n        for fi in range(3):\n            gp = gaussian_prob(feats[fi], means[fi], vars_s[fi])\n            if gp > 0:\n                log_prob = log_prob + math.log(gp)\n        results[cls] = log_prob\n    return 1 if results[1] > results[0] else 0\n\n# 方法2: 简单阈值分类器 (关键词 + 附件)\ndef threshold_predict(kw, attach, hour):\n    score = kw + 2 * attach + (1 if hour <= 3 or hour >= 22 else 0)\n    return 1 if score > 10 else 0\n\n# 评估两种方法\ndef evaluate(predict_fn, name):\n    correct = 0\n    tp, fp, fn = 0, 0, 0\n    for d in test_set:\n        pred = predict_fn(d[0], d[1], d[2])\n        actual = d[3]\n        if pred == actual:\n            correct = correct + 1\n        if pred == 1 and actual == 1:\n            tp = tp + 1\n        elif pred == 1 and actual == 0:\n            fp = fp + 1\n        elif pred == 0 and actual == 1:\n            fn = fn + 1\n    acc = correct / len(test_set)\n    prec = tp / (tp + fp) if (tp + fp) > 0 else 0\n    rec = tp / (tp + fn) if (tp + fn) > 0 else 0\n    print(name + ":")\n    print("  准确率=" + str(round(acc, 4)) + ", 精确率=" + str(round(prec, 4)) + ", 召回率=" + str(round(rec, 4)))\n    return acc\n\nprint("测试集大小: " + str(len(test_set)))\nspam_count = sum(1 for d in test_set if d[3] == 1)\nprint("其中垃圾邮件: " + str(spam_count) + " 封, 正常邮件: " + str(len(test_set) - spam_count) + " 封")\nprint("\\n模型评估结果:")\nnb_acc = evaluate(nb_predict, "朴素贝叶斯")\nth_acc = evaluate(threshold_predict, "阈值分类器")\nprint("\\n结论: " + ("朴素贝叶斯" if nb_acc >= th_acc else "阈值分类器") + " 在本数据集上表现更优")' }
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
          { question: '1. 销售数据分析：计算月度销售增长率和同比增长。', initialCode: '# 月度销售数据\nmonths = ["1月", "2月", "3月", "4月", "5月", "6月"]\nsales_2024 = [120, 135, 118, 142, 156, 168]\nsales_2023 = [100, 115, 108, 125, 138, 150]\n\nprint("=== 销售数据分析 ===")\nprint("月份 | 2024销售额 | 2023销售额 | 环比增长 | 同比增长")\nprint("-" * 70)\n\nfor i in range(len(months)):\n    current = sales_2024[i]\n    prev_2024 = sales_2024[i-1] if i > 0 else current\n    prev_year = sales_2023[i]\n    mom = ((current - prev_2024) / prev_2024 * 100) if prev_2024 != 0 else 0\n    yoy = ((current - prev_year) / prev_year * 100) if prev_year != 0 else 0\n    print(months[i] + " | " + str(current) + "万 | " + str(prev_year) + "万 | " + str(round(mom, 1)) + "% | " + str(round(yoy, 1)) + "%")\n\ntotal_2024 = sum(sales_2024)\ntotal_2023 = sum(sales_2023)\noverall_yoy = (total_2024 - total_2023) / total_2023 * 100\nprint("\\n上半年总销售额: 2024年" + str(total_2024) + "万, 2023年" + str(total_2023) + "万")\nprint("同比增长: " + str(round(overall_yoy, 1)) + "%")' },
          { question: '2. 客户分群分析：根据消费金额和购买频率对客户进行分类。', initialCode: '# 客户数据\ncustomers = [\n    {"id": "C001", "name": "张三", "spend": 5800, "frequency": 12},\n    {"id": "C002", "name": "李四", "spend": 1200, "frequency": 3},\n    {"id": "C003", "name": "王五", "spend": 8900, "frequency": 8},\n    {"id": "C004", "name": "赵六", "spend": 2300, "frequency": 5},\n    {"id": "C005", "name": "钱七", "spend": 15000, "frequency": 15},\n    {"id": "C006", "name": "孙八", "spend": 800, "frequency": 2},\n    {"id": "C007", "name": "周九", "spend": 3500, "frequency": 6},\n    {"id": "C008", "name": "吴十", "spend": 9800, "frequency": 10}\n]\n\nprint("=== 客户分群分析 ===")\nprint("ID | 姓名 | 消费金额 | 购买频次 | 客户等级")\nprint("-" * 60)\n\ndef classify_customer(spend, freq):\n    if spend >= 10000 and freq >= 10:\n        return "VIP客户"\n    elif spend >= 5000 and freq >= 6:\n        return "黄金客户"\n    elif spend >= 2000 and freq >= 3:\n        return "普通客户"\n    else:\n        return "潜在客户"\n\ngroups = {"VIP客户": 0, "黄金客户": 0, "普通客户": 0, "潜在客户": 0}\nfor c in customers:\n    level = classify_customer(c["spend"], c["frequency"])\n    groups[level] = groups[level] + 1\n    print(c["id"] + " | " + c["name"] + " | " + str(c["spend"]) + " | " + str(c["frequency"]) + " | " + level)\n\nprint("\\n客户等级分布:")\nfor level, count in groups.items():\n    pct = count / len(customers) * 100\n    print(level + ": " + str(count) + "人 (" + str(round(pct, 1)) + "%)")' },
          { question: '3. 销售预测：使用移动平均法预测下一个月的销售额。', initialCode: '# 销售预测 - 移动平均法\nimport math\n\nhistorical_data = [120, 135, 118, 142, 156, 168, 175, 162, 185, 192, 205, 218]\nmonths = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]\n\nprint("=== 销售预测分析 ===")\nprint("历史销售数据:")\nfor i in range(len(months)):\n    print(months[i] + ": " + str(historical_data[i]) + "万")\n\ndef moving_average(data, window):\n    result = []\n    for i in range(len(data) - window + 1):\n        avg = sum(data[i:i+window]) / window\n        result.append(round(avg, 2))\n    return result\n\nwindow_sizes = [3, 4, 5]\nprint("\\n移动平均预测(下一月):")\nfor window in window_sizes:\n    preds = moving_average(historical_data, window)\n    recent_avg = preds[-1]\n    trend = (recent_avg - preds[-2]) if len(preds) > 1 else 0\n    forecast = round(recent_avg + trend, 2)\n    print("窗口" + str(window) + "个月: 预测值=" + str(forecast) + "万, 趋势=" + str(round(trend, 2)) + "万")\n\n# 计算平均预测\ntotal_pred = 0\ncount = 0\nfor window in window_sizes:\n    preds = moving_average(historical_data, window)\n    recent_avg = preds[-1]\n    trend = (recent_avg - preds[-2]) if len(preds) > 1 else 0\n    total_pred = total_pred + (recent_avg + trend)\n    count = count + 1\n\nfinal_pred = round(total_pred / count, 2)\nprint("\\n综合预测: 下一月销售额预计 " + str(final_pred) + "万")' },
          { question: '4. KPI计算：计算销售团队的关键绩效指标。', initialCode: '# KPI计算\nsales_team = [\n    {"name": "销售一组", "target": 500, "actual": 568, "cost": 45},\n    {"name": "销售二组", "target": 480, "actual": 495, "cost": 42},\n    {"name": "销售三组", "target": 520, "actual": 515, "cost": 48},\n    {"name": "销售四组", "target": 450, "actual": 505, "cost": 38},\n    {"name": "销售五组", "target": 550, "actual": 542, "cost": 52}\n]\n\nprint("=== KPI绩效分析 ===")\nprint("团队 | 目标(万) | 实际(万) | 完成率 | 成本(万) | ROI")\nprint("-" * 70)\n\ntotal_target = 0\ntotal_actual = 0\ntotal_cost = 0\n\nfor team in sales_team:\n    target = team["target"]\n    actual = team["actual"]\n    cost = team["cost"]\n    rate = actual / target * 100\n    roi = (actual - cost) / cost * 100 if cost > 0 else 0\n    total_target = total_target + target\n    total_actual = total_actual + actual\n    total_cost = total_cost + cost\n    print(team["name"] + " | " + str(target) + " | " + str(actual) + " | " + str(round(rate, 1)) + "% | " + str(cost) + " | " + str(round(roi, 1)) + "%")\n\noverall_rate = total_actual / total_target * 100\noverall_roi = (total_actual - total_cost) / total_cost * 100\nprint("\\n整体KPI汇总:")\nprint("总目标: " + str(total_target) + "万, 总实际: " + str(total_actual) + "万")\nprint("整体完成率: " + str(round(overall_rate, 1)) + "%")\nprint("整体投资回报率: " + str(round(overall_roi, 1)) + "%")' },
          { question: '5. 数据可视化（文本表格）：生成销售数据的文本仪表板。', initialCode: '# 文本仪表板\nimport math\n\nsales_data = [\n    {"region": "华东", "q1": 120, "q2": 135, "q3": 148, "q4": 165},\n    {"region": "华北", "q1": 95, "q2": 108, "q3": 115, "q4": 128},\n    {"region": "华南", "q1": 135, "q2": 152, "q3": 168, "q4": 185},\n    {"region": "西南", "q1": 68, "q2": 75, "q3": 82, "q4": 95}\n]\n\nprint("=" * 70)\nprint("          季度销售业绩仪表板")\nprint("=" * 70)\nprint("区域 | Q1 | Q2 | Q3 | Q4 | 全年合计 | 同比增长")\nprint("-" * 70)\n\ntotal_q1 = 0\ntotal_q2 = 0\ntotal_q3 = 0\ntotal_q4 = 0\n\nfor region in sales_data:\n    total = region["q1"] + region["q2"] + region["q3"] + region["q4"]\n    total_q1 = total_q1 + region["q1"]\n    total_q2 = total_q2 + region["q2"]\n    total_q3 = total_q3 + region["q3"]\n    total_q4 = total_q4 + region["q4"]\n    growth = ((region["q4"] - region["q1"]) / region["q1"] * 100) if region["q1"] > 0 else 0\n    print(region["region"] + " | " + str(region["q1"]) + " | " + str(region["q2"]) + " | " + str(region["q3"]) + " | " + str(region["q4"]) + " | " + str(total) + " | " + str(round(growth, 1)) + "%")\n\nprint("-" * 70)\ntotal_all = total_q1 + total_q2 + total_q3 + total_q4\nprint("合计 | " + str(total_q1) + " | " + str(total_q2) + " | " + str(total_q3) + " | " + str(total_q4) + " | " + str(total_all) + " |")\n\nprint("\\n" + "=" * 70)\nprint("关键指标:")\nprint("最大区域: 华南 (" + str(total_q1 + total_q2 + total_q3 + total_q4) + "万)")\nprint("最高季度: Q4 (" + str(total_q4) + "万)")\nprint("平均季度增长: " + str(round(((total_q4 - total_q1) / total_q1 * 100) / 3, 1)) + "%/季度")\nprint("=" * 70)' }
        ]
      },
      {
        id: 2,
        title: '商务分析项目',
        type: '项目',
        passing_score: 75,
        content: [
          { question: '1. 完整销售分析报告：分析销售数据趋势、产品表现和区域对比。', initialCode: '# 完整销售分析报告\nimport math\n\n# 销售数据\nsales_data = [\n    {"month": "1月", "productA": 120, "productB": 85, "productC": 95, "region": "华东"},\n    {"month": "1月", "productA": 95, "productB": 70, "productC": 80, "region": "华北"},\n    {"month": "1月", "productA": 130, "productB": 95, "productC": 110, "region": "华南"},\n    {"month": "2月", "productA": 135, "productB": 90, "productC": 100, "region": "华东"},\n    {"month": "2月", "productA": 105, "productB": 75, "productC": 85, "region": "华北"},\n    {"month": "2月", "productA": 145, "productB": 100, "productC": 120, "region": "华南"},\n    {"month": "3月", "productA": 148, "productB": 98, "productC": 108, "region": "华东"},\n    {"month": "3月", "productA": 115, "productB": 82, "productC": 92, "region": "华北"},\n    {"month": "3月", "productA": 158, "productB": 110, "productC": 130, "region": "华南"}]\n\nprint("=" * 80)\nprint("           季度销售分析报告")\nprint("=" * 80)\n\n# 按产品汇总\nproducts = ["productA", "productB", "productC"]\nprod_totals = {p: 0 for p in products}\nfor d in sales_data:\n    for p in products:\n        prod_totals[p] = prod_totals[p] + d[p]\n\nprint("\\n【产品销售排名】")\nprint("产品 | 总销售额 | 占比")\nprint("-" * 35)\nfor p, total in sorted(prod_totals.items(), key=lambda x: x[1], reverse=True):\n    pct = total / sum(prod_totals.values()) * 100\n    print(p + " | " + str(total) + "万 | " + str(round(pct, 1)) + "%")\n\n# 按区域汇总\nregions = {"华东": 0, "华北": 0, "华南": 0}\nfor d in sales_data:\n    regions[d["region"]] = regions[d["region"]] + d["productA"] + d["productB"] + d["productC"]\n\nprint("\\n【区域销售对比】")\nprint("区域 | 总销售额 | 同比增长")\nprint("-" * 35)\nfor r, total in regions.items():\n    growth = ((total / 3 - sales_data[list(regions.keys()).index(r)]["productA"] - sales_data[list(regions.keys()).index(r)]["productB"] - sales_data[list(regions.keys()).index(r)]["productC"]) / (sales_data[list(regions.keys()).index(r)]["productA"] + sales_data[list(regions.keys()).index(r)]["productB"] + sales_data[list(regions.keys()).index(r)]["productC"]) * 100) if (sales_data[list(regions.keys()).index(r)]["productA"] + sales_data[list(regions.keys()).index(r)]["productB"] + sales_data[list(regions.keys()).index(r)]["productC"]) > 0 else 0\n    print(r + " | " + str(total) + "万 | " + str(round(growth, 1)) + "%")\n\nprint("\\n" + "=" * 80)\nprint("结论：ProductA表现最佳，华南区域增长最快")\nprint("=" * 80)' },
          { question: '2. 客户流失分析：根据客户行为数据识别高流失风险客户。', initialCode: '# 客户流失分析\nimport math\n\ncustomers = [\n    {"id": "C001", "name": "张三", "months_active": 24, "avg_spend": 2500, "complaints": 1, "last_purchase_days": 15},\n    {"id": "C002", "name": "李四", "months_active": 6, "avg_spend": 800, "complaints": 3, "last_purchase_days": 45},\n    {"id": "C003", "name": "王五", "months_active": 36, "avg_spend": 5200, "complaints": 0, "last_purchase_days": 5,\n    {"id": "C004", "name": "赵六", "months_active": 12, "avg_spend": 1800, "complaints": 2, "last_purchase_days": 30,\n    {"id": "C005", "name": "钱七", "months_active": 8, "avg_spend": 950, "complaints": 4, "last_purchase_days": 55,\n    {"id": "C006", "name": "孙八", "months_active": 48, "avg_spend": 3800, "complaints": 1, "last_purchase_days": 8,\n    {"id": "C007", "name": "周九", "months_active": 18, "avg_spend": 1200, "complaints": 2, "last_purchase_days": 28,\n    {"id": "C008", "name": "吴十", "months_active": 3, "avg_spend": 450, "complaints": 5, "last_purchase_days": 60}\n]\n\ndef calculate_risk(customer):\n    score = 0\n    # 活跃月份越少风险越高\n    if customer["months_active"] < 6:\n        score = score + 30\n    elif customer["months_active"] < 12:\n        score = score + 15\n    # 平均消费越低风险越高\n    if customer["avg_spend"] < 1000:\n        score = score + 25\n    elif customer["avg_spend"] < 2000:\n        score = score + 10\n    # 投诉越多风险越高\n    score = score + customer["complaints"] * 10\n    # 最近购买天数越多风险越高\n    if customer["last_purchase_days"] > 45:\n        score = score + 30\n    elif customer["last_purchase_days"] > 30:\n        score = score + 15\n    return score\n\ndef risk_level(score):\n    if score >= 70:\n        return "高风险", "立即干预"\n    elif score >= 40:\n        return "中风险", "重点关注"\n    else:\n        return "低风险", "常规维护"\n\nprint("=" * 80)\nprint("           客户流失风险分析报告")\nprint("=" * 80)\nprint("客户ID | 姓名 | 活跃月数 | 平均消费 | 投诉次数 | 上次购买 | 风险评分 | 风险等级 | 建议")\nprint("-" * 100)\n\nhigh_risk_count = 0\nfor c in customers:\n    risk = calculate_risk(c)\n    level, action = risk_level(risk)\n    if level == "高风险":\n        high_risk_count = high_risk_count + 1\n    print(c["id"] + " | " + c["name"] + " | " + str(c["months_active"]) + " | " + str(c["avg_spend"]) + " | " + str(c["complaints"]) + " | " + str(c["last_purchase_days"]) + "天 | " + str(risk) + " | " + level + " | " + action)\n\nprint("\\n" + "=" * 80)\nprint("高风险客户数量: " + str(high_risk_count) + "人 (" + str(round(high_risk_count / len(customers) * 100, 1)) + "%)")\nprint("建议对高风险客户采取优惠活动和个性化服务")\nprint("=" * 80)' },
          { question: '3. 市场份额分析：分析竞争对手和市场占有率。', initialCode: '# 市场份额分析\nimport math\n\nmarket_data = [\n    {"company": "本公司", "product": "A", "sales": 1250, "market_price": 299},\n    {"company": "本公司", "product": "B", "sales": 890, "market_price": 199},\n    {"company": "竞争者1", "product": "X", "sales": 980, "market_price": 279},\n    {"company": "竞争者1", "product": "Y", "sales": 720, "market_price": 179},\n    {"company": "竞争者2", "product": "P", "sales": 650, "market_price": 289},\n    {"company": "竞争者2", "product": "Q", "sales": 580, "market_price": 189},\n    {"company": "竞争者3", "product": "M", "sales": 420, "market_price": 319},\n    {"company": "竞争者3", "product": "N", "sales": 380, "market_price": 209}]\n\nprint("=" * 80)\nprint("           市场份额分析报告")\nprint("=" * 80)\n\n# 按公司汇总\ncompanies = {}\nfor d in market_data:\n    if d["company"] not in companies:\n        companies[d["company"]] = {"sales": 0, "products": []}\n    companies[d["company"]]["sales"] = companies[d["company"]]["sales"] + d["sales"]\n    companies[d["company"]]["products"].append(d["product"])\n\ntotal_market = sum(c["sales"] for c in companies.values())\n\nprint("\\n【市场份额排名】")\nprint("公司 | 总销售额 | 市场份额 | 产品线")\nprint("-" * 60)\nrank = 1\nfor company, data in sorted(companies.items(), key=lambda x: x[1]["sales"], reverse=True):\n    pct = data["sales"] / total_market * 100\n    print(str(rank) + ". " + company + " | " + str(data["sales"]) + "万 | " + str(round(pct, 1)) + "% | " + ", ".join(data["products"]))\n    rank = rank + 1\n\n# 产品价格对比\nprint("\\n【产品价格对比】")\nprint("公司 | 产品 | 销售额 | 单价 | 销量(估算)")\nprint("-" * 60)\nfor d in market_data:\n    est_units = round(d["sales"] * 10000 / d["market_price"])\n    print(d["company"] + " | " + d["product"] + " | " + str(d["sales"]) + "万 | " + str(d["market_price"]) + "元 | " + str(est_units))\n\nour_sales = companies["本公司"]["sales"]\ncompetitor_sales = total_market - our_sales\ngap = competitor_sales - our_sales if competitor_sales > our_sales else 0\n\nprint("\\n" + "=" * 80)\nprint("市场总规模: " + str(total_market) + "万")\nprint("本公司份额: " + str(round(our_sales / total_market * 100, 1)) + "%")\nprint("领先优势/差距: " + ("+" if our_sales > competitor_sales else "") + str(our_sales - competitor_sales) + "万")\nprint("=" * 80)' }
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
          { question: '1. 模拟SQL SELECT查询：从员工数据表中筛选指定列并展示查询结果。', initialCode: '# 模拟员工数据表\nemployees = [\n    {"id": 1, "name": "张伟", "dept": "技术部", "salary": 12000, "age": 28},\n    {"id": 2, "name": "李娜", "dept": "市场部", "salary": 9500, "age": 32},\n    {"id": 3, "name": "王强", "dept": "技术部", "salary": 15000, "age": 35},\n    {"id": 4, "name": "赵敏", "dept": "销售部", "salary": 11000, "age": 29},\n    {"id": 5, "name": "刘洋", "dept": "财务部", "salary": 10500, "age": 41},\n    {"id": 6, "name": "陈静", "dept": "技术部", "salary": 13500, "age": 30},\n    {"id": 7, "name": "杨光", "dept": "市场部", "salary": 8800, "age": 26},\n    {"id": 8, "name": "周婷", "dept": "销售部", "salary": 13000, "age": 33}\n]\n\ndef sql_select(table, columns):\n    # 模拟 SELECT col1, col2, ... FROM table\n    result = []\n    for row in table:\n        if columns == "*":\n            result.append(row.copy())\n        else:\n            new_row = {}\n            for col in columns:\n                new_row[col] = row[col]\n            result.append(new_row)\n    return result\n\ndef print_result(rows, title):\n    print("=== " + title + " ===")\n    if not rows:\n        print("空结果集")\n        return\n    cols = list(rows[0].keys())\n    header = " | ".join(cols)\n    print(header)\n    print("-" * len(header))\n    for row in rows:\n        print(" | ".join(str(row[c]) for c in cols))\n\n# 查询1: SELECT * FROM employees\nresult1 = sql_select(employees, "*")\nprint_result(result1, "SELECT * FROM employees")\nprint("返回行数: " + str(len(result1)))\n\n# 查询2: SELECT name, dept, salary FROM employees\nresult2 = sql_select(employees, ["name", "dept", "salary"])\nprint_result(result2, "SELECT name, dept, salary FROM employees")\n\n# 查询3: SELECT name, age FROM employees\nresult3 = sql_select(employees, ["name", "age"])\nprint_result(result3, "SELECT name, age FROM employees")\nprint("\\n查询完成, 共执行 3 条 SELECT 语句")' },
          { question: '2. 模拟SQL WHERE条件过滤：实现等值查询、范围查询和多条件AND逻辑。', initialCode: '# 订单数据表\norders = [\n    {"order_id": 101, "customer": "客户A", "amount": 2500, "status": "已完成", "month": 1},\n    {"order_id": 102, "customer": "客户B", "amount": 1800, "status": "处理中", "month": 1},\n    {"order_id": 103, "customer": "客户A", "amount": 3200, "status": "已完成", "month": 2},\n    {"order_id": 104, "customer": "客户C", "amount": 900, "status": "已取消", "month": 2},\n    {"order_id": 105, "customer": "客户B", "amount": 4500, "status": "已完成", "month": 3},\n    {"order_id": 106, "customer": "客户D", "amount": 2100, "status": "处理中", "month": 3},\n    {"order_id": 107, "customer": "客户A", "amount": 5600, "status": "已完成", "month": 4},\n    {"order_id": 108, "customer": "客户C", "amount": 1500, "status": "已完成", "month": 4},\n    {"order_id": 109, "customer": "客户D", "amount": 3800, "status": "处理中", "month": 5},\n    {"order_id": 110, "customer": "客户B", "amount": 2800, "status": "已完成", "month": 5}\n]\n\ndef sql_where(table, conditions):\n    # 模拟 WHERE 条件过滤\n    result = []\n    for row in table:\n        match = True\n        for col, op, val in conditions:\n            cell = row[col]\n            if op == "=" and not (cell == val):\n                match = False\n            elif op == ">" and not (cell > val):\n                match = False\n            elif op == "<" and not (cell < val):\n                match = False\n            elif op == ">=" and not (cell >= val):\n                match = False\n            elif op == "<=" and not (cell <= val):\n                match = False\n            elif op == "!=" and not (cell != val):\n                match = False\n        if match:\n            result.append(row)\n    return result\n\ndef print_orders(rows, title):\n    print("=== " + title + " ===")\n    print("order_id | customer | amount | status | month")\n    print("-" * 55)\n    for r in rows:\n        print(str(r["order_id"]) + " | " + r["customer"] + " | " + str(r["amount"]) + " | " + r["status"] + " | " + str(r["month"]))\n\n# 查询1: WHERE status = "已完成"\nresult1 = sql_where(orders, [("status", "=", "已完成")])\nprint_orders(result1, "WHERE status = \'已完成\'")\nprint("已完成订单数: " + str(len(result1)) + ", 总金额: " + str(sum(r["amount"] for r in result1)))\n\n# 查询2: WHERE amount > 2000\nresult2 = sql_where(orders, [("amount", ">", 2000)])\nprint_orders(result2, "WHERE amount > 2000")\nprint("大额订单数: " + str(len(result2)))\n\n# 查询3: WHERE status = "已完成" AND amount >= 2500 AND month >= 3\nresult3 = sql_where(orders, [("status", "=", "已完成"), ("amount", ">=", 2500), ("month", ">=", 3)])\nprint_orders(result3, "WHERE status=\'已完成\' AND amount>=2500 AND month>=3")\nprint("满足条件订单: " + str(len(result3)))\n\n# 查询4: WHERE customer = "客户A"\nresult4 = sql_where(orders, [("customer", "=", "客户A")])\nprint_orders(result4, "WHERE customer = \'客户A\'")\nprint("客户A订单数: " + str(len(result4)) + ", 消费总额: " + str(sum(r["amount"] for r in result4)))' },
          { question: '3. 模拟SQL聚合函数与GROUP BY分组统计：计算SUM、COUNT、AVG、MAX、MIN。', initialCode: '# 销售记录表\nsales = [\n    {"region": "华东", "product": "手机", "qty": 120, "revenue": 48000},\n    {"region": "华东", "product": "笔记本", "qty": 85, "revenue": 68000},\n    {"region": "华北", "product": "手机", "qty": 95, "revenue": 38000},\n    {"region": "华北", "product": "笔记本", "qty": 70, "revenue": 56000},\n    {"region": "华南", "product": "手机", "qty": 150, "revenue": 60000},\n    {"region": "华南", "product": "笔记本", "qty": 110, "revenue": 88000},\n    {"region": "华东", "product": "平板", "qty": 60, "revenue": 24000},\n    {"region": "华北", "product": "平板", "qty": 45, "revenue": 18000},\n    {"region": "华南", "product": "平板", "qty": 75, "revenue": 30000},\n    {"region": "华东", "product": "手机", "qty": 130, "revenue": 52000},\n    {"region": "华北", "product": "手机", "qty": 88, "revenue": 35200},\n    {"region": "华南", "product": "笔记本", "qty": 95, "revenue": 76000}\n]\n\ndef sql_group_by(table, group_col, agg_col, agg_func):\n    # 模拟 GROUP BY 聚合查询\n    groups = {}\n    for row in table:\n        key = row[group_col]\n        if key not in groups:\n            groups[key] = []\n        groups[key].append(row[agg_col])\n    result = []\n    for key, vals in groups.items():\n        if agg_func == "SUM":\n            agg_val = sum(vals)\n        elif agg_func == "COUNT":\n            agg_val = len(vals)\n        elif agg_func == "AVG":\n            agg_val = round(sum(vals) / len(vals), 2)\n        elif agg_func == "MAX":\n            agg_val = max(vals)\n        elif agg_func == "MIN":\n            agg_val = min(vals)\n        result.append({group_col: key, agg_func + "(" + agg_col + ")": agg_val})\n    return result\n\n# 查询1: 按地区统计销售额\nresult1 = sql_group_by(sales, "region", "revenue", "SUM")\nprint("=== SELECT region, SUM(revenue) FROM sales GROUP BY region ===")\nfor r in result1:\n    print(r["region"] + " | 销售额合计: " + str(r["SUM(revenue)"]))\n\n# 查询2: 按产品统计平均单价\nresult2 = sql_group_by(sales, "product", "revenue", "AVG")\nprint("\\n=== SELECT product, AVG(revenue) FROM sales GROUP BY product ===")\nfor r in result2:\n    print(r["product"] + " | 平均收入: " + str(r["AVG(revenue)"]))\n\n# 查询3: 按地区统计销售记录数\nresult3 = sql_group_by(sales, "region", "qty", "COUNT")\nprint("\\n=== SELECT region, COUNT(*) FROM sales GROUP BY region ===")\nfor r in result3:\n    print(r["region"] + " | 记录数: " + str(r["COUNT(qty)"]))\n\n# 查询4: 按产品统计最大/最小销量\nresult4 = sql_group_by(sales, "product", "qty", "MAX")\nprint("\\n=== SELECT product, MAX(qty) FROM sales GROUP BY product ===")\nfor r in result4:\n    print(r["product"] + " | 最大销量: " + str(r["MAX(qty)"]))\n\nresult5 = sql_group_by(sales, "product", "qty", "MIN")\nprint("\\n=== SELECT product, MIN(qty) FROM sales GROUP BY product ===")\nfor r in result5:\n    print(r["product"] + " | 最小销量: " + str(r["MIN(qty)"]))\n\n# 总统计\nprint("\\n=== 全局汇总 ===")\nprint("总销售额: " + str(sum(s["revenue"] for s in sales)))\nprint("总销量: " + str(sum(s["qty"] for s in sales)))\nprint("平均单笔收入: " + str(round(sum(s["revenue"] for s in sales) / len(sales), 2)))' },
          { question: '4. 模拟SQL多表JOIN连接：实现内连接查询，关联员工和部门两张表。', initialCode: '# 员工表\nemp_table = [\n    {"emp_id": 1, "emp_name": "张伟", "dept_id": 10, "salary": 12000},\n    {"emp_id": 2, "emp_name": "李娜", "dept_id": 20, "salary": 9500},\n    {"emp_id": 3, "emp_name": "王强", "dept_id": 10, "salary": 15000},\n    {"emp_id": 4, "emp_name": "赵敏", "dept_id": 30, "salary": 11000},\n    {"emp_id": 5, "emp_name": "刘洋", "dept_id": 40, "salary": 10500},\n    {"emp_id": 6, "emp_name": "陈静", "dept_id": 10, "salary": 13500},\n    {"emp_id": 7, "emp_name": "杨光", "dept_id": 20, "salary": 8800},\n    {"emp_id": 8, "emp_name": "周婷", "dept_id": 30, "salary": 13000},\n    {"emp_id": 9, "emp_name": "未知", "dept_id": 99, "salary": 5000}\n]\n\n# 部门表\ndept_table = [\n    {"dept_id": 10, "dept_name": "技术部", "manager": "王经理", "budget": 500000},\n    {"dept_id": 20, "dept_name": "市场部", "manager": "刘经理", "budget": 250000},\n    {"dept_id": 30, "dept_name": "销售部", "manager": "陈经理", "budget": 300000},\n    {"dept_id": 40, "dept_name": "财务部", "manager": "张经理", "budget": 150000},\n    {"dept_id": 50, "dept_name": "行政部", "manager": "赵经理", "budget": 100000}\n]\n\ndef sql_inner_join(left_tbl, right_tbl, left_key, right_key, select_cols):\n    # 模拟 INNER JOIN\n    result = []\n    for left_row in left_tbl:\n        for right_row in right_tbl:\n            if left_row[left_key] == right_row[right_key]:\n                merged = {}\n                for col in select_cols:\n                    if "." in col:\n                        tbl, c = col.split(".")\n                        if tbl == "emp":\n                            merged[col] = left_row[c]\n                        else:\n                            merged[col] = right_row[c]\n                result.append(merged)\n    return result\n\n# 查询1: 员工和部门内连接\ncols1 = ["emp.emp_id", "emp.emp_name", "emp.salary", "dept.dept_name", "dept.manager"]\nresult1 = sql_inner_join(emp_table, dept_table, "dept_id", "dept_id", cols1)\nprint("=== SELECT emp.emp_id, emp.emp_name, emp.salary, dept.dept_name, dept.manager")\nprint("    FROM employees emp INNER JOIN departments dept ON emp.dept_id = dept.dept_id ===")\nfor r in result1:\n    print(str(r["emp.emp_id"]) + " | " + r["emp.emp_name"] + " | 薪资:" + str(r["emp.salary"]) + " | " + r["dept.dept_name"] + " | 主管:" + r["dept.manager"])\nprint("连接成功, 返回 " + str(len(result1)) + " 行 (员工9人, 其中1人部门不匹配被排除)")\n\n# 查询2: 按部门统计人数和薪资\nprint("\\n=== 按部门统计 (JOIN + GROUP BY 模拟) ===")\ndept_stats = {}\nfor r in result1:\n    d = r["dept.dept_name"]\n    if d not in dept_stats:\n        dept_stats[d] = {"count": 0, "total_salary": 0}\n    dept_stats[d]["count"] = dept_stats[d]["count"] + 1\n    dept_stats[d]["total_salary"] = dept_stats[d]["total_salary"] + r["emp.salary"]\nfor d, s in sorted(dept_stats.items()):\n    print(d + " | 人数: " + str(s["count"]) + " | 薪资总计: " + str(s["total_salary"]) + " | 人均: " + str(round(s["total_salary"] / s["count"], 2)))\n\n# 查询3: 部门预算对比实际薪资支出\nprint("\\n=== 部门预算 vs 实际薪资支出 ===")\nfor dept in dept_table:\n    dname = dept["dept_name"]\n    if dname in dept_stats:\n        actual = dept_stats[dname]["total_salary"] * 12\n        budget = dept["budget"]\n        status = "超支" if actual > budget else "节约"\n        print(dname + " | 预算: " + str(budget) + " | 年薪资: " + str(actual) + " [" + status + "]")\n    else:\n        print(dname + " | 预算: " + str(dept["budget"]) + " | (暂无员工)")' },
          { question: '5. 模拟SQL ORDER BY排序与LIMIT分页：实现结果集排序和Top-N查询。', initialCode: '# 产品销售数据\nproducts = [\n    {"pid": "P001", "name": "智能手机X1", "price": 2999, "sales_qty": 1520, "stock": 800},\n    {"pid": "P002", "name": "笔记本电脑Pro", "price": 6899, "sales_qty": 680, "stock": 120},\n    {"pid": "P003", "name": "平板电脑Air", "price": 2599, "sales_qty": 890, "stock": 350},\n    {"pid": "P004", "name": "无线耳机Max", "price": 599, "sales_qty": 3200, "stock": 2100},\n    {"pid": "P005", "name": "智能手表Watch", "price": 1299, "sales_qty": 1850, "stock": 550},\n    {"pid": "P006", "name": "蓝牙音箱Mini", "price": 299, "sales_qty": 4500, "stock": 3200},\n    {"pid": "P007", "name": "游戏手柄Pro", "price": 459, "sales_qty": 2100, "stock": 650},\n    {"pid": "P008", "name": "移动电源20000", "price": 199, "sales_qty": 5800, "stock": 4100},\n    {"pid": "P009", "name": "机械键盘RGB", "price": 699, "sales_qty": 1650, "stock": 420},\n    {"pid": "P010", "name": "显示器27寸4K", "price": 3599, "sales_qty": 520, "stock": 95}\n]\n\ndef sql_order_by(table, order_col, reverse=False):\n    # 模拟 ORDER BY\n    return sorted(table, key=lambda r: r[order_col], reverse=reverse)\n\ndef sql_limit(table, n):\n    # 模拟 LIMIT\n    return table[:n]\n\ndef print_rows(rows, title, extra_field=None):\n    print("=== " + title + " ===")\n    print("PID | 名称 | 价格 | 销量 | 库存" + (" | " + extra_field if extra_field else ""))\n    print("-" * 80)\n    for r in rows:\n        line = r["pid"] + " | " + r["name"] + " | " + str(r["price"]) + " | " + str(r["sales_qty"]) + " | " + str(r["stock"])\n        if extra_field == "销售额":\n            line = line + " | " + str(r["price"] * r["sales_qty"])\n        print(line)\n\n# 查询1: 按销量降序\nresult1 = sql_order_by(products, "sales_qty", reverse=True)\nprint_rows(result1, "ORDER BY sales_qty DESC")\n\n# 查询2: Top 3 热销产品 (ORDER BY + LIMIT)\nresult2 = sql_limit(sql_order_by(products, "sales_qty", reverse=True), 3)\nprint_rows(result2, "ORDER BY sales_qty DESC LIMIT 3 (Top3热销)")\ntop3_qty = sum(r["sales_qty"] for r in result2)\ntotal_qty = sum(r["sales_qty"] for r in products)\nprint("Top3销量合计: " + str(top3_qty) + ", 占总销量比例: " + str(round(top3_qty / total_qty * 100, 2)) + "%")\n\n# 查询3: 按价格升序 (最便宜的产品)\nresult3 = sql_limit(sql_order_by(products, "price", reverse=False), 3)\nprint_rows(result3, "ORDER BY price ASC LIMIT 3 (最便宜3款)")\n\n# 查询4: 按销售额排序 (计算字段排序)\nproducts_with_revenue = []\nfor p in products:\n    p_copy = p.copy()\n    p_copy["revenue"] = p["price"] * p["sales_qty"]\n    products_with_revenue.append(p_copy)\nresult4 = sql_limit(sql_order_by(products_with_revenue, "revenue", reverse=True), 5)\nprint("\\n=== ORDER BY revenue DESC LIMIT 5 (销售额Top5) ===")\nprint("PID | 名称 | 单价 | 销量 | 销售额")\nprint("-" * 60)\nfor r in result4:\n    print(r["pid"] + " | " + r["name"] + " | " + str(r["price"]) + " | " + str(r["sales_qty"]) + " | " + str(r["revenue"]))\ntop5_rev = sum(r["revenue"] for r in result4)\ntotal_rev = sum(r["revenue"] for r in products_with_revenue)\nprint("Top5销售额合计: " + str(top5_rev) + ", 占总销售额: " + str(round(top5_rev / total_rev * 100, 2)) + "%")\n\n# 查询5: 库存预警 (库存最少的3个, 需要补货)\nresult5 = sql_limit(sql_order_by(products, "stock", reverse=False), 3)\nprint_rows(result5, "ORDER BY stock ASC LIMIT 3 (需补货预警)")' }
        ]
      },
      {
        id: 2,
        title: 'SQL查询项目',
        type: '项目',
        passing_score: 75,
        content: [
          { question: '1. 员工综合数据分析：使用Python模拟实现多维度员工信息查询，包括薪资分布、年龄统计和部门绩效。', initialCode: '# 员工综合数据\nstaff = [\n    {"id": 1, "name": "张伟", "dept": "技术部", "salary": 18000, "age": 32, "level": "P6", "performance": "A", "hire_year": 2020},\n    {"id": 2, "name": "李娜", "dept": "产品部", "salary": 15000, "age": 29, "level": "P5", "performance": "B", "hire_year": 2021},\n    {"id": 3, "name": "王强", "dept": "技术部", "salary": 22000, "age": 35, "level": "P7", "performance": "A", "hire_year": 2018},\n    {"id": 4, "name": "赵敏", "dept": "市场部", "salary": 12000, "age": 27, "level": "P4", "performance": "B", "hire_year": 2022},\n    {"id": 5, "name": "刘洋", "dept": "销售部", "salary": 16000, "age": 31, "level": "P6", "performance": "A", "hire_year": 2019},\n    {"id": 6, "name": "陈静", "dept": "技术部", "salary": 25000, "age": 33, "level": "P6", "performance": "A", "hire_year": 2017},\n    {"id": 7, "name": "杨光", "dept": "产品部", "salary": 13500, "age": 25, "level": "P4", "performance": "C", "hire_year": 2023},\n    {"id": 8, "name": "周婷", "dept": "市场部", "salary": 14000, "age": 28, "level": "P5", "performance": "B", "hire_year": 2022},\n    {"id": 9, "name": "吴强", "dept": "销售部", "salary": 17000, "age": 29, "level": "P5", "performance": "A", "hire_year": 2020},\n    {"id": 10, "name": "郑华", "dept": "技术部", "salary": 28000, "age": 36, "level": "P7", "performance": "A", "hire_year": 2016},\n    {"id": 11, "name": "孙磊", "dept": "产品部", "salary": 16000, "age": 26, "level": "P5", "performance": "B", "hire_year": 2021},\n    {"id": 12, "name": "马丽", "dept": "市场部", "salary": 11000, "age": 24, "level": "P4", "performance": "C", "hire_year": 2024},\n    {"id": 13, "name": "黄峰", "dept": "技术部", "salary": 32000, "age": 38, "level": "P8", "performance": "A", "hire_year": 2014},\n    {"id": 14, "name": "徐雪", "dept": "产品部", "salary": 14500, "age": 27, "level": "P5", "performance": "B", "hire_year": 2022},\n    {"id": 15, "name": "朱琳", "dept": "销售部", "salary": 15500, "age": 28, "level": "P5", "performance": "A", "hire_year": 2021}\n]\n\nprint("=== 员工数据概览 ===")\nprint("总员工数: " + str(len(staff)))\n\n# 按部门分组统计 (GROUP BY dept)\ndept_data = {}\nfor s in staff:\n    d = s["dept"]\n    if d not in dept_data:\n        dept_data[d] = {"count": 0, "total_salary": 0, "avg_age": [], "a_count": 0}\n    dept_data[d]["count"] = dept_data[d]["count"] + 1\n    dept_data[d]["total_salary"] = dept_data[d]["total_salary"] + s["salary"]\n    dept_data[d]["avg_age"].append(s["age"])\n    if s["performance"] == "A":\n        dept_data[d]["a_count"] = dept_data[d]["a_count"] + 1\n\nprint("\\n=== 各部门统计 (模拟: SELECT dept, COUNT(*), AVG(salary), AVG(age) FROM staff GROUP BY dept) ===")\nprint("部门 | 人数 | 平均薪资 | 平均年龄 | A级员工数 | A级占比")\nprint("-" * 70)\nfor d, info in sorted(dept_data.items()):\n    avg_s = round(info["total_salary"] / info["count"], 2)\n    avg_a = round(sum(info["avg_age"]) / len(info["avg_age"]), 1)\n    a_ratio = round(info["a_count"] / info["count"] * 100, 1)\n    print(d + " | " + str(info["count"]) + "人 | " + str(avg_s) + " | " + str(avg_a) + "岁 | " + str(info["a_count"]) + "人 | " + str(a_ratio) + "%")\n\n# 薪资分布 (GROUP BY 薪资区间)\nprint("\\n=== 薪资分布统计 ===")\nsalary_bands = {"<15000": 0, "15000-20000": 0, "20000-25000": 0, ">25000": 0}\nfor s in staff:\n    sal = s["salary"]\n    if sal < 15000:\n        salary_bands["<15000"] = salary_bands["<15000"] + 1\n    elif sal <= 20000:\n        salary_bands["15000-20000"] = salary_bands["15000-20000"] + 1\n    elif sal <= 25000:\n        salary_bands["20000-25000"] = salary_bands["20000-25000"] + 1\n    else:\n        salary_bands[">25000"] = salary_bands[">25000"] + 1\nfor band, cnt in salary_bands.items():\n    print("薪资 " + band + ": " + str(cnt) + "人 (" + str(round(cnt / len(staff) * 100, 1)) + "%)")\n\n# 司龄分析\nprint("\\n=== 司龄与薪资分析 ===")\ntenure_data = []\nfor s in staff:\n    tenure = 2025 - s["hire_year"]\n    tenure_data.append((s["name"], s["dept"], tenure, s["salary"]))\ntenure_data.sort(key=lambda x: x[2], reverse=True)\nfor name, dept, tenure, sal in tenure_data[:5]:\n    print(name + " | " + dept + " | 司龄 " + str(tenure) + "年 | 薪资 " + str(sal))\nprint("司龄最长5位员工展示")' },
          { question: '2. 部门统计与排名分析：模拟复杂SQL查询，实现子查询、窗口函数和条件筛选的组合应用。', initialCode: '# 部门销售与员工数据 (模拟多表关联)\ndept_sales = [\n    {"dept_id": 10, "dept_name": "技术部", "revenue_2024": 1200000, "revenue_2023": 1100000, "headcount": 25},\n    {"dept_id": 20, "dept_name": "市场部", "revenue_2024": 800000, "revenue_2023": 750000, "headcount": 18},\n    {"dept_id": 30, "dept_name": "销售部", "revenue_2024": 1500000, "revenue_2023": 1300000, "headcount": 22},\n    {"dept_id": 40, "dept_name": "产品部", "revenue_2024": 950000, "revenue_2023": 900000, "headcount": 15},\n    {"dept_id": 50, "dept_name": "财务部", "revenue_2024": 300000, "revenue_2023": 280000, "headcount": 10},\n    {"dept_id": 60, "dept_name": "行政部", "revenue_2024": 200000, "revenue_2023": 190000, "headcount": 8}\n]\n\nemp_performance = [\n    {"emp_id": 1, "name": "张伟", "dept_id": 10, "salary": 18000, "score": 92},\n    {"emp_id": 2, "name": "李娜", "dept_id": 40, "salary": 15000, "score": 85},\n    {"emp_id": 3, "name": "王强", "dept_id": 10, "salary": 22000, "score": 95},\n    {"emp_id": 4, "name": "赵敏", "dept_id": 20, "salary": 12000, "score": 78},\n    {"emp_id": 5, "name": "刘洋", "dept_id": 30, "salary": 16000, "score": 88},\n    {"emp_id": 6, "name": "陈静", "dept_id": 10, "salary": 25000, "score": 91},\n    {"emp_id": 7, "name": "杨光", "dept_id": 40, "salary": 13500, "score": 72},\n    {"emp_id": 8, "name": "周婷", "dept_id": 20, "salary": 14000, "score": 80},\n    {"emp_id": 9, "name": "吴强", "dept_id": 30, "salary": 17000, "score": 90},\n    {"emp_id": 10, "name": "郑华", "dept_id": 10, "salary": 28000, "score": 94},\n    {"emp_id": 11, "name": "孙磊", "dept_id": 40, "salary": 16000, "score": 83},\n    {"emp_id": 12, "name": "马丽", "dept_id": 20, "salary": 11000, "score": 70},\n    {"emp_id": 13, "name": "黄峰", "dept_id": 10, "salary": 32000, "score": 96},\n    {"emp_id": 14, "name": "徐雪", "dept_id": 40, "salary": 14500, "score": 82},\n    {"emp_id": 15, "name": "朱琳", "dept_id": 30, "salary": 15500, "score": 86}\n]\n\nprint("=== 部门营收与排名 (模拟: SELECT dept_name, revenue_2024, RANK() OVER ORDER BY revenue_2024 DESC) ===")\ndept_ranked = sorted(dept_sales, key=lambda d: d["revenue_2024"], reverse=True)\nprint("排名 | 部门 | 2024营收 | 2023营收 | 同比增长 | 人均营收")\nprint("-" * 70)\nfor rank, d in enumerate(dept_ranked, 1):\n    growth = round((d["revenue_2024"] - d["revenue_2023"]) / d["revenue_2023"] * 100, 2)\n    per_capita = round(d["revenue_2024"] / d["headcount"], 2)\n    print(str(rank) + " | " + d["dept_name"] + " | " + str(d["revenue_2024"]) + " | " + str(d["revenue_2023"]) + " | " + str(growth) + "% | " + str(per_capita))\n\n# 模拟子查询: 找出薪资高于部门平均的员工 (SELECT * FROM emp WHERE salary > (SELECT AVG(salary) FROM emp e WHERE e.dept_id = emp.dept_id))\nprint("\\n=== 薪资高于部门平均的员工 (模拟相关子查询) ===")\ndept_avg_salary = {}\nfor d in dept_sales:\n    did = d["dept_id"]\n    dept_emps = [e for e in emp_performance if e["dept_id"] == did]\n    if dept_emps:\n        dept_avg_salary[did] = sum(e["salary"] for e in dept_emps) / len(dept_emps)\n\nfor d in dept_sales:\n    did = d["dept_id"]\n    dname = d["dept_name"]\n    avg_s = round(dept_avg_salary[did], 2)\n    print("\\n" + dname + " 平均薪资: " + str(avg_s))\n    above_avg = [e for e in emp_performance if e["dept_id"] == did and e["salary"] > avg_s]\n    for e in above_avg:\n        diff = e["salary"] - avg_s\n        print("  " + e["name"] + " | 薪资 " + str(e["salary"]) + " (高于平均 " + str(round(diff, 2)) + ")")\n\n# 模拟HAVING: 筛选部门平均绩效>=80的部门\nprint("\\n=== 部门绩效排名 (模拟 HAVING AVG(score) >= 80) ===")\nfor d in dept_sales:\n    did = d["dept_id"]\n    dname = d["dept_name"]\n    dept_emps = [e for e in emp_performance if e["dept_id"] == did]\n    if dept_emps:\n        avg_score = round(sum(e["score"] for e in dept_emps) / len(dept_emps), 2)\n        top_performer = max(dept_emps, key=lambda e: e["score"])\n        if avg_score >= 80:\n            print(dname + " | 平均绩效: " + str(avg_score) + " | 最佳: " + top_performer["name"] + "(分数 " + str(top_performer["score"]) + ")")' },
          { question: '3. 项目参与分析与交叉报表：使用Python模拟实现多对多关联查询，分析员工项目参与情况。', initialCode: '# 员工表 (employees)\nemployees = [\n    {"id": 1, "name": "张伟", "dept": "技术部", "salary": 18000},\n    {"id": 2, "name": "李娜", "dept": "产品部", "salary": 15000},\n    {"id": 3, "name": "王强", "dept": "技术部", "salary": 22000},\n    {"id": 4, "name": "赵敏", "dept": "市场部", "salary": 12000},\n    {"id": 5, "name": "刘洋", "dept": "销售部", "salary": 16000},\n    {"id": 6, "name": "陈静", "dept": "技术部", "salary": 25000},\n    {"id": 7, "name": "杨光", "dept": "产品部", "salary": 13500},\n    {"id": 8, "name": "周婷", "dept": "市场部", "salary": 14000},\n    {"id": 9, "name": "吴强", "dept": "销售部", "salary": 17000},\n    {"id": 10, "name": "郑华", "dept": "技术部", "salary": 28000},\n    {"id": 11, "name": "孙磊", "dept": "产品部", "salary": 16000},\n    {"id": 12, "name": "马丽", "dept": "市场部", "salary": 11000},\n    {"id": 13, "name": "黄峰", "dept": "技术部", "salary": 32000},\n    {"id": 14, "name": "徐雪", "dept": "产品部", "salary": 14500},\n    {"id": 15, "name": "朱琳", "dept": "销售部", "salary": 15500}\n]\n\n# 项目表 (projects)\nprojects = [\n    {"pid": "PRJ01", "name": "智能推荐系统", "budget": 500000, "status": "进行中", "priority": "高"},\n    {"pid": "PRJ02", "name": "客户管理平台", "budget": 350000, "status": "进行中", "priority": "中"},\n    {"pid": "PRJ03", "name": "数据分析仪表板", "budget": 200000, "status": "已完成", "priority": "高"},\n    {"pid": "PRJ04", "name": "移动应用升级", "budget": 400000, "status": "进行中", "priority": "高"},\n    {"pid": "PRJ05", "name": "自动化测试框架", "budget": 150000, "status": "已完成", "priority": "中"},\n    {"pid": "PRJ06", "name": "新营销活动", "budget": 250000, "status": "规划中", "priority": "低"},\n    {"pid": "PRJ07", "name": "API网关重构", "budget": 300000, "status": "进行中", "priority": "高"},\n    {"pid": "PRJ08", "name": "销售预测模型", "budget": 180000, "status": "规划中", "priority": "中"}\n]\n\n# 员工-项目关联表 (多对多关系, emp_projects)\nassignments = [\n    {"emp_id": 1, "pid": "PRJ01", "role": "技术负责人", "hours": 40},\n    {"emp_id": 1, "pid": "PRJ04", "role": "开发", "hours": 20},\n    {"emp_id": 2, "pid": "PRJ01", "role": "产品经理", "hours": 35},\n    {"emp_id": 2, "pid": "PRJ02", "role": "产品经理", "hours": 25},\n    {"emp_id": 3, "pid": "PRJ01", "role": "架构师", "hours": 45},\n    {"emp_id": 3, "pid": "PRJ07", "role": "技术负责人", "hours": 40},\n    {"emp_id": 4, "pid": "PRJ06", "role": "市场推广", "hours": 30},\n    {"emp_id": 5, "pid": "PRJ02", "role": "业务顾问", "hours": 20},\n    {"emp_id": 5, "pid": "PRJ08", "role": "业务顾问", "hours": 25},\n    {"emp_id": 6, "pid": "PRJ03", "role": "开发", "hours": 38},\n    {"emp_id": 6, "pid": "PRJ04", "role": "开发", "hours": 35},\n    {"emp_id": 6, "pid": "PRJ07", "role": "开发", "hours": 20},\n    {"emp_id": 7, "pid": "PRJ02", "role": "产品助理", "hours": 25},\n    {"emp_id": 8, "pid": "PRJ06", "role": "市场调研", "hours": 32},\n    {"emp_id": 9, "pid": "PRJ02", "role": "销售代表", "hours": 22},\n    {"emp_id": 9, "pid": "PRJ08", "role": "销售代表", "hours": 28},\n    {"emp_id": 10, "pid": "PRJ01", "role": "开发", "hours": 42},\n    {"emp_id": 10, "pid": "PRJ05", "role": "技术负责人", "hours": 35},\n    {"emp_id": 10, "pid": "PRJ07", "role": "开发", "hours": 30},\n    {"emp_id": 11, "pid": "PRJ03", "role": "产品经理", "hours": 30},\n    {"emp_id": 12, "pid": "PRJ06", "role": "活动执行", "hours": 35},\n    {"emp_id": 13, "pid": "PRJ04", "role": "技术负责人", "hours": 44},\n    {"emp_id": 13, "pid": "PRJ07", "role": "架构顾问", "hours": 35},\n    {"emp_id": 14, "pid": "PRJ03", "role": "产品助理", "hours": 28},\n    {"emp_id": 15, "pid": "PRJ08", "role": "销售代表", "hours": 30}\n]\n\n# 模拟三表 JOIN: SELECT e.name, p.name, a.role FROM emp e JOIN assignment a JOIN project p\nprint("=== 项目参与明细 (三表JOIN模拟) ===")\nemp_map = {e["id"]: e for e in employees}\nprj_map = {p["pid"]: p for p in projects}\nprint("员工 | 项目 | 角色 | 周工时 | 项目状态 | 优先级")\nprint("-" * 70)\nfor a in assignments:\n    e = emp_map[a["emp_id"]]\n    p = prj_map[a["pid"]]\n    print(e["name"] + " | " + p["name"] + " | " + a["role"] + " | " + str(a["hours"]) + "h | " + p["status"] + " | " + p["priority"])\n\n# 统计每位员工参与的项目数\nprint("\\n=== 员工参与项目数排名 (GROUP BY + COUNT + ORDER BY) ===")\nemp_project_count = {}\nfor a in assignments:\n    eid = a["emp_id"]\n    if eid not in emp_project_count:\n        emp_project_count[eid] = {"count": 0, "hours": 0, "names": []}\n    emp_project_count[eid]["count"] = emp_project_count[eid]["count"] + 1\n    emp_project_count[eid]["hours"] = emp_project_count[eid]["hours"] + a["hours"]\n    emp_project_count[eid]["names"].append(prj_map[a["pid"]]["name"])\n\nranked_emps = sorted(emp_project_count.items(), key=lambda x: x[1]["count"], reverse=True)\nprint("员工 | 部门 | 参与项目数 | 周工时 | 参与项目")\nprint("-" * 70)\nfor eid, info in ranked_emps:\n    e = emp_map[eid]\n    print(e["name"] + " | " + e["dept"] + " | " + str(info["count"]) + "个 | " + str(info["hours"]) + "h | " + ", ".join(info["names"]))\n\n# 项目维度: 每个项目参与人数\nprint("\\n=== 项目参与人数统计 ===")\nfor p in projects:\n    pid = p["pid"]\n    pname = p["name"]\n    participants = [a for a in assignments if a["pid"] == pid]\n    total_hours = sum(a["hours"] for a in participants)\n    dept_set = set()\n    for a in participants:\n        dept_set.add(emp_map[a["emp_id"]]["dept"])\n    print(pname + " | 预算:" + str(p["budget"]) + " | 参与人数:" + str(len(participants)) + " | 跨部门数:" + str(len(dept_set)) + " | 总工时:" + str(total_hours) + " | 状态:" + p["status"])\n\n# 未参与任何项目的员工 (模拟 NOT EXISTS 子查询)\nprint("\\n=== 未参与任何项目的员工 (模拟 NOT EXISTS 查询) ===")\nassigned_ids = set(a["emp_id"] for a in assignments)\nfree_emps = [e for e in employees if e["id"] not in assigned_ids]\nif free_emps:\n    for e in free_emps:\n        print(e["name"] + " | " + e["dept"] + " | 薪资:" + str(e["salary"]))\nelse:\n    print("所有员工都已分配项目")\n\n# 进行中高优先级项目汇总\nprint("\\n=== 进行中高优先级项目投入分析 ===")\nhigh_priority_running = [p for p in projects if p["priority"] == "高" and p["status"] == "进行中"]\nfor p in high_priority_running:\n    pid = p["pid"]\n    pname = p["name"]\n    project_emps = [a for a in assignments if a["pid"] == pid]\n    total_h = sum(a["hours"] for a in project_emps)\n    print(pname + " (预算 " + str(p["budget"]) + "): " + str(len(project_emps)) + "人参与, 总工时 " + str(total_h) + "h")' }
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
          { question: '1. 缺失值处理：检测并填充数据中的缺失值。', initialCode: '# 缺失值处理\nimport math\n\n# 模拟数据 (None表示缺失值)\ndata = [\n    {"name": "张三", "age": 28, "salary": 8000, "department": "技术部"},\n    {"name": "李四", "age": None, "salary": 9500, "department": "市场部"},\n    {"name": "王五", "age": 35, "salary": None, "department": "技术部"},\n    {"name": "赵六", "age": 29, "salary": 11000, "department": None},\n    {"name": "钱七", "age": 41, "salary": 10500, "department": "财务部"},\n    {"name": "孙八", "age": None, "salary": 8800, "department": "市场部"},\n    {"name": "周九", "age": 30, "salary": None, "department": "技术部"},\n    {"name": "吴十", "age": 33, "salary": 13000, "department": "销售部"}]\n\nprint("=== 缺失值检测 ===")\nfor row in data:\n    missing = [k for k, v in row.items() if v is None]\n    if missing:\n        print("记录 " + row["name"] + " 缺失字段: " + ", ".join(missing))\n    else:\n        print("记录 " + row["name"] + " 完整")\n\nprint("\\n=== 缺失值填充 ===")\n# 计算均值\nages = [row["age"] for row in data if row["age"] is not None]\nsalaries = [row["salary"] for row in data if row["salary"] is not None]\navg_age = round(sum(ages) / len(ages))\navg_salary = round(sum(salaries) / len(salaries))\n\n# 填充\nfor row in data:\n    if row["age"] is None:\n        row["age"] = avg_age\n    if row["salary"] is None:\n        row["salary"] = avg_salary\n    if row["department"] is None:\n        row["department"] = "未知"\n\nprint("填充后数据:")\nfor row in data:\n    print(row["name"] + ": 年龄=" + str(row["age"]) + ", 薪资=" + str(row["salary"]) + ", 部门=" + row["department"])' },
          { question: '2. 异常值检测：使用IQR方法检测数据中的异常值。', initialCode: '# IQR异常值检测\nimport math\n\n# 销售数据\nsales = [120, 135, 118, 142, 156, 168, 175, 162, 185, 192, 205, 218, 500, 35, 178]\n\nprint("=== 异常值检测 (IQR方法) ===")\nprint("原始数据: " + str(sales))\n\ndef detect_outliers(data):\n    sorted_data = sorted(data)\n    n = len(sorted_data)\n    q1_idx = n // 4\n    q3_idx = 3 * n // 4\n    q1 = sorted_data[q1_idx]\n    q3 = sorted_data[q3_idx]\n    iqr = q3 - q1\n    lower_bound = q1 - 1.5 * iqr\n    upper_bound = q3 + 1.5 * iqr\n    outliers = [x for x in data if x < lower_bound or x > upper_bound]\n    return outliers, lower_bound, upper_bound\n\noutliers, lower, upper = detect_outliers(sales)\nprint("Q1: " + str(sorted(sales)[len(sales)//4]))\nprint("Q3: " + str(sorted(sales)[3*len(sales)//4]))\nprint("IQR: " + str(sorted(sales)[3*len(sales)//4] - sorted(sales)[len(sales)//4]))\nprint("下限: " + str(round(lower, 1)) + ", 上限: " + str(round(upper, 1)))\nprint("检测到的异常值: " + str(outliers))\n\n# 处理异常值（替换为中位数）\nmedian = sorted(sales)[len(sales)//2]\ncleaned = [x if x >= lower and x <= upper else median for x in sales]\nprint("处理后数据: " + str(cleaned))\nprint("替换的值: " + str(median) + "(中位数)")' },
          { question: '3. 重复数据删除：识别并删除重复的记录。', initialCode: '# 重复数据删除\nimport math\n\n# 包含重复的数据\nrecords = [\n    {"id": "001", "name": "张三", "email": "zhangsan@example.com"},\n    {"id": "002", "name": "李四", "email": "lisi@example.com"},\n    {"id": "001", "name": "张三", "email": "zhangsan@example.com"},\n    {"id": "003", "name": "王五", "email": "wangwu@example.com"},\n    {"id": "002", "name": "李四", "email": "lisi@example.com"},\n    {"id": "004", "name": "赵六", "email": "zhaoliu@example.com"},\n    {"id": "003", "name": "王五", "email": "wangwu@example.com"},\n    {"id": "005", "name": "钱七", "email": "qianqi@example.com"}]\n\nprint("=== 重复数据检测 ===")\nprint("原始记录数: " + str(len(records)))\n\nseen = set()\nduplicates = []\nunique_records = []\n\nfor row in records:\n    key = (row["id"], row["email"])\n    if key in seen:\n        duplicates.append(row)\n    else:\n        seen.add(key)\n        unique_records.append(row)\n\nprint("重复记录数: " + str(len(duplicates)))\nprint("重复记录:")\nfor d in duplicates:\n    print("  " + d["id"] + " - " + d["name"])\n\nprint("\\n去重后记录数: " + str(len(unique_records)))\nprint("去重后记录:")\nfor r in unique_records:\n    print("  " + r["id"] + " - " + r["name"] + " - " + r["email"])' },
          { question: '4. 数据类型转换：将字符串转换为正确的数据类型。', initialCode: '# 数据类型转换\nimport math\n\n# 原始数据（字符串格式）\nraw_data = [\n    ["25", "8000", "2023-01-15", "true"],\n    ["30", "9500", "2022-06-20", "false"],\n    ["35", "11000", "2021-03-10", "true"],\n    ["28", "8800", "2023-05-05", "true"],\n    ["41", "10500", "2020-11-28", "false"]]\n\nheaders = ["age", "salary", "hire_date", "is_active"]\n\nprint("=== 数据类型转换 ===")\nprint("原始数据:")\nfor row in raw_data:\n    print("  " + str(row))\n\nprint("\\n转换后数据:")\nconverted = []\nfor row in raw_data:\n    converted_row = {\n        "age": int(row[0]),\n        "salary": int(row[1]),\n        "hire_date": row[2],\n        "is_active": row[3].lower() == "true"\n    }\n    converted.append(converted_row)\n    print("  " + str(converted_row))\n\n# 验证类型\nprint("\\n类型验证:")\nfor i, row in enumerate(converted):\n    print("记录" + str(i+1) + ":")\n    for key, value in row.items():\n        print("  " + key + ": " + str(type(value).__name__) + " = " + str(value))' },
          { question: '5. 数据标准化：将数据缩放到指定范围。', initialCode: '# 数据标准化\nimport math\n\n# 原始数据\nscores = [65, 72, 81, 55, 90, 78, 62, 85, 70, 68, 92, 88, 75, 60, 80]\n\nprint("=== 数据标准化 ===")\nprint("原始数据: " + str(scores))\nprint("最小值: " + str(min(scores)) + ", 最大值: " + str(max(scores)))\n\n# 最小-最大标准化 (Min-Max Scaling)\ndef min_max_scale(data, new_min=0, new_max=1):\n    min_val = min(data)\n    max_val = max(data)\n    if max_val == min_val:\n        return [new_min] * len(data)\n    return [new_min + (x - min_val) * (new_max - new_min) / (max_val - min_val) for x in data]\n\n# Z-score标准化\ndef z_score_scale(data):\n    mean = sum(data) / len(data)\n    variance = sum((x - mean) ** 2 for x in data) / len(data)\n    std = math.sqrt(variance)\n    if std == 0:\n        return [0] * len(data)\n    return [(x - mean) / std for x in data]\n\nscaled_minmax = min_max_scale(scores)\nscaled_zscore = z_score_scale(scores)\n\nprint("\\n最小-最大标准化 (0-1):")\nprint(", ".join(str(round(x, 4)) for x in scaled_minmax))\n\nprint("\\nZ-score标准化:")\nprint(", ".join(str(round(x, 4)) for x in scaled_zscore))\n\nprint("\\n标准化后统计:")\nprint("Min-Max: 均值=" + str(round(sum(scaled_minmax)/len(scaled_minmax), 4)) + ", 标准差=" + str(round(math.sqrt(sum((x - sum(scaled_minmax)/len(scaled_minmax))**2 for x in scaled_minmax)/len(scaled_minmax)), 4)))\nprint("Z-score: 均值=" + str(round(sum(scaled_zscore)/len(scaled_zscore), 4)) + ", 标准差=" + str(round(math.sqrt(sum((x - sum(scaled_zscore)/len(scaled_zscore))**2 for x in scaled_zscore)/len(scaled_zscore)), 4))' }
        ]
      },
      {
        id: 2,
        title: '数据清洗项目',
        type: '项目',
        passing_score: 75,
        content: [
          { question: '1. 完整数据清洗流程：处理缺失值、异常值和重复数据。', initialCode: '# 完整数据清洗流程\nimport math\n\n# 原始数据集\nraw_data = [\n    {"id": "001", "name": "张三", "age": 28, "salary": 8000, "department": "技术部"},\n    {"id": "002", "name": "李四", "age": None, "salary": 9500, "department": "市场部"},\n    {"id": "003", "name": "王五", "age": 35, "salary": 150000, "department": "技术部"},\n    {"id": "004", "name": "赵六", "age": 29, "salary": 11000, "department": None},\n    {"id": "002", "name": "李四", "age": 32, "salary": 9500, "department": "市场部"},\n    {"id": "005", "name": "钱七", "age": 41, "salary": 10500, "department": "财务部"},\n    {"id": "006", "name": "孙八", "age": 26, "salary": 8800, "department": "市场部"},\n    {"id": "007", "name": "周九", "age": 30, "salary": None, "department": "技术部"},\n    {"id": "008", "name": "吴十", "age": 33, "salary": 13000, "department": "销售部"},\n    {"id": "001", "name": "张三", "age": 28, "salary": 8000, "department": "技术部"},\n    {"id": "009", "name": "郑华", "age": 180, "salary": 16000, "department": "产品部"},\n    {"id": "010", "name": "王芳", "age": 27, "salary": 12000, "department": "财务部"}]\n\nprint("=" * 60)\nprint("          完整数据清洗流程")\nprint("=" * 60)\nprint("原始记录数: " + str(len(raw_data)))\n\n# 步骤1: 删除重复数据\nprint("\\n【步骤1: 删除重复数据】")\nseen = set()\nunique_data = []\nduplicate_count = 0\nfor row in raw_data:\n    key = (row["id"], row["name"])\n    if key in seen:\n        duplicate_count = duplicate_count + 1\n    else:\n        seen.add(key)\n        unique_data.append(row)\nprint("删除重复记录数: " + str(duplicate_count))\nprint("去重后记录数: " + str(len(unique_data)))\n\n# 步骤2: 处理缺失值\nprint("\\n【步骤2: 处理缺失值】")\nages = [r["age"] for r in unique_data if r["age"] is not None]\nsalaries = [r["salary"] for r in unique_data if r["salary"] is not None]\navg_age = round(sum(ages) / len(ages))\navg_salary = round(sum(salaries) / len(salaries))\nfor row in unique_data:\n    if row["age"] is None:\n        row["age"] = avg_age\n    if row["salary"] is None:\n        row["salary"] = avg_salary\n    if row["department"] is None:\n        row["department"] = "未知"\nprint("填充年龄均值: " + str(avg_age))\nprint("填充薪资均值: " + str(avg_salary))\n\n# 步骤3: 检测并处理异常值\nprint("\\n【步骤3: 处理异常值】")\nsalary_data = [r["salary"] for r in unique_data]\nage_data = [r["age"] for r in unique_data]\nsorted_sal = sorted(salary_data)\nsorted_age = sorted(age_data)\nq1_sal = sorted_sal[len(sorted_sal)//4]\nq3_sal = sorted_sal[3*len(sorted_sal)//4]\niqr_sal = q3_sal - q1_sal\nupper_sal = q3_sal + 1.5 * iqr_sal\nupper_age = 100\nfor row in unique_data:\n    if row["salary"] > upper_sal:\n        row["salary"] = round(sum(salary_data) / len(salary_data))\n    if row["age"] > upper_age:\n        row["age"] = round(sum(age_data) / len(age_data))\nprint("薪资上限阈值: " + str(round(upper_sal)))\nprint("年龄上限阈值: " + str(upper_age))\n\nprint("\\n【清洗完成】")\nprint("清洗后记录数: " + str(len(unique_data)))\nprint("示例记录:")\nfor row in unique_data[:3]:\n    print("  " + str(row))\nprint("=" * 60)' },
          { question: '2. 数据质量报告：生成数据质量评估报告。', initialCode: '# 数据质量报告\nimport math\n\n# 数据集\ndataset = [\n    {"id": "001", "name": "张三", "age": 28, "email": "zhangsan@example.com", "status": "active"},\n    {"id": "002", "name": None, "age": 32, "email": "lisi@example.com", "status": "active"},\n    {"id": "003", "name": "王五", "age": None, "email": None, "status": "inactive"},\n    {"id": "004", "name": "赵六", "age": 29, "email": "zhaoliu@example.com", "status": "active"},\n    {"id": "005", "name": "钱七", "age": 41, "email": "qianqi@example.com", "status": "active"},\n    {"id": "006", "name": "孙八", "age": 26, "email": "sunba@", "status": "inactive"},\n    {"id": "007", "name": "周九", "age": 30, "email": "zhoujiu@example.com", "status": "active"},\n    {"id": "008", "name": "吴十", "age": 33, "email": "wushi@example.com", "status": None},\n    {"id": "009", "name": "郑华", "age": 180, "email": "zhenghua@example.com", "status": "active"},\n    {"id": "010", "name": "王芳", "age": 27, "email": "wangfang@example.com", "status": "active"}]\n\nprint("=" * 60)\nprint("          数据质量报告")\nprint("=" * 60)\n\n# 基本统计\nprint("\\n【基本信息】")\nprint("记录总数: " + str(len(dataset)))\nprint("字段数: " + str(len(dataset[0].keys())))\nprint("字段列表: " + ", ".join(dataset[0].keys()))\n\n# 缺失值分析\nprint("\\n【缺失值分析】")\nmissing_stats = {}\nfor field in dataset[0].keys():\n    missing = sum(1 for row in dataset if row[field] is None)\n    pct = missing / len(dataset) * 100\n    missing_stats[field] = {"count": missing, "pct": pct}\n    print(field + ": " + str(missing) + "条缺失 (" + str(round(pct, 1)) + "%)")\n\n# 数据类型分析\nprint("\\n【数据类型分析】")\nfor field in ["age"]:\n    values = [row[field] for row in dataset if row[field] is not None]\n    if values:\n        print(field + ": 最小值=" + str(min(values)) + ", 最大值=" + str(max(values)) + ", 均值=" + str(round(sum(values)/len(values))))\n\n# 异常值检测\nprint("\\n【异常值检测】")\nage_values = [row["age"] for row in dataset if row["age"] is not None]\nif age_values:\n    sorted_ages = sorted(age_values)\n    q1 = sorted_ages[len(sorted_ages)//4]\n    q3 = sorted_ages[3*len(sorted_ages)//4]\n    iqr = q3 - q1\n    lower = q1 - 1.5 * iqr\n    upper = q3 + 1.5 * iqr\n    outliers = [x for x in age_values if x < lower or x > upper]\n    print("年龄字段异常值: " + str(outliers))\n\n# 格式验证\nprint("\\n【格式验证】")\nemail_errors = []\nfor row in dataset:\n    email = row["email"]\n    if email is not None and "@" not in email:\n        email_errors.append(row["id"])\nprint("邮箱格式错误记录ID: " + str(email_errors) if email_errors else "邮箱格式全部正确")\n\n# 质量评分\ntotal_fields = len(dataset) * len(dataset[0].keys())\ntotal_missing = sum(m["count"] for m in missing_stats.values())\ncompleteness = (total_fields - total_missing) / total_fields * 100\nprint("\\n【质量评分】")\nprint("数据完整性: " + str(round(completeness, 1)) + "%")\nprint("异常值比例: " + str(round(len(outliers)/len(age_values)*100, 1)) + "%")\nprint("格式错误率: " + str(round(len(email_errors)/len(dataset)*100, 1)) + "%")\n\nprint("\\n" + "=" * 60)\nprint("综合评估: " + ("优秀" if completeness >= 90 else "良好" if completeness >= 70 else "较差"))\nprint("=" * 60)' },
          { question: '3. 数据集成合并：合并多个数据源。', initialCode: '# 数据集成合并\nimport math\n\n# 员工基础信息\nemployees = [\n    {"id": "001", "name": "张三", "department": "技术部", "position": "工程师"},\n    {"id": "002", "name": "李四", "department": "市场部", "position": "经理"},\n    {"id": "003", "name": "王五", "department": "技术部", "position": "高级工程师"},\n    {"id": "004", "name": "赵六", "department": "销售部", "position": "销售代表"},\n    {"id": "005", "name": "钱七", "department": "财务部", "position": "会计"},\n    {"id": "006", "name": "孙八", "department": "市场部", "position": "专员"},\n    {"id": "007", "name": "周九", "department": "技术部", "position": "工程师"},\n    {"id": "008", "name": "吴十", "department": "销售部", "position": "经理"}]\n\n# 员工薪资信息\nsalaries = [\n    {"id": "001", "base_salary": 12000, "bonus": 3000, "overtime": 500},\n    {"id": "002", "base_salary": 15000, "bonus": 5000, "overtime": 0},\n    {"id": "003", "base_salary": 18000, "bonus": 4500, "overtime": 1200},\n    {"id": "004", "base_salary": 10000, "bonus": 2000, "overtime": 800},\n    {"id": "005", "base_salary": 11000, "bonus": 1500, "overtime": 0},\n    {"id": "006", "base_salary": 9000, "bonus": 1000, "overtime": 300},\n    {"id": "009", "base_salary": 13000, "bonus": 3500, "overtime": 600},\n    {"id": "010", "base_salary": 14000, "bonus": 4000, "overtime": 0}]\n\n# 员工考勤信息\nattendance = [\n    {"id": "001", "days_worked": 22, "days_absent": 1, "late_count": 2},\n    {"id": "002", "days_worked": 20, "days_absent": 3, "late_count": 0},\n    {"id": "003", "days_worked": 23, "days_absent": 0, "late_count": 1},\n    {"id": "004", "days_worked": 21, "days_absent": 2, "late_count": 3},\n    {"id": "005", "days_worked": 22, "days_absent": 1, "late_count": 0},\n    {"id": "007", "days_worked": 19, "days_absent": 4, "late_count": 2},\n    {"id": "008", "days_worked": 22, "days_absent": 1, "late_count": 1}]\n\nprint("=" * 70)\nprint("          数据集成合并")\nprint("=" * 70)\n\nprint("\\n【数据源信息】")\nprint("员工信息: " + str(len(employees)) + "条记录")\nprint("薪资信息: " + str(len(salaries)) + "条记录")\nprint("考勤信息: " + str(len(attendance)) + "条记录")\n\n# 创建索引\nsalary_index = {s["id"]: s for s in salaries}\nattendance_index = {a["id"]: a for a in attendance}\n\n# 合并数据\nmerged = []\nfor emp in employees:\n    emp_id = emp["id"]\n    merged_row = emp.copy()\n    if emp_id in salary_index:\n        merged_row.update(salary_index[emp_id])\n        merged_row["total_salary"] = merged_row["base_salary"] + merged_row["bonus"] + merged_row["overtime"]\n    else:\n        merged_row["base_salary"] = None\n        merged_row["bonus"] = None\n        merged_row["overtime"] = None\n        merged_row["total_salary"] = None\n    if emp_id in attendance_index:\n        merged_row.update(attendance_index[emp_id])\n    else:\n        merged_row["days_worked"] = None\n        merged_row["days_absent"] = None\n        merged_row["late_count"] = None\n    merged.append(merged_row)\n\nprint("\\n【合并结果】")\nprint("合并后记录数: " + str(len(merged)))\nprint("\\n完整记录示例:")\nprint("ID | 姓名 | 部门 | 职位 | 基本工资 | 奖金 | 加班费 | 总薪资 | 出勤天数")\nprint("-" * 70)\nfor row in merged:\n    print(row["id"] + " | " + row["name"] + " | " + row["department"] + " | " + row["position"] + " | " + (str(row["base_salary"]) if row["base_salary"] else "N/A") + " | " + (str(row["bonus"]) if row["bonus"] else "N/A") + " | " + (str(row["overtime"]) if row["overtime"] else "N/A") + " | " + (str(row["total_salary"]) if row["total_salary"] else "N/A") + " | " + (str(row["days_worked"]) if row["days_worked"] else "N/A"))\n\n# 统计\ncomplete_count = sum(1 for row in merged if row["total_salary"] is not None and row["days_worked"] is not None)\nprint("\\n【统计信息】")\nprint("完整记录数(包含薪资和考勤): " + str(complete_count))\nprint("薪资缺失记录数: " + str(sum(1 for row in merged if row["base_salary"] is None)))\nprint("考勤缺失记录数: " + str(sum(1 for row in merged if row["days_worked"] is None)))\n\ntotal_payroll = sum(row["total_salary"] for row in merged if row["total_salary"] is not None)\nprint("\\n薪资汇总: " + str(total_payroll) + "元")\nprint("=" * 70)' }
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
          { question: '1. 将日期字符串列表解析为年、月、日数值。输入格式 "2024-03-15"。', initialCode: '# 日期字符串解析\ndates = ["2024-01-01", "2024-02-15", "2024-03-30", "2024-06-15"]\nparsed = []\nfor d in dates:\n    parts = d.split("-")\n    y, m, day = int(parts[0]), int(parts[1]), int(parts[2])\n    parsed.append((y, m, day))\n    print(d, "-> 年:", y, "月:", m, "日:", day)\nprint("解析完成,共", len(parsed), "条记录")' },
          { question: '2. 按月份对销售数据进行重采样聚合：按月份将每日销售额求和。', initialCode: '# 月度聚合\nsales = [100, 120, 150, 180, 200, 170, 190, 210, 230, 250, 220, 240, 260, 280]\nmonths = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7]\nmonthly = {}\nfor m, s in zip(months, sales):\n    monthly[m] = monthly.get(m, 0) + s\nfor m in sorted(monthly.keys()):\n    print(str(m) + "月销售额:", monthly[m])' },
          { question: '3. 对时间序列进行一次差分（差分 = 当前值 - 前一值），这是ARIMA中I(积分)的核心操作。', initialCode: '# 一阶差分\ndata = [100, 110, 125, 120, 135, 150, 145, 160, 175, 170, 185, 200]\ndiff = []\nfor i in range(1, len(data)):\n    diff.append(data[i] - data[i-1])\nprint("原始:", data)\nprint("差分:", diff)\nprint("差分序列长度:", len(diff))' },
          { question: '4. 使用简单移动平均法对时间序列做预测。窗口大小window=3。', initialCode: '# 移动平均预测\ndata = [100, 110, 120, 130, 140, 150, 160, 170, 180, 190]\nwindow = 3\nsma = []\nfor i in range(window - 1, len(data)):\n    avg = sum(data[i-window+1:i+1]) / window\n    sma.append(round(avg, 2))\nprint("数据:", data)\nprint("移动平均(window=3):", sma)\nnext_pred = round(sum(data[-window:]) / window, 2)\nprint("下一期预测:", next_pred)' },
          { question: '5. 对时间序列进行简单季节性分解：计算趋势、季节、残差。假设周期period=4。', initialCode: '# 季节性分解\ndata = [100, 130, 120, 150, 110, 140, 130, 160, 120, 150, 140, 170]\nperiod = 4\nn = len(data)\ntrend = []\nfor i in range(n):\n    left = max(0, i - period // 2)\n    right = min(n, i + period // 2 + 1)\n    trend.append(round(sum(data[left:right]) / (right - left), 2))\nseasonal = [round(data[i] - trend[i], 2) for i in range(n)]\nresidual = [round(data[i] - trend[i] - seasonal[i % period], 2) for i in range(n)]\nprint("数据:", data)\nprint("趋势:", trend)\nprint("季节:", seasonal)\nprint("残差:", residual)' }
        ]
      },
      {
        id: 2,
        title: '时间序列预测项目',
        type: '项目',
        passing_score: 75,
        content: [
          { question: '1. 分析销售数据的趋势与季节性：计算月均销售额、同比增长率、并识别峰值月份。', initialCode: '# 销售数据分析\nmonths = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]\nsales_2023 = [200, 220, 280, 350, 400, 450, 520, 600, 550, 480, 420, 700]\nsales_2024 = [250, 270, 320, 400, 460, 500, 580, 660, 620, 550, 490, 800]\navg_2023 = round(sum(sales_2023) / len(sales_2023), 2)\nprint("2023月均销售额:", avg_2023)\nfor i in range(len(months)):\n    growth = round((sales_2024[i] - sales_2023[i]) / sales_2023[i] * 100, 1)\n    print(months[i] + " 同比增长:", str(growth) + "%")\npeak_idx = sales_2024.index(max(sales_2024))\nprint("峰值月份:", months[peak_idx], "销售额:", sales_2024[peak_idx])' },
          { question: '2. 使用指数平滑法构建简单预测模型，并输出未来3期的预测值。', initialCode: '# 指数平滑预测\ndata = [100, 110, 120, 130, 140, 150, 160, 170, 180, 190]\nalpha = 0.3\nforecast = data[0]\nprint("期次", 1, "实际:", data[0], "预测:", round(forecast, 2))\nfor t in range(1, len(data)):\n    forecast = alpha * data[t] + (1 - alpha) * forecast\n    print("期次", t + 1, "实际:", data[t], "预测:", round(forecast, 2))\nfuture_steps = 3\nfor s in range(1, future_steps + 1):\n    print("未来第", s, "期预测:", round(forecast, 2))' },
          { question: '3. 计算模型预测性能指标：MAE(平均绝对误差)、MSE(均方误差)、MAPE(平均绝对百分比误差)。', initialCode: '# 模型性能评估\ny_true = [100, 110, 125, 120, 135, 150, 145, 160, 175, 170, 185, 200]\ny_pred = [102, 108, 123, 125, 133, 148, 150, 158, 172, 175, 183, 198]\nerrors_abs = [abs(t - p) for t, p in zip(y_true, y_pred)]\nerrors_sq = [(t - p) ** 2 for t, p in zip(y_true, y_pred)]\nerrors_pct = [abs(t - p) / t * 100 for t, p in zip(y_true, y_pred) if t != 0]\nmae = round(sum(errors_abs) / len(errors_abs), 2)\nmse = round(sum(errors_sq) / len(errors_sq), 2)\nmape = round(sum(errors_pct) / len(errors_pct), 2)\nprint("MAE:", mae)\nprint("MSE:", mse)\nprint("MAPE:", str(mape) + "%")' }
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
          { question: '1. 实现并对比不同激活函数(sigmoid, tanh, ReLU)在相同输入上的输出，理解非线性的作用。', initialCode: '# 激活函数对比\nimport math\n\ndef sigmoid(x):\n    return 1 / (1 + math.exp(-x))\n\ndef tanh_func(x):\n    return math.tanh(x)\n\ndef relu(x):\n    return max(0, x)\n\ninputs = [-2, -1, 0, 1, 2]\nfor x in inputs:\n    s = round(sigmoid(x), 4)\n    t = round(tanh_func(x), 4)\n    r = relu(x)\n    print("x=" + str(x), " sigmoid=" + str(s), " tanh=" + str(t), " ReLU=" + str(r))\nprint("ReLU在x>0时引入线性,x<=0时截断,创造非线性能力")' },
          { question: '2. 实现简单感知器的前向传播与权重更新，演示反向传播的核心思想：用损失梯度来更新权重。', initialCode: '# 感知器训练\ninputs = [[0, 0], [0, 1], [1, 0], [1, 1]]\nlabels = [0, 0, 0, 1]\nweights = [0.0, 0.0]\nbias = 0.0\nlr = 0.1\nfor epoch in range(20):\n    total_error = 0\n    for xi, y in zip(inputs, labels):\n        z = xi[0] * weights[0] + xi[1] * weights[1] + bias\n        pred = 1 if z >= 0 else 0\n        error = y - pred\n        total_error += abs(error)\n        weights[0] += lr * error * xi[0]\n        weights[1] += lr * error * xi[1]\n        bias += lr * error\n    if total_error == 0:\n        print("epoch", epoch + 1, "收敛 误差=0")\n        break\nprint("最终权重:", [round(w, 2) for w in weights], "偏置:", round(bias, 2))' },
          { question: '3. 实现2x2最大池化操作：从4x4矩阵中选取每个2x2区域的最大值，理解池化层如何降低特征维度。', initialCode: '# 最大池化\nfeature = [\n    [1, 2, 3, 4],\n    [5, 6, 7, 8],\n    [9, 10, 11, 12],\n    [13, 14, 15, 16]\n]\npooled = []\nfor i in range(0, 4, 2):\n    row = []\n    for j in range(0, 4, 2):\n        block = [feature[i][j], feature[i][j+1], feature[i+1][j], feature[i+1][j+1]]\n        row.append(max(block))\n    pooled.append(row)\nprint("原始4x4特征图:")\nfor r in feature:\n    print(r)\nprint("2x2最大池化后:")\nfor r in pooled:\n    print(r)\nprint("参数数量从16减到", len(pooled) * len(pooled[0]))' },
          { question: '4. 实现一个简易循环单元(RNN cell)，展示序列数据如何通过时间步传递隐藏状态，理解LSTM的循环结构思想。', initialCode: '# 简易RNN单元\nimport math\n\ndef sigmoid(x):\n    return 1 / (1 + math.exp(-x))\n\nseq = [0.1, 0.3, 0.5, 0.7, 0.9]\nhidden = 0.0\nw_h = 0.5\nw_x = 0.8\nprint("序列长度:", len(seq))\nfor t, xt in enumerate(seq):\n    hidden = sigmoid(w_h * hidden + w_x * xt)\n    print("t=" + str(t), "x=" + str(xt), "h=" + str(round(hidden, 4)))\nprint("最终隐藏状态携带了整个序列的信息")' },
          { question: '5. 实现梯度下降的核心流程：手动计算损失、求导、更新参数。这是PyTorch中backward()和step()的基础原理。', initialCode: '# 梯度下降\nX = [1, 2, 3, 4, 5]\ny = [2, 4, 6, 8, 10]\nw = 0.0\nb = 0.0\nlr = 0.01\nfor epoch in range(200):\n    dw = 0.0\n    db = 0.0\n    loss = 0.0\n    for xi, yi in zip(X, y):\n        pred = w * xi + b\n        loss += (pred - yi) ** 2\n        dw += 2 * (pred - yi) * xi\n        db += 2 * (pred - yi)\n    w -= lr * dw / len(X)\n    b -= lr * db / len(X)\n    if epoch % 50 == 0:\n        print("epoch", epoch, "loss=" + str(round(loss / len(X), 4)) + " w=" + str(round(w, 3)) + " b=" + str(round(b, 3)))\nprint("最终预测:")\nfor xi in X:\n    print("x=" + str(xi), "y=" + str(round(w * xi + b, 2)))' }
        ]
      },
      {
        id: 2,
        title: '深度学习项目',
        type: '项目',
        passing_score: 75,
        content: [
          { question: '1. 构建简化版手写数字识别模型：使用纯Python实现一个两层神经网络，对手写数字模式进行分类。', initialCode: '# 简易数字识别(两层网络)\nimport math\n\ndef sigmoid(x):\n    return 1 / (1 + math.exp(-x))\n\ndef softmax(scores):\n    exps = [math.exp(s) for s in scores]\n    total = sum(exps)\n    return [round(e / total, 4) for e in exps]\n\nW1 = [[0.1, 0.2], [0.3, 0.4], [0.5, 0.6]]\nb1 = [0.1, 0.1, 0.1]\nW2 = [[0.1, 0.2, 0.3], [0.4, 0.5, 0.6]]\nb2 = [0.1, 0.1]\n\ninputs = [[1.0, 0.5], [0.3, 0.8], [0.9, 0.2]]\nfor idx, x in enumerate(inputs):\n    h = [sigmoid(x[0]*W1[i][0] + x[1]*W1[i][1] + b1[i]) for i in range(3)]\n    scores = [sum(h[j]*W2[k][j] for j in range(3)) + b2[k] for k in range(2)]\n    probs = softmax(scores)\n    print("样本", idx + 1, "隐藏层:", [round(v, 3) for v in h], "类别概率:", probs)' },
          { question: '2. 模拟模型训练并评估性能：在简单二分类数据集上训练感知器，记录每个epoch的准确率和损失。', initialCode: '# 训练与评估\nX = [[0, 0], [0, 1], [1, 0], [1, 1], [2, 0], [0, 2], [2, 2]]\ny = [0, 0, 0, 1, 1, 1, 1]\nweights = [0.0, 0.0]\nbias = 0.0\nlr = 0.05\nfor epoch in range(30):\n    correct = 0\n    total_loss = 0.0\n    for xi, label in zip(X, y):\n        z = xi[0]*weights[0] + xi[1]*weights[1] + bias\n        pred = 1 if z >= 0 else 0\n        total_loss += (label - pred) ** 2\n        if pred == label:\n            correct += 1\n        weights[0] += lr * (label - pred) * xi[0]\n        weights[1] += lr * (label - pred) * xi[1]\n        bias += lr * (label - pred)\n    acc = round(correct / len(y), 3)\n    if epoch % 5 == 0:\n        print("epoch", epoch, "准确率=" + str(acc), "损失=" + str(total_loss))\nprint("模型训练完成,最终权重:", [round(w, 3) for w in weights])' },
          { question: '3. 分析模型性能曲线：记录多轮训练的损失与准确率变化，输出结构化的训练日志用于分析收敛情况。', initialCode: '# 训练曲线分析\nlosses = [1.20, 0.85, 0.62, 0.48, 0.39, 0.32, 0.27, 0.23, 0.20, 0.18, 0.16, 0.15, 0.14, 0.13, 0.12]\naccs = [0.52, 0.68, 0.74, 0.79, 0.83, 0.86, 0.88, 0.89, 0.91, 0.92, 0.93, 0.93, 0.94, 0.94, 0.95]\nprint("=== 训练曲线 ===")\nfor i in range(len(losses)):\n    loss_str = str(round(losses[i], 3))\n    acc_str = str(round(accs[i] * 100, 1)) + "%"\n    bar = "#" * int(losses[i] * 30)\n    print("epoch", str(i+1).zfill(2), "loss=" + loss_str, "acc=" + acc_str, bar)\nfinal_loss = round(losses[-1], 3)\nfinal_acc = round(accs[-1] * 100, 1)\nimprove = round((accs[-1] - accs[0]) * 100, 1)\nprint("最终损失:", final_loss, "最终准确率:", str(final_acc) + "%", "提升:", str(improve) + "%")' }
        ]
      }
    ]
  }
];