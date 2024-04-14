"use client";
import React from "react";
import Image from "next/image";
import loader from "@/app/loader.gif";

export default function Loading() {
    return (
        <div>
            <Image src={loader} alt="Loading..." />
        </div>
    );
}
