
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BrandCard from '@/components/BrandCard';
import { brands } from '@/data/carsData';
import { fadeIn, staggerContainer } from '@/lib/motion';

const BrandsListPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>汽车品牌列表 - 探索全球顶级汽车制造商</title>
        <meta name="description" content="探索全球顶级汽车品牌的最新车型，了解它们的创新特性、性能数据和设计理念。" />
      </Helmet>

      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 px-4 md:px-6 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto">
            <motion.div
              variants={staggerContainer(0.1, 0.2)}
              initial="hidden"
              animate="show"
              className="max-w-3xl mx-auto text-center"
            >
              <motion.span
                variants={fadeIn('up', { delay: 0.1 })}
                className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-primary/10 text-primary rounded-full"
              >
                汽车品牌
              </motion.span>
              
              <motion.h1
                variants={fadeIn('up', { delay: 0.2 })}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                全球顶级汽车品牌
              </motion.h1>
              
              <motion.p
                variants={fadeIn('up', { delay: 0.3 })}
                className="text-muted-foreground"
              >
                探索世界一流汽车制造商的创新技术、设计理念和标志性车型。
              </motion.p>
            </motion.div>
          </div>
        </section>
        
        {/* Brands Grid Section */}
        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto">
            <motion.div 
              variants={staggerContainer(0.1, 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {brands.map((brand, index) => (
                <BrandCard key={brand.id} brand={brand} index={index} />
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Brand Comparison Section */}
        <section className="py-20 px-4 md:px-6 bg-muted/30">
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
                品牌对比
              </motion.span>
              
              <motion.h2
                variants={fadeIn('up', { delay: 0.2 })}
                className="text-3xl font-bold mb-4"
              >
                了解不同品牌的特点
              </motion.h2>
              
              <motion.p
                variants={fadeIn('up', { delay: 0.3 })}
                className="text-muted-foreground"
              >
                通过比较不同汽车品牌的优势和特点，帮助您找到最适合自己的汽车。
              </motion.p>
            </motion.div>
            
            <motion.div
              variants={fadeIn('up', { delay: 0.4 })}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="overflow-x-auto"
            >
              <table className="w-full min-w-[800px] border-collapse">
                <thead>
                  <tr className="text-left">
                    <th className="p-4 border-b border-border/50">品牌</th>
                    <th className="p-4 border-b border-border/50">国家</th>
                    <th className="p-4 border-b border-border/50">成立年份</th>
                    <th className="p-4 border-b border-border/50">车型数量</th>
                    <th className="p-4 border-b border-border/50">特点</th>
                  </tr>
                </thead>
                <tbody>
                  {brands.map((brand, index) => (
                    <tr key={index} className="hover:bg-muted/50 transition-colors">
                      <td className="p-4 border-b border-border/30">
                        <div className="flex items-center">
                          <img 
                            src={brand.logo} 
                            alt={brand.name} 
                            className="w-8 h-8 mr-3"
                          />
                          <span className="font-medium">{brand.name}</span>
                        </div>
                      </td>
                      <td className="p-4 border-b border-border/30">{brand.country}</td>
                      <td className="p-4 border-b border-border/30">{brand.foundedYear}</td>
                      <td className="p-4 border-b border-border/30">{brand.models.length}</td>
                      <td className="p-4 border-b border-border/30 max-w-xs">
                        <p className="text-sm text-muted-foreground truncate">
                          {brand.description.split('。')[0]}。
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default BrandsListPage;
