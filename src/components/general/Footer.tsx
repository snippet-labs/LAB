'use client';

// Modules
import { useRef } from 'react';
import { useInView, motion } from 'motion/react';
import Link from 'next/link';
import { monotonFont } from '@/helpers/font';
import Tooltip from './Tooltip/Tooltip';
import { sitemapLinks } from '@/data/siteMap';
import { FeatureFlag } from '@/hooks/useFeatureFlag';

const Footer = () => {
  const newsLetterFeature = FeatureFlag();

  const ref = useRef(null);
  const isSectionInViewPort = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  const currentYear = new Date().getFullYear();

  return (
    <div
      ref={ref}
      className="relative w-full bg-neutral-900/95 backdrop-blur-md overflow-hidden flex flex-col items-center justify-center antialiased border-white/20 p-2"
    >
      <div className="relative z-10 w-full max-w-7xl px-6 md:px-16 py-16 flex flex-col gap-12">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isSectionInViewPort ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-8"
          >
            {sitemapLinks.map((section) => (
              <div key={section.title}>
                <h3 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  font-sans font-semibold text-xl mb-3 backface-visible">
                  {section.title}
                </h3>
                <ul className="space-y-2 text-gray-300">
                  {section.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="hover:underline hover:text-white text-purple-300/90 transition-all"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isSectionInViewPort ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex-1 max-w-md"
          >

            <h3
              className={`text-white text-2xl tracking-wide mb-3 logo-gradient-shift-animation transition-all ${monotonFont.className}`}
            >
              Subscribe to our Newsletter
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest news, articles, and updates delivered to your
              inbox.
            </p>
            {newsLetterFeature ? (            
              <form className="flex flex-col sm:flex-row items-center gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full flex-1 px-4 py-2 rounded-lg border border-white/20 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-black px-5 py-2 rounded-lg transition-all shadow-md hover:cursor-pointer"
              >
                Subscribe
              </button>
            </form>):
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-purple-600 via-cyan-500 to-blue-500 shadow-lg animate-pulse">
                <svg
                className="w-6 h-6 text-red-500 drop-shadow"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"
                />
                </svg>
              <span className="font-bold text-white text-base tracking-wide drop-shadow">
                Feature in Development ...
              </span>
            </div>}

          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isSectionInViewPort ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
          className="mt-5 flex-col lg:flex-row md:flex-row"
        >
          <Tooltip />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isSectionInViewPort ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 1, ease: 'easeOut' }}
          className="border-t-5 border-dotted border-white/20"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isSectionInViewPort ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 1, ease: 'easeOut' }}
          className="text-center text-gray-400 text-sm"
        >
          &copy; {currentYear} &nbsp;
          <span className="logo-gradient-shift-animation transition-all">
            Team Snippets
          </span>
          . All rights reserved.
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
