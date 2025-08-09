import React from 'react';

// Modules
import { TracingBeam } from '@/components/ui/tracing-beam';
import { aboutTeam } from '@/data/aboutTeam';
import { cursiveFont } from '@/helpers/font';

const TracingCard = () => {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 pl-2 relative">
        {aboutTeam.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="text-black bg-white rounded-xl text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p
              className={`text-xl md:text-2xl lg:text-3xl mb-4 text-white ${cursiveFont.className}`}
            >
              {item.title}
            </p>

            <div className="text-sm prose prose-sm mt-10">
              {item?.image && (
                <img
                  src={item.image}
                  alt="team image thumbnail"
                  height="400"
                  width="400"
                  className="rounded-lg mb-10 object-cover"
                />
              )}

              <div className="text-white text-justify"> {item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
};

export default TracingCard;
