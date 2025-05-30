import React from 'react';
import { Routes, Route } from 'react-router-dom';

// HOOKS
import useRouterLoader from './hooks/useRouterLoader';
// UTILS
import Loader from './utils/Loader/Loader';
// COMPONENTS
import Layout from './components/Layout/Layout';

const AppRoute: React.FC = () => {
  // HOOKS
  const isLoading = useRouterLoader();

  if (isLoading) return <Loader />;

  return (
    <Routes>
      <Route path="/*" element={<Layout />} />
    </Routes>
  );
};

export default AppRoute;
