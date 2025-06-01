import { Link } from 'react-router-dom';
import { BiMessageSquareDetail } from 'react-icons/bi';
import type { CustomLinkProps } from './CustomLink.types';

const CustomLink: React.FC<CustomLinkProps> = ({ to, name, icon, linkClass, buttonClass }) => {

    /* variable name starting with underscore is a convention
    to indicate that the variable is going to be used inside the component. */

    const _to = to || '/contactus'; // Default path if not provided
    const _name = name || 'Contact Us'; // Default name if not provided
    const _icon = icon || <BiMessageSquareDetail className='text-2xl' />; // Default icon if not provided
    const _linkClass = linkClass || `
                    sm:sticky bottom-6 right-6
                    w-auto pt-10 px-10 sm:p-0
                    FLEX-END`; // Default className for the link, user will modify it, if dont' want sticky position
    const _buttonClass = buttonClass || `
                    shadow-[1px_2px_5px] shadow-gray-300 rounded-lg
                    px-6 py-3
                    FLEX-CENTER gap-3
                    POINTER ALL
                    BG-WHITE-PRIMARY TEXT-BLACK-PRIMARY
                    hover:bg-gray-300 hover:shadow-[1px_1px_10px]
                    min-w-full sm:min-w-fit
                `; // Default className

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
                <span className="SEMIBOLD text-lg">{_name}</span>
            </button>
        </Link >
    );
};

export default CustomLink;