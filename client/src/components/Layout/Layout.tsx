import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// COMPONENTS
import NavigationBar from '../General/NavigationBar/NavigationBar';
import Footer from '../General/Footer/Footer';
// UTILS
import Loader from '../../utils/Loader/Loader';

const Layout: React.FC = () => {
  return (
    <div>
      <NavigationBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<></>} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default Layout;
