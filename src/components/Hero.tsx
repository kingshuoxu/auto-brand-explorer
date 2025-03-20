
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { brands } from '@/data/carsData';

const heroImages = [
  'https://images.unsplash.com/photo-1617814076668-4af354906521?q=80&w=2072&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=2069&auto=format&fit=crop',
];

const Hero = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsImageLoaded(false);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleImageLoaded = () => {
    setIsImageLoaded(true);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 bg-black">
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Luxury car ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ zIndex: index === currentImageIndex ? 1 : 0 }}
            onLoad={index === currentImageIndex ? handleImageLoaded : undefined}
          />
        ))}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full w-full flex flex-col justify-center items-center text-center px-4 md:px-8">
        <div 
          className={`transition-all duration-1000 delay-300 transform ${
            isImageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <span className="inline-block px-3 py-1 mb-6 text-xs font-medium bg-primary/10 backdrop-blur-sm text-primary-foreground rounded-full">
            探索多个顶级汽车品牌
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-display tracking-tight leading-tight">
            发现卓越<br /><span className="text-primary-foreground">驾驶体验</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-white/80 mb-8">
            探索全球顶级汽车品牌的最新车型，了解它们的创新特性、性能数据和设计理念。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="group bg-primary hover:bg-primary/90 text-white px-6 py-6"
              onClick={() => navigate('/brands')}
            >
              浏览品牌
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/30 text-white px-6 py-6"
              onClick={() => {
                const randomBrand = brands[Math.floor(Math.random() * brands.length)];
                navigate(`/brand/${randomBrand.id}`);
              }}
            >
              随机品牌
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center p-1">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
