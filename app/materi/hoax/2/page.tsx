import Navigation from '@/src/components/MateriNav';
import BullyIcon from '@/src/components/icon/SocialBully';

export default function Hoax2() {
    return (
        <>
        <Navigation nama={'hoax'} back={'1'} next={'3'} />
        <section className="bg-[url('/bg.svg')] bg-cover bg-center relative z-[2] bg-white w-full h-full min-h-[95vh] px-8 sm:px-32 xl:px-40 py-28 flex justify-start items-center flex-col-reverse lg:flex-row">
    
        <div className="w-full h-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl xl:text-[2.8rem] animate fadeInDown font-bold xl:leading-normal mb-4">Ciri - ciri Hoax</h1>
            <p className="lg:txt-lg xl:text-xl animate fadeInDown" style={{animationDelay: "0.2s"}}>
            Beberapa ciri-ciri hoax yang perlu diwaspadai antara lain:
                <br /><br />
                <ol className={'inline-block ml-4 lg:ml-8 list-decimal text-left'}>
                    <li>Informasi yang Tidak Jelas Sumbernya.</li>
                    <li>Isi Sensasional.</li>
                    <li>Tidak Dukung Fakta.</li>
                </ol>
                <br /><br />
                Dengan <b>meningkatkan kritisitas</b> terhadap informasi yang diterima dan <b>memastikan verifikasi sumber</b>, kita dapat bersama-sama melawan penyebaran hoaks dan memperkuat kecerdasan informasi di masyarakat.
            </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center">
            <BullyIcon className={'w-96 mb-16 lg:mb-0 mx-8'} />
        </div>
    </section>


    
        </>
    )
}