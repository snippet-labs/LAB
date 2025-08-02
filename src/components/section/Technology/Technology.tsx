'use client';

// Modules
import { BackgroundBeams } from '@/components/ui/background-beams';
import { monotonFont } from '@/helpers/font';
import { motion } from 'motion/react';
import { useSectionInView } from '@/hooks/useSectionInView';
import { stackData } from '@/data/stackData';
import Image from 'next/image';

const Technology = () => {
  const { ref, isSectionInViewPort } = useSectionInView();

  return (
    <div
      ref={ref}
      className="relative h-screen w-full bg-neutral-950 overflow-hidden flex flex-col items-center justify-center antialiased"
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
              Our weapons of choice, our technology stack that not only give us
              en edge to build something grand efforlessly but make our dream
              projects happy and delighted.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isSectionInViewPort ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-4xl"
          >
            <div className="flex overflow-hidden border mt-15  EDGEGRADIENT">
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: '-100%' }}
                transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                className="flex flex-shrink-0 gap-1"
              >
                {stackData.map((image, index) => {
                  return (
                    <Image
                      src={image}
                      alt=""
                      width={70}
                      height={70}
                      key={index}
                      className="group bg-white/5 backdrop-blur-md border border-neutral-800 rounded-2xl shadow-xl"
                    />
                  );
                })}
              </motion.div>
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: '-100%' }}
                transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                className="flex flex-shrink-0 gap-1"
              >
                {stackData.map((image, index) => {
                  return (
                    <Image
                      src={image}
                      alt={''}
                      width={70}
                      height={70}
                      key={index}
                      className="group bg-white/5 backdrop-blur-md border border-neutral-800 rounded-2xl shadow-xl"
                    />
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
