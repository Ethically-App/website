"use client";

import Swal from 'sweetalert2';
import { useState, useEffect, useRef, use } from 'react';
import { FaArrowRight } from 'react-icons/fa';

type ButtonType = {
    userIcon?: boolean
    style?: object
}

export default function MulaiButton({ userIcon = false, ...props } : ButtonType) {
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    const ref1 = useRef<HTMLAnchorElement>(null);
    const ref2 = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const nama = localStorage.getItem("nama");
        if (nama && nama !== "") setLoggedIn(true);

        if (ref2.current) {
            ref2.current.addEventListener("click", () => {
                Swal.fire({
                    title: "Coming soon!",
                    text: "Fitur ini akan dapat diakses nanti.",
                    icon: "warning",
                });
            });
        }
    }, []);

    return (
        loggedIn && userIcon ? (
            <a className="mulai animate fadeIn p-3 px-6 bg-amber-300 rounded-full text-white text-xl font-semibold shadow-lg hover:bg-yellow-300 hover:shadow-xl transition-all duration-300 cursor-pointer" {...props} >Mulai<FaArrowRight className="inline-block ml-3 -mt-0.5 transition-all" /></a>
        ) : (
            <a ref={ref2} className="mulai animate fadeIn p-3 px-6 bg-amber-300 rounded-full text-white text-xl font-semibold shadow-lg hover:bg-yellow-300 hover:shadow-xl transition-all duration-300 cursor-pointer" {...props} >Mulai<FaArrowRight className="inline-block ml-3 -mt-0.5 transition-all" /></a>
        )
    )
}