// Modules
import Cards from '@/components/general/Cards/Cards';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { monotonFont } from '@/helpers/font';
import { MdTaskAlt } from 'react-icons/md';
import { LiaEyeSolid } from 'react-icons/lia';
import { motion } from 'motion/react';

const Knowus = () => {
  return (
    <div className="relative h-screen w-full bg-neutral-950 overflow-hidden flex flex-col items-center justify-center antialiased">
      <BackgroundBeams />

      <div className="relative z-10 flex flex-col items-center justify-center px-6 md:px-16 py-12 gap-12">
        <div className="text-white max-w-3xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h1
              className={`text-5xl md:text-7xl lg:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-left transition-all mb-4 ${monotonFont.className}`}
            >
              KNOW US
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
          >
            <p className="text-lg md:text-xl text-neutral-300 text-justify leading-relaxed">
              Discover who we are, what we believe in, and how we’re shaping the
              future through technology. Our team is committed to delivering
              cutting-edge solutions that make life easier, smarter, and more
              connected.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: 'easeOut' }}
        >
          <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl justify-center">
            <Cards
              title="Our Mission"
              description="To empower people through modern technology and intuitive design, making impactful solutions accessible to all."
              icon={<MdTaskAlt />}
              iconColor="text-purple-400"
              iconBackground="bg-purple-600"
              iconBorder="border-purple-500"
            />
            <Cards
              title="Our Vision"
              description=" Bridging the gap between complexity and simplicity through innovation, making technology seamless and human-centric."
              icon={<LiaEyeSolid />}
              iconColor="text-blue-400"
              iconBackground="bg-blue-600"
              iconBorder="border-blue-500"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Knowus;
