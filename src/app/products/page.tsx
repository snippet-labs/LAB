'use client';

import GyroCard from '@/components/general/GyroCard/GyroCard';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { productDetails } from '@/data/productDetails';
import { useFeatureFlag } from '@/hooks/useFeatureFlag';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/hooks/useSectionInView';
import { monotonFont } from '@/helpers/font';

const ProductPage = () => {
  const { isPage } = useFeatureFlag();
  const { ref, isSectionInViewPort } = useSectionInView();

  return (
    <div
      ref={ref}
      className="min-h-[100vh] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased"
    >
      <BackgroundBeams />
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 md:px-16 py-12 gap-12 w-full">
        <div className="text-white max-w-4xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isSectionInViewPort ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h1
              className={`text-5xl md:text-7xl lg:text-8xl bg-clip-text text-transparent  bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 logo-gradient-shift-animation text-left transition-all mb-4 ${monotonFont.className}`}
            >
              Our Products
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isSectionInViewPort ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
          >
            <p className="text-md md:text-xl font-medium text-justify leading-relaxed bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
              Discover who we are, what we believe in, and how we’re shaping the
              future through technology. Our team is committed to delivering
              cutting-edge solutions that make life easier, smarter, and more
              connected.
            </p>
          </motion.div>
        </div>
        {isPage.productPage ? (
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
        ) : (
          <div className="text-white">Coming Soon</div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
