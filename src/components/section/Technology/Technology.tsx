'use client';

// Modules
import { BackgroundBeams } from '@/components/ui/background-beams';
import { monotonFont } from '@/helpers/font';
import { motion } from 'motion/react';
import { useSectionInView } from '@/hooks/useSectionInView';


const Technology = () => {
  const { ref, isSectionInViewPort } = useSectionInView();

  return (
    <div
      ref={ref}
      className="relative h-screen w-full bg-neutral-950 overflow-hidden flex flex-col items-center justify-center antialiased"
    >
      <BackgroundBeams />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isSectionInViewPort ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1
          className={`text-5xl md:text-7xl lg:text-8xl bg-clip-text text-transparent  bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 logo-gradient-shift-animation text-left transition-all mb-4 ${monotonFont.className}`}
        >
          STACK
        </h1>
      </motion.div>
    </div>
  );
};

export default Technology;
