import React from "react";
import Image from "next/image";
import log from "@/components/assets/log.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function question2() {
    return (
        <div className="min-h-[100vh] bg-[#fff6df] flex flex-col justify-start items-center">
            <Image src={log} alt="log" className="mt-6" />
            <div className="flex flex-col justify-center h-[50vh]">
                <span className="text-5xl font-semibold text-[#1982C4] text-center m-4 w-[40vw]">
                    Are you aware if you have a speech impediment?
                </span>
                <div className="flex flex-row justify-center">
                    <form action="">
                        <ToggleGroup type="single">
                            <ToggleGroupItem value="yes" className="px-8">
                                Yes
                            </ToggleGroupItem>
                            <ToggleGroupItem value="no" className="px-8">
                                No
                            </ToggleGroupItem>
                        </ToggleGroup>
                        <div>
                            <Input type="text" placeholder="If yes, specify" />
                        </div>
                        <Button
                            variant="outline"
                            className="text-white text-lg bg-[#1982c4] border-2 border-[#333333] rounded-3xl font-bold hover:bg-white hover:text-[#1982c4]"
                        >
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
