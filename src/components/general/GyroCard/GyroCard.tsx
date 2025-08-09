// Modules
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { GyroCardTypes } from './GyroCard.types';
import Image from 'next/image';
const GyroCard = ({ title, description, image }: GyroCardTypes) => {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className="bg-white/10  
    border border-white/20 
    rounded-xl            
    p-6
    relative group/card
    dark:border-white/[0.2]
    w-auto sm:w-[30rem] h-auto  "
      >
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-center items-center mt-10">
          <CardItem
            translateZ={20}
            as="a"
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl font-medium text-white"
          >
            Try our product →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default GyroCard;
