import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// COMPONENTS
import AppRoute from './AppRoute';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  );
};

export default App;
