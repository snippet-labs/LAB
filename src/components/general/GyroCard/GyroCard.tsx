// Modules
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { GyroCardTypes } from './GyroCard.types';
import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';
const GyroCard = ({ title, description, image }: GyroCardTypes) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-white/10  border border-white/20 rounded-xl p-6 relative group/card w-auto sm:w-[30rem] h-auto  ">
        <CardItem translateZ="50" className="text-xl font-bold text-white/70">
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 text-white/70"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height="1000"
            width="1000"
            className=" h-60 w-full object-cover rounded-xl transition-all duration-300 group-hover/card:shadow-lg group-hover/card:shadow-white/70"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-5">
          <CardItem
            translateZ={30}
            target="__blank"
            className="px-4 py-2 rounded-xl font-medium text-white/70"
          >
            Try our product
          </CardItem>
          <CardItem
            translateZ={30}
            as="a"
            href="#"
            className="px-4 py-2 rounded-xl dark:bg-white text-white/70 text-xs font-bold hover:underline underline-offset-4 transition-colors duration-200"
          >
            <FaExternalLinkAlt size={15} />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default GyroCard;
