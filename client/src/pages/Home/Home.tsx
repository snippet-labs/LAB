import React from 'react';

// COMPONENT
import NavigationBar from '../../components/General/NavigationBar/NavigationBar';
// SECTIONS
import Header from '../../components/Section/Header/Header';
import About from '../../components/Section/About/About';
import Stack from '../../components/Section/Stack/Stack';
import Client from '../../components/Section/Client/Client';
import Product from '../../components/Section/Product/Product';
import Team from '../../components/Section/Team/Team';

const Home: React.FC = () => {
  return (
    <div>
      <NavigationBar />
      <Header />
      <About />
      <Stack />
      <Client />
      <Product />
      <Team />
      {/* Footer & action buttons come here */}
    </div>
  );
};

export default Home;
