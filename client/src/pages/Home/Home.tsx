import React from 'react';
import NavigationBar from '../../components/General/NavigationBar/NavigationBar';
import Header from '../../components/Section/Header/Header';
import About from '../../components/Section/About/About';

const Home: React.FC = () => {
  return (
    <div>
      <NavigationBar />
      <Header />
      <About />
    </div>
  );
};

export default Home;
