import React from 'react';
import { NavLink } from 'react-router-dom';

// UTILS
import Logo from '../../../utils/Logo/Logo';
// DATA
import NAVIGATION_LINKS from '../../../data/NavigationLinks/NavigationLinks';

const NavigationBar: React.FC = () => {
  return (
    <div className="w-full h-[9vh] BG-BLACK-PRIMARY FLEX-BETWEEN PADDING">
      <Logo className="font-style-logo text-4xl TEXT-WHITE-PRIMARY" />
      <div className="RESPONSIVE-CENTER-BLOCK gap-4">
        <div className="LINKS">
          <ul className="TEXT-COLOR-PRIMARY FLEX-CENTER gap-6">
            {NAVIGATION_LINKS.map(({ name, path }, id) => (
              <li key={id} className="GRAY-300 TEXT-WHITE-PRIMARY-HOVER">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? 'LINKS-ACTIVE BG-WHITE-PRIMARY' : ''
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="TEXT-BLACK-PRIMARY BUTTON POINTER">Contract</div>
      </div>
    </div>
  );
};

export default NavigationBar;
