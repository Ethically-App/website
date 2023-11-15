import Navigation from '@/src/components/MateriNav';
import BullyIcon from '@/src/components/icon/SocialBully';

export default function HateSpeech3() {
    return (
        <>
        <Navigation nama={'hatespeech'} back={'2'} next={'quiz'} />
        <section className="bg-[url('/bg.svg')] bg-cover bg-center relative z-[2] bg-white w-full h-full min-h-[95vh] px-8 sm:px-32 xl:px-40 py-28 flex justify-start items-center flex-col-reverse lg:flex-row">
    
        <div className="w-full h-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl xl:text-[2.8rem] animate fadeInDown font-bold xl:leading-normal mb-4">Cara mencegah Hate Speech</h1>
            <p className="lg:txt-lg xl:text-xl animate fadeInDown" style={{animationDelay: "0.2s"}}>
            Untuk mencegah terjadi <b>Hate Speech</b>, kita dapat melakukan hal berikut:
                <br /><br />
                <ol className={'inline-block ml-4 lg:ml-8 list-decimal text-left'}>
                    <li>Kenali tanda tanda hate speech.</li>
                    <li>Bersikap bijak dan jangan ikut membalas agar tidak makin menjadi jadi.</li>
                    <li>Selalu konsultasi dengan orang tua untuk tindak lanjut.</li>
                </ol>
                <br /><br />
                Dengan demikian, upaya bersama dalam memahami, mengenali, dan merespons hate speech dapat menciptakan lingkungan yang lebih positif dan <u>mengurangi dampak negatifnya dalam masyarakat.</u>
            </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center">
            <BullyIcon className={'w-96 mb-16 lg:mb-0 mx-8'} />
        </div>
    </section>


    
        </>
    )
}