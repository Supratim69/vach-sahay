"use client";
import React from "react";
import Image from "next/image";
import skely from "@/components/assets/skely.svg";

export default function Skerror() {
    return (
        <div className="flex flex-col h-[100vh] w-100vw justify-center items-center bg-[#fff6df]">
            <span className="text-[#FF595E] text-4xl font-semibold m-2">
                Oh No!
            </span>
            <Image src={skely} alt="skely" style={{ height:"50vmin"}}/>
            <span className="text-4xl m-2 font-bold text-center max-w-[40vw]">
                You need to accept the terms and conditions to be able to use
                our platform.
            </span>
        </div>
    );
}
