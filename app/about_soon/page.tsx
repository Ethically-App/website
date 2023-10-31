
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

import Navigation from '@/src/components/Navigation';
import Footer from '@/src/components/Footer';

// Import home css
import '@/src/styles/home.css';

export default function Home() {
    return (
        <>
            <Navigation route={3} />

            <section id="header" className="bg-white bg-anim bg-[url('/bg.svg')] bg-[length:280%] sm:bg-[length:200%] md:bg-[length:140%] lg:bg-cover w-full mt-16 sm:mt-24 px-10 lg:px-28 py-40 flex justify-center items-center flex-col text-center">
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-[2.8rem] animate fadeInDown font-bold xl:leading-normal mb-4">Penasaran untuk <span className="text-yellow-300">ber etika baik</span>?</h1>
                <p className="text-lg lg:text-xl xl:text-2xl animate fadeInDown max-w-lg xl:max-w-xl mb-12" style={{animationDelay: "0.2s"}}>Ayo, jadilah remaja yang <b>beretika baik</b> dalam menggunakan media sosial dan internet!</p>
                <a href="/register" className="mulai animate fadeIn p-3 px-6 bg-amber-300 rounded-full text-white text-xl font-semibold shadow-lg hover:bg-yellow-300 hover:shadow-xl transition-all duration-300 cursor-pointer" style={{animationDelay: "0.4s"}}>Mulai<FaArrowRight className="inline-block ml-3 -mt-0.5 transition-all" /></a>
            </section>

            <Footer />
        </>
    )
}
