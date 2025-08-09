'use client';

import GyroCard from '@/components/general/GyroCard/GyroCard';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { productDetails } from '@/data/productDetails';

const ProductCard = () => {
  return (
    <div className="min-h-[100vh] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <BackgroundBeams />
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 md:px-16 py-12 gap-12 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-6xl">
          {productDetails.map((product, index) => (
            <GyroCard
              key={index}
              title={product.title}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
