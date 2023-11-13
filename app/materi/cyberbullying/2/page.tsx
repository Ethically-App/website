import React from 'react';
import Navigation from '@/src/components/MateriNav';


export default function Cyberbullying2() {
    return (
        <>
        <Navigation nama={'cyberbullying'} back={'1'} next={'3'} />
        <section className="relative z-[2] bg-white w-full h-full px-8 sm:px-32 xl:px-40 py-28 flex justify-start items-center flex-col lg:flex-row ">
    
        <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl xl:text-[2.8rem] animate fadeInDown font-bold xl:leading-normal mb-4">Jenis Cyberbullying</h1>
            <p className="lg:txt-lg xl:text-xl animate fadeInDown" style={{animationDelay: "0.2s"}}>
                <b>Cyberbullying</b> sendiri banyak kita temukan di media sosial dan internet, Ciri - ciri cyberbullying contohnya:
                <br /><br />
                <ol className={'inline-block lg:ml-8 list-decimal'}>
                    <li>Mengirim pesan ancaman di media sosial.</li>
                    <li>Mengujarkan kebencian dan penghinaan.</li>
                    <li>Menyebarkan konten yang mempermalukan.</li>
                    <li>Menyebarkan informasi buruk.</li>
                </ol>
                <br /><br />
                Dan masih banyak lagi. Cyberbullying sendiri juga mencakup materi seperti <b>Hate speech, Hoax, dan Doxxing</b> yang akan dibahas lebih lanjut di materi selanjutnya.
            </p>
        </div>
        
    </section>
    


    
        </>
    )
}