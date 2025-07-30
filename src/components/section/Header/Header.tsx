'use client';

// UI components
import { BackgroundBeams } from '@/components/ui/background-beams';
// General components
import Button from '../../general/Button/Button';

// Types
import { HeaderTypes } from './Header.types';

const Header = ({
  title,
  description,
  isButtonActive,
  buttonDescription,
}: HeaderTypes) => {
  return (
    <div className="min-h-[100vh] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="relative z-10 text-5xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold transition-all">
          {title}
        </h1>
        <p className="text-neutral-500 text-center lg:text-center max-w-sm md:max-w-xl lg:max-w-2xl mx-auto my-2 mt-5 p-4 text-lg md:text-lg lg:text-xl  relative z-10 transition-all  overflow-x--hidden">
          {description}
        </p>
      </div>

      {isButtonActive && (
        <div className="mt-10">
          <Button title={buttonDescription} />
        </div>
      )}

      <BackgroundBeams />
    </div>
  );
};

export default Header;
