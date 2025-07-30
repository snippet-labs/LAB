'use client';

// Types
import { ButtonTypes } from './Button.types';

const Button = ({ title }: ButtonTypes) => {
  return (
    <div className="text-white px-5 py-1 text-sm md:text-md lg:text-lg border-1 border-blue-500  rounded-full bg-blue-500/20 hover:bg-blue-500 backdrop-blur-3xl">
      {title}
    </div>
  );
};

export default Button;
