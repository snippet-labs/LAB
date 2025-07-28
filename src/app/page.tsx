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
        />
      </section>
      <section id="knowus">
        <Background title="KNOW OUR COMPANY" />
      </section>
      <section id="technology">
        <Background title="TECHNOLOGY STACK" />
      </section>
      <section id="motto">
        <Background title="OUR MOTTO" />
      </section>
    </>
  );
};

export default HomePage;
