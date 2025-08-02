// Modules
import { CardTypes } from './Cards.types';

const Cards = ({
  title,
  description,
  icon,
  iconColor,
  iconBackground,
  iconBorder,
}: CardTypes) => {
  return (
    <div className="relative group bg-white/5 backdrop-blur-md border border-neutral-800 rounded-2xl p-6 w-full md:w-95 shadow-lg transition transform hover:scale-[1.02] hover:shadow-xl hover:cursor-pointer">
      <div className="mb-4">
        <div
          className={`w-10 h-10 ${iconBackground}/20 border ${iconBorder} rounded-full flex items-center justify-center`}
        >
          <span className={`${iconColor} text-xl`}>{icon}</span>
        </div>
      </div>
      <h2 className="text-2xl font-semibold text-white mb-2">{title}</h2>
      <p className="text-sm text-neutral-300 text-justify leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default Cards;
