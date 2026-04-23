import { create } from 'zustand';

interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  input_format: string;
  task_goals: string;
  output_requirements: string;
  sample_code?: string;
  sample_solution?: string;
}

interface Progress {
  project_id: string;
  completed: boolean;
  progress_percentage: number;
}

interface ProjectState {
  projects: Project[];
  progress: Progress[];
  isLoading: boolean;
  error: string | null;
  getProjects: () => Promise<void>;
  getProjectById: (id: string) => Project | undefined;
  updateProgress: (projectId: string, progress: number, completed: boolean) => void;
  submitSolution: (projectId: string, code: string) => Promise<void>;
}

// 模拟项目数据
const mockProjects: Project[] = [
  {
    id: '1',
    title: '基础数据清洗 - 订单数据预处理',
    description: '处理订单数据中的缺失值、异常值和格式问题',
    difficulty: 'beginner',
    input_format: 'orders.csv with order_id, customer_id, order_date, amount, status, product_id, quantity',
    task_goals: '1. 处理日期格式不统一问题\n2. 识别并处理缺失值\n3. 检测并处理异常值\n4. 数据类型转换',
    output_requirements: '清洗后的订单数据，包含标准化的日期格式、合理的数值范围\n数据质量报告，包括缺失值和异常值的处理情况',
    sample_code: `import pandas as pd\n\n# 读取数据\ndf = pd.read_csv('orders.csv')\n\n# 处理日期格式\ndf['order_date'] = pd.to_datetime(df['order_date'], errors='coerce')\n\n# 处理缺失值\ndf['quantity'] = df['quantity'].fillna(1)\n\n# 处理异常值\ndf = df[df['amount'] > 0]\ndf = df[df['amount'] < 10000]\n\n# 数据类型转换\ndf['order_id'] = df['order_id'].astype(str)\ndf['customer_id'] = df['customer_id'].astype(str)\ndf['product_id'] = df['product_id'].astype(str)\n\nprint(df.head())\nprint("\n数据质量报告:")\nprint(f"缺失值数量: {df.isnull().sum().sum()}")\nprint(f"数据行数: {len(df)}")`,
    sample_solution: `import pandas as pd\n\n# 读取数据\ndf = pd.read_csv('orders.csv')\n\n# 1. 处理日期格式不统一问题\ndf['order_date'] = pd.to_datetime(df['order_date'], errors='coerce')\n\n# 2. 识别并处理缺失值\nmissing_values = df.isnull().sum()\nprint("缺失值统计:")\nprint(missing_values)\n\n# 填充缺失值\ndf['quantity'] = df['quantity'].fillna(1)\ndf['status'] = df['status'].fillna('unknown')\n\n# 3. 检测并处理异常值\n# 使用IQR方法检测异常值\nQ1 = df['amount'].quantile(0.25)\nQ3 = df['amount'].quantile(0.75)\nIQR = Q3 - Q1\nlower_bound = Q1 - 1.5 * IQR\nupper_bound = Q3 + 1.5 * IQR\n\n# 过滤异常值\ndf = df[(df['amount'] >= lower_bound) & (df['amount'] <= upper_bound)]\n\n# 4. 数据类型转换\ndf['order_id'] = df['order_id'].astype(str)\ndf['customer_id'] = df['customer_id'].astype(str)\ndf['product_id'] = df['product_id'].astype(str)\n\n# 输出结果\nprint("\n清洗后的数据:")\nprint(df.head())\n\nprint("\n数据质量报告:")\nprint(f"总数据行数: {len(df)}")\nprint(f"缺失值数量: {df.isnull().sum().sum()}")\nprint(f"数值列统计:")\nprint(df[['amount', 'quantity']].describe())`
  },
  {
    id: '2',
    title: '用户行为分析 - 浏览与购买转化',
    description: '分析用户从浏览到购买的转化路径',
    difficulty: 'beginner',
    input_format: 'user_behavior.csv with user_id, timestamp, behavior_type, product_id, category_id',
    task_goals: '1. 计算不同行为类型的分布\n2. 分析用户从浏览到购买的转化路径\n3. 识别高转化品类',
    output_requirements: '用户行为漏斗分析报告\n各品类转化率排名\n转化时间分布分析',
    sample_code: `import pandas as pd\n\n# 读取数据\ndf = pd.read_csv('user_behavior.csv')\n\n# 转换时间戳\ndf['timestamp'] = pd.to_datetime(df['timestamp'])\n\n# 计算行为类型分布\nbehavior_dist = df['behavior_type'].value_counts()\nprint("行为类型分布:")\nprint(behavior_dist)\n\n# 分析转化路径\n# 计算每个用户的行为序列\nuser_behaviors = df.groupby('user_id')['behavior_type'].agg(list).reset_index()\n\n# 识别完成购买的用户\npurchase_users = df[df['behavior_type'] == '购买']['user_id'].unique()\nprint(f"\n完成购买的用户数: {len(purchase_users)}")\nprint(f"总用户数: {df['user_id'].nunique()}")\nprint(f"转化率: {len(purchase_users) / df['user_id'].nunique() * 100:.2f}%")`,
    sample_solution: `import pandas as pd\nimport matplotlib.pyplot as plt\n\n# 读取数据\ndf = pd.read_csv('user_behavior.csv')\n\n# 转换时间戳\ndf['timestamp'] = pd.to_datetime(df['timestamp'])\n\n# 1. 计算不同行为类型的分布\nbehavior_dist = df['behavior_type'].value_counts()\nprint("行为类型分布:")\nprint(behavior_dist)\n\n# 2. 分析用户从浏览到购买的转化路径\n# 计算每个用户的行为序列\nuser_behaviors = df.groupby('user_id')['behavior_type'].agg(list).reset_index()\n\n# 识别完成购买的用户\npurchase_users = df[df['behavior_type'] == '购买']['user_id'].unique()\nprint(f"\n完成购买的用户数: {len(purchase_users)}")\nprint(f"总用户数: {df['user_id'].nunique()}")\nprint(f"转化率: {len(purchase_users) / df['user_id'].nunique() * 100:.2f}%")\n\n# 3. 识别高转化品类\ncategory_conversion = df.groupby(['category_id', 'behavior_type']).size().unstack()\ncategory_conversion['转化率'] = category_conversion.get('购买', 0) / category_conversion.get('浏览', 1) * 100\ncategory_conversion = category_conversion.sort_values('转化率', ascending=False)\nprint("\n各品类转化率排名:")\nprint(category_conversion[['转化率']].head(10))\n\n# 4. 转化时间分布分析\ndf['hour'] = df['timestamp'].dt.hour\npurchase_by_hour = df[df['behavior_type'] == '购买']['hour'].value_counts().sort_index()\nprint("\n购买行为时间分布:")\nprint(purchase_by_hour)`
  },
  {
    id: '3',
    title: '购物篮关联分析 - 商品组合推荐',
    description: '使用关联规则分析商品组合',
    difficulty: 'intermediate',
    input_format: 'order_items.csv with order_id, product_id, product_name, quantity, price',
    task_goals: '1. 使用关联规则算法分析商品组合\n2. 计算支持度、置信度和提升度\n3. 识别强关联商品组合',
    output_requirements: '商品关联规则表，包含支持度、置信度和提升度\n前10个强关联商品组合推荐\n关联分析可视化图表',
    sample_code: `import pandas as pd\nfrom mlxtend.frequent_patterns import apriori\nfrom mlxtend.frequent_patterns import association_rules\n\n# 读取数据\ndf = pd.read_csv('order_items.csv')\n\n# 数据预处理：创建购物篮矩阵\nbasket = df.groupby(['order_id', 'product_name'])['quantity'].sum().unstack().reset_index().fillna(0).set_index('order_id')\n\n# 将数量转换为二进制值（0或1）\nbasket = basket.applymap(lambda x: 1 if x > 0 else 0)\n\n# 使用Apriori算法寻找频繁项集\nfrequent_itemsets = apriori(basket, min_support=0.05, use_colnames=True)\n\n# 生成关联规则\nrules = association_rules(frequent_itemsets, metric="confidence", min_threshold=0.1)\n\n# 按提升度排序\nrules = rules.sort_values('lift', ascending=False)\n\nprint("关联规则（按提升度排序）:")\nprint(rules[['antecedents', 'consequents', 'support', 'confidence', 'lift']].head(10))`,
    sample_solution: `import pandas as pd\nfrom mlxtend.frequent_patterns import apriori\nfrom mlxtend.frequent_patterns import association_rules\n\n# 读取数据\ndf = pd.read_csv('order_items.csv')\n\n# 1. 数据预处理：创建购物篮矩阵\nbasket = df.groupby(['order_id', 'product_name'])['quantity'].sum().unstack().reset_index().fillna(0).set_index('order_id')\n\n# 将数量转换为二进制值（0或1）\nbasket = basket.applymap(lambda x: 1 if x > 0 else 0)\n\n# 2. 使用Apriori算法寻找频繁项集\nfrequent_itemsets = apriori(basket, min_support=0.05, use_colnames=True)\nprint("频繁项集:")\nprint(frequent_itemsets.head(10))\n\n# 3. 生成关联规则\nrules = association_rules(frequent_itemsets, metric="confidence", min_threshold=0.1)\n\n# 4. 计算支持度、置信度和提升度\nrules = rules[['antecedents', 'consequents', 'support', 'confidence', 'lift']]\n\n# 5. 按提升度排序，识别强关联商品组合\nrules = rules.sort_values('lift', ascending=False)\nprint("\n强关联商品组合（按提升度排序）:")\nprint(rules.head(10))\n\n# 6. 筛选高提升度的规则\nstrong_rules = rules[rules['lift'] > 1.5]\nprint(f"\n提升度大于1.5的规则数量: {len(strong_rules)}")`
  },
  {
    id: '4',
    title: '复购率分析 - 客户忠诚度评估',
    description: '分析客户复购行为和忠诚度',
    difficulty: 'intermediate',
    input_format: 'customer_orders.csv with customer_id, order_id, order_date, amount',
    task_goals: '1. 计算客户复购率\n2. 分析复购间隔时间分布\n3. 识别高复购客户群体',
    output_requirements: '整体复购率统计\n客户分群报告（按复购频率）\n复购时间趋势分析',
    sample_code: `import pandas as pd\n\n# 读取数据\ndf = pd.read_csv('customer_orders.csv')\n\n# 转换日期格式\ndf['order_date'] = pd.to_datetime(df['order_date'])\n\n# 计算每个客户的订单数\ncustomer_order_count = df.groupby('customer_id')['order_id'].nunique().reset_index()\ncustomer_order_count.columns = ['customer_id', 'order_count']\n\n# 计算复购率（订单数 >= 2的客户比例）\nrepeat_customers = len(customer_order_count[customer_order_count['order_count'] >= 2])\ntotal_customers = len(customer_order_count)\nrepeat_rate = repeat_customers / total_customers * 100\n\nprint(f"总客户数: {total_customers}")\nprint(f"复购客户数: {repeat_customers}")\nprint(f"复购率: {repeat_rate:.2f}%")`,
    sample_solution: `import pandas as pd\n\n# 读取数据\ndf = pd.read_csv('customer_orders.csv')\n\n# 转换日期格式\ndf['order_date'] = pd.to_datetime(df['order_date'])\n\n# 1. 计算客户复购率\ncustomer_order_count = df.groupby('customer_id')['order_id'].nunique().reset_index()\ncustomer_order_count.columns = ['customer_id', 'order_count']\n\nrepeat_customers = len(customer_order_count[customer_order_count['order_count'] >= 2])\ntotal_customers = len(customer_order_count)\nrepeat_rate = repeat_customers / total_customers * 100\n\nprint(f"总客户数: {total_customers}")\nprint(f"复购客户数: {repeat_customers}")\nprint(f"复购率: {repeat_rate:.2f}%")\n\n# 2. 分析复购间隔时间分布\n# 按客户和日期排序\ndf_sorted = df.sort_values(['customer_id', 'order_date'])\n\n# 计算每个客户的订单间隔时间\ndf_sorted['prev_order_date'] = df_sorted.groupby('customer_id')['order_date'].shift(1)\ndf_sorted['days_between_orders'] = (df_sorted['order_date'] - df_sorted['prev_order_date']).dt.days\n\n# 分析间隔时间分布\ninterval_dist = df_sorted[df_sorted['days_between_orders'] > 0]['days_between_orders'].describe()\nprint("\n复购间隔时间分布:")\nprint(interval_dist)\n\n# 3. 识别高复购客户群体\ncustomer_segmentation = pd.cut(customer_order_count['order_count'], bins=[0, 1, 5, 10, float('inf')], labels=['一次性购买', '低频复购', '中频复购', '高频复购'])\ncustomer_order_count['segment'] = customer_segmentation\n\nsegment_distribution = customer_order_count['segment'].value_counts()\nprint("\n客户分群分布:")\nprint(segment_distribution)\n\n# 4. 复购时间趋势分析\ndf['month'] = df['order_date'].dt.to_period('M')\nmonthly_orders = df.groupby('month')['order_id'].nunique().reset_index()\nmonthly_orders.columns = ['month', 'order_count']\n\nprint("\n月度订单趋势:")\nprint(monthly_orders)`
  },
  {
    id: '5',
    title: 'RFM分析 - 客户价值细分',
    description: '基于RFM模型对客户进行价值细分',
    difficulty: 'intermediate',
    input_format: 'customer_transactions.csv with customer_id, transaction_date, amount',
    task_goals: '1. 计算RFM三个维度的值\n2. 对客户进行分群\n3. 分析不同客户群体的特征',
    output_requirements: 'RFM得分分布\n客户分群结果及特征分析\n各客户群体的营销建议',
    sample_code: `import pandas as pd\n\n# 读取数据\ndf = pd.read_csv('customer_transactions.csv')\n\n# 转换日期格式\ndf['transaction_date'] = pd.to_datetime(df['transaction_date'])\n\n# 计算当前日期（用于计算Recency）\ncurrent_date = df['transaction_date'].max() + pd.Timedelta(days=1)\n\n# 计算RFM值\nrfm = df.groupby('customer_id').agg(\n    Recency=('transaction_date', lambda x: (current_date - x.max()).days),\n    Frequency=('transaction_date', 'count'),\n    Monetary=('amount', 'sum')\n).reset_index()\n\nprint("RFM分析结果:")\nprint(rfm.head())`,
    sample_solution: `import pandas as pd\n\n# 读取数据\ndf = pd.read_csv('customer_transactions.csv')\n\n# 转换日期格式\ndf['transaction_date'] = pd.to_datetime(df['transaction_date'])\n\n# 1. 计算RFM三个维度的值\ncurrent_date = df['transaction_date'].max() + pd.Timedelta(days=1)\n\nrfm = df.groupby('customer_id').agg(\n    Recency=('transaction_date', lambda x: (current_date - x.max()).days),\n    Frequency=('transaction_date', 'count'),\n    Monetary=('amount', 'sum')\n).reset_index()\n\nprint("RFM分析结果:")\nprint(rfm.head())\n\n# 2. 对客户进行分群（使用四分位数）\nr_labels = range(4, 0, -1)  # Recency越小越好，所以得分越高\nf_labels = range(1, 5)      # Frequency越大越好\nm_labels = range(1, 5)      # Monetary越大越好\n\nrfm['R_score'] = pd.qcut(rfm['Recency'], q=4, labels=r_labels)\nrfm['F_score'] = pd.qcut(rfm['Frequency'], q=4, labels=f_labels, duplicates='drop')\nrfm['M_score'] = pd.qcut(rfm['Monetary'], q=4, labels=m_labels, duplicates='drop')\n\n# 计算RFM总分\nrfm['RFM_score'] = rfm['R_score'].astype(int) + rfm['F_score'].astype(int) + rfm['M_score'].astype(int)\n\n# 客户分群\ndef segment_customer(score):\n    if score >= 10:\n        return '高价值客户'\n    elif score >= 7:\n        return '中价值客户'\n    elif score >= 4:\n        return '低价值客户'\n    else:\n        return '流失客户'\n\nrfm['segment'] = rfm['RFM_score'].apply(segment_customer)\n\n# 3. 分析不同客户群体的特征\nsegment_analysis = rfm.groupby('segment').agg(\n    count=('customer_id', 'count'),\n    avg_recency=('Recency', 'mean'),\n    avg_frequency=('Frequency', 'mean'),\n    avg_monetary=('Monetary', 'mean')\n).round(2)\n\nprint("\n客户分群特征分析:")\nprint(segment_analysis)`
  },
  {
    id: '6',
    title: '留存率分析 - 用户粘性评估',
    description: '分析用户留存率和粘性',
    difficulty: 'intermediate',
    input_format: 'user_activity.csv with user_id, activity_date, activity_type, duration',
    task_goals: '1. 计算用户日/周/月留存率\n2. 分析留存率变化趋势\n3. 识别影响留存的关键因素',
    output_requirements: '留存率分析报告，包含不同时间粒度的留存率\n留存率趋势图表\n提升留存率的建议',
    sample_code: `import pandas as pd\n\n# 读取数据\ndf = pd.read_csv('user_activity.csv')\n\n# 转换日期格式\ndf['activity_date'] = pd.to_datetime(df['activity_date'])\n\n# 计算每个用户的首次活跃日期\nfirst_activity = df.groupby('user_id')['activity_date'].min().reset_index()\nfirst_activity.columns = ['user_id', 'first_date']\n\n# 合并首次活跃日期\ndf = df.merge(first_activity, on='user_id')\n\n# 计算活跃天数差\ndf['days_since_first'] = (df['activity_date'] - df['first_date']).dt.days\n\n# 计算次日留存率\nday1_users = set(df[df['days_since_first'] == 0]['user_id'])\nday2_users = set(df[df['days_since_first'] == 1]['user_id'])\nretention_rate = len(day1_users & day2_users) / len(day1_users) * 100\n\nprint(f"次日留存率: {retention_rate:.2f}%")`,
    sample_solution: `import pandas as pd\n\n# 读取数据\ndf = pd.read_csv('user_activity.csv')\n\n# 转换日期格式\ndf['activity_date'] = pd.to_datetime(df['activity_date'])\n\n# 1. 计算用户日/周/月留存率\n# 计算每个用户的首次活跃日期\nfirst_activity = df.groupby('user_id')['activity_date'].min().reset_index()\nfirst_activity.columns = ['user_id', 'first_date']\n\n# 合并首次活跃日期\ndf = df.merge(first_activity, on='user_id')\n\n# 计算活跃天数差\ndf['days_since_first'] = (df['activity_date'] - df['first_date']).dt.days\n\n# 计算次日留存率\nday0_users = set(df[df['days_since_first'] == 0]['user_id'])\nday1_users = set(df[df['days_since_first'] == 1]['user_id'])\nday7_users = set(df[df['days_since_first'] == 7]['user_id'])\nday30_users = set(df[df['days_since_first'] == 30]['user_id'])\n\nday1_retention = len(day0_users & day1_users) / len(day0_users) * 100\nday7_retention = len(day0_users & day7_users) / len(day0_users) * 100\nday30_retention = len(day0_users & day30_users) / len(day0_users) * 100\n\nprint(f"次日留存率: {day1_retention:.2f}%")\nprint(f"7日留存率: {day7_retention:.2f}%")\nprint(f"30日留存率: {day30_retention:.2f}%")\n\n# 2. 分析留存率变化趋势\n# 计算不同天数的留存率\nretention_data = []\nfor day in range(1, 31):\n    active_users = set(df[df['days_since_first'] == day]['user_id'])\n    retention = len(day0_users & active_users) / len(day0_users) * 100\n    retention_data.append({'day': day, 'retention_rate': retention})\n\nretention_df = pd.DataFrame(retention_data)\nprint("\n留存率趋势:")\nprint(retention_df.head(10))\n\n# 3. 识别影响留存的关键因素\n# 分析不同活动类型对留存的影响\nactivity_retention = df.groupby(['activity_type', 'days_since_first'])['user_id'].nunique().unstack()\nprint("\n不同活动类型的留存情况:")\nprint(activity_retention)`
  },
  {
    id: '7',
    title: '转化漏斗分析 - 销售流程优化',
    description: '分析销售转化漏斗和瓶颈',
    difficulty: 'advanced',
    input_format: 'sales_funnel.csv with user_id, stage, timestamp, product_id',
    task_goals: '1. 构建销售转化漏斗\n2. 计算各阶段转化率\n3. 识别漏斗中的瓶颈',
    output_requirements: '转化漏斗图\n各阶段转化率分析\n漏斗优化建议',
    sample_code: `import pandas as pd\n\n# 读取数据\ndf = pd.read_csv('sales_funnel.csv')\n\n# 转换时间戳\ndf['timestamp'] = pd.to_datetime(df['timestamp'])\n\n# 定义漏斗阶段顺序\nfunnel_stages = ['浏览', '加购', '下单', '支付', '完成']\n\n# 计算每个阶段的用户数\nstage_counts = df.groupby('stage')['user_id'].nunique().reindex(funnel_stages).fillna(0)\n\nprint("漏斗各阶段用户数:")\nprint(stage_counts)\n\n# 计算转化率\nconversion_rates = []\nfor i in range(len(funnel_stages) - 1):\n    rate = (stage_counts.iloc[i+1] / stage_counts.iloc[i]) * 100\n    conversion_rates.append({'from': funnel_stages[i], 'to': funnel_stages[i+1], 'conversion_rate': rate})\n\nconversion_df = pd.DataFrame(conversion_rates)\nprint("\n各阶段转化率:")\nprint(conversion_df)`,
    sample_solution: `import pandas as pd\n\n# 读取数据\ndf = pd.read_csv('sales_funnel.csv')\n\n# 转换时间戳\ndf['timestamp'] = pd.to_datetime(df['timestamp'])\n\n# 1. 构建销售转化漏斗\n# 定义漏斗阶段顺序\nfunnel_stages = ['浏览', '加购', '下单', '支付', '完成']\n\n# 计算每个阶段的用户数\nstage_counts = df.groupby('stage')['user_id'].nunique().reindex(funnel_stages).fillna(0)\nprint("漏斗各阶段用户数:")\nprint(stage_counts)\n\n# 2. 计算各阶段转化率\nconversion_rates = []\ntotal_users = stage_counts.iloc[0]\n\n# 计算从第一阶段开始的累计转化率\ncumulative_conversion = []\nfor i, stage in enumerate(funnel_stages):\n    if i == 0:\n        cumulative_conversion.append({'stage': stage, 'users': stage_counts.iloc[i], 'conversion_rate': 100})\n    else:\n        rate = (stage_counts.iloc[i] / total_users) * 100\n        cumulative_conversion.append({'stage': stage, 'users': stage_counts.iloc[i], 'conversion_rate': rate})\n\n# 计算相邻阶段的转化率\nstage_conversion = []\nfor i in range(len(funnel_stages) - 1):\n    if stage_counts.iloc[i] > 0:\n        rate = (stage_counts.iloc[i+1] / stage_counts.iloc[i]) * 100\n    else:\n        rate = 0\n    stage_conversion.append({'from': funnel_stages[i], 'to': funnel_stages[i+1], 'conversion_rate': rate})\n\nprint("\n累计转化率:")\nprint(pd.DataFrame(cumulative_conversion))\n\nprint("\n相邻阶段转化率:")\nprint(pd.DataFrame(stage_conversion))\n\n# 3. 识别漏斗中的瓶颈\n# 找出转化率最低的阶段\nbottleneck = pd.DataFrame(stage_conversion).sort_values('conversion_rate').iloc[0]\nprint(f"\n漏斗瓶颈: {bottleneck['from']} -> {bottleneck['to']}，转化率: {bottleneck['conversion_rate']:.2f}%")\n\n# 4. 分析不同产品的转化情况\nproduct_conversion = df.groupby(['product_id', 'stage'])['user_id'].nunique().unstack()\nproduct_conversion = product_conversion[funnel_stages].fillna(0)\nprint("\n不同产品的转化情况:")\nprint(product_conversion.head())`
  },
  {
    id: '8',
    title: '价格敏感度分析 - 定价策略优化',
    description: '分析价格与销量的关系',
    difficulty: 'advanced',
    input_format: 'price_analysis.csv with product_id, product_name, price, quantity_sold, category',
    task_goals: '1. 分析价格与销量的关系\n2. 计算价格弹性\n3. 识别价格敏感型产品',
    output_requirements: '价格弹性分析报告\n产品价格敏感度分类\n定价策略建议',
    sample_code: `import pandas as pd\nimport numpy as np\n\n# 读取数据\ndf = pd.read_csv('price_analysis.csv')\n\n# 分析价格与销量的关系\nprice_sales_corr = df['price'].corr(df['quantity_sold'])\nprint(f"价格与销量的相关系数: {price_sales_corr:.4f}")\n\n# 计算价格弹性\ndef calculate_price_elasticity(df):\n    # 价格弹性 = (销量变化百分比) / (价格变化百分比)\n    elasticity = []\n    for category in df['category'].unique():\n        category_df = df[df['category'] == category]\n        if len(category_df) >= 2:\n            # 使用简单线性回归计算弹性\n            X = np.log(category_df['price']).values.reshape(-1, 1)\n            y = np.log(category_df['quantity_sold']).values\n            from sklearn.linear_model import LinearRegression\n            model = LinearRegression()\n            model.fit(X, y)\n            elasticity.append({'category': category, 'elasticity': model.coef_[0]})\n    return pd.DataFrame(elasticity)\n\nelasticity_df = calculate_price_elasticity(df)\nprint("\n各品类价格弹性:")\nprint(elasticity_df)`,
    sample_solution: `import pandas as pd\nimport numpy as np\n\n# 读取数据\ndf = pd.read_csv('price_analysis.csv')\n\n# 1. 分析价格与销量的关系\nprice_sales_corr = df['price'].corr(df['quantity_sold'])\nprint(f"价格与销量的相关系数: {price_sales_corr:.4f}")\n\n# 按品类分析价格与销量的关系\ncategory_corr = df.groupby('category').apply(lambda x: x['price'].corr(x['quantity_sold'])).reset_index()\ncategory_corr.columns = ['category', 'correlation']\nprint("\n各品类价格与销量的相关系数:")\nprint(category_corr)\n\n# 2. 计算价格弹性\ndef calculate_price_elasticity(df):\n    elasticity = []\n    for category in df['category'].unique():\n        category_df = df[df['category'] == category]\n        if len(category_df) >= 2:\n            # 计算价格和销量的对数变化\n            category_df = category_df.sort_values('price')\n            price_diff = np.log(category_df['price'].iloc[1:].values) - np.log(category_df['price'].iloc[:-1].values)\n            sales_diff = np.log(category_df['quantity_sold'].iloc[1:].values) - np.log(category_df['quantity_sold'].iloc[:-1].values)\n            \n            # 计算弹性（平均）\n            if np.any(price_diff != 0):\n                elasticity_val = np.mean(sales_diff / price_diff)\n                elasticity.append({'category': category, 'elasticity': elasticity_val})\n    return pd.DataFrame(elasticity)\n\nelasticity_df = calculate_price_elasticity(df)\nprint("\n各品类价格弹性:")\nprint(elasticity_df)\n\n# 3. 识别价格敏感型产品\n# 价格弹性绝对值大于1的产品被认为是价格敏感的\nelasticity_df['price_sensitive'] = abs(elasticity_df['elasticity']) > 1\nprint("\n价格敏感型品类:")\nprint(elasticity_df[elasticity_df['price_sensitive']])\n\n# 4. 定价策略建议\ndef get_pricing_strategy(elasticity):\n    if elasticity < -1:\n        return '价格敏感：建议降价以增加销量和总收入'\n    elif elasticity > -1 and elasticity < 0:\n        return '价格不敏感：建议提价以增加总收入'\n    else:\n        return '需求无弹性：价格变化对销量影响不大'\n\nelasticity_df['pricing_strategy'] = elasticity_df['elasticity'].apply(get_pricing_strategy)\nprint("\n定价策略建议:")\nprint(elasticity_df[['category', 'elasticity', 'pricing_strategy']])`
  },
  {
    id: '9',
    title: '时段活跃度分析 - 运营时间优化',
    description: '分析用户活动的时间分布',
    difficulty: 'advanced',
    input_format: 'time_activity.csv with user_id, activity_time, activity_type, amount',
    task_goals: '1. 分析用户活动的时间分布\n2. 识别高峰活跃时段\n3. 分析不同时段的转化效果',
    output_requirements: '24小时活跃度热力图\n高峰时段分析\n时段运营策略建议',
    sample_code: `import pandas as pd\n\n# 读取数据\ndf = pd.read_csv('time_activity.csv')\n\n# 转换时间戳\ndf['activity_time'] = pd.to_datetime(df['activity_time'])\n\n# 提取小时\ndf['hour'] = df['activity_time'].dt.hour\n\n# 分析用户活动的时间分布\nhourly_activity = df.groupby('hour')['user_id'].nunique().reset_index()\nhourly_activity.columns = ['hour', 'active_users']\n\nprint("24小时用户活跃度分布:")\nprint(hourly_activity)\n\n# 识别高峰活跃时段\npeak_hours = hourly_activity[hourly_activity['active_users'] >= hourly_activity['active_users'].quantile(0.8)]\nprint("\n高峰活跃时段:")\nprint(peak_hours)`,
    sample_solution: `import pandas as pd\n\n# 读取数据\ndf = pd.read_csv('time_activity.csv')\n\n# 转换时间戳\ndf['activity_time'] = pd.to_datetime(df['activity_time'])\n\n# 1. 分析用户活动的时间分布\ndf['hour'] = df['activity_time'].dt.hour\ndf['day_of_week'] = df['activity_time'].dt.dayofweek\n\n# 24小时活跃度分布\nhourly_activity = df.groupby('hour')['user_id'].nunique().reset_index()\nhourly_activity.columns = ['hour', 'active_users']\nprint("24小时用户活跃度分布:")\nprint(hourly_activity)\n\n# 2. 识别高峰活跃时段\npeak_hours = hourly_activity[hourly_activity['active_users'] >= hourly_activity['active_users'].quantile(0.8)]\nprint("\n高峰活跃时段:")\nprint(peak_hours)\n\n# 3. 分析不同时段的转化效果\n# 假设'amount'字段表示交易金额，非空表示转化\ndf['conversion'] = df['amount'].notnull().astype(int)\n\nhourly_conversion = df.groupby('hour').agg(\n    active_users=('user_id', 'nunique'),\n    conversions=('conversion', 'sum'),\n    total_amount=('amount', 'sum')\n).reset_index()\n\nhourly_conversion['conversion_rate'] = (hourly_conversion['conversions'] / hourly_conversion['active_users']) * 100\nhourly_conversion['average_order_value'] = hourly_conversion['total_amount'] / hourly_conversion['conversions']\n\nprint("\n不同时段的转化效果:")\nprint(hourly_conversion[['hour', 'active_users', 'conversions', 'conversion_rate', 'average_order_value']])\n\n# 4. 按星期几分析活跃度\ndaily_activity = df.groupby('day_of_week')['user_id'].nunique().reset_index()\ndaily_activity.columns = ['day_of_week', 'active_users']\nday_names = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']\ndaily_activity['day_name'] = daily_activity['day_of_week'].map(lambda x: day_names[x])\nprint("\n每周活跃度分布:")\nprint(daily_activity[['day_name', 'active_users']])`
  },
  {
    id: '10',
    title: '库存预警系统 - 供应链管理',
    description: '基于销售数据预测库存需求',
    difficulty: 'advanced',
    input_format: 'inventory_data.csv with product_id, product_name, current_stock, safety_stock, average_daily_sales, last_restock_date',
    task_goals: '1. 计算库存周转天数\n2. 识别库存不足的产品\n3. 生成补货建议',
    output_requirements: '库存状态分析报告\n库存预警产品清单\n补货计划建议',
    sample_code: `import pandas as pd\n\n# 读取数据\ndf = pd.read_csv('inventory_data.csv')\n\n# 转换日期格式\ndf['last_restock_date'] = pd.to_datetime(df['last_restock_date'])\n\n# 计算库存周转天数\ndf['stock_turnover_days'] = df['current_stock'] / df['average_daily_sales']\n\n# 识别库存不足的产品（库存周转天数 < 7天）\nlow_stock_products = df[df['stock_turnover_days'] < 7]\nprint("库存不足的产品:")\nprint(low_stock_products[['product_name', 'current_stock', 'safety_stock', 'stock_turnover_days']])\n\n# 生成补货建议\ndf['suggested_reorder_quantity'] = df['safety_stock'] * 2 - df['current_stock']\ndf['suggested_reorder_quantity'] = df['suggested_reorder_quantity'].apply(lambda x: max(0, x))\nprint("\n补货建议:")\nprint(df[['product_name', 'current_stock', 'safety_stock', 'suggested_reorder_quantity']])`,
    sample_solution: `import pandas as pd\n\n# 读取数据\ndf = pd.read_csv('inventory_data.csv')\n\n# 转换日期格式\ndf['last_restock_date'] = pd.to_datetime(df['last_restock_date'])\n\n# 1. 计算库存周转天数\ndf['stock_turnover_days'] = df['current_stock'] / df['average_daily_sales']\ndf['stock_turnover_days'] = df['stock_turnover_days'].fillna(0)\n\n# 2. 识别库存不足的产品\n# 定义库存状态\ndef get_stock_status(row):\n    if row['stock_turnover_days'] < 3:\n        return '紧急'\n    elif row['stock_turnover_days'] < 7:\n        return '预警'\n    elif row['stock_turnover_days'] < 14:\n        return '正常'\n    else:\n        return '充足'\n\ndf['stock_status'] = df.apply(get_stock_status, axis=1)\n\n# 3. 生成补货建议\ndf['suggested_reorder_quantity'] = df['safety_stock'] * 2 - df['current_stock']\ndf['suggested_reorder_quantity'] = df['suggested_reorder_quantity'].apply(lambda x: max(0, x))\n\n# 计算建议补货日期\ndf['suggested_restock_date'] = pd.Timestamp.now() + pd.to_timedelta(df['stock_turnover_days'], unit='D')\n\n# 4. 库存状态分析报告\nstock_status_summary = df['stock_status'].value_counts()\nprint("库存状态分布:")\nprint(stock_status_summary)\n\n# 5. 库存预警产品清单\nwarning_products = df[df['stock_status'].isin(['紧急', '预警'])]\nprint("\n库存预警产品清单:")\nprint(warning_products[['product_name', 'current_stock', 'safety_stock', 'average_daily_sales', 'stock_turnover_days', 'stock_status']])\n\n# 6. 补货计划建议\nrestock_plan = df[df['suggested_reorder_quantity'] > 0]\nprint("\n补货计划建议:")\nprint(restock_plan[['product_name', 'current_stock', 'suggested_reorder_quantity', 'suggested_restock_date']])`
  }
];

export const useProjectStore = create<ProjectState>((set, get) => ({
  projects: [],
  progress: [],
  isLoading: false,
  error: null,
  getProjects: async () => {
    set({ isLoading: true, error: null });
    try {
      // 模拟获取项目数据
      setTimeout(() => {
        set({ projects: mockProjects, isLoading: false });
      }, 500);
    } catch (error) {
      set({ error: '获取项目数据失败', isLoading: false });
    }
  },
  getProjectById: (id) => {
    return get().projects.find(project => project.id === id);
  },
  updateProgress: (projectId, progress, completed) => {
    const currentProgress = get().progress;
    const existingProgress = currentProgress.find(p => p.project_id === projectId);
    
    let updatedProgress;
    if (existingProgress) {
      updatedProgress = currentProgress.map(p => 
        p.project_id === projectId 
          ? { ...p, progress_percentage: progress, completed } 
          : p
      );
    } else {
      updatedProgress = [...currentProgress, { project_id: projectId, progress_percentage: progress, completed }];
    }
    
    set({ progress: updatedProgress });
  },
  submitSolution: async (projectId, code) => {
    set({ isLoading: true, error: null });
    try {
      // 模拟提交解决方案
      setTimeout(() => {
        set({ isLoading: false });
        // 提交成功后更新进度为100%
        get().updateProgress(projectId, 100, true);
      }, 1000);
    } catch (error) {
      set({ error: '提交解决方案失败', isLoading: false });
    }
  }
}));