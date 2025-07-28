'use client';

// UI components
import { BackgroundBeams } from '@/components/ui/background-beams';
// Types
import { BackgroundBeamTypes } from './Background.types';

const Background = ({ title, description }: BackgroundBeamTypes) => {
  return (
    <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-5xl md:text-8xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold transition-all">
          {title}
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-lg md:text-lg lg:text-xl text-center relative z-10 transition-all">
          {description}
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Background;
