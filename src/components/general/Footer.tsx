'use client';

// Modules
import { useRef } from 'react';
import { useInView, motion } from 'motion/react';
import Link from 'next/link';
import { monotonFont } from '@/helpers/font';

// Sitemap
const sitemapLinks = [
  {
    title: 'Company',
    links: ['About', 'Careers', 'Press', 'Blog'],
  },
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'Docs', 'Releases'],
  },
  {
    title: 'Support',
    links: ['Help Center', 'Terms', 'Privacy', 'Status'],
  },
];

const Footer = () => {
  const ref = useRef(null);
  const isSectionInViewPort = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  const currentYear = new Date().getFullYear();

  return (
    <div
      ref={ref}
      className="relative w-full bg-neutral-950 overflow-hidden flex flex-col items-center justify-center antialiased border-t-5 border-dotted border-white/20 p-2"
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
                <h3 className="text-white font-semibold text-base mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-2 text-gray-300">
                  {section.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="hover:underline hover:text-white transition-all"
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
              className={`text-white text-2xl mb-3 logo-gradient-shift-animation transition-all ${monotonFont.className}`}
            >
              Subscribe to our Newsletter
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest news, articles, and updates delivered to your
              inbox.
            </p>
            <form className="flex flex-col sm:flex-row items-center gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full flex-1 px-4 py-2 rounded-lg border border-white/20 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-lg transition-all shadow-md"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isSectionInViewPort ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
          className="border-t-5 border-dotted border-white/20"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isSectionInViewPort ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 1, ease: 'easeOut' }}
          className="text-center text-gray-400 text-sm"
        >
          &copy; {currentYear} Team Snippets. All rights reserved.
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
