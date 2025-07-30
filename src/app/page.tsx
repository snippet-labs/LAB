// app > page.tsx
'use client';

// General components
import Background from '@/components/general/BackgroundBeam/Background';

// Homepage
const HomePage = () => {
  return (
    <>
      <section id="banner">
        <Background
          title="SNIPPETLABS"
          description="From our labs for your dreams"
          isButtonActive={true}
          buttonDescription="Build your next dream product with us"
        />
      </section>
      <section id="knowus">
        <Background
          title="KNOW OUR COMPANY"
          description="We're an emerging product development studio on a mission to turn ideas into intuitive, delightful, and scalable digital experiences. Whether you're a startup with a sketch or a brand with a vision, we dive deep with love, empathy, and fun at the core of everything we create. Our team blends craftsmanship with compassion, ensuring every pixel, line of code, and interaction feels personal and purposeful. We believe the best products come from close collaboration, honest conversations, and a little bit of magic"
          isButtonActive={false}
        />
      </section>
      <section id="technology">
        <Background title="TECHNOLOGY STACK" isButtonActive={false} />
      </section>
      <section id="motto">
        <Background title="OUR MOTTO" isButtonActive={false} />
      </section>
    </>
  );
};

export default HomePage;
