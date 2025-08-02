// Modules
import { motion } from 'framer-motion';
import { BackgroundBeams } from '@/components/ui/background-beams';
import Capsule from '../../general/Capsule/Capsule';
import { monotonFont } from '@/helpers/font';
import { HeaderTypes } from './Header.types';

const Header = ({
  title,
  description,
  isButtonActive,
  buttonDescription,
}: HeaderTypes) => {
  return (
    <div className="min-h-[100vh] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <BackgroundBeams />
      <div className="relative z-10 flex flex-col items-center justify-center px-6 md:px-16 py-12 gap-12">
        <div className="text-white max-w-4xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className={`relative z-10 h-20 md:h-35 lg:h-40 text-7xl md:text-8xl lg:text-9xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-center logo-gradient-shift-animation ${monotonFont.className}`}
          >
            {'{?:}'}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
            className="max-w-6xl mx-auto p-4"
          >
            <h1 className="relative z-10 text-5xl md:text-8xl lg:text-9xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
              {title}
            </h1>
            <p className="text-neutral-500 font-semibold text-center max-w-sm md:max-w-xl lg:max-w-2xl mx-auto mt-5 p-4 text-lg md:text-lg lg:text-xl relative z-10">
              {description}
            </p>
          </motion.div>
          {isButtonActive && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1, ease: 'easeOut' }}
              className="mt-20 flex items-center justify-center"
            >
              <Capsule title={buttonDescription} />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
