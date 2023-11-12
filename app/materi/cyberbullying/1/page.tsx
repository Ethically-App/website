import Navigation from '@/src/components/Navigation';
import React from 'react';
import Navbar from '../../components/navbar';
import Next from '../../components/next';


export default function Cyberbullying() {
    return (
        <>
        <Navbar route={0}/>
        <section className="relative z-[2] bg-white w-full h-full px-8 sm:px-32 xl:px-40 py-28 flex justify-start items-center flex-col lg:flex-row ">
    
        <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl xl:text-[2.8rem] animate fadeInDown font-bold xl:leading-normal mb-4">Apa itu Cyberbullying?</h1>
            <p className="lg:txt-lg xl:text-xl animate fadeInDown" style={{animationDelay: "0.2s"}}>
            <b>Cyberbullying</b> adalah tindakan meresahkan, mengintimidasi, atau melecehkan seseorang secara online, melalui platform seperti media sosial, pesan teks, atau email. Ini sering melibatkan ancaman, penyebaran informasi pribadi yang sensitif, atau komentar kasar yang dapat merusak mental dan emosional korban. 
                <br/><br/>
                <b>Cyberbullying</b> dapat memiliki konsekuensi serius, termasuk dampak psikologis yang berkepanjangan pada korban. Untuk mencegahnya, penting untuk mendidik individu tentang etika online, melaporkan tindakan cyberbullying, dan mendukung korban yang terkena dampak.
            </p>
        </div>
        
    </section>
    <Next/>
    


    
        </>
    )
}