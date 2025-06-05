import { Link } from 'react-router-dom';
import type { CustomLinkProps } from './CustomLink.types';

const CustomLink: React.FC<CustomLinkProps> = ({ to, name, icon, linkClass, buttonClass, textClass }) => {
    const TO = to || '/contactus'; // Default path if not provided
    const NAME = name || 'Contact Us'; // Default name if not provided
    const ICON = icon || undefined; // No Default icon if not provided
    const TEXTCLASS = textClass || `SEMIBOLD text-lg` // Default text styles..
    const LINKCLASS = linkClass || undefined; // Default className for the link, user will modify it, if dont' want sticky position
    const BUTTONCLASS = buttonClass || `
                    shadow-[1px_2px_5px] shadow-gray-300 rounded-lg
                    px-6 py-3
                    FLEX-CENTER gap-3
                    POINTER ALL
                    BG-WHITE-PRIMARY TEXT-BLACK-PRIMARY
                    hover:bg-gray-300 hover:shadow-[1px_1px_10px]
                    min-w-full sm:min-w-fit
                `; // Default Button Style with white background.

    return (
        <Link
            to={TO}
            className={LINKCLASS}
        >
            <button
                aria-label={NAME}
                className={BUTTONCLASS}
            >
                {ICON}
                <span className={TEXTCLASS}>{NAME}</span>
            </button>
        </Link >
    );
};

export default CustomLink;