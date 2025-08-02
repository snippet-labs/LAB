import React from 'react';

// Modules
import { FloatingNav } from '@/components/ui/floating-navbar';
import { RiHome9Fill } from 'react-icons/ri';
import { PiUsersFill } from 'react-icons/pi';
import { AiFillProduct } from 'react-icons/ai';
import { FaMailBulk } from 'react-icons/fa';

const Navbar = () => {
  // Navigation links
  const navItems = [
    {
      name: 'Home',
      link: '/',
      icon: (
        <RiHome9Fill className="h-4 w-4 text-neutral-300 hover:text-blue-400" />
      ),
    },
    {
      name: 'Team',
      link: '/team',
      icon: (
        <PiUsersFill className="h-4 w-4 text-neutral-300 hover:text-blue-400" />
      ),
    },
    {
      name: 'Products',
      link: '/products',
      icon: (
        <AiFillProduct className="h-4 w-4 text-neutral-300 hover:text-blue-400" />
      ),
    },
    {
      name: 'Contact',
      link: '/contact',
      icon: (
        <FaMailBulk className="h-4 w-4 text-neutral-300 hover:text-blue-400" />
      ),
    },
  ];
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
};

export default Navbar;
