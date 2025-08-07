'use client';

// Modules
import React from 'react';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import { teamDetails } from '@/data/teamDetails';

const Tooltip = () => {
  return (
    <div className="flex flex-row items-center justify-center mb-1 w-full">
      <AnimatedTooltip items={teamDetails} />
    </div>
  );
};

export default Tooltip;
