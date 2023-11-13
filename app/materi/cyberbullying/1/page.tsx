import Navigation from '@/src/components/Navigation';
import React from 'react';
import Navbar from '../../components/navbar';
import Next from '../../components/next';


export default function Cyberbullying1() {
    return (
        <>
        <Navbar/>
        <section className="relative z-[2] bg-white w-full h-full px-8 sm:px-32 xl:px-40 py-28 flex justify-start items-center flex-col lg:flex-row ">
    
        <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl xl:text-[2.8rem] animate fadeInDown font-bold xl:leading-normal mb-4">Apa itu Cyberbullying?</h1>
            <p className="lg:txt-lg xl:text-xl animate fadeInDown" style={{animationDelay: "0.2s"}}>
                <b>Cyberbullying</b> adalah suatu bentuk bullying yang dilakukan melalui media sosial dan internet. Bullying sendiri adalah suatu tindakan yang dilakukan oleh seseorang untuk <u>melecehkan atau merendahkan</u> orang lain.
                <br /><br />
                Cyberbullying merupakan salah satu <b>ancaman terbesar bagi remaja</b> karena pada tahun 2023 aja, ada <b>1.895 orang lebih</b> yang menjadi korban cyberbullying. Maka dari itu ayo sama sama pahami tentang cyberbullying dan bahayanya!
            </p>
        </div>
        
    </section>
    


    
        </>
    )
}