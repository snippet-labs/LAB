import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
// COMPONENTS
const Layout = lazy(() => import('./components/Layout/Layout'));
// UTILS
import Loader from './utils/Loader/Loader';
// ICONS
//STORE

const Content: React.FC = () => {
  // STATES
  const location = useLocation();
  const [isLoading, setIsLoading] = useState<boolean>(() => false);

  useEffect(() => {
    setIsLoading(true);
    const loadingTime = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(loadingTime);
  }, [location.pathname]);
  return isLoading ? <Loader /> : <Layout />;
};

const App: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Content />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
