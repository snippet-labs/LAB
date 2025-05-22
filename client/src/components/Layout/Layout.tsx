import React from 'react';
import { Routes, Route } from 'react-router-dom';

// COMPONENTS
import NavigationBar from '../General/NavigationBar/NavigationBar';
import Footer from '../General/Footer/Footer';

const Layout: React.FC = () => {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<></>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Layout;
