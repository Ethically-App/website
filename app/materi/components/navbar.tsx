import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import MulaiButton from '@/src/components/Mulai';
import HomeButton from './homeBut';

type PageNumber = {
  route: 0 | 1 | 2 | 3 | 4;
};

export default function Navbar({ route }: PageNumber) {
  return (
    <nav className="w-full shadow-lg fixed top-0 left-0 z-[10]">
      <div className="bg-[#FFD952] w-full py-6 px-12 lg:px-28 flex justify-start items-center flex-row">
        <HomeButton />
        <div className="flex justify-center flex-grow">
          <h1 className="text-3xl lg:text-4xl font-bold">
            ethic<span className="text-white">ally</span>.
          </h1>
        </div>
      </div>
    </nav>
  );
}
