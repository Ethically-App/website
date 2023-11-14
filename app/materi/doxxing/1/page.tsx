import Navigation from '@/src/components/MateriNav';
import ConfusedIcon from '@/src/components/icon/Confused';

export default function Doxxing1() {
    return (
        <>
        <Navigation nama={'doxxing'} next={'2'} />
        <section className="bg-[url('/bg.svg')] bg-cover bg-center relative z-[2] bg-white w-full h-full px-8 sm:px-32 xl:px-40 py-28 flex justify-start items-center flex-col-reverse lg:flex-row ">
    
        <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl xl:text-[2.8rem] animate fadeInDown font-bold xl:leading-normal mb-4">Apa itu Doxxing?</h1>
            <p className="lg:txt-lg xl:text-xl animate fadeInDown" style={{animationDelay: "0.2s"}}>
            Pernah ga sih denger kalimat Doxxing? <b>Doxxing</b> adalah tindakan yang dilakukan dengan <u>membocorkan informasi</u> pribadi dan rahasia dari seseorang secara online dan tanpa ijin dari orang tersebut
                <br /><br />
                Doxxing sendiri sering dilakukan oleh <u>orang tidak bertanggung jawab</u> untuk mengujar kebencianya terhadap orang tersebut, dan bahkan hasil doxxing tersebut dapat digunakan untuk melalukan <b>hal - hal illegal</b> lainya!
            </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center">
            <ConfusedIcon className={'w-96 mb-4 lg:mb-0 -mt-3 lg:mt-0 mx-3'} />
        </div>
    </section>
    
        </>
    )
}