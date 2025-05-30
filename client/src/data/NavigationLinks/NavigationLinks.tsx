import type { NavigationLinkProps } from './NavigationLinks.types';

// ICONS
import { RiHome9Line } from 'react-icons/ri';
import { PiUsersFill } from 'react-icons/pi';
import { GrTechnology } from 'react-icons/gr';
import { IoMdGlobe } from 'react-icons/io';
import { AiFillProduct } from 'react-icons/ai';
import { HiClipboardDocument } from 'react-icons/hi2';

const NAVIGATION_LINKS: NavigationLinkProps[] = [
  {
    id: 1,
    name: 'Home',
    path: 'home',
    icon: <RiHome9Line size={20} />,
  },
  {
    id: 2,
    name: 'AboutUs',
    path: 'aboutus',
    icon: <HiClipboardDocument size={20} />,
  },
  {
    id: 3,
    name: 'TechStack',
    path: 'stack',
    icon: <GrTechnology size={20} />,
  },
  {
    id: 4,
    name: 'Client',
    path: 'clients',
    icon: <IoMdGlobe size={20} />,
  },
  {
    id: 5,
    name: 'Products',
    path: 'products',
    icon: <AiFillProduct size={20} />,
  },
  {
    id: 6,
    name: 'Team',
    path: 'team',
    icon: <PiUsersFill size={20} />,
  },
];

export default NAVIGATION_LINKS;
