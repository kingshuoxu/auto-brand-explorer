
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  ChevronLeft, 
  Fuel, 
  Clock, 
  Power, 
  ArrowRight, 
  Calendar, 
  Gauge, 
  BatteryMedium, 
  CircleDollarSign 
} from 'lucide-react';

import { fadeIn, slideIn } from '@/lib/motion';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { brands } from '@/data/carsData';
import { Skeleton } from '@/components/ui/skeleton';

// Changed type definition to use a Record for useParams compatibility
type CarDetailParams = {
  brandId: string;
  carId: string;
};

const CarDetail = () => {
  const { brandId, carId } = useParams<CarDetailParams>();
  const navigate = useNavigate();
  const [car, setCar] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!brandId || !carId) {
      console.error("Brand ID or Car ID is missing.");
      return;
    }

    const brand = brands.find((b) => b.id === brandId);
    if (!brand) {
      console.error(`Brand with ID ${brandId} not found.`);
      return;
    }

    const carFound = brand.models.find((model) => model.id === carId);
    if (!carFound) {
      console.error(`Car with ID ${carId} not found in brand ${brandId}.`);
      return;
    }

    setCar(carFound);
    setIsLoading(false);
  }, [brandId, carId]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Skeleton className="w-[200px] h-[200px] rounded-full mb-4" />
        <Skeleton className="w-[300px] h-[20px] mb-2" />
        <Skeleton className="w-[200px] h-[20px]" />
      </div>
    );
  }

  if (!car) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2>Car Not Found</h2>
        <Button onClick={() => navigate('/')}>Go Home</Button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${car.name} - ${car.brand ? car.brand : brandId} Details`}</title>
        <meta name="description" content={`Learn more about the ${car.name} from ${car.brand ? car.brand : brandId}, including specs, features, and more.`} />
      </Helmet>

      <Navbar />

      <div className="container mx-auto mt-16 md:mt-20 px-4 md:px-6">
        <motion.div
          variants={fadeIn('up', { delay: 0.2 })}
          initial="hidden"
          animate="show"
          className="mb-8"
        >
          <Button variant="ghost" onClick={() => navigate(`/brand/${brandId}`)}>
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to {car.brand ? car.brand : brandId}
          </Button>
        </motion.div>

        <motion.div
          variants={slideIn('right', { delay: 0.3 })}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Car Image */}
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>

          {/* Car Details */}
          <div>
            <motion.h1
              variants={fadeIn('up', { delay: 0.4 })}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              {car.name}
            </motion.h1>
            <motion.p
              variants={fadeIn('up', { delay: 0.5 })}
              className="text-muted-foreground mb-6"
            >
              {car.description}
            </motion.p>

            {/* Specs */}
            <motion.div
              variants={fadeIn('up', { delay: 0.6 })}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="flex items-center gap-2">
                <Fuel className="h-5 w-5 text-primary" />
                <span>
                  <strong>Fuel Type:</strong> {car.specs?.fuelType || car.fuelType}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Power className="h-5 w-5 text-primary" />
                <span>
                  <strong>Engine:</strong> {car.specs?.engine || car.engine}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>
                  <strong>0-100 km/h:</strong> {car.specs?.acceleration || car.acceleration} s
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Gauge className="h-5 w-5 text-primary" />
                <span>
                  <strong>Top Speed:</strong> {car.specs?.topSpeed || car.topSpeed} km/h
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span>
                  <strong>Year:</strong> {car.year}
                </span>
              </div>
               <div className="flex items-center gap-2">
                <BatteryMedium className="h-5 w-5 text-primary" />
                <span>
                  <strong>Power:</strong> {car.specs?.power || car.power} HP
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CircleDollarSign className="h-5 w-5 text-primary" />
                <span>
                  <strong>Price:</strong> {car.price}
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn('up', { delay: 0.7 })}
              className="mt-8"
            >
              <Button className="w-full md:w-auto" onClick={() => window.open(car.officialWebsite || `https://www.${brandId}.com`, "_blank")}>
                Visit Official Website
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </>
  );
};

export default CarDetail;
