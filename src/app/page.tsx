// app > page.tsx
'use client';

// Modules
import Header from '@/components/section/Header/Header';
import Knowus from '@/components/section/Knowus/Knowus';

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
        <Knowus />
      </section>
      <section id="technology"></section>
      <section id="motto"></section>
    </>
  );
};

export default HomePage;
