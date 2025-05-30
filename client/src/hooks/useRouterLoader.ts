import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useRouterLoader = (delay: number): boolean => {
  const location = useLocation();
  const [loading, setLoading] = useState<boolean>(() => false);

  // Loader setup
  useEffect(() => {
    setLoading(true);
    const loadingTime = setTimeout(() => setLoading(false), delay);

    return () => clearTimeout(loadingTime);
  }, [location.pathname, delay]);

  return loading;
};

export default useRouterLoader;
