"use client";

import { FaArrowLeft } from 'react-icons/fa';
type ButtonType = {
    text: string,
    white?: boolean,
    simple?: boolean,
    style?: object,
    href?: string,
}

export default function BackButton({ text, simple = false, white = false, href = "", ...props } : ButtonType) {
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
            <a href={href} className={simple ? whites.simple : whites.default} {...props}>
                <FaArrowLeft className="inline-block md:mr-3 -mt-0.5 transition-all" />
                <span className={'hidden md:inline'}>{text}</span>
            </a>
        ) : (
            <a href={href} className={simple ? classes.simple : classes.default} {...props}>
                <FaArrowLeft className="inline-block md:mr-3 -mt-0.5 transition-all" />
                <span className={'hidden md:inline'}>{text}</span>
            </a>
        )
    )
}