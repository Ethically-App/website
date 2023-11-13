import BackButton from '@/src/components/Back';
import NextButton from '@/src/components/Next';

type NavRoute = {
  nama: string,
  back?: string,
  next: string
}

export default function MateriNav({ nama, next, back = "" }: NavRoute) {
  return (
    <nav className="w-full h-12">
      <div className="fixed top-0 left-0 z-[10] bg-[#FFD952] w-full py-6 px-12 md:px-24 lg:px-32 flex justify-start items-center flex-row shadow-lg">
        <BackButton href={back == "" ? "/materi/" : `/materi/${nama}/${back}`} text={back == "" ? "Materi" : "Back"} white={true} />
        <div className="flex justify-center flex-grow">
          <h1 className="text-3xl lg:text-4xl font-bold">
            ethic<span className="text-white">ally</span>.
          </h1>
        </div>
        <NextButton href={`/materi/${nama}/${next}`} text="Next" white={true} />
      </div>
    </nav>
  );
}
