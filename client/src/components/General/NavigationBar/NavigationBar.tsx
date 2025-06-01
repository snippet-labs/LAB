import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// ICONS
import { HiMenuAlt3, HiX } from 'react-icons/hi';

// UTILS
import Logo from '../../../utils/Logo/Logo';
// DATA
import NAVIGATION_LINKS from '../../../data/NavigationLinks/NavigationLinks';
// HOOKS
import { useScrollSpy } from '../../../hooks/useScrollSpy';
import { useSmoothScroll } from '../../../hooks/useSmoothScroll';

const NavigationBar: React.FC = () => {
  // STATES
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const activeLink = useScrollSpy(100);
  const handleScrollTo = useSmoothScroll(() => setToggleSidebar(false));
  // HANDLER
  const handleOpenSidebar = () => setToggleSidebar((previous) => !previous);
  const handleCloseSidebar = () => setToggleSidebar(false);

  return (
    <>
      {/* Sticky Navigation Bar */}
      <div className="STICKY PTOP T0 z-50 FULL HNAV BG-BLACK-PRIMARY FLEX-BETWEEN PADDING">
        <Logo className="LOGO text-4xl TEXT-WHITE-PRIMARY" />
        {/* Desktop Navigation Bar */}
        <div className="hidden FLEX-CENTER-LG G4">
          <div className="DESKTOP-LINKS">
            <ul className="TEXT-COLOR-PRIMARY FLEX-CENTER G6">
              {NAVIGATION_LINKS.map(({ name, path, icon }, id) => (
                <li key={id} className="GRAY-300 TEXT-WHITE-PRIMARY-HOVER">
                  <a
                    href={`#${path}`}
                    onClick={handleScrollTo(path)}
                    className={`FLEX-CENTER DESKTOP-LINKS-LINK G2  ${activeLink === path ? 'DESKTOP-LINKS-ACTIVE' : ''}`}
                  >
                    {icon}
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/contactus" className="TEXT-BLACK-PRIMARY BUTTON POINTER">
            Contact
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
          className={`ABSOLUTE BORDER-LEFT-CORNER-3XL T0 R0 h-full w-80 max-w-[85vw] BG-BLACK-PRIMARY TEXT-WHITE-PRIMARY TRANSFORM D-300 EASE ${
            toggleSidebar ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Sidebar Header */}
          <div className="FLEX-BETWEEN PADDING HNAV border-b border-gray-500">
            <Logo className="LOGO text-3xl TEXT-WHITE-PRIMARY" />
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
                {NAVIGATION_LINKS.map(({ name, path, icon }, id) => (
                  <li key={id}>
                    <a
                      href={`#${path}`}
                      onClick={handleScrollTo(path)}
                      className={`BLOCK px-4 py-3 rounded-xl ALL D-300 TEXT-WHITE-PRIMARY WHITE-20-HOVER FLEX-START G2 ${
                        activeLink === path ? 'MOBILE-LINKS-ACTIVE' : ''
                      }`}
                    >
                      {icon}
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact Button */}
            <Link
              to="/contactus"
              onClick={handleCloseSidebar}
              className="BLOCK FULL CENTER TEXT-BLACK-PRIMARY BUTTON POINTER TRANSFROM D-300 hover:scale-105"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
