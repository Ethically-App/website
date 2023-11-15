"use client";

import Swal from "sweetalert2";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import Navigation from "@/src/components/MateriNav";

export default function HoaxQuiz() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/materi");

    Swal.fire({
      title: "Quiz Not Available",
      text: "kuis nya blum ada cuy watehel",
      icon: "warning",
      confirmButtonText: "OK",
      confirmButtonColor: "#fcd34d",
      iconColor: "#fcd34d",
    });
    
  }, []);

  return (
    <>
      <Navigation nama={"hoax"} back={"4"} />
      <section className="bg-[url('/bg.svg')] bg-cover bg-center relative z-[2] bg-white w-full h-full min-h-[95vh] px-8 sm:px-32 xl:px-40 py-28 flex justify-start items-center flex-col-reverse lg:flex-row"></section>
    </>
  );
}
