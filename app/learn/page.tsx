import Image from 'next/image';

import Navigation from '@/src/components/Navigation';
import Footer from '@/src/components/Footer';
import MulaiButton from '@/src/components/Mulai';

// Import home css
import '@/src/styles/home.css';

export default function Home() {
    return (
        <>
            <Navigation route={2} />

            
        <section id="header" className="bg-[#F8F8F8] w-full mt-16 lg:mt-24 px-8 sm:px-32 xl:px-40 py-28 flex justify-center items-center flex-col-reverse lg:flex-row">
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-2xl md:text-3xl xl:text-[2.8rem] animate fadeInDown font-bold xl:leading-normal mb-4">Apa itu Etika Digital?</h1>
                    <p className="text-lg lg:text-xl xl:text-2xl mb-12 animate fadeInDown" style={{animationDelay: "0.2s"}}><b className='font-bold'>Etika digital</b> yaitu sebuah prinsip dan aturan perilaku yang membimbing cara kita <b className='font-bold'>berinteraksi, berbagi informasi, dan berkomunikasi secara online</b> dengan sopan, bertanggung jawab, dan menghormati privasi dan hak orang lain. <b className='font-bold'>ethic</b><b className='font-bold text-[#FFD74A]'>ally</b> sendiri bertujuan untuk mengajarkan cara bertindak dengan <b className='font-bold'>bijaksana dan bermoral dalam dunia maya.</b></p>
                    <MulaiButton style={{animationDelay: "0.4s"}} />
                </div>
                <div className="w-full lg:w-1/2 mb-16 lg:mb-0 flex justify-center items-center animate fadeInUp">
                </div>
            </section>

            <Footer />
        </>
    )
}
