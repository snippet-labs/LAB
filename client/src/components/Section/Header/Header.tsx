import React, { useEffect, useRef } from 'react';
// GSAP
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// ICONS
import { IoIosArrowDropdownCircle } from 'react-icons/io';

// REGISTER
gsap.registerPlugin(ScrollTrigger);

const HeaderSection: React.FC = () => {
  // STATES
  const sectionRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);

  // EFFECTS
  useEffect(() => {
    if (!sectionRef.current || !logoRef.current || !taglineRef.current) return;

    // GSAP:TIMELINE
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
      id="home"
      ref={sectionRef}
      className="CONTAINER relative FULL SCREEN BG-BLACK-PRIMARY FLEX-CENTER COL overflow-hidden"
    >
      <div ref={logoRef} className="absolute inset-0 FLEX-CENTER">
        <div className="CENTER transform scale-150 ALL">
          <span className="LOGO GRADIENT text-6xl md:text-[6rem] lg:text-[7rem] ">{`{?:}`}</span>
        </div>
      </div>
      <div
        ref={taglineRef}
        className="absolute inset-0 FLEX-CENTER opacity-0 transform translate-y-16"
      >
        <h2 className="max-w-3xl CENTER FLEX COL">
          <span className="text-5xl md:text-[5rem] lg:text-[6rem] font-bold text-white">
            SNIPPETLABS
          </span>
          <span className="GRADIENT font-semibold text-xl md:text-[1.5rem] lg:text-[2.5rem]">
            From our labs for your dreams
          </span>
        </h2>
      </div>
    </section>
  );
};

export default HeaderSection;
