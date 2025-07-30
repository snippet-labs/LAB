'use client';

// Motion
import { motion } from 'motion/react';
// Icons
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

// Font
import { monotonFont } from '@/helpers/font';
// Link
import Link from 'next/link';
import Button from '@/components/general/Button/Button';

const PageNotFound = () => {
  return (
    <div className="min-h-[100vh] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className={`relative z-10 h-20 md:h-30 lg:h-35 text-7xl md:text-8xl lg:text-9xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-center logo-gradient-shift-animation ${monotonFont.className}`}
      >
        404
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
      >
        <p className="text-neutral-500 font-bold text-xl">Page not found</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
        className="mt-6"
      >
        <Link href={'/'}>
          <Button title="Home" icon={<MdOutlineArrowBackIosNew size={0} />} />
        </Link>
      </motion.div>
    </div>
  );
};

export default PageNotFound;
