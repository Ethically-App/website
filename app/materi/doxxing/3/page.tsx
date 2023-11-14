import Navigation from '@/src/components/MateriNav';
import BulliedIcon from '@/src/components/icon/Bullied';

export default function Doxxing3() {
    return (
        <>
        <Navigation nama={'doxxing'} back={'2'} next={'4'} />
        <section className="bg-[url('/bg.svg')] bg-cover bg-center relative z-[2] bg-white w-full h-full min-h-[95vh] px-8 sm:px-32 xl:px-40 py-28 flex justify-start items-center flex-col-reverse lg:flex-row">
    
        <div className="w-full h-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl xl:text-[2.8rem] animate fadeInDown font-bold xl:leading-normal mb-4">Dampak Doxxingg</h1>
            <p className="lg:txt-lg xl:text-xl animate fadeInDown" style={{animationDelay: "0.2s"}}>
            Walaupun mungkin terlihat hanya masalah kecil, diam-diam doxxing juga dapat menimbulkan dampak buruk yang tidak kita sadari bagi korban yang menjadi sasaran. Praktik ini tidak hanya memengaruhi privasi, tetapi juga dapat:
            <br /><br />
            <ol className={'inline-block ml-4 lg:ml-8 list-decimal text-left'}>
                <li>Membahayakan keamanan fisik korban.</li>
                <li>Mengakibatkan ancaman dan serangan terhadap korban.</li>
                <li>Menyebabkan depresi karena kehilangan privasi.</li>
            </ol>
            <br /><br />
            
Doxxing berpotensi merugikan privasi, keamanan, dan kesejahteraan korban secara signifikan. Kesadaran akan risiko ini penting, dengan peringatan bahwa doxxing melanggar norma etika online dan dapat berujung pada konsekuensi hukum yang serius.
            </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center">
            <BulliedIcon className={'w-96 mb-16 lg:mb-0 mx-8'} />
        </div>
    </section>


    
        </>
    )
}