import Navigation from '@/src/components/MateriNav';
import BullyIcon from '@/src/components/icon/SocialBully';

export default function Doxxing2() {
    return (
        <>
        <Navigation nama={'doxxing'} back={'1'} next={'3'} />
        <section className="bg-[url('/bg.svg')] bg-cover bg-center relative z-[2] bg-white w-full h-full min-h-[95vh] px-8 sm:px-32 xl:px-40 py-28 flex justify-start items-center flex-col-reverse lg:flex-row">
    
        <div className="w-full h-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl xl:text-[2.8rem] animate fadeInDown font-bold xl:leading-normal mb-4">Ciri ciri Doxxing</h1>
            <p className="lg:txt-lg xl:text-xl animate fadeInDown" style={{animationDelay: "0.2s"}}>
            <b>Doxxing</b> dapat kita ketahui ketika:
                <br /><br />
                <ol className={'inline-block ml-4 lg:ml-8 list-decimal text-left'}>
                    <li>Terdapat informasi pribadi yang tersebar di medsos.</li>
                    <li>Informasi tersebut tidak mendapat ijin dari orang yang disebar.</li>
                    <li>Biasanya dibarengi dengan hate speech.</li>
                </ol>
                <br /><br />
                Praktik ini tidak hanya merugikan privasi, tetapi juga dapat berpotensi mengakibatkan konsekuensi serius terhadap individu yang menjadi korban.
            </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center">
            <BullyIcon className={'w-96 mb-16 lg:mb-0 mx-8'} />
        </div>
    </section>


    
        </>
    )
}