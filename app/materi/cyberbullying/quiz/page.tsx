"use client";

import Swal from "sweetalert2";
import { useState, useEffect, useRef } from "react";

import Navigation from "@/src/components/MateriNav";
import AnswerPrompt from "@/src/components/AnswerPrompt";
import BackButton from '@/src/components/Back';
import NextButton from '@/src/components/Next';

export default function CyberbullyingQuiz() {
  const [page, setPage] = useState<number>(1);

  const ans1Page1 = useRef<HTMLDivElement>(null);
  const ans2Page1 = useRef<HTMLDivElement>(null);
  const ans3Page1 = useRef<HTMLDivElement>(null);

  const ans1Page2 = useRef<HTMLDivElement>(null);
  const ans2Page2 = useRef<HTMLDivElement>(null);
  const ans3Page2 = useRef<HTMLDivElement>(null);

  const ans1Page3 = useRef<HTMLDivElement>(null);
  const ans2Page3 = useRef<HTMLDivElement>(null);
  const ans3Page3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const answers: {
      [key: number]: number
    } = {
      1: 0,
      2: 0,
      3: 0
    }

    // Set click element page 1
    ans1Page1.current?.addEventListener('click', () => {
      answers[1] = 1;
      ans1Page1.current?.setAttribute('selected', 'true');
      ans2Page1.current?.setAttribute('selected', 'false');
      ans3Page1.current?.setAttribute('selected', 'false');
    });

    ans2Page1.current?.addEventListener('click', () => {
      answers[1] = 2;
      ans1Page1.current?.setAttribute('selected', 'false');
      ans2Page1.current?.setAttribute('selected', 'true');
      ans3Page1.current?.setAttribute('selected', 'false');
    });

    ans3Page1.current?.addEventListener('click', () => {
      answers[1] = 3;
      ans1Page1.current?.setAttribute('selected', 'false');
      ans2Page1.current?.setAttribute('selected', 'false');
      ans3Page1.current?.setAttribute('selected', 'true');
    });
    
  }, []);

  return (
    <>
      <Navigation nama={"cyberbullying"} back={"4"} />
      <section className="bg-[url('/bg.svg')] bg-cover bg-center relative z-[2] bg-white w-full h-full px-8 sm:px-32 xl:px-40 py-28 flex justify-start items-center flex-col">
        <div className={'p-8 pt-4 pb-10 text-center'}>
          <h1 className={'text-3xl sm:text-4xl lg:text-5xl font-bold mb-2'}>Quiz Time</h1>
          <p className={'text-lg'}>Cyberbullying <span className={'text-zinc-500 font-bold'}>—</span> Soal {page} / 3</p>
        </div>
        
        {page === 1 ? (
          <>
            <h2 className={'text-xl md:text-2xl font-medium text-center animate fadeIn'}>Apa pengertian dari cyberbullying?</h2>
            <div className={'w-full max-w-screen-lg mt-8 mx-8 grid gap-4'}>
              <AnswerPrompt number={1} ref={ans1Page1}>Tindakan melecehkan atau merendahkan seseorang secara online.</AnswerPrompt>
              <AnswerPrompt number={2} ref={ans2Page1} delay=".2s">Aktivitas bermain game online.</AnswerPrompt>
              <AnswerPrompt number={3} ref={ans3Page1} delay=".4s">Penggunaan media sosial dengan bijak.</AnswerPrompt>
            </div>
          </>
        ) : page === 2 ? (
          <></>
        ) : page === 3 ? (
          <></>
        ) : (null)}

        <div className={'w-full max-w-screen-lg mt-8 mx-8 flex flex-row'}>
          {page !== 1 ? (<div className={'w-full md:w-72 flex justify-start'}><BackButton text={"Back"} /></div>) : (null)}
          <div className={'w-full'}></div>
          <div className={'w-full md:w-72 flex justify-end'}><NextButton text={page === 3 ? "Submit" : "Next"} /></div>
        </div>

      </section>
    </>
  );
}