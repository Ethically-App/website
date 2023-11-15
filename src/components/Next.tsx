import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

type ButtonType = {
    text: string,
    white?: boolean,
    simple?: boolean,
    style?: object,
    href?: string,
}

const NextButton = React.forwardRef<HTMLAnchorElement, ButtonType>(({ text, simple = false, white = false, href = "#", ...props }, ref) => {
    const classes = {
        default: 'p-2 px-4 sm:px-6 bg-amber-300 rounded-full text-white text-lg font-medium shadow-lg hover:bg-yellow-300 hover:shadow-xl transition-all duration-300 cursor-pointer ',
        simple: 'bg-amber-300 flex justify-center items-center block text-white shadow-md rounded-full p-2 px-4 hover:bg-yellow-300 hover:shadow-lg transition-all duration-300 cursor-pointer'
    };
    
    const whites = {
        default: 'p-2 px-4 sm:px-6 bg-white rounded-full text-black text-lg font-medium shadow-lg hover:bg-zinc-200 hover:shadow-xl transition-all duration-300 cursor-pointer ',
        simple: 'bg-white flex justify-center items-center block text-black shadow-md rounded-full p-2 px-4 hover:bg-zinc-200 hover:shadow-lg transition-all duration-300 cursor-pointer'
    };

    return (
        white ? (
            <Link href={href} className={simple ? whites.simple : whites.default} {...props}>
                <span className={'hidden md:inline'}>{text}</span>
                <FaArrowRight className="inline-block md:ml-3 -mt-0.5 transition-all" />
            </Link>
        ) : (
            <Link href={href} className={simple ? classes.simple : classes.default} {...props}>
                <span className={'hidden md:inline'}>{text}</span>
                <FaArrowRight className="inline-block md:ml-3 -mt-0.5 transition-all" />
            </Link>
        )
    )
});

export default NextButton;
