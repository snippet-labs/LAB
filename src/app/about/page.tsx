'use client';

// Hooks
import { useFeatureFlag } from '@/hooks/useFeatureFlag';
// Modules
import { monotonFont } from '@/helpers/font';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { motion } from 'framer-motion';
import UnderDevelopment from '@/components/general/UnderDevelopment/UnderDevelopment';

const AboutPage: React.FC = () => {
  const { isFooterLink } = useFeatureFlag();

  return (
    <div className="min-h-[100vh] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased text-white overflow-x-hidden">
      <BackgroundBeams />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative flex flex-col items-center z-10"
      >
        <span
          className={`h-20 md:h-30 lg:h-35 text-7xl md:text-8xl lg:text-9xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-center logo-gradient-shift-animation ${monotonFont.className}`}
        >
          ABOUT US
        </span>
      </motion.div>
      <motion.div>
        {isFooterLink.isAboutPage ? (
          <></>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
            className="mt-10 flex justify-center w-full"
          >
            <UnderDevelopment />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default AboutPage;
