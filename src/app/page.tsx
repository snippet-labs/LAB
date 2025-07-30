// app > page.tsx
'use client';

// General components
import Header from '@/components/section/Header/Header';
// Section
import Knowus from '@/components/section/Knowus/Knowus';

// Homepage
const HomePage = () => {
  return (
    <>
      <section id="banner">
        <Header
          title="SNIPPETLABS"
          description="From our labs for your dreams"
          isButtonActive={true}
          buttonDescription="Build your next dream product with us"
        />
      </section>
      <section id="knowus">
        <Knowus/>
      </section>
      <section id="technology"></section>
      <section id="motto"></section>
    </>
  );
};

export default HomePage;
