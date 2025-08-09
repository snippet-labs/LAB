// Modules
import { ContainerTextFlip } from '@/components/ui/container-text-flip';

const UnderDevelopment = () => {
  return (
    <ContainerTextFlip
      // Pass two words at a time
      words={[
        'Building this',
        'Working on ',
        'Shipping this',
        'Stay tuned',
        'Very soon',
      ]}
    />
  );
};

export default UnderDevelopment;
