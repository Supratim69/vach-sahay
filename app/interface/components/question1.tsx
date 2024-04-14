import React from "react";
import Image from "next/image";
import log from "@/components/assets/log.svg";

export default function question1() {
    return (
        <div className="min-h-[100vh] bg-[#fff6df]">
            <Image src={log} alt="log" />
            
        </div>
    );
}
