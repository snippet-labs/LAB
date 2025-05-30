import React from 'react';
import { Outlet } from 'react-router-dom';

// COMPONENTS
import NavigationBar from '../General/NavigationBar/NavigationBar';
// UTILS
import Loader from '../../utils/Loader/Loader';
import useRouterLoader from '../../hooks/useRouterLoader';

const Layout: React.FC = () => {
  // HOOKS
  const isLoading: boolean = useRouterLoader(1000);

  return (
    <div>
      {/* Navigation */}
      <NavigationBar />
      {isLoading && <Loader />}
      <main>
        <Outlet />
      </main>
      {/* Footer */}
      {/* Action */}
    </div>
  );
};

export default Layout;
