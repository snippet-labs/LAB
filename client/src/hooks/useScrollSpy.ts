import { useEffect, useState } from 'react';
// GSAP
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// DATA
import NAVIGATION_LINKS from '../data/NavigationLinks/NavigationLinks';

export const useScrollSpy = (offset = 100) => {
  const [activeLink, setActiveLink] = useState<string>(
    NAVIGATION_LINKS[0].path,
  );

  useEffect(() => {
    // REGISTER
    gsap.registerPlugin(ScrollToPlugin);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      NAVIGATION_LINKS.forEach(({ path }) => {
        const section = document.getElementById(path);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveLink(path);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset]);

  return activeLink;
};
