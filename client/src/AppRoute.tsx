import React from 'react';
import { Routes, Route } from 'react-router-dom';

// COMPONENTS
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import ErrorPage from './pages/Error/Error'
// HOOKS
import useRouterLoader from './hooks/useRouterLoader';
// UTILS
import Loader from './utils/Loader/Loader';

const AppRoute: React.FC = () => {
  const isLoading = useRouterLoader(1000);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contactus" element={<Contact />} />
        <Route path="/*" element={<ErrorPage/>}></Route>
      </Route>
    </Routes>
  );
};

export default AppRoute;
