import React from "react";
import Image from "next/image";
import log from "@/components/assets/log.svg";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function question1() {
    return (
        <div className="min-h-[100vh] bg-[#fff6df] flex flex-col justify-start items-center">
            <Image src={log} alt="log" className="mt-6" />
            <div className="flex flex-col justify-center h-[50vh]">
                <span className="text-5xl font-semibold text-[#1982C4] text-center m-4 w-[40vw]">
                    Do you know what a speech impediment is?
                </span>
                <form action="">
                    <ToggleGroup type="single">
                        <ToggleGroupItem value="yes" className="px-8">
                            Yes
                        </ToggleGroupItem>
                        <ToggleGroupItem value="no" className="px-8">
                            No
                        </ToggleGroupItem>
                    </ToggleGroup>
                </form>
            </div>
        </div>
    );
}
