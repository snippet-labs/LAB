import React from 'react';

// LDRS
import { Hatch } from 'ldrs/react';
import 'ldrs/react/Hatch.css';

const Loader: React.FC = () => {
  return (
    <div className="LOADER BG-BLACK-PRIMARY">
      <Hatch size="50" stroke="4" speed="3.5" color="white" />
    </div>
  );
};

export default Loader;
