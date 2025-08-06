import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useSectionInView } from '@/hooks/useSectionInView';
import { MarqeeTypes } from './Marqee.types';

const Marqee = ({ data }: MarqeeTypes) => {
  const { ref, isSectionInViewPort } = useSectionInView();
  return (
    <div ref={ref} className="w-full flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isSectionInViewPort ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6, duration: 1, ease: 'easeOut' }}
        className="flex overflow-hidden w-full max-w-6xl pt-3 pb-3 border-2 border-white EDGEGRADIENT"
      >
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: '-50%' }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          className="flex flex-shrink-0 gap-1"
        >
          {[...data, ...data].map((image, index) => (
            <Image
              src={image}
              alt=""
              width={70}
              height={70}
              key={index}
              className="mr-2 p-3 group bg-white/5 backdrop-blur-md border border-neutral-800 rounded-2xl shadow-xl"
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Marqee;
