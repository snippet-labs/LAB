import React from 'react';

// TYPES
import type { LogoProps } from './Logo.types';

const Logo: React.FC<LogoProps> = ({ className }) => {
  return <div className={className}>{`{?:}`}</div>;
};

export default Logo;
