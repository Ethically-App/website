import Navigation from '@/src/components/MateriNav';
import BullyIcon from '@/src/components/icon/SocialBully';

export default function HateSpeech2() {
    return (
        <>
        <Navigation nama={'hatespeech'} back={'1'} next={'3'} />
        <section className="bg-[url('/bg.svg')] bg-cover bg-center relative z-[2] bg-white w-full h-full min-h-[95vh] px-8 sm:px-32 xl:px-40 py-28 flex justify-start items-center flex-col-reverse lg:flex-row">
    
        <div className="w-full h-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl xl:text-[2.8rem] animate fadeInDown font-bold xl:leading-normal mb-4">Ciri - ciri Hate Speech</h1>
            <p className="lg:txt-lg xl:text-xl animate fadeInDown" style={{animationDelay: "0.2s"}}>
            <b>Hate Speech</b> dapat diidentifikasi dengan ciri ciri seperti:
                <br /><br />
                <ol className={'inline-block ml-4 lg:ml-8 list-decimal text-left'}>
                    <li>Berupa ujaran untuk menyerang atau merendahkan.</li>
                    <li>Mengandung unsur kebencian atau diskriminasi.</li>
                    <li>Bertujuan untuk menyakiti orang lain.</li>
                </ol>
                <br /><br />
                Oleh karena itu, pemahaman terhadap ciri-ciri tersebut penting dalam mengenali dan mengatasi fenomena hate speech guna menciptakan <u>masyarakat yang lebih hormat</u> terhadap keragaman.
            </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center">
            <BullyIcon className={'w-96 mb-16 lg:mb-0 mx-8'} />
        </div>
    </section>


    
        </>
    )
}