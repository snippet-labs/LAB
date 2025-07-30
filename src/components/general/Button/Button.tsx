'use client';

// Types
import { ButtonTypes } from './Button.types';

const Button = ({ title, icon }: ButtonTypes) => {
  return (
    <div className="flex items-center justify-center gap-2 text-white px-3 py-1 text-sm md:text-md lg:text-lg border-1 border-blue-500  rounded-full bg-blue-500/20 hover:bg-blue-500 backdrop-blur-3xl">
      {icon && <span>{icon}</span>}
      {title}
    </div>
  );
};

export default Button;
