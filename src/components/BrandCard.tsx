
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Brand } from '@/data/carsData';
import { fadeIn } from '@/lib/motion';

interface BrandCardProps {
  brand: Brand;
  index: number;
}

const BrandCard = ({ brand, index }: BrandCardProps) => {
  const navigate = useNavigate();
  
  return (
    <motion.div
      variants={fadeIn('up', { delay: index * 0.1 })}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="group"
      onClick={() => navigate(`/brand/${brand.id}`)}
    >
      <div 
        className={cn(
          "relative overflow-hidden rounded-xl cursor-pointer card-hover",
          "border border-border/50 bg-background",
          "transition-all duration-500"
        )}
      >
        <div className="p-8 flex flex-col h-full">
          {/* Logo */}
          <div className="w-16 h-16 mb-6 relative">
            <img 
              src={brand.logo} 
              alt={`${brand.name} logo`} 
              className="w-full h-full object-contain"
            />
            <div className="absolute -inset-4 bg-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          {/* Content */}
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold">{brand.name}</h3>
              <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                {brand.country}
              </span>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {brand.description}
            </p>
            
            <div className="mt-auto pt-4 flex justify-between items-center">
              <span className="text-sm text-muted-foreground">
                创立于 {brand.foundedYear}
              </span>
              
              <span className="inline-flex items-center text-sm font-medium text-primary group-hover:underline">
                查看车型
                <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </div>
        
        {/* Brand color accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary/80 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      </div>
    </motion.div>
  );
};

export default BrandCard;
