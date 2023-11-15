import Navigation from "@/src/components/Navigation";
import Footer from "@/src/components/Footer";
import MulaiButton from "@/src/components/Mulai";
import "@/src/styles/home.css";
import Royyan from "@/public/royyan.jpg"
import Alikha from "@/public/alikha.jpg"
import type { StaticImageData } from 'next/image';

export default function Home() {
  return (
    <>
      <Navigation route={3} />
      <section className="bg-white bg-anim bg-[url('/bg.svg')] bg-[length:280%] sm:bg-[length:200%] md:bg-[length:140%] lg:bg-cover">
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16">
          <div className="flex justify-center items-center mt-16 px-8">
            <TeamMemberCard
              imageSrc="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              name="Nevan Artwin P. H."
              role="Leader"
              introduction="Salken! Kenalin aku Nevan Artwin Pratama Hidayat, atau dipanggil Nevan.  Aku adalah salah satu pelajar SMK RUS Kudus,, sama seperti Royyan dan Alikha. Hobiku adalah lebih membuat web dan desain juga memberikan ide, maka dari itu aku disini sebagai Team Leader dalam web ethically."
            />
          </div>
          <div className="flex justify-center items-center px-8">
            <TeamMemberCard
              imageSrc={Royyan}
              name="Royyan Ahmad Z."
              role="Designer"
              introduction="Hi,  こんにちは! Aku Royyan Ahmad Zaydan atau biasa dipanggil Royyan. Aku berasal dari Surabaya, Saat ini aku bersekolah di SMK RUS Kudus, dan tertarik tentang web design, dan graphic design"
            />
          </div>
          <div className="flex justify-center items-center px-8 mb-10">
            <TeamMemberCard
              imageSrc={Alikha}
              name="Alikha Mutiara H."
              role="Developer"
              introduction="Yoooo! Aku Alikha Mutiara Hati, temen-temen biasanya manggil aku Alikha. Aku berasal dari Tuban, namun sedang bersekolah di SMK Raden Umar Said Kudus. Aku juga memiliki passion di dunia web development!"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

function TeamMemberCard({
  imageSrc,
  name,
  role,
  introduction,
}: {
  imageSrc: string | StaticImageData;
  name: string;
  role: string;
  introduction: string;
}) {
  return (
    <div className="w-full max-w-screen-lg bg-white p-8 md:px-12 lg:px-16 border shadow-lg rounded-xl group">
      <div className="flex items-center flex-col md:flex-row h-full">
        <img
          className="object-cover w-52 h-52 rounded-full border border-[#FDD752] border-8"
          src={typeof imageSrc === 'string' ? imageSrc : imageSrc.src}
          alt={name}
        />
        <div className="mt-8 md:mt-0 md:ml-8 flex-1">
          <h1 className="text-xl font-semibold text-[#3E3E3E] text-center md:text-left mb-2 capitalize">
            {name} -&nbsp;
            <span className="text-gray-500 text-sm inline-block -mt-2">
              {role}
            </span>
          </h1>
          <p className={"text-sm sm:text-base text-center md:text-left"}>
            {introduction}
          </p>
        </div>
      </div>
    </div>
  );
}
