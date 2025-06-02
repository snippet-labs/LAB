import { Link } from 'react-router-dom';
import type { CustomLinkProps } from './CustomLink.types';

const CustomLink: React.FC<CustomLinkProps> = ({ to, name, icon, linkClass, buttonClass, textClass }) => {
    /* variable name starting with underscore is a convention
    to indicate that the variable is going to be used inside the component. */

    const _to = to || '/contactus'; // Default path if not provided
    const _name = name || 'Contact Us'; // Default name if not provided
    const _icon = icon || undefined; // No Default icon if not provided
    const _textClass = textClass || `SEMIBOLD text-lg` // Default text styles..
    const _linkClass = linkClass || undefined; // Default className for the link, user will modify it, if dont' want sticky position
    const _buttonClass = buttonClass || `
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
            to={_to}
            className={_linkClass}
        >
            <button
                aria-label={_name}
                className={_buttonClass}
            >
                {_icon}
                <span className={_textClass}>{_name}</span>
            </button>
        </Link >
    );
};

export default CustomLink;