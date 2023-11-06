"use client";

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import MulaiButton from '@/src/components/Mulai';

type PageNumber = {
    route: 0 | 1 | 2 | 3
}

export default function Navigation({ route }: PageNumber) {
    const [open, setOpen] = useState<boolean>(false);
    const menuMobileRef = useRef<HTMLDivElement>(null);

    const navigationClass = {
        selected: "mx-4 -mb-4 after:inline-block after:w-full after:h-1.5 after:bg-yellow-300 after:rounded-full after:transition-all after:duration-300 leading-4 cursor-default",
        default: "mx-4 -mb-4 after:inline-block after:w-full after:h-1.5 after:bg-gray-200 after:rounded-full after:mt-0.5 after:-mb-0.5 after:opacity-0 after:transition-all after:duration-300 leading-4 cursor-pointer"
    }

    const navigationClassMobile = {
      selected: "bg-amber-300 w-full block text-white font-medium rounded-md my-2 p-2 px-4 cursor-default",
      default: "w-full block font-medium rounded-md my-2 p-2 px-4 hover:bg-gray-200 cursor-pointer transition-colors"
  }

    const buttonMenuClass = {
      default: "text-xl p-2 rounded-md hover:text-amber-300 transition-colors cursor-pointer",
      active: "text-xl p-2 rounded-md bg-amber-300 hover:bg-amber-400 text-white transition-colors cursor-pointer"
    }

    useEffect(() => {
      let openval = false;
      setOpen(openval);

      if (menuMobileRef.current) {
        menuMobileRef.current.addEventListener("click", () => {
          openval = !openval;
          setOpen(openval);
        });
      }
    }, []);

    return (
        <nav className="w-full shadow-lg fixed top-0 left-0 z-[10]">
          <div className="bg-white w-full py-6 px-12 lg:px-28 flex justify-start items-center flex-row">
            <h1 className="text-3xl lg:text-4xl font-bold">ethic<span className="text-yellow-300">ally</span>.</h1>

            <div className={"hidden w-full justify-end items-center flex-row text-lg font-medium " + (route == 0 ? "" : "lg:flex")}>
              <Link href={route === 1 ? "" : "/"} className={route === 1 ? navigationClass.selected : navigationClass.default}>Home</Link>
              <Link href={route === 2 ? "" : "/learn"} className={route === 2 ? navigationClass.selected : navigationClass.default}>Learn</Link>
              <Link href={route === 3 ? "" : "/about"} className={route === 3 ? navigationClass.selected : navigationClass.default}>About</Link>
              <Link href="http://otn2023.fun" className={navigationClass.default + " mr-8"}>OTN 2023</Link>
              <MulaiButton navigation={true} />
            </div>

            <div className="flex lg:hidden w-full justify-end items-center flex-row">
              <div ref={menuMobileRef} className={open ? buttonMenuClass.active : buttonMenuClass.default}><FaBars /></div>
            </div>
          </div>

          <div className={"bg-white w-full h-full p-3 px-8 lg:hidden rounded-b transition-all duration-300 ease-out " + (open ? "block" : "hidden")}>
              <Link href={route === 1 ? "" : "/"} className={route === 1 ? navigationClassMobile.selected : navigationClassMobile.default}>Home</Link>
              <Link href={route === 2 ? "" : "/learn"} className={route === 2 ? navigationClassMobile.selected : navigationClassMobile.default}>Learn</Link>
              <Link href={route === 3 ? "" : "/about"} className={route === 3 ? navigationClassMobile.selected : navigationClassMobile.default}>About</Link>
              <Link href="http://otn2023.fun" className={navigationClassMobile.default + " mr-8"}>OTN 2023</Link>
              <MulaiButton navigation={true} simple={true} />
          </div>
        </nav>
    )
}