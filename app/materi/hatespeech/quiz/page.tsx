"use client";

import Swal from "sweetalert2";
import { FaClock } from "react-icons/fa6";
import { BiParty } from "react-icons/bi";
import { useState, useEffect, useRef } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { useRouter } from "next/navigation";

import Navigation from "@/src/components/MateriNav";
import AnswerPrompt from "@/src/components/AnswerPrompt";
import BackButton from '@/src/components/Back';
import NextButton from '@/src/components/Next';

export default function CyberbullyingQuiz() {
  const router = useRouter();
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

  const backButton = useRef<HTMLDivElement>(null);
  const nextButton = useRef<HTMLDivElement>(null);

  const [answers, setAnswers] = useState<{[key: number]: number}>(
    {
      1: 0,
      2: 0,
      3: 0
    }
  );


  useEffect(() => {
    // ITS QUIZ TIME!
    Swal.fire({
      title: "Quiz Time!",
      text: "Ayo mulai quiznya!",
      icon: "warning",
      confirmButtonText: 'Mulai',
      confirmButtonColor: "#fcd34d",
      iconColor: "#fcd34d",
      iconHtml: renderToStaticMarkup(<FaClock/>)
  });

    // Set click element page 1 for the first time
    if (ans1Page1.current) {
      ans1Page1.current.onclick = () => {
        let ans = answers;
        ans[1] = 1;
        setAnswers(ans);
        
        ans1Page1.current?.setAttribute('selected', 'true');
        ans2Page1.current?.setAttribute('selected', 'false');
        ans3Page1.current?.setAttribute('selected', 'false');
      };
    }

    if (ans2Page1.current) {
      ans2Page1.current.onclick = () => {
        let ans = answers;
        ans[1] = 2;
        setAnswers(ans);

        ans1Page1.current?.setAttribute('selected', 'false');
        ans2Page1.current?.setAttribute('selected', 'true');
        ans3Page1.current?.setAttribute('selected', 'false');
      };
    }

    if (ans3Page1.current) {
      ans3Page1.current.onclick = () => {
        let ans = answers;
        ans[1] = 3;
        setAnswers(ans);

        ans1Page1.current?.setAttribute('selected', 'false');
        ans2Page1.current?.setAttribute('selected', 'false');
        ans3Page1.current?.setAttribute('selected', 'true');
      };
    }

    // Register click event for next button for the first time
    if (nextButton.current) {
      nextButton.current.onclick = () => {
        if (page < 3) {
          setPage(page + 1);
        }
      };
    }
  }, []);

  useEffect(() => {

    // Check if all answers are filled
    if (page === 1) {
      switch (answers[1]) {
        case 1:
          ans1Page1.current?.setAttribute('selected', 'true');
          ans2Page1.current?.setAttribute('selected', 'false');
          ans3Page1.current?.setAttribute('selected', 'false');
          break;
        case 2:
          ans1Page1.current?.setAttribute('selected', 'false');
          ans2Page1.current?.setAttribute('selected', 'true');
          ans3Page1.current?.setAttribute('selected', 'false');
          break;
        case 3:
          ans1Page1.current?.setAttribute('selected', 'false');
          ans2Page1.current?.setAttribute('selected', 'false');
          ans3Page1.current?.setAttribute('selected', 'true');
          break;
        default:
          ans1Page1.current?.setAttribute('selected', 'false');
          ans2Page1.current?.setAttribute('selected', 'false');
          ans3Page1.current?.setAttribute('selected', 'false');
          break;
      }
    } else if (page === 2) {
      switch (answers[2]) {
        case 1:
          ans1Page2.current?.setAttribute('selected', 'true');
          ans2Page2.current?.setAttribute('selected', 'false');
          ans3Page2.current?.setAttribute('selected', 'false');
          break;
        case 2:
          ans1Page2.current?.setAttribute('selected', 'false');
          ans2Page2.current?.setAttribute('selected', 'true');
          ans3Page2.current?.setAttribute('selected', 'false');
          break;
        case 3:
          ans1Page2.current?.setAttribute('selected', 'false');
          ans2Page2.current?.setAttribute('selected', 'false');
          ans3Page2.current?.setAttribute('selected', 'true');
          break;
        default:
          ans1Page2.current?.setAttribute('selected', 'false');
          ans2Page2.current?.setAttribute('selected', 'false');
          ans3Page2.current?.setAttribute('selected', 'false');
          break;
      }
    } else if (page === 3) {
      switch (answers[3]) {
        case 1:
          ans1Page3.current?.setAttribute('selected', 'true');
          ans2Page3.current?.setAttribute('selected', 'false');
          ans3Page3.current?.setAttribute('selected', 'false');
          break;
        case 2:
          ans1Page3.current?.setAttribute('selected', 'false');
          ans2Page3.current?.setAttribute('selected', 'true');
          ans3Page3.current?.setAttribute('selected', 'false');
          break;
        case 3:
          ans1Page3.current?.setAttribute('selected', 'false');
          ans2Page3.current?.setAttribute('selected', 'false');
          ans3Page3.current?.setAttribute('selected', 'true');
          break;
        default:
          ans1Page3.current?.setAttribute('selected', 'false');
          ans2Page3.current?.setAttribute('selected', 'false');
          ans3Page3.current?.setAttribute('selected', 'false');
          break;
      }
    }


    // Set click element page 1
    if (ans1Page1.current) {
      ans1Page1.current.onclick = () => {
        let ans = answers;
        ans[1] = 1;
        setAnswers(ans);
        
        ans1Page1.current?.setAttribute('selected', 'true');
        ans2Page1.current?.setAttribute('selected', 'false');
        ans3Page1.current?.setAttribute('selected', 'false');
      };
    }

    if (ans2Page1.current) {
      ans2Page1.current.onclick = () => {
        let ans = answers;
        ans[1] = 2;
        setAnswers(ans);

        ans1Page1.current?.setAttribute('selected', 'false');
        ans2Page1.current?.setAttribute('selected', 'true');
        ans3Page1.current?.setAttribute('selected', 'false');
      };
    }

    if (ans3Page1.current) {
      ans3Page1.current.onclick = () => {
        let ans = answers;
        ans[1] = 3;
        setAnswers(ans);

        ans1Page1.current?.setAttribute('selected', 'false');
        ans2Page1.current?.setAttribute('selected', 'false');
        ans3Page1.current?.setAttribute('selected', 'true');
      };
    }

    // Set click element page 2
    if (ans1Page2.current) {
      ans1Page2.current.onclick = () => {
        let ans = answers;
        ans[2] = 1;
        setAnswers(ans);

        ans1Page2.current?.setAttribute('selected', 'true');
        ans2Page2.current?.setAttribute('selected', 'false');
        ans3Page2.current?.setAttribute('selected', 'false');
      };
    }

    if (ans2Page2.current) {
      ans2Page2.current.onclick = () => {
        let ans = answers;
        ans[2] = 2;
        setAnswers(ans);

        ans1Page2.current?.setAttribute('selected', 'false');
        ans2Page2.current?.setAttribute('selected', 'true');
        ans3Page2.current?.setAttribute('selected', 'false');
      };
    }

    if (ans3Page2.current) {
      ans3Page2.current.onclick = () => {
        let ans = answers;
        ans[3] = 3;
        setAnswers(ans);

        ans1Page2.current?.setAttribute('selected', 'false');
        ans2Page2.current?.setAttribute('selected', 'false');
        ans3Page2.current?.setAttribute('selected', 'true');
      };
    }

    // Set click element page 3
    if (ans1Page3.current) {
      ans1Page3.current.onclick = () => {
        let ans = answers;
        ans[3] = 1;
        setAnswers(ans);

        ans1Page3.current?.setAttribute('selected', 'true');
        ans2Page3.current?.setAttribute('selected', 'false');
        ans3Page3.current?.setAttribute('selected', 'false');
      };
    }

    if (ans2Page3.current) {
      ans2Page3.current.onclick = () => {
        let ans = answers;
        ans[3] = 2;
        setAnswers(ans);

        ans1Page3.current?.setAttribute('selected', 'false');
        ans2Page3.current?.setAttribute('selected', 'true');
        ans3Page3.current?.setAttribute('selected', 'false');
      };
    }

    if (ans3Page3.current) {
      ans3Page3.current.onclick = () => {
        let ans = answers;
        ans[3] = 3;
        setAnswers(ans);

        ans1Page3.current?.setAttribute('selected', 'false');
        ans2Page3.current?.setAttribute('selected', 'false');
        ans3Page3.current?.setAttribute('selected', 'true');
      };
    }

    // Register click event for previous button
    if (backButton.current) {
      backButton.current.onclick = () => {
        if (page > 1) {
          setPage(page - 1);
        }
      };
    }

    // Register click event for next button
    if (nextButton.current) {
      nextButton.current.onclick = () => {
        if (page < 3) {
          setPage(page + 1);
        } else if (page === 3) {
          Swal.fire({
            title: "Submit Quiz",
            text: "Apakah kamu yakin ingin mengirim?",
            icon: "question",
            confirmButtonText: 'Yakin',
            showCancelButton: true,
            confirmButtonColor: "#fcd34d",
            iconColor: "#fcd34d",

          }).then((result) => {
            if (result.isConfirmed) {
              let score = 0;
              if (answers[1] === 2) score++;
              if (answers[2] === 2) score++;
              if (answers[3] === 2) score++;

              router.push("/materi");
              Swal.fire({
                title: "Hasil Quiz",
                text: `Selamat! Kamu mendapatkan nilai ${score} / 3!`,
                icon: "info",
                confirmButtonText: 'OK',
                confirmButtonColor: "#fcd34d",
                iconColor: "#fcd34d",
                iconHtml: renderToStaticMarkup(<BiParty/>),
                allowOutsideClick: false,
                allowEscapeKey: false,
              });
            }
          });
        }
      };
    }
  }, [page]);

  return (
    <>
      <Navigation nama={"hatespeech"} back={"3"} />
      <section className="bg-[url('/bg.svg')] bg-cover bg-center relative z-[2] bg-white w-full h-full px-8 sm:px-32 xl:px-40 py-28 flex justify-start items-center flex-col">
        <div className={'p-8 pt-4 pb-10 text-center'}>
          <h1 className={'text-3xl sm:text-4xl lg:text-5xl font-bold mb-2'}>Quiz Time</h1>
          <p className={'text-lg'}>Hate Speech <span className={'text-zinc-500 font-bold'}>—</span> Soal {page} / 3</p>
        </div>
        
        {page === 1 ? (
          <>
            <br/>
            <h2 className={'text-xl md:text-2xl font-medium text-center animate fadeIn'}>Apa pengertian dari hate speech?</h2>
            <div className={'w-full max-w-screen-lg mt-8 mx-8 grid gap-4'}>
              <AnswerPrompt number={1} ref={ans1Page1}>Ucapan atau perkataan yang mengandung unsur ujaran cinta.</AnswerPrompt>
              <AnswerPrompt number={2} ref={ans2Page1} delay=".2s">Ucapan atau perkataan yang mengandung unsur ujaran kebencian kepada seseorang.</AnswerPrompt>
              <AnswerPrompt number={3} ref={ans3Page1} delay=".4s">Perkataan yang mengandung isi positif.</AnswerPrompt>
            </div>
          </>
        ) : page === 2 ? (
          <>
            <br/><br/>
            <h2 className={'text-xl md:text-2xl font-medium text-center animate fadeIn'}>Apa langkah yang disarankan untuk mencegah terjadinya Hate Speech?</h2>
            <div className={'w-full max-w-screen-lg mt-8 mx-8 grid gap-4'}>
              <AnswerPrompt number={1} ref={ans1Page2}>Ikut membalas dan menunjukkan sikap serupa.</AnswerPrompt>
              <AnswerPrompt number={2} ref={ans2Page2} delay=".2s">Bersikap bijak, tidak membalas, dan selalu konsultasi dengan orang tua.</AnswerPrompt>
              <AnswerPrompt number={3} ref={ans3Page2} delay=".4s">Mengabaikan tanda-tanda Hate Speech tanpa tindakan lebih lanjut.</AnswerPrompt>
            </div>
          </>
        ) : page === 3 ? (
          <>
            <br/><br/><br/>
            <h2 className={'text-xl md:text-2xl font-medium text-center animate fadeIn'}>Mengapa penting untuk selalu konsultasi dengan orang tua dalam mencegah Hate Speech?</h2>
            <div className={'w-full max-w-screen-lg mt-8 mx-8 grid gap-4'}>
              <AnswerPrompt number={1} ref={ans1Page3}>Agar orang tua ikut membalas Hate Speech.</AnswerPrompt>
              <AnswerPrompt number={2} ref={ans2Page3} delay=".2s">Untuk mendapatkan dukungan emosional dan tindakan lebih lanjut.</AnswerPrompt>
              <AnswerPrompt number={3} ref={ans3Page3} delay=".4s">Karena orang tua tidak memiliki peran dalam mencegah Hate Speech.</AnswerPrompt>
            </div>
          </>
        ) : (null)}

        <div className={'w-full max-w-screen-lg mt-8 mx-8 flex flex-row'}>
          {page !== 1 ? (<div className={'w-full md:w-72 flex justify-start'} ref={backButton}><BackButton text={"Back"} /></div>) : (null)}
          <div className={'w-full'}></div>
          <div className={'w-full md:w-72 flex justify-end'} ref={nextButton}><NextButton text={page === 3 ? "Submit" : "Next"} /></div>
        </div>

      </section>
    </>
  );
}