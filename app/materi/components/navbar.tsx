import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import MulaiButton from '@/src/components/Mulai';
import BackButton from '@/src/components/Back';
import NextButton from '@/src/components/Next';

export default function Navbar() {
  return (
    <nav className="w-full shadow-lg">
      <div className="bg-[#FFD952] w-full py-6 px-12 md:px-24 lg:px-32 flex justify-start items-center flex-row shadow-lg">
        <BackButton href="/materi/" text="Materi" white={true} />
        <div className="flex justify-center flex-grow">
          <h1 className="text-3xl lg:text-4xl font-bold">
            ethic<span className="text-white">ally</span>.
          </h1>
        </div>
        <NextButton href="/materi/cyberbullying/2" text="Next" white={true} />
      </div>
    </nav>
  );
}
