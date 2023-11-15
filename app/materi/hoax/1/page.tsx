import Navigation from '@/src/components/MateriNav';
import ConfusedIcon from '@/src/components/icon/Confused';

export default function Hoax1() {
    return (
        <>
        <Navigation nama={'hoax'} next={'2'} />
        <section className="bg-[url('/bg.svg')] bg-cover bg-center relative z-[2] bg-white w-full h-full px-8 sm:px-32 xl:px-40 py-28 flex justify-start items-center flex-col-reverse lg:flex-row ">
    
        <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl xl:text-[2.8rem] animate fadeInDown font-bold xl:leading-normal mb-4">Apa itu Hoax?</h1>
            <p className="lg:txt-lg xl:text-xl animate fadeInDown" style={{animationDelay: "0.2s"}}>
            <b>Hoax adalah suatu informasi palsu</b> atau bohong yang sengaja disebarkan untuk menyesatkan orang dan menciptakan kebingungan di masyarakat. <u>Hoax dapat menyebar melalui berbagai media,</u> termasuk media sosial dan internet. 
                <br /><br />
                Kebanyakan hoax dibuat dengan tujuan tertentu, seperti menimbulkan ketakutan, merusak reputasi seseorang atau kelompok, atau bahkan <u>menciptakan kekacauan</u> di masyarakat.
            </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center">
            <ConfusedIcon className={'w-96 mb-4 lg:mb-0 -mt-3 lg:mt-0 mx-3'} />
        </div>
    </section>
    
        </>
    )
}