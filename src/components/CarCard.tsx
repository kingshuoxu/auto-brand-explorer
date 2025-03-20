
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CarModel } from '@/data/carsData';
import { fadeIn } from '@/lib/motion';

interface CarCardProps {
  car: CarModel;
  brandId: string;
  index: number;
}

const CarCard = ({ car, brandId, index }: CarCardProps) => {
  const navigate = useNavigate();
  
  return (
    <motion.div
      variants={fadeIn('up', { delay: index * 0.1 + 0.2 })}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="group"
      onClick={() => navigate(`/brand/${brandId}/car/${car.id}`)}
    >
      <div 
        className={cn(
          "relative overflow-hidden rounded-xl cursor-pointer card-hover",
          "border border-border/50 bg-background",
          "transition-all duration-500 h-full"
        )}
      >
        {/* Image */}
        <div className="aspect-[16/9] w-full overflow-hidden">
          <div className="w-full h-full relative image-shine">
            <img 
              src={car.image} 
              alt={car.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
          </div>
          
          <div className="absolute bottom-0 left-0 p-4 z-10">
            <div className="inline-block px-2 py-1 text-xs font-medium bg-black/50 backdrop-blur-sm text-white rounded-md mb-2">
              {car.year}
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{car.name}</h3>
            <div className="flex items-center text-white/90 text-sm">
              <span>{car.price}</span>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-4">
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {car.description}
          </p>
          
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">引擎</span>
              <span className="text-sm font-medium">{car.specs.engine}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">功率</span>
              <span className="text-sm font-medium">{car.specs.power}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">加速</span>
              <span className="text-sm font-medium">{car.specs.acceleration}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">传动系统</span>
              <span className="text-sm font-medium">{car.specs.drivetrain}</span>
            </div>
          </div>
          
          <div className="mt-auto pt-2 flex justify-end">
            <span className="inline-flex items-center text-sm font-medium text-primary">
              查看详情
              <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCard;
