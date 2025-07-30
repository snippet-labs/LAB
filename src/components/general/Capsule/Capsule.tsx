'use client';

// Types
import { CapsuleTypes } from './Capsule.types';

// Button
const Capsule = ({ title }: CapsuleTypes) => {
  return (
    <button className="text-white text-sm md:text-md lg:text-lg border-1 border-purple-500 backdrop-blur-3xl bg-purple-500/10 rounded-full px-5 md:px-10 lg:px-15 py-2 animate-pulse z-20">
      {title}
    </button>
  );
};

export default Capsule;
