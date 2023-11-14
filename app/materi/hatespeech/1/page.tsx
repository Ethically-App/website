import Navigation from '@/src/components/MateriNav';
import ConfusedIcon from '@/src/components/icon/Confused';

export default function HateSpeech1() {
    return (
        <>
        <Navigation nama={'hatespeech'} next={'2'} />
        <section className="bg-[url('/bg.svg')] bg-cover bg-center relative z-[2] bg-white w-full h-full px-8 sm:px-32 xl:px-40 py-28 flex justify-start items-center flex-col-reverse lg:flex-row ">
    
        <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl xl:text-[2.8rem] animate fadeInDown font-bold xl:leading-normal mb-4">Apa itu Hate Speech?</h1>
            <p className="lg:txt-lg xl:text-xl animate fadeInDown" style={{animationDelay: "0.2s"}}>
            Didalam materi <b>Cyberbullying</b>, kita sudah diajarkan tentang pengertian umum, dan materi kali ini lebih mendalam tentang <b>Hate Speech.</b>
                <br /><br />
                <b>Hate Speech</b> adalah suatu ucapan atau perkataan yang mengandung unsur <u>ujaran kebencian</u> kepada seseorang. Ujaran tersebut biasanya sering kita lihat pada komentar di media sosial. Ujaran ini tidak hanya dalam bentuk teks, namun juga gambar bahkan simbol tertentu untuk mendiskriminasi seseorang.

            </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center">
            <ConfusedIcon className={'w-96 mb-4 lg:mb-0 -mt-3 lg:mt-0 mx-3'} />
        </div>
    </section>
    
        </>
    )
}