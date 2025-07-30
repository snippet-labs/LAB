'use client';

// Types
import { ButtonTypes } from './Button.types';

// Button
const Button = ({ title }: ButtonTypes) => {
  return (
    <div className="text-white text-sm md:text-md lg:text-lg border-1 border-purple-500 bg-purple-500/10 rounded-full px-5 md:px-10 lg:px-15 py-2 animate-pulse z-20">
      {title}
    </div>
  );
};

export default Button;
