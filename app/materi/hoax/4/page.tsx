import Navigation from '@/src/components/MateriNav';
import IdeaIcon from '@/src/components/icon/Idea';

export default function Hoax4() {
    return (
        <>
        <Navigation nama={'hoax'} back={'3'} next={'quiz'} />
        <section className="bg-[url('/bg.svg')] bg-cover bg-center relative z-[2] bg-white w-full h-full min-h-[95vh] px-8 sm:px-32 xl:px-40 py-28 flex justify-start items-center flex-col-reverse lg:flex-row">
    
        <div className="w-full h-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl xl:text-[2.8rem] animate fadeInDown font-bold xl:leading-normal mb-4">Cara Mencegah Hoax</h1>
            <p className="lg:txt-lg xl:text-xl animate fadeInDown" style={{animationDelay: "0.2s"}}>
            Untuk mencegah penyebaran hoax, kita dapat melakukan hal-hal berikut:
            <br /><br />
            <ol className={'inline-block ml-4 lg:ml-8 list-decimal text-left'}>
                <li>Sebelum menyebarkan informasi, pastikan untuk memverifikasi kebenaran. </li>
                <li>Tingkatkan kesadaran masyarakat tentang bahaya hoax.</li>
                <li>Dapatkan informasi dari sumber yang terpercaya dan dapat diverifikasi.</li>
            </ol>
            <br /><br />
            Dengan melakukan langkah-langkah ini, kita dapat bersama-sama <u>mengurangi dampak penyebaran hoax</u> dan membangun masyarakat yang lebih cerdas secara informasi.
            </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center">
            <IdeaIcon className={'w-96 mb-16 lg:mb-0 mx-8'} />
        </div>
    </section>


    
        </>
    )
}