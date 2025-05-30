import type { MouseEvent } from 'react';
// GSAP
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
// REGISTER
gsap.registerPlugin(ScrollToPlugin);

export const useSmoothScroll = (onComplete?: () => void) => {
  const scrollTo = (selector: string, offsetY = 80) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: selector, offsetY },
      ease: 'power2.out',
      onComplete,
    });
  };

  const handleScrollTo = (path: string) => (e: MouseEvent) => {
    e.preventDefault();
    scrollTo(`#${path}`);
    if (onComplete) onComplete();
  };

  return handleScrollTo;
};
