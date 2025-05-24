import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

// ICONS
import { HiMenuAlt3, HiX } from 'react-icons/hi';
// UTILS
import Logo from '../../../utils/Logo/Logo';
// DATA
import NAVIGATION_LINKS from '../../../data/NavigationLinks/NavigationLinks';

const NavigationBar: React.FC = () => {
  // STATES
  const [toggleSidebar, setToggleSidebar] = useState(() => false);

  // STATE HANDLER FUNCTION
  const handleOpenSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };
  const handleCloseSidebar = () => {
    setToggleSidebar(false);
  };

  // RENDER
  return (
    <>
      <div className="FULL h-[9vh] BG-BLACK-PRIMARY FLEX-BETWEEN PADDING">
        <Logo className="font-style-logo text-4xl TEXT-WHITE-PRIMARY" />
        {/* Desktop Navigation Bar */}
        <div className="hidden FLEX-CENTER-LG gap-4">
          <div className="DESKTOP-LINKS">
            <ul className="TEXT-COLOR-PRIMARY FLEX-CENTER gap-6">
              {NAVIGATION_LINKS.map(({ name, path }, id) => (
                <li key={id} className="GRAY-300 TEXT-WHITE-PRIMARY-HOVER">
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive ? 'DESKTOP-LINKS-ACTIVE BG-WHITE-PRIMARY' : ''
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/contact-us" className="TEXT-BLACK-PRIMARY BUTTON POINTER">
            Contract
          </Link>
        </div>
        {/* Mobile Navigation Bar */}
        <button
          className="lg:hidden MOBILE-LINKS-HOVER POINTER"
          onClick={handleOpenSidebar}
        >
          <HiMenuAlt3 size={30} className="TEXT-WHITE-PRIMARY" />
        </button>
      </div>

      {/* Mobile Sidebar Toggle with Overlay */}
      <div
        className={`FIXED inset-0 z-50 lg:hidden transition-opacity D-300 EASE ${
          toggleSidebar
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="ABSOLUTE inset-0 BG-BLACK-PRIMARY backdrop-blur-3xl transition-opacity D-300 EASE"
          onClick={handleCloseSidebar}
        />

        {/* Sidebar */}
        <div
          className={`ABSOLUTE BORDER-LEFT-CORNER-3XL T0 R0 h-full w-80 max-w-[85vw] BG-BLACK-PRIMARY TEXT-WHITE-PRIMARY  TRANSFORM D-300 EASE ${
            toggleSidebar ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Sidebar Header */}
          <div className="FLEX-BETWEEN PADDING h-[9vh] border-b border-gray-500">
            <Logo className="font-style-logo text-3xl TEXT-WHITE-PRIMARY" />
            <button
              onClick={handleCloseSidebar}
              className="TEXT-WHITE-PRIMARY POINTER p-2 WHITE-20-HOVER rounded-xl COLORS D-300"
            >
              <HiX size={30} />
            </button>
          </div>

          {/* Sidebar Content */}
          <div className="p-6">
            {/* Navigation Links */}
            <nav className="mb-8">
              <ul className="space-y-4">
                {NAVIGATION_LINKS.map(({ name, path }, id) => (
                  <li key={id}>
                    <NavLink
                      to={path}
                      onClick={handleCloseSidebar}
                      className={({ isActive }) =>
                        `BLOCK px-4 py-3 rounded-xl ALL D-300 ${
                          isActive
                            ? 'BG-WHITE-PRIMARY TEXT-BLACK-PRIMARY SEMIBOLD'
                            : 'TEXT-WHITE-PRIMARY WHITE-20-HOVER'
                        }`
                      }
                    >
                      {name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact Button */}
            <Link
              to="/contact-us"
              onClick={handleCloseSidebar}
              className="BLOCK FULL CENTER TEXT-BLACK-PRIMARY BUTTON POINTER TRANSFROM D-300 hover:scale-105"
            >
              Contract
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
