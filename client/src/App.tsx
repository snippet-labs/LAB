import React, { lazy } from 'react';
import {BrowserRouter,Routes,Route,useLocation} from "react-router-dom";
// COMPONENTS 
const Layout = lazy(() => import ("./components/Layout/Layout"));
// ICONS
//STORE

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/*' element={<Layout/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
