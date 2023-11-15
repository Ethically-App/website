"use client";

//import Swal from "sweetalert2";
//import { useEffect } from "react";
//import { useRouter } from "next/navigation";

import Navigation from "@/src/components/MateriNav";

export default function CyberbullyingQuiz() {
  //const router = useRouter();

  //useEffect(() => {
  //}, []);

  return (
    <>
      <Navigation nama={"cyberbullying"} back={"4"} />
      <section className="bg-[url('/bg.svg')] bg-cover bg-center relative z-[2] bg-white w-full h-full min-h-[95vh] px-8 sm:px-32 xl:px-40 py-28 flex justify-start items-center flex-col">
        <div className={'p-8 pt-4 pb-10 text-center'}>
          <h1 className={'text-3xl sm:text-4xl lg:text-5xl font-bold mb-2'}>Quiz Time</h1>
          <p className={'text-lg'}>Cyberbullying <span className={'text-zinc-500 font-bold'}>—</span> Soal 1 / 3</p>
        </div>
        <h2 className={'text-xl md:text-2xl font-medium'}>Apa pengertian dari cyberbullying?</h2>

        <div className={'w-full max-w-screen-lg mt-8 mx-8 grid gap-4'}>
          <div className={'w-full p-4 pr-8 rounded-full bg-amber-300 flex items-center flex-row font-medium lg:font-semibold lg:text-xl shadow cursor-pointer hover:-mt-0.5 hover:mb-0.5 hover:bg-amber-200 hover:shadow-lg transition-all duration-300'}>
            <div className="bg-white p-4 px-5 mr-6 text-lg lg:text-xl font-bold rounded-full shadow">A.</div>
            Tindakan melecehkan atau merendahkan seseorang secara online.
          </div>

          <div className={'w-full p-4 pr-8 rounded-full bg-amber-300 flex items-center flex-row font-medium lg:font-semibold lg:text-xl shadow cursor-pointer hover:-mt-0.5 hover:mb-0.5 hover:bg-amber-200 hover:shadow-lg transition-all duration-300'}>
            <div className="bg-white p-4 px-5 mr-6 text-lg lg:text-xl font-bold rounded-full shadow">B.</div>
            Aktivitas bermain game online.
          </div>

          <div className={'w-full p-4 pr-8 rounded-full bg-amber-300 flex items-center flex-row font-medium lg:font-semibold lg:text-xl shadow cursor-pointer hover:-mt-0.5 hover:mb-0.5 hover:bg-amber-200 hover:shadow-lg transition-all duration-300'}>
            <div className="bg-white p-4 px-5 mr-6 text-lg lg:text-xl font-bold rounded-full shadow">C.</div>
            Penggunaan media sosial dengan bijak.
          </div>
        </div>
      </section>
    </>
  );
}
