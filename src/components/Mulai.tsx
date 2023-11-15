"use client";

import Swal from 'sweetalert2';
import { useState, useEffect, useRef } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { useRouter } from 'next/navigation';
import { FaArrowRight, FaUserCircle, FaCheckCircle } from 'react-icons/fa';

type ButtonType = {
    navigation?: boolean
    simple?: boolean
    link?: string
    style?: object
}

export default function MulaiButton({ navigation = false, simple = false, link = "", ...props } : ButtonType) {
    const router = useRouter();
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    const ref1 = useRef<HTMLAnchorElement>(null);
    const ref2 = useRef<HTMLAnchorElement>(null);

    const classes = {
        default: 'mulai p-3 px-6 bg-amber-300 rounded-full text-white text-xl font-semibold shadow-lg hover:bg-yellow-300 hover:shadow-xl transition-all duration-300 cursor-pointer ',
        simple: 'mulai bg-amber-300 w-full flex justify-center items-center block text-white font-medium shadow-md rounded-full my-4 p-2 px-4 hover:bg-yellow-300 hover:shadow-lg transition-all duration-300 cursor-pointer',
        transition: 'animate fadeIn',
    };

    useEffect(() => {

        let nama = localStorage.getItem("nama");
        if (nama && nama !== "") setLoggedIn(true);
        else setLoggedIn(false);

        const click = () => {
            let nama = localStorage.getItem("nama");
            if (nama && nama !== "") {
                setLoggedIn(true);

                if (link != "") {
                    router.push(link);

                } else {
                    Swal.fire({
                        title: "Popup Sementara",
                        text: "wtf are you",
                        icon: "warning",
                        confirmButtonText: 'Logout',
                        showCancelButton: true,
                        confirmButtonColor: "#fcd34d",
                        iconColor: "#fcd34d",
                    }).then((result) => {
                        if (result.isConfirmed) {
                            localStorage.removeItem("nama");
                            setLoggedIn(false);
                            router.push("/");
                        }
                    });
                }

            } else {
                setLoggedIn(false);

                Swal.fire({
                    html: renderToStaticMarkup(
                        <>
                        <span className="text-2xl inline-block mb-4 font-bold">Selamat datang!</span>
                        <br/>
                        <p className="font-medium">Masukan nama untuk melanjutkan:</p>
                        </>
                    ),

                    icon: "info", 
                    input: 'text',
                    confirmButtonText: 'Lanjut',
                    cancelButtonText: 'Kembali',
                    showCancelButton: true,
                    reverseButtons: true,

                    confirmButtonColor: "#fcd34d",
                    iconColor: "#fcd34d",
                    iconHtml: renderToStaticMarkup(<FaUserCircle/>),
                    preConfirm: (nama) => {
                        if (!nama || nama === "") Swal.showValidationMessage("Nama tidak boleh kosong!");
                        else if (!nama.match(/^[A-Za-z ]+$/)) Swal.showValidationMessage("Nama hanya boleh berisi huruf dan spasi!");
                        else if (nama.length < 3) Swal.showValidationMessage("Nama tidak boleh kurang dari 3 huruf!");
                        else if (nama.length > 60) Swal.showValidationMessage("Nama tidak boleh lebih dari 60 huruf (so weird)");
                        else return nama;
                    }
                }).then((result) => {
                    if (result.isConfirmed) {
                        nama = result.value as string;
                        localStorage.setItem("nama", nama);
                        setLoggedIn(true);

                        if (link != "") {
                            router.push(link);

                        } else {
                            router.push("/materi");
                        }

                        Swal.fire({
                            html: renderToStaticMarkup(
                                <>
                                <span className="text-2xl inline-block mb-4 font-bold">Halo, {nama.includes(' ') ? nama.split(' ')[0] : nama}!</span>
                                <br/>
                                <div className="w-full flex justify-center">
                                <p className="font-medium max-w-sm">
                                    <span className="mb-1 inline-block">
                                        Selamat datang di&nbsp;
                                        <span className="font-['Poppins'] font-bold">
                                            ethic<span className="text-yellow-300">ally</span>.
                                        </span>
                                    </span>
                                    <br/>
                                    Ayo mulai menjadi remaja yang beretika baik dalam berinternet!
                                </p>
                                </div>
                                </>
                            ),
        
                            icon: "question", 
                            confirmButtonText: 'Mulai',
                            confirmButtonColor: "#fcd34d",
                            iconColor: "#fcd34d",
                            iconHtml: renderToStaticMarkup(<FaCheckCircle/>),
                        });
                    }
                });
            }
        }

        if (ref1.current) ref1.current.addEventListener("click", click);
        if (ref2.current) ref2.current.addEventListener("click", click);
    }, []);

    return (
        (loggedIn || link != "") ? (
            (navigation || link != "") ? (
                simple ? (
                    <a ref={ref2} className={classes.simple + (navigation ? "" : classes.transition)} {...props} >
                        {link != "" ? "Mulai" : "Dasbor"}
                        <FaArrowRight className="inline-block ml-3 -mt-0.5 transition-all" /></a>
                ) : (
                    <a ref={ref1} className={classes.default} {...props} >
                        {link != "" ? "Mulai" : "Dasbor"}
                        <FaArrowRight className="inline-block ml-3 -mt-0.5 transition-all" /></a>
                )
            ) : (
                <a ref={ref1} className={classes.default} {...props} >
                    {link != "" ? "Mulai" : "Dasbor"}
                    <FaArrowRight className="inline-block ml-3 -mt-0.5 transition-all" /></a>
            )
        ) : (
            simple ? (
                <a ref={ref2} className={classes.simple + (navigation ? "" : classes.transition)} {...props} >Mulai<FaArrowRight className="inline-block ml-3 -mt-0.5 transition-all" /></a>
            ) : (
                <a ref={ref2} className={classes.default + (navigation ? "" : classes.transition)} {...props} >Mulai<FaArrowRight className="inline-block ml-3 -mt-0.5 transition-all" /></a>
            )
        )
    )
}