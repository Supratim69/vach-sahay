import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function interfacelayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div></div>
            {children}
            <div className="max-h-[10vh] min-h-[10vh] bg-[#fff6df] flex flex-col-reverse items-center">
                <div className="flex flex-row m-4">
                    <Link href="/interface/speak">
                        <Button className="bg-transparent border-2 border-[#1982C4] text-black h-12 w-[7vw] text-2xl font-semibold hover:bg-[#1982C4] hover:border-black hover:text-white m-4">
                            Speak
                        </Button>
                    </Link>
                    <Link href="/interface/train">
                        <Button className="bg-transparent border-2 border-[#1982C4] text-black h-12 w-[7vw] text-2xl font-semibold hover:bg-[#1982C4] hover:border-black hover:text-white m-4">
                            Train
                        </Button>
                    </Link>
                    <Link href="/interface/analyze">
                        <Button className="bg-transparent border-2 border-[#1982C4] text-black h-12 w-[7vw] text-2xl font-semibold hover:bg-[#1982C4] hover:border-black hover:text-white m-4">
                            Analyse
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
}
