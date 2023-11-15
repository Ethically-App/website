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

  const ans1Page4 = useRef<HTMLDivElement>(null);
  const ans2Page4 = useRef<HTMLDivElement>(null);
  const ans3Page4 = useRef<HTMLDivElement>(null);

  const ans1Page5 = useRef<HTMLDivElement>(null);
  const ans2Page5 = useRef<HTMLDivElement>(null);
  const ans3Page5 = useRef<HTMLDivElement>(null);

  const backButton = useRef<HTMLDivElement>(null);
  const nextButton = useRef<HTMLDivElement>(null);

  const [answers, setAnswers] = useState<{[key: number]: number}>(
    {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0
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
    } else if (page === 4) {
      switch (answers[4]) {
        case 1:
          ans1Page4.current?.setAttribute('selected', 'true');
          ans2Page4.current?.setAttribute('selected', 'false');
          ans3Page4.current?.setAttribute('selected', 'false');
          break;
        case 2:
          ans1Page4.current?.setAttribute('selected', 'false');
          ans2Page4.current?.setAttribute('selected', 'true');
          ans3Page4.current?.setAttribute('selected', 'false');
          break;
        case 3:
          ans1Page4.current?.setAttribute('selected', 'false');
          ans2Page4.current?.setAttribute('selected', 'false');
          ans3Page4.current?.setAttribute('selected', 'true');
          break;
        default:
          ans1Page4.current?.setAttribute('selected', 'false');
          ans2Page4.current?.setAttribute('selected', 'false');
          ans3Page4.current?.setAttribute('selected', 'false');
          break;
      }
    } else if (page === 5) {
      switch (answers[5]) {
        case 1:
          ans1Page5.current?.setAttribute('selected', 'true');
          ans2Page5.current?.setAttribute('selected', 'false');
          ans3Page5.current?.setAttribute('selected', 'false');
          break;
        case 2:
          ans1Page5.current?.setAttribute('selected', 'false');
          ans2Page5.current?.setAttribute('selected', 'true');
          ans3Page5.current?.setAttribute('selected', 'false');
          break;
        case 3:
          ans1Page5.current?.setAttribute('selected', 'false');
          ans2Page5.current?.setAttribute('selected', 'false');
          ans3Page5.current?.setAttribute('selected', 'true');
          break;
        default:
          ans1Page5.current?.setAttribute('selected', 'false');
          ans2Page5.current?.setAttribute('selected', 'false');
          ans3Page5.current?.setAttribute('selected', 'false');
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

    // Set click element page 4
    if (ans1Page4.current) {
      ans1Page4.current.onclick = () => {
        let ans = answers;
        ans[4] = 1;
        setAnswers(ans);

        ans1Page4.current?.setAttribute('selected', 'true');
        ans2Page4.current?.setAttribute('selected', 'false');
        ans3Page4.current?.setAttribute('selected', 'false');
      };
    }

    if (ans2Page4.current) {
      ans2Page4.current.onclick = () => {
        let ans = answers;
        ans[4] = 2;
        setAnswers(ans);

        ans1Page4.current?.setAttribute('selected', 'false');
        ans2Page4.current?.setAttribute('selected', 'true');
        ans3Page4.current?.setAttribute('selected', 'false');
      };
    }

    if (ans3Page4.current) {
      ans3Page4.current.onclick = () => {
        let ans = answers;
        ans[4] = 3;
        setAnswers(ans);

        ans1Page4.current?.setAttribute('selected', 'false');
        ans2Page4.current?.setAttribute('selected', 'false');
        ans3Page4.current?.setAttribute('selected', 'true');
      };
    }

    // Set click element page 5
    if (ans1Page5.current) {
      ans1Page5.current.onclick = () => {
        let ans = answers;
        ans[5] = 1;
        setAnswers(ans);

        ans1Page5.current?.setAttribute('selected', 'true');
        ans2Page5.current?.setAttribute('selected', 'false');
        ans3Page5.current?.setAttribute('selected', 'false');
      };
    }

    if (ans2Page5.current) {
      ans2Page5.current.onclick = () => {
        let ans = answers;
        ans[5] = 2;
        setAnswers(ans);

        ans1Page5.current?.setAttribute('selected', 'false');
        ans2Page5.current?.setAttribute('selected', 'true');
        ans3Page5.current?.setAttribute('selected', 'false');
      };
    }

    if (ans3Page5.current) {
      ans3Page5.current.onclick = () => {
        let ans = answers;
        ans[5] = 3;
        setAnswers(ans);

        ans1Page5.current?.setAttribute('selected', 'false');
        ans2Page5.current?.setAttribute('selected', 'false');
        ans3Page5.current?.setAttribute('selected', 'true');
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
        if (page < 5) {
          setPage(page + 1);
        } else if (page === 5) {
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
              if (answers[2] === 1) score++;
              if (answers[3] === 3) score++;
              if (answers[4] === 2) score++;
              if (answers[5] === 3) score++;

              router.push("/materi");
              Swal.fire({
                title: "Hasil Quiz",
                text: `Selamat! Kamu mendapatkan nilai ${score} / 5!`,
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
      <Navigation nama={"hoax"} back={"4"} />
      <section className="bg-[url('/bg.svg')] bg-cover bg-center relative z-[2] bg-white w-full h-full px-8 sm:px-32 xl:px-40 py-28 flex justify-start items-center flex-col">
        <div className={'p-8 pt-4 pb-10 text-center'}>
          <h1 className={'text-3xl sm:text-4xl lg:text-5xl font-bold mb-2'}>Quiz Time</h1>
          <p className={'text-lg'}>Hoax <span className={'text-zinc-500 font-bold'}>—</span> Soal {page} / 5</p>
        </div>
        
        {page === 1 ? (
          <>
            <br/>
            <h2 className={'text-xl md:text-2xl font-medium text-center animate fadeIn'}>Apa pengertian dari hoax?</h2>
            <div className={'w-full max-w-screen-lg mt-8 mx-8 grid gap-4'}>
              <AnswerPrompt number={1} ref={ans1Page1}>Berita yang benar dan dapat dipercaya.</AnswerPrompt>
              <AnswerPrompt number={2} ref={ans2Page1} delay=".2s">Berita palsu atau informasi yang tidak benar.</AnswerPrompt>
              <AnswerPrompt number={3} ref={ans3Page1} delay=".4s">Satire atau parodi yang disusun untuk lucu.</AnswerPrompt>
            </div>
          </>
        ) : page === 2 ? (
          <>
            <br/><br/>
            <h2 className={'text-xl md:text-2xl font-medium text-center animate fadeIn'}>Jenis berita hoaks yang sengaja dibuat dengan berita bohong disebut sebagai:</h2>
            <div className={'w-full max-w-screen-lg mt-8 mx-8 grid gap-4'}>
              <AnswerPrompt number={1} ref={ans1Page2}>Misleading content.</AnswerPrompt>
              <AnswerPrompt number={2} ref={ans2Page2} delay=".2s">Satire atau parodi.</AnswerPrompt>
              <AnswerPrompt number={3} ref={ans3Page2} delay=".4s">Imposter content.</AnswerPrompt>
            </div>
          </>
        ) : page === 3 ? (
          <>
            <br/><br/><br/>
            <h2 className={'text-xl md:text-2xl font-medium text-center animate fadeIn'}>Berita yang mengaku sebagai sumber yang sebenarnya disebut sebagai:</h2>
            <div className={'w-full max-w-screen-lg mt-8 mx-8 grid gap-4'}>
              <AnswerPrompt number={1} ref={ans1Page3}>Fabricated Content.</AnswerPrompt>
              <AnswerPrompt number={2} ref={ans2Page3} delay=".2s">False connection.</AnswerPrompt>
              <AnswerPrompt number={3} ref={ans3Page3} delay=".4s">Imposter content.</AnswerPrompt>
            </div>
          </>
        ) : page === 4 ? (
          <>
            <br/><br/><br/><br/>
            <h2 className={'text-xl md:text-2xl font-medium text-center animate fadeIn'}>Salah satu dampak dari berita hoaks adalah:</h2>
            <div className={'w-full max-w-screen-lg mt-8 mx-8 grid gap-4'}>
              <AnswerPrompt number={1} ref={ans1Page4}>Meningkatkan pemahaman masyarakat.</AnswerPrompt>
              <AnswerPrompt number={2} ref={ans2Page4} delay=".2s">Menimbulkan kebingungan dan penyesatan informasi.</AnswerPrompt>
              <AnswerPrompt number={3} ref={ans3Page4} delay=".4s">Memperkuat kepercayaan masyarakat.</AnswerPrompt>
            </div>
          </>
        ) : page === 5 ? (
          <>
            <br/><br/><br/><br/><br/>
            <h2 className={'text-xl md:text-2xl font-medium text-center animate fadeIn'}>Cara mencegah hoaks yang tepat adalah:</h2>
            <div className={'w-full max-w-screen-lg mt-8 mx-8 grid gap-4'}>
              <AnswerPrompt number={1} ref={ans1Page5}>Langsung membagikan berita sebelum memastikan kebenarannya.</AnswerPrompt>
              <AnswerPrompt number={2} ref={ans2Page5} delay=".2s">Tidak perlu memeriksa sumber berita.</AnswerPrompt>
              <AnswerPrompt number={3} ref={ans3Page5} delay=".4s">Verifikasi informasi, periksa sumber berita, dan bergabung dalam grup diskusi anti hoaks.</AnswerPrompt>
            </div>
          </>
        ) : (null)}

        <div className={'w-full max-w-screen-lg mt-8 mx-8 flex flex-row'}>
          {page !== 1 ? (<div className={'w-full md:w-72 flex justify-start'} ref={backButton}><BackButton text={"Back"} /></div>) : (null)}
          <div className={'w-full'}></div>
          <div className={'w-full md:w-72 flex justify-end'} ref={nextButton}><NextButton text={page === 5 ? "Submit" : "Next"} /></div>
        </div>

      </section>
    </>
  );
}