import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeaderSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !logoRef.current || !taglineRef.current) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=100%',
        scrub: true,
        pin: true,
      },
    });

    timeline.to(
      logoRef.current,
      {
        opacity: 0,
        y: -50,
        scale: 0.8,
        duration: 1,
        ease: 'power2.inOut',
      },
      0,
    );

    timeline.to(
      taglineRef.current,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'power2.inOut',
      },
      0,
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      <div
        ref={logoRef}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="text-center text-white font-bold text-8xl md:text-9xl lg:text-10xl transform scale-150 transition-all">
          {`{?:}`}
        </div>
      </div>
      <div
        ref={taglineRef}
        className="absolute inset-0 flex items-center justify-center opacity-0 transform translate-y-16"
      >
        <h2 className=" max-w-3xl text-center leading-tight flex flex-col">
          <span className="text-5xl md:text-4xl lg:text-6xl font-bold text-white">
            SNIPPETLABS
          </span>
          <span className="text-lime-300 font-semibold text-2xl md:text-3xl lg:text-4xl font-mono">
            From our labs for your dreams
          </span>
        </h2>
      </div>
    </section>
  );
};

export default HeaderSection;
