
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, Car, Stars, Award, ShieldCheck } from 'lucide-react';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import BrandCard from '@/components/BrandCard';
import { brands } from '@/data/carsData';
import { fadeIn, staggerContainer } from '@/lib/motion';

const features = [
  {
    icon: <Car className="w-6 h-6" />,
    title: '多品牌比较',
    description: '全面比较不同品牌的汽车性能、特性和价格，助您做出明智选择。'
  },
  {
    icon: <Stars className="w-6 h-6" />,
    title: '详细规格',
    description: '提供详尽的技术规格，包括引擎性能、油耗数据和特色配置。'
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: '专业评测',
    description: '由汽车专家提供的专业评测，深入分析每款车型的优缺点。'
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: '安全信息',
    description: '提供最新的安全测试结果和主动安全技术详细说明。'
  }
];

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>汽车品牌介绍 - 探索全球顶级汽车品牌</title>
        <meta name="description" content="探索全球顶级汽车品牌的最新车型，了解它们的创新特性、性能数据和设计理念。" />
      </Helmet>

      <Navbar />
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center mb-12"
          >
            <motion.span
              variants={fadeIn('up', { delay: 0.1 })}
              className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-primary/10 text-primary rounded-full"
            >
              车辆详情
            </motion.span>
            
            <motion.h2
              variants={fadeIn('up', { delay: 0.2 })}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              全面的汽车信息
            </motion.h2>
            
            <motion.p
              variants={fadeIn('up', { delay: 0.3 })}
              className="max-w-2xl mx-auto text-muted-foreground"
            >
              我们提供各大汽车品牌的详细信息，帮助您了解每款车型的独特之处。
            </motion.p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer(0.1, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', { delay: index * 0.1 })}
                className="bg-background border border-border/50 rounded-xl p-6 transition-all hover:shadow-md hover:border-primary/20"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Brands Section */}
      <section className="py-20 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12"
          >
            <div>
              <motion.span
                variants={fadeIn('up', { delay: 0.1 })}
                className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-primary/10 text-primary rounded-full"
              >
                汽车品牌
              </motion.span>
              
              <motion.h2
                variants={fadeIn('up', { delay: 0.2 })}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                热门汽车品牌
              </motion.h2>
              
              <motion.p
                variants={fadeIn('up', { delay: 0.3 })}
                className="max-w-2xl text-muted-foreground"
              >
                探索全球顶级汽车制造商的最新车型和创新。
              </motion.p>
            </div>
            
            <motion.div
              variants={fadeIn('up', { delay: 0.3 })}
            >
              <button 
                onClick={() => navigate('/brands')}
                className="inline-flex items-center text-primary hover:underline"
              >
                查看全部
                <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer(0.1, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {brands.map((brand, index) => (
              <BrandCard key={brand.id} brand={brand} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 car-bg-gradient"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.span
              variants={fadeIn('up', { delay: 0.1 })}
              className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-primary/10 text-primary rounded-full"
            >
              保持联系
            </motion.span>
            
            <motion.h2
              variants={fadeIn('up', { delay: 0.2 })}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              订阅我们的新闻简报
            </motion.h2>
            
            <motion.p
              variants={fadeIn('up', { delay: 0.3 })}
              className="text-muted-foreground mb-8"
            >
              及时获取最新汽车资讯、新车发布和独家优惠。
            </motion.p>
            
            <motion.div
              variants={fadeIn('up', { delay: 0.4 })}
              className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
            >
              <input 
                type="email" 
                placeholder="输入您的邮箱" 
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button className="w-full sm:w-auto whitespace-nowrap px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                订阅
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Index;
