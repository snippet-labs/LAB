'use client';

// Modules
import { BackgroundBeams } from '@/components/ui/background-beams';
import { monotonFont } from '@/helpers/font';
import { motion } from 'motion/react';
import { useSectionInView } from '@/hooks/useSectionInView';
import { stackData } from '@/data/stackData';
import Marqee from '@/components/general/Marqee/Marqee';

const Technology = () => {
  const { ref, isSectionInViewPort } = useSectionInView();

  return (
    <div
      ref={ref}
      className="relative min-h-[100vh] w-full bg-neutral-950 overflow-hidden flex flex-col items-center justify-center antialiased"
    >
      <BackgroundBeams />

      <div className="relative z-10 flex flex-col items-center justify-center px-6 md:px-16 py-12 gap-12">
        <div className="text-white max-w-4xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isSectionInViewPort ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h1
              className={`text-5xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 logo-gradient-shift-animation text-left transition-all mb-4 ${monotonFont.className}`}
            >
              OUR STACK
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isSectionInViewPort ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
          >
            <p className="text-lg md:text-xl text-justify leading-relaxed bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
              Our weapons of choice — a technology stack that not only gives us
              an edge to build something grand effortlessly, but also brings joy
              and delight to our dream projects.
            </p>
          </motion.div>
        </div>
      </div>
      <Marqee data={stackData} />
    </div>
  );
};

export default Technology;
