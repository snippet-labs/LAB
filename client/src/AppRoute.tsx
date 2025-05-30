import React from 'react';
import { Routes, Route } from 'react-router-dom';

// HOOKS
import useRouterLoader from './hooks/useRouterLoader';
// UTILS
import Loader from './utils/Loader/Loader';
// COMPONENTS
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';

const AppRoute: React.FC = () => {
  // HOOKS
  const isLoading: boolean = useRouterLoader(1000);

  if (isLoading) return <Loader />;

  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<Home />} />
      <Route path="/contactus" element={<Contact />} />
    </Routes>
  );
};

export default AppRoute;
