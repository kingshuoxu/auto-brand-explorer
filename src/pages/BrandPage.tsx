
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, MapPin } from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CarCard from '@/components/CarCard';
import { brands } from '@/data/carsData';
import { fadeIn, staggerContainer } from '@/lib/motion';

const BrandPage = () => {
  const { brandId } = useParams();
  const navigate = useNavigate();
  
  const brand = brands.find(b => b.id === brandId);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (!brand) {
      navigate('/brands');
    }
  }, [brand, navigate]);
  
  if (!brand) {
    return null;
  }
  
  return (
    <>
      <Helmet>
        <title>{brand.name} 汽车 - 品牌详情与车型</title>
        <meta name="description" content={`探索${brand.name}汽车品牌的历史、特点及最新车型。了解${brand.name}的创新技术与卓越性能。`} />
      </Helmet>

      <Navbar />
      
      <main className="pt-16">
        {/* Brand Hero Section */}
        <section className="relative py-20 px-4 md:px-6 overflow-hidden">
          <div className="container mx-auto">
            <motion.div
              variants={staggerContainer(0.1, 0.2)}
              initial="hidden"
              animate="show"
              className="mb-12"
            >
              <motion.button
                variants={fadeIn('right', { delay: 0.1 })}
                onClick={() => navigate('/brands')}
                className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                返回品牌列表
              </motion.button>
              
              <div className="flex flex-col md:flex-row gap-8">
                <motion.div
                  variants={fadeIn('right', { delay: 0.2 })}
                  className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0"
                >
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
                
                <div>
                  <motion.div
                    variants={fadeIn('up', { delay: 0.2 })}
                    className="flex flex-wrap gap-3 mb-3"
                  >
                    <span className="inline-flex items-center text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3 mr-1" /> {brand.country}
                    </span>
                    <span className="inline-flex items-center text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3 mr-1" /> 创立于 {brand.foundedYear}
                    </span>
                  </motion.div>
                  
                  <motion.h1
                    variants={fadeIn('up', { delay: 0.3 })}
                    className="text-4xl md:text-5xl font-bold mb-4"
                  >
                    {brand.name}
                  </motion.h1>
                  
                  <motion.p
                    variants={fadeIn('up', { delay: 0.4 })}
                    className="text-muted-foreground max-w-3xl"
                  >
                    {brand.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Car Models Section */}
        <section className="py-16 px-4 md:px-6 bg-muted/30">
          <div className="container mx-auto">
            <motion.div
              variants={staggerContainer(0.1, 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="mb-12"
            >
              <motion.h2
                variants={fadeIn('up', { delay: 0.1 })}
                className="text-3xl font-bold mb-4"
              >
                {brand.name} 车型
              </motion.h2>
              
              <motion.p
                variants={fadeIn('up', { delay: 0.2 })}
                className="text-muted-foreground max-w-3xl"
              >
                探索 {brand.name} 的最新车型系列，了解其独特的设计理念和先进的技术。
              </motion.p>
            </motion.div>
            
            <motion.div 
              variants={staggerContainer(0.1, 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {brand.models.map((car, index) => (
                <CarCard 
                  key={car.id} 
                  car={car} 
                  brandId={brand.id} 
                  index={index}
                />
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Brand History Section */}
        <section className="py-20 px-4 md:px-6">
          <div className="container mx-auto">
            <motion.div
              variants={staggerContainer(0.1, 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <motion.span
                variants={fadeIn('up', { delay: 0.1 })}
                className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-primary/10 text-primary rounded-full"
              >
                品牌历史
              </motion.span>
              
              <motion.h2
                variants={fadeIn('up', { delay: 0.2 })}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                {brand.name} 的辉煌历程
              </motion.h2>
              
              <motion.p
                variants={fadeIn('up', { delay: 0.3 })}
                className="text-muted-foreground"
              >
                探索 {brand.name} 从创立至今的发展历程、创新突破和标志性成就。
              </motion.p>
            </motion.div>
            
            <motion.div
              variants={fadeIn('up', { delay: 0.4 })}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="relative max-w-3xl mx-auto"
            >
              <div className="absolute top-0 bottom-0 left-9 w-0.5 bg-border"></div>
              
              {[
                { year: brand.foundedYear, title: '品牌创立', description: `${brand.name}在${brand.country}成立，开始了其汽车制造的历程。` },
                { year: brand.foundedYear + 20, title: '首款标志性车型', description: `${brand.name}推出首款标志性车型，奠定了品牌在汽车行业的地位。` },
                { year: brand.foundedYear + 50, title: '技术创新', description: `${brand.name}在汽车技术领域取得重大突破，引领行业发展。` },
                { year: brand.foundedYear + 80, title: '全球扩张', description: `${brand.name}扩大全球市场份额，成为国际知名汽车品牌。` },
                { year: new Date().getFullYear() - 10, title: '电气化转型', description: `${brand.name}开始向电动化和智能化方向转型，推出新能源车型。` },
                { year: new Date().getFullYear(), title: '现在', description: `${brand.name}继续创新，提供卓越的驾驶体验和前沿技术。` },
              ].map((event, index) => (
                <div key={index} className="relative flex items-start mb-10">
                  <div className="flex-shrink-0 w-18 text-right pr-4">
                    <span className="text-sm font-medium">{event.year}</span>
                  </div>
                  
                  <div className="flex-shrink-0 w-5 h-5 rounded-full border-4 border-background bg-primary mt-0.5 z-10"></div>
                  
                  <div className="ml-6">
                    <h3 className="text-lg font-medium mb-1">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default BrandPage;
