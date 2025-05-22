import React from 'react';
import { NavLink } from 'react-router-dom';

// DATA
import NAVIGATION_LINKS from '../../../data/NavigationLinks/NavigationLinks';

const NavigationBar: React.FC = () => {
  return (
    <div className="w-full h-16 BG-BLACK-PRIMARY FLEX-BETWEEN px-3 py-1">
      <div className="font-style text-3xl TEXT-PRIMARY">{`{?:}`}</div>
      <div className="LINKS">
        <ul className="TEXT-PRIMARY FLEX-CENTER gap-6">
          {NAVIGATION_LINKS.map(({ name, path }, id) => (
            <li key={id}>
              <NavLink to={path}>{name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
