
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ChevronRight, Check, Engine, Gauge, Zap, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { brands } from '@/data/carsData';
import { fadeIn, staggerContainer } from '@/lib/motion';
import { cn } from '@/lib/utils';

const CarDetail = () => {
  const { brandId, carId } = useParams();
  const navigate = useNavigate();
  
  const brand = brands.find(b => b.id === brandId);
  const car = brand?.models.find(c => c.id === carId);
  
  const [selectedColor, setSelectedColor] = useState(car?.colors[0] || '');
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (!brand || !car) {
      navigate('/brands');
    }
  }, [brand, car, navigate]);
  
  if (!brand || !car) {
    return null;
  }
  
  return (
    <>
      <Helmet>
        <title>{brand.name} {car.name} - 详细介绍与规格</title>
        <meta name="description" content={`探索${brand.name} ${car.name}的详细规格、性能数据和特点。了解这款车型的设计理念与先进技术。`} />
      </Helmet>

      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center px-4 md:px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={car.image} 
              alt={`${brand.name} ${car.name}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div className="container mx-auto relative z-10">
            <motion.div
              variants={staggerContainer(0.1, 0.2)}
              initial="hidden"
              animate="show"
            >
              <motion.button
                variants={fadeIn('right', { delay: 0.1 })}
                onClick={() => navigate(`/brand/${brandId}`)}
                className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                返回{brand.name}品牌
              </motion.button>
              
              <motion.div
                variants={fadeIn('up', { delay: 0.2 })}
                className="flex items-center mb-4"
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="w-12 h-12 object-contain mr-4"
                />
                <div className="flex items-center text-white/80">
                  <span>{brand.name}</span>
                  <ChevronRight className="w-4 h-4 mx-2" />
                  <span>{car.year}</span>
                </div>
              </motion.div>
              
              <motion.h1
                variants={fadeIn('up', { delay: 0.3 })}
                className="text-4xl md:text-6xl font-bold text-white mb-4"
              >
                {car.name}
              </motion.h1>
              
              <motion.p
                variants={fadeIn('up', { delay: 0.4 })}
                className="text-white/80 max-w-2xl mb-8"
              >
                {car.description}
              </motion.p>
              
              <motion.div
                variants={fadeIn('up', { delay: 0.5 })}
                className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white"
              >
                {car.price}
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Specifications Section */}
        <section className="py-20 px-4 md:px-6">
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
                className="text-3xl font-bold mb-8 text-center"
              >
                技术规格
              </motion.h2>
              
              <motion.div
                variants={fadeIn('up', { delay: 0.2 })}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                <div className="p-6 bg-muted/30 rounded-xl border border-border/50">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <Engine className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">引擎</h3>
                  <p className="text-muted-foreground mb-3">{car.specs.engine}</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">功率</span>
                    <span className="font-medium">{car.specs.power}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">扭矩</span>
                    <span className="font-medium">{car.specs.torque}</span>
                  </div>
                </div>
                
                <div className="p-6 bg-muted/30 rounded-xl border border-border/50">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <Gauge className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">性能</h3>
                  <p className="text-muted-foreground mb-3">卓越的驾驶性能</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">加速(0-100km/h)</span>
                    <span className="font-medium">{car.specs.acceleration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">最高速度</span>
                    <span className="font-medium">{car.specs.topSpeed}</span>
                  </div>
                </div>
                
                <div className="p-6 bg-muted/30 rounded-xl border border-border/50">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">传动系统</h3>
                  <p className="text-muted-foreground mb-3">精密的传动控制</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">变速箱</span>
                    <span className="font-medium">{car.specs.transmission}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">驱动方式</span>
                    <span className="font-medium">{car.specs.drivetrain}</span>
                  </div>
                </div>
                
                <div className="p-6 bg-muted/30 rounded-xl border border-border/50">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">燃油经济性</h3>
                  <p className="text-muted-foreground mb-3">高效能源利用</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">燃料类型</span>
                    <span className="font-medium">{car.specs.fuelType}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">油耗/电耗</span>
                    <span className="font-medium">{car.specs.fuelEfficiency || '暂无数据'}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Highlights Section */}
        <section className="py-20 px-4 md:px-6 bg-muted/30">
          <div className="container mx-auto">
            <motion.div
              variants={staggerContainer(0.1, 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <motion.h2
                variants={fadeIn('up', { delay: 0.1 })}
                className="text-3xl font-bold mb-12 text-center"
              >
                亮点特性
              </motion.h2>
              
              <motion.div
                variants={fadeIn('up', { delay: 0.2 })}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
              >
                {car.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">{highlight}</h3>
                      <p className="text-sm text-muted-foreground">
                        {brand.name} {car.name} 提供卓越的{highlight.toLowerCase()}，为您带来非凡的驾乘体验。
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Color Options Section */}
        <section className="py-20 px-4 md:px-6">
          <div className="container mx-auto">
            <motion.div
              variants={staggerContainer(0.1, 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <motion.h2
                variants={fadeIn('up', { delay: 0.1 })}
                className="text-3xl font-bold mb-4 text-center"
              >
                外观颜色
              </motion.h2>
              
              <motion.p
                variants={fadeIn('up', { delay: 0.2 })}
                className="text-center text-muted-foreground mb-12"
              >
                选择您喜欢的颜色
              </motion.p>
              
              <motion.div
                variants={fadeIn('up', { delay: 0.3 })}
                className="flex flex-wrap justify-center gap-4 mb-12"
              >
                {car.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(color)}
                    className={cn(
                      "px-4 py-2 rounded-full transition-all",
                      selectedColor === color 
                        ? "bg-primary text-white" 
                        : "bg-muted hover:bg-muted/80 text-foreground"
                    )}
                  >
                    {color}
                  </button>
                ))}
              </motion.div>
              
              <motion.div
                variants={fadeIn('up', { delay: 0.4 })}
                className="text-center"
              >
                <p className="text-lg font-medium mb-2">
                  您选择了: <span className="text-primary">{selectedColor}</span>
                </p>
                <p className="text-muted-foreground mb-8">
                  {brand.name} {car.name} 的{selectedColor}颜色展现了优雅与动感的完美结合
                </p>
                
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  在线预约试驾
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default CarDetail;
