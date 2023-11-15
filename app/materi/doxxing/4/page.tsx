import Navigation from '@/src/components/MateriNav';
import IdeaIcon from '@/src/components/icon/Idea';

export default function Doxxing4() {
    return (
        <>
        <Navigation nama={'doxxing'} back={'3'} next={'quiz'} />
        <section className="bg-[url('/bg.svg')] bg-cover bg-center relative z-[2] bg-white w-full h-full min-h-[95vh] px-8 sm:px-32 xl:px-40 py-28 flex justify-start items-center flex-col-reverse lg:flex-row">
    
        <div className="w-full h-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl xl:text-[2.8rem] animate fadeInDown font-bold xl:leading-normal mb-4">Cara Mencegah Doxxing</h1>
            <p className="lg:txt-lg xl:text-xl animate fadeInDown" style={{animationDelay: "0.2s"}}>
            Mencegah doxxing melibatkan tindakan-tindakan untuk melindungi informasi pribadi Anda dan <u>mengurangi risiko penyalahgunaan.</u> Berikut adalah beberapa cara untuk mencegah doxxing:
            <br /><br />
            <ol className={'inline-block ml-4 lg:ml-8 list-decimal text-left'}>
                <li>Hindari membagikan informasi pribadi yang sangat detail secara publik.</li>
                <li>Memonitor transaksi dan menggunakan opsi keamanan.</li>
                <li>Secara teratur perbarui dan kelola informasi kontak.</li>
            </ol>
            <br /><br />
            Dengan memperhatikan praktik-praktik keamanan ini, Anda dapat membantu <u>melindungi diri Anda dari risiko doxxing</u>.
            </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center">
            <IdeaIcon className={'w-96 mb-16 lg:mb-0 mx-8'} />
        </div>
    </section>


    
        </>
    )
}