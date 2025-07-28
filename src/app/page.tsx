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
    </>
  );
};

export default HomePage;
