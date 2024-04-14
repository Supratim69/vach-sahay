"use client";
import React from "react";
import fish2 from "@/components/assets/fish2.svg";
import fish3 from "@/components/assets/fish3.svg";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Login() {
    return (
        <div className="min-h-[100vh] min-w-full bg-[#fff6df] flex flex-row justify-between">
            <div>
                <Image src={fish2} alt="fish 2" style={{ height: "35vmin" }} />
            </div>
            <div className="flex flex-col justify-center">
                <div className="flex flex-col justify-center items-center m-10 text-center ">
                    <span className="text-[#1982C4] sm:text-4xl font-semibold mb-4 md:text-5xl">
                        Hello, There!
                    </span>
                    <span className="text-black sm:text-3xl md:text-4xl font-medium">
                        Let’s start from where you left
                    </span>
                </div>
                <form action="" className="flex flex-col items-center m-10">
                    <Input
                        type="email"
                        placeholder="Email-ID"
                        className="bg-transparent border-2 h-12 border-[#1982C4] m-2 placeholder:text-xl placeholder:font-bold placeholder:text-black"
                        required
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        className="bg-transparent border-2 h-12 border-[#1982C4] m-4 placeholder:text-xl placeholder:font-bold placeholder:text-black"
                        required
                    />
                    <Button
                        variant="outline"
                        className="text-white text-lg bg-[#1982c4] border border-[#333333] rounded-3xl font-bold hover:text-[#1982c4] hover:bg-white h-10"
                    >
                        Login
                    </Button>
                </form>
                <div className="flex flex-col justify-center items-center m-4">
                    <span className="text-lg font-semibold m-2 mt-4 text-center	">
                        new around here?
                    </span>
                    <Button
                        variant="outline"
                        className="text-white text-lg bg-[#1982c4] border border-[#333333] rounded-3xl font-bold hover:text-[#1982c4] hover:bg-white"
                    >
                        Sign-up
                    </Button>
                </div>
            </div>
            <div className="flex flex-col-reverse">
                <Image src={fish3} alt="fish 3" style={{ height: "35vmin" }} />
            </div>
        </div>
    );
}
