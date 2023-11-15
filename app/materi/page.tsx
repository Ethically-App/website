"use client";

import { useState, useEffect } from 'react';
import Navigation from '@/src/components/Navigation';
import Footer from '@/src/components/Footer';
import MulaiButton from '@/src/components/Mulai';

// Import home css
import '@/src/styles/home.css';

export default function Materi() {
    const [name, setName] = useState<string>("");

    useEffect(() => {
        const nama = localStorage.getItem('nama');
        if (nama && nama != "") {
            setName(nama);
        } else {
            setName("");
        }
    }, []);

    return (
        <>
            <Navigation route={2} />
            <section id="header" className="bg-amber-100/40 w-full mt-16 lg:mt-24 flex justify-center items-center flex-col">
                <div className={'p-8 py-16 md:py-24 text-center'}>
                    <h1 className={'text-2xl sm:text-3xl lg:text-4xl font-bold mb-2'}>
                        Selamat datang {name != "" ? `, ${name.includes(' ') ? name.split(' ')[0] : name}!` : "!"}
                    </h1>
                    <p>Ayo mulai belajar untuk menjadi ber etika yang baik!</p>
                </div>
                
                <div className={'w-full max-w-screen-lg px-8 pb-28 flex justify-center items-center flex-col md:grid md:grid-cols-2 gap-5'}>
                    <MateriCard nama="Cyberbullying" href="/materi/cyberbullying/1">
                        Cyberbullying adalah pelecehan secara online.
                    </MateriCard>

                    <MateriCard nama="Doxxing" href="/materi/doxxing/1" delay=".2s">
                        Doxxing adalah penyebaran informasi pribadi.
                    </MateriCard>

                    <MateriCard nama="Hate Speech" href="/materi/hatespeech/1" delay=".4s">
                        Hate Speech adalah ujaran kebencian.
                    </MateriCard>

                    <MateriCard nama="Hoax" href="/materi/hoax/1" delay=".6s">
                        Hoax adalah informasi palsu yang disebar.
                    </MateriCard>
                </div>
            </section>
            <Footer />
        </>
    )
}

function MateriCard(
    {children, nama, href, delay = ""}: 
    {nama: string, href: string, delay?: string, children: React.ReactNode}
): JSX.Element {
    return (
        <div className='w-full rounded-xl bg-white shadow-md hover:shadow-lg p-8 py-8 md:py-16 flex justify-center items-center flex-col transition-all animate fadeInUp' style={{animationDelay: delay}}>
            <h1 className='font-bold text-xl sm:text-2xl lg:text-3xl text-center mb-3'>{nama}</h1>
            <p className={'text-base md:text-lg mb-8 flex justify-center text-center'}>{children}</p>
            <div className={'scale-75 sm:scale-90'}>
                <MulaiButton link={href} />
            </div>
        </div>
    )
}