import React from 'react';
import { NavLink, Link } from 'react-router-dom';

// ICONS
import { HiMenuAlt3 } from 'react-icons/hi';
// UTILS
import Logo from '../../../utils/Logo/Logo';
// DATA
import NAVIGATION_LINKS from '../../../data/NavigationLinks/NavigationLinks';

const NavigationBar: React.FC = () => {
  return (
    <div className="w-full h-[9vh] BG-BLACK-PRIMARY FLEX-BETWEEN PADDING">
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
      <div className="lg:hidden MOBILE-LINKS POINTER">
        <HiMenuAlt3 size={20} className="TEXT-WHITE-PRIMARY" />
      </div>
    </div>
  );
};

export default NavigationBar;
