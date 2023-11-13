import Navigation from '@/src/components/MateriNav';
import BulliedIcon from '@/src/components/icon/Bullied';

export default function Cyberbullying2() {
    return (
        <>
        <Navigation nama={'cyberbullying'} back={'2'} next={'4'} />
        <section className="bg-[url('/bg.svg')] bg-cover bg-center relative z-[2] bg-white w-full h-full min-h-[95vh] px-8 sm:px-32 xl:px-40 py-28 flex justify-start items-center flex-col-reverse lg:flex-row">
    
        <div className="w-full h-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl xl:text-[2.8rem] animate fadeInDown font-bold xl:leading-normal mb-4">Dampak Cyberbullying</h1>
            <p className="lg:txt-lg xl:text-xl animate fadeInDown" style={{animationDelay: "0.2s"}}>
            Walaupun mungkin terlihat hanya <u>masalah kecil</u>, diam diam Cyberbullying juga dapat menimbulkan <b>dampak buruk</b> yang tidak kita sadari bagi korban yang dibully, seperti:
            <br /><br />
            <ol className={'inline-block ml-3 lg:ml-8 list-decimal text-left'}>
                <li>Kecemasan, depresi, dan stress</li>
                <li>Hilang harga diri</li>
                <li>Menjadi benci pada diri sendiri, bahkan bisa bun*h diri!</li>
            </ol>
            <br /><br />
            Selain itu, dalam undang undang juga dijelaskan pada Pasal 28 ayat (2) UU ITE serta pasal hukumanya dan dapat dikenakan pidana penjara paling lama <b>6 (enam) tahun</b> dan/ atau denda paling banyak <b>Rp 1.000.000.000,00 (satu miliar rupiah)</b>!
            </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center">
            <BulliedIcon className={'w-96 mb-16 lg:mb-0 mx-8'} />
        </div>
    </section>


    
        </>
    )
}