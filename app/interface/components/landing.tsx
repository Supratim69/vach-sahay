"use client";
import React, { useTransition } from "react";
import logo from "@/components/assets/logooo.svg";
import Image from "next/image";
import fish from "@/components/assets/fish.svg";
import whale from "@/components/assets/whale.svg";
import arrow from "@/components/assets/arrow.svg";
import { Button } from "@/components/ui/button";

export default function Landing() {
    const [pending, startTransition] = useTransition();
    return (
        <div className="min-h-[100vh] bg-[#fff6df] justify-center flex flex-row">
            <div className="flex flex-col justify-between">
                <div className="flex flex-row-reverse">
                    <Image src={fish} alt="logo" style={{ height: "40vmin" }} />
                </div>
                <div className="flex flex-row justify-center min-w-[100vw]">
                    <div className="flex flex-col justify-center items-center">
                        <Image
                            src={logo}
                            alt="logo"
                            style={{ height: "15vmin" }}
                        />
                        <span className="text-3xl font-bold text-center	text-[#1982C4]">
                            Empowering Your Voice, Enhancing Your Words
                        </span>
                    </div>
                </div>

                <div className="flex flex-row justify-between items-end min-w-[100vw]">
                    <Image
                        src={whale}
                        alt="logo"
                        style={{ height: "40vmin" }}
                    />
                    <div className="flex flex-col items-center mr-14">
                        <Button
                            variant="ghost"
                            className="hover:bg-transparent hover:text-[#126091] text-2xl m-0 text-[#1982C4] font-bold"
                        >
                            dive in
                        </Button>
                        <div className="w-full flex flex-row-reverse">
                            <Image
                                src={arrow}
                                alt="arrow"
                                style={{ height: "7vmin" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
