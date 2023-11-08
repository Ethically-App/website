import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { FaArrowRight } from 'react-icons/fa';

type NextButtonType = {
    page: string; // The page to navigate to upon click
    simple?: boolean;
    style?: object;
};

const NextButton = ({ page, simple = false, ...props }: NextButtonType) => {
    const router = useRouter();
    const ref = useRef<HTMLAnchorElement>(null);

    const classes = {
        default:
            'mulai p-3 px-6 bg-amber-300 rounded-full text-white text-xl font-semibold shadow-lg hover:bg-yellow-300 hover:shadow-xl transition-all duration-300 cursor-pointer',
        simple:
            'mulai bg-amber-300 w-full flex justify-center items-center block text-white font-medium shadow-md rounded-full my-4 p-2 px-4 hover:bg-yellow-300 hover:shadow-lg transition-all duration-300 cursor-pointer',
        transition: 'animate fadeIn',
    };

    useEffect(() => {
        const click = () => {
            router.push(page);
        };

        if (ref.current) ref.current.addEventListener('click', click);

        return () => {
            if (ref.current) ref.current.removeEventListener('click', click);
        };
    }, [page, router]);

    return (
        <a
            ref={ref}
            className={simple ? classes.simple : classes.default}
            {...props}
        >
            Next <FaArrowRight className="inline-block ml-3 -mt-0.5 transition-all" />
        </a>
    );
};

export default NextButton;
