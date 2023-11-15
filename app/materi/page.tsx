"use client";

import Link from 'next/link';
import Image from 'next/image';

import { useState, useEffect } from 'react';
import { FaLock } from "react-icons/fa";

import Navigation from '@/src/components/Navigation';
import Footer from '@/src/components/Footer';
import MulaiButton from '@/src/components/Mulai';

// Import home css
import '@/src/styles/home.css';

export default function Materi() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const nama = localStorage.getItem('nama');
        if (nama && nama != "") {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    return (
        <>
            <Navigation route={2} />

            
            <section id="header" className="bg-white bg-[url('/bg.svg')] w-full mt-16 lg:mt-24 px-8 py-28 flex justify-center items-center grid lg:grid-cols-2 gap-4 shadow-md">
                <MateriCard nama="Cyberbullying" href="/materi/cyberbullying/1" locked={!isLoggedIn} />

                <MateriCard nama="Doxxing" href="/materi/doxxing/1" locked={!isLoggedIn} />

                <MateriCard nama="Hate Speech" href="/materi/hatespeech/1" locked={!isLoggedIn} />

                <MateriCard nama="Hoax" href="/materi/hoax/1" locked={!isLoggedIn} />
            </section>

            <Footer />
        </>
    )
}

function MateriCard(
    {nama, href, locked}: 
    {nama: string, href: string, locked: boolean}
): JSX.Element {
    return (
        <div className='rounded bg-white shadow-inner shadow-md border-x-64 lg:px-64 hover:shadow-xl duration-700 md:px-32 sm:px-24 py-24 flex justify-center flex-col'>
            <b className='font-bold lg:text-3xl sm:text-xs md:text-lg text-center'>{nama}</b><br/>
            <Link href={locked ? "/materi" : href} className={(locked ? "bg-zinc-400" : "bg-yellow-300 hover:bg-yellow-200 duration-700") + ' max-w-sm flex justify-center text-white py-4 px-8 rounded-md mt-4 margin-auto text-center lg:text-3xl sm:text-xs md:text-lg'}>
                {locked ? (<FaLock/>) : "Mulai"}
            </Link>
        </div>
    )
}