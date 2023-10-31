import Image from 'next/image';

import Navigation from '@/src/components/Navigation';
import Footer from '@/src/components/Footer';
import MulaiButton from '@/src/components/Mulai';

// Import home css
import '@/src/styles/home.css';

// Import images
import HeaderImage from '@/src/assets/images/header_image.svg';
import BullyChart from '@/src/assets/images/bully_chart.svg';

export default function Home() {

    return (
        <>
            <Navigation route={1} />

            <section id="header" className="bg-amber-100/40 w-full mt-16 sm:mt-24 px-8 sm:px-32 xl:px-40 py-28 flex justify-center items-center flex-col-reverse lg:flex-row">
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-2xl md:text-3xl xl:text-[2.8rem] animate fadeInDown font-bold xl:leading-normal mb-4">Yuk Jadi Orang Beretika Dalam Berinternet!</h1>
                    <p className="text-lg lg:text-xl xl:text-2xl mb-12 animate fadeInDown" style={{animationDelay: "0.2s"}}>Jadilah remaja yang <b>beretika baik</b> dalam menggunakan media sosial dan internet!</p>
                    <MulaiButton style={{animationDelay: "0.4s"}} />
                </div>
                <div className="w-full lg:w-1/2 mb-16 lg:mb-0 flex justify-center items-center animate fadeInUp">
                    <Image src={HeaderImage} className="h-56 lg:h-72 xl:h-96" alt="Header image" />
                </div>
            </section>

            <section id="why" className="relative z-[2] bg-white w-full px-8 sm:px-32 xl:px-40 py-28 flex justify-center items-center flex-col lg:flex-row shadow-md">
                <div className="w-full lg:w-1/2 mb-16 lg:mb-0 flex justify-center lg:justify-start items-center animate fadeInUp">
                    <Image src={BullyChart} className="h-56 md:h-72 xl:h-96 w-56 md:w-72 xl:w-96" alt="Bully chart" />
                </div>
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-2xl md:text-3xl xl:text-[2.8rem] animate fadeInDown font-bold xl:leading-normal mb-4">Kenapa harus beretika baik dalam ber internet?</h1>
                    <p className="lg:txt-lg xl:text-xl animate fadeInDown" style={{animationDelay: "0.2s"}}>
                        Tau ga sih? Berdasarkan hasil penelitian dari Center for Digital Society (CfDS) tahun 2023, di Indonesia sebanyak <b>1.895+</b> siswa menjadi <b>korban cyberbullying</b> dan 1.182 lainya adalah pelaku. Ditambah lagi, juga penyebaran berita berita hoax, penyebaran informasi pribadi (doxxing), dan lain lain.
                        <br/><br/>
                        Maka dari itu, ayo kita pahami dampak negatif jika kita tidak ber etika dalam bermedsos dan berinternet!
                    </p>
                </div>
            </section>

            <section id="end" className="bg-white bg-anim bg-[url('/bg.svg')] bg-[length:280%] sm:bg-[length:200%] md:bg-[length:140%] lg:bg-cover w-full px-10 lg:px-28 py-40 flex justify-center items-center flex-col text-center">
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-[2.8rem] animate fadeInDown font-bold xl:leading-normal mb-4">Penasaran untuk <span className="text-yellow-300">ber etika baik</span>?</h1>
                <p className="text-lg lg:text-xl xl:text-2xl animate fadeInDown max-w-lg xl:max-w-xl mb-12" style={{animationDelay: "0.2s"}}>Ayo, jadilah remaja yang <b>beretika baik</b> dalam menggunakan media sosial dan internet!</p>
                <MulaiButton style={{animationDelay: "0.4s"}} />
            </section>

            <Footer />
        </>
    )
}
