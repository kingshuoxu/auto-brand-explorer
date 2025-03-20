import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Users, Code, Phone, Mail, Smartphone, Tablet, Monitor, MapPin } from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { fadeIn, staggerContainer } from '@/lib/motion';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: '张明',
      role: '创始人兼CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    },
    {
      name: '李娜',
      role: '汽车编辑',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
    },
    {
      name: '王伟',
      role: '技术总监',
      image: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=1969&auto=format&fit=crop',
    },
    {
      name: '刘芳',
      role: '市场经理',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
    },
  ];

  return (
    <>
      <Helmet>
        <title>关于我们 - 汽车品牌介绍平台</title>
        <meta name="description" content="了解我们的汽车品牌介绍平台，我们致力于为用户提供权威、全面的汽车资讯。" />
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
                关于我们
              </motion.span>
              
              <motion.h1
                variants={fadeIn('up', { delay: 0.2 })}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                我们的使命
              </motion.h1>
              
              <motion.p
                variants={fadeIn('up', { delay: 0.3 })}
                className="text-muted-foreground"
              >
                我们致力于为汽车爱好者提供权威、全面的汽车品牌和车型信息，帮助您了解汽车世界的最新动态。
              </motion.p>
            </motion.div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-20 px-4 md:px-6">
          <div className="container mx-auto">
            <motion.div
              variants={staggerContainer(0.1, 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="flex flex-col md:flex-row gap-12 items-center"
            >
              <motion.div
                variants={fadeIn('right', { delay: 0.2 })}
                className="w-full md:w-1/2"
              >
                <span className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  我们的故事
                </span>
                <h2 className="text-3xl font-bold mb-6">始于热爱，忠于专业</h2>
                <p className="text-muted-foreground mb-6">
                  我们的团队由一群对汽车充满热情的专业人士组成。2020年，我们创建了这个平台，希望为中国消费者提供最专业、最全面的汽车资讯。
                </p>
                <p className="text-muted-foreground mb-6">
                  三年来，我们不断完善内容，从最初的几个品牌到如今覆盖了全球主要汽车品牌。我们深入研究每个品牌的历史、文化和技术特点，为用户呈现最真实、最有价值的信息。
                </p>
                <p className="text-muted-foreground">
                  未来，我们将继续扩展内容，增加更多互动功能，打造中国最权威的汽车品牌资讯平台。
                </p>
              </motion.div>
              
              <motion.div
                variants={fadeIn('left', { delay: 0.2 })}
                className="w-full md:w-1/2"
              >
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop" 
                    alt="Our story" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Our Values Section */}
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
                我们的价值观
              </motion.span>
              
              <motion.h2
                variants={fadeIn('up', { delay: 0.2 })}
                className="text-3xl font-bold mb-4"
              >
                我们的核心理念
              </motion.h2>
              
              <motion.p
                variants={fadeIn('up', { delay: 0.3 })}
                className="text-muted-foreground"
              >
                这些价值观指导着我们的工作，确保我们为用户提供最优质的内容。
              </motion.p>
            </motion.div>
            
            <motion.div
              variants={staggerContainer(0.1, 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <motion.div
                variants={fadeIn('up', { delay: 0.1 })}
                className="bg-background rounded-xl p-8 border border-border/50 transition-all hover:shadow-md"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-4">专业性</h3>
                <p className="text-muted-foreground">
                  我们确保所有内容都经过专业研究和验证，为用户提供准确、可靠的信息。
                </p>
              </motion.div>
              
              <motion.div
                variants={fadeIn('up', { delay: 0.2 })}
                className="bg-background rounded-xl p-8 border border-border/50 transition-all hover:shadow-md"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-4">用户至上</h3>
                <p className="text-muted-foreground">
                  我们以用户需求为中心，不断优化内容和体验，为用户创造最大价值。
                </p>
              </motion.div>
              
              <motion.div
                variants={fadeIn('up', { delay: 0.3 })}
                className="bg-background rounded-xl p-8 border border-border/50 transition-all hover:shadow-md"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-4">创新精神</h3>
                <p className="text-muted-foreground">
                  我们不断探索新的内容形式和技术，为用户带来更丰富、更直观的体验。
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Team Section */}
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
                我们的团队
              </motion.span>
              
              <motion.h2
                variants={fadeIn('up', { delay: 0.2 })}
                className="text-3xl font-bold mb-4"
              >
                团队成员
              </motion.h2>
              
              <motion.p
                variants={fadeIn('up', { delay: 0.3 })}
                className="text-muted-foreground"
              >
                了解支持我们平台的专业团队。
              </motion.p>
            </motion.div>
            
            <motion.div
              variants={staggerContainer(0.1, 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn('up', { delay: index * 0.1 })}
                  className="group"
                >
                  <div className="bg-background rounded-xl overflow-hidden border border-border/50 transition-all group-hover:shadow-md">
                    <div className="aspect-[3/4] overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-20 px-4 md:px-6 bg-muted/30">
          <div className="container mx-auto">
            <motion.div
              variants={staggerContainer(0.1, 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="max-w-3xl mx-auto"
            >
              <motion.div
                variants={fadeIn('up', { delay: 0.1 })}
                className="text-center mb-12"
              >
                <span className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  联系我们
                </span>
                <h2 className="text-3xl font-bold mb-4">与我们取得联系</h2>
                <p className="text-muted-foreground">
                  如果您有任何问题、建议或合作意向，欢迎随时联系我们。
                </p>
              </motion.div>
              
              <motion.div
                variants={fadeIn('up', { delay: 0.2 })}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <div className="bg-background rounded-xl p-8 border border-border/50">
                  <h3 className="text-xl font-semibold mb-6">联系方式</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary mr-4">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">电话</h4>
                        <p className="text-muted-foreground">010-12345678</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary mr-4">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">邮箱</h4>
                        <p className="text-muted-foreground">info@carbrand.example.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary mr-4">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">地址</h4>
                        <p className="text-muted-foreground">北京市朝阳区汽车展示中心大厦1号楼100层</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-background rounded-xl p-8 border border-border/50">
                  <h3 className="text-xl font-semibold mb-6">支持平台</h3>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary mr-4">
                        <Smartphone className="w-5 h-5" />
                      </div>
                      <span>移动端</span>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary mr-4">
                        <Tablet className="w-5 h-5" />
                      </div>
                      <span>平板端</span>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary mr-4">
                        <Monitor className="w-5 h-5" />
                      </div>
                      <span>桌面端</span>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary mr-4">
                        <Code className="w-5 h-5" />
                      </div>
                      <span>API接口</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AboutPage;
