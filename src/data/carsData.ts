
export interface CarSpec {
  engine: string;
  power: string;
  torque: string;
  acceleration: string;
  topSpeed: string;
  transmission: string;
  drivetrain: string;
  fuelType: string;
  fuelEfficiency?: string;
}

export interface CarModel {
  id: string;
  name: string;
  year: number;
  price: string;
  description: string;
  image: string;
  specs: CarSpec;
  highlights: string[];
  colors: string[];
}

export interface Brand {
  id: string;
  name: string;
  country: string;
  logo: string;
  description: string;
  foundedYear: number;
  models: CarModel[];
}

export const brands: Brand[] = [
  {
    id: "bmw",
    name: "BMW",
    country: "德国",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1200px-BMW.svg.png",
    description: "宝马汽车是德国豪华汽车制造商，以其高性能和精致的工程闻名于世。该品牌以其驾驶乐趣和先进技术而备受推崇，不断推动创新和卓越。",
    foundedYear: 1916,
    models: [
      {
        id: "bmw-3-series",
        name: "3系",
        year: 2023,
        price: "318,000 - 498,000元",
        description: "宝马3系是一款豪华紧凑型轿车，以其精准操控和卓越性能著称。第七代3系采用了更加动感的设计语言，搭载先进的动力系统和智能科技，为驾驶者带来纯粹的驾驶乐趣。",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop",
        specs: {
          engine: "2.0L 涡轮增压直列四缸",
          power: "184-258马力",
          torque: "300-400牛·米",
          acceleration: "5.8-7.1秒 (0-100km/h)",
          topSpeed: "235-250km/h",
          transmission: "8速自动变速箱",
          drivetrain: "后轮驱动 / 全轮驱动",
          fuelType: "汽油",
          fuelEfficiency: "5.3-6.9L/100km"
        },
        highlights: [
          "卓越驾驶动态",
          "豪华内饰",
          "先进驾驶辅助系统",
          "BMW Live Cockpit专业版"
        ],
        colors: ["高冰银", "矿石白", "墨尔本红", "黑色", "波托菲诺蓝"]
      },
      {
        id: "bmw-x5",
        name: "X5",
        year: 2023,
        price: "669,900 - 859,900元",
        description: "宝马X5是豪华中型SUV的典范，结合了宝马的驾驶乐趣与SUV的实用性。第四代X5提供更大的内部空间、更先进的科技配置以及更强大的越野能力，满足各种驾驶需求。",
        image: "https://images.unsplash.com/photo-1669893618672-700c3e8c8ecc?q=80&w=1974&auto=format&fit=crop",
        specs: {
          engine: "3.0L 涡轮增压直列六缸 / 4.4L V8",
          power: "265-530马力",
          torque: "620-750牛·米",
          acceleration: "4.3-6.5秒 (0-100km/h)",
          topSpeed: "243-250km/h",
          transmission: "8速自动变速箱",
          drivetrain: "全轮驱动",
          fuelType: "汽油 / 插电混合动力",
          fuelEfficiency: "8.5-12.5L/100km"
        },
        highlights: [
          "豪华内饰与材质",
          "先进的iDrive 7.0系统",
          "全景玻璃天窗",
          "自适应空气悬挂",
          "Bowers & Wilkins钻石环绕音响"
        ],
        colors: ["矿石白", "碳黑", "北极灰", "坦桑蓝", "佛蒙特青铜"]
      }
    ]
  },
  {
    id: "mercedes",
    name: "奔驰",
    country: "德国",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/1200px-Mercedes-Logo.svg.png",
    description: "梅赛德斯-奔驰是全球最知名的豪华汽车品牌之一，以其卓越品质、创新技术和优雅设计而闻名。奔驰一直致力于汽车安全、舒适和性能的提升，为客户提供最佳驾乘体验。",
    foundedYear: 1926,
    models: [
      {
        id: "mercedes-c-class",
        name: "C级",
        year: 2023,
        price: "309,800 - 429,800元",
        description: "梅赛德斯-奔驰C级是一款紧凑型豪华轿车，新一代C级在设计上汲取了S级的灵感，内饰采用了更加科技化的设计，搭载最新的MBUX系统，提供优雅舒适的驾乘体验。",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop",
        specs: {
          engine: "1.5L/2.0L 涡轮增压四缸",
          power: "168-258马力",
          torque: "250-400牛·米",
          acceleration: "6.0-7.9秒 (0-100km/h)",
          topSpeed: "230-250km/h",
          transmission: "9速自动变速箱",
          drivetrain: "后轮驱动 / 全轮驱动",
          fuelType: "汽油 / 轻混系统",
          fuelEfficiency: "5.5-7.2L/100km"
        },
        highlights: [
          "最新MBUX信息娱乐系统",
          "64色环境氛围灯",
          "电子驾驶辅助套件",
          "精致内饰设计"
        ],
        colors: ["北极白", "曜岩黑", "高科技银", "鲸鱼灰", "曜石黑"]
      },
      {
        id: "mercedes-eqs",
        name: "EQS",
        year: 2023,
        price: "938,000 - 1,466,000元",
        description: "EQS是梅赛德斯-奔驰纯电动豪华旗舰轿车，代表了品牌电气化战略的巅峰之作。EQS拥有卓越的续航能力和豪华舒适的乘坐体验，搭载56英寸超宽曲面屏幕的MBUX Hyperscreen，引领电动汽车的未来。",
        image: "https://images.unsplash.com/photo-1656468014942-cb5a68f4a392?q=80&w=2070&auto=format&fit=crop",
        specs: {
          engine: "电动机(单/双电机)",
          power: "245-658马力",
          torque: "565-950牛·米",
          acceleration: "3.8-6.2秒 (0-100km/h)",
          topSpeed: "210-250km/h",
          transmission: "单速变速箱",
          drivetrain: "后轮驱动 / 全轮驱动",
          fuelType: "纯电动",
          fuelEfficiency: "电耗16.9-21.8kWh/100km，WLTP续航里程450-780km"
        },
        highlights: [
          "MBUX Hyperscreen 56英寸曲面屏",
          "自适应空气悬挂",
          "后轮转向系统",
          "智能辅助驾驶系统",
          "车内HEPA空气净化系统"
        ],
        colors: ["高科技银", "黑夜黑", "锦缎红", "宇航蓝", "钯银"]
      }
    ]
  },
  {
    id: "tesla",
    name: "特斯拉",
    country: "美国",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/1200px-Tesla_Motors.svg.png",
    description: "特斯拉是全球领先的电动汽车和清洁能源公司，以其创新技术、卓越性能和可持续发展理念著称。特斯拉致力于加速全球向可持续能源的转变，通过生产电动汽车和太阳能产品来实现这一目标。",
    foundedYear: 2003,
    models: [
      {
        id: "tesla-model-3",
        name: "Model 3",
        year: 2023,
        price: "231,900 - 329,900元",
        description: "特斯拉Model 3是一款中型全电动轿车，融合了高性能、长续航和先进科技于一体。Model 3提供卓越的驾驶体验，最大续航可达675公里，0-100km/h加速最快仅需3.3秒。",
        image: "https://images.unsplash.com/photo-1554744512-d6c603f27c54?q=80&w=2070&auto=format&fit=crop",
        specs: {
          engine: "电动机(单/双电机)",
          power: "283-513马力",
          torque: "420-660牛·米",
          acceleration: "3.3-6.1秒 (0-100km/h)",
          topSpeed: "201-261km/h",
          transmission: "单速变速箱",
          drivetrain: "后轮驱动 / 全轮驱动",
          fuelType: "纯电动",
          fuelEfficiency: "电耗13.2-16.0kWh/100km，CLTC续航里程556-675km"
        },
        highlights: [
          "15英寸中央触控屏",
          "全景玻璃车顶",
          "Autopilot自动辅助驾驶",
          "手机作为钥匙",
          "无线软件更新"
        ],
        colors: ["珍珠白", "深黑", "深蓝", "深灰", "红色"]
      },
      {
        id: "tesla-model-y",
        name: "Model Y",
        year: 2023,
        price: "263,900 - 363,900元",
        description: "特斯拉Model Y是一款紧凑型全电动SUV，基于Model 3平台打造。Model Y兼具优雅设计与实用性，提供宽敞的内部空间和灵活的座椅布局，最多可容纳7名乘客，满足家庭与日常使用需求。",
        image: "https://images.unsplash.com/photo-1591134106085-8bbdc61a2ab5?q=80&w=2069&auto=format&fit=crop",
        specs: {
          engine: "电动机(单/双电机)",
          power: "283-513马力",
          torque: "420-660牛·米",
          acceleration: "3.7-6.9秒 (0-100km/h)",
          topSpeed: "217-250km/h",
          transmission: "单速变速箱",
          drivetrain: "后轮驱动 / 全轮驱动",
          fuelType: "纯电动",
          fuelEfficiency: "电耗13.8-16.6kWh/100km，CLTC续航里程545-660km"
        },
        highlights: [
          "全景玻璃车顶",
          "最多可容纳7名乘客",
          "电动后备厢",
          "Autopilot自动辅助驾驶",
          "先进空调过滤系统"
        ],
        colors: ["珍珠白", "深黑", "深蓝", "深灰", "红色"]
      }
    ]
  },
  {
    id: "nio",
    name: "蔚来",
    country: "中国",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/NIO_logo.svg/1200px-NIO_logo.svg.png",
    description: "蔚来是中国领先的高端智能电动汽车品牌，专注于提供卓越的用户体验和创新科技。蔚来不仅生产豪华电动汽车，还提供换电服务、NIO Power充电解决方案和NIO Life生活方式品牌，构建全方位的用户生态系统。",
    foundedYear: 2014,
    models: [
      {
        id: "nio-et7",
        name: "ET7",
        year: 2023,
        price: "388,000 - 526,000元",
        description: "蔚来ET7是一款高端智能电动旗舰轿车，拥有优雅流畅的设计和卓越的性能。ET7搭载了最新的自动驾驶技术，配备150kWh超长续航电池包可实现超过1000公里的续航里程，代表了蔚来的最高技术水平。",
        image: "https://www.nio.com/sites/default/files/2020-01/nio-et-preview.jpg",
        specs: {
          engine: "双电机",
          power: "644马力",
          torque: "850牛·米",
          acceleration: "3.8秒 (0-100km/h)",
          topSpeed: "200km/h",
          transmission: "单速变速箱",
          drivetrain: "全轮驱动",
          fuelType: "纯电动",
          fuelEfficiency: "电耗13.6-14.5kWh/100km，CLTC续航里程程最大1000km（150kWh电池包）"
        },
        highlights: [
          "NIO Autonomous Driving (NAD)",
          "智能空气悬挂",
          "NOMI人工智能伙伴",
          "23扬声器沉浸式音响系统",
          "无钥匙进入和感应开门"
        ],
        colors: ["星云白", "深空黑", "星云蓝", "暗夜紫", "清澈绿"]
      },
      {
        id: "nio-es8",
        name: "ES8",
        year: 2023,
        price: "468,000 - 552,000元",
        description: "蔚来ES8是一款全尺寸六/七座智能电动SUV，提供卓越的空间和豪华体验。作为蔚来的首款量产车型，新一代ES8采用了全新的智能电动平台，提供更长的续航里程和更丰富的智能功能。",
        image: "https://www.nio.com/sites/default/files/es8/new_es8.jpg",
        specs: {
          engine: "双电机",
          power: "644马力",
          torque: "725牛·米",
          acceleration: "4.9秒 (0-100km/h)",
          topSpeed: "200km/h",
          transmission: "单速变速箱",
          drivetrain: "全轮驱动",
          fuelType: "纯电动",
          fuelEfficiency: "电耗15.6-16.5kWh/100km，CLTC续航里程最大900km（150kWh电池包）"
        },
        highlights: [
          "六/七座布局",
          "智能空气悬挂",
          "NOMI人工智能伙伴",
          "全景玻璃天窗",
          "电动调节第二排座椅"
        ],
        colors: ["云白", "星云黑", "乐途蓝", "星际灰", "珍珠白"]
      }
    ]
  }
];
