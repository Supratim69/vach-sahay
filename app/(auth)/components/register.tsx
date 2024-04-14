"use client";
import React, { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import log from "@/components/assets/log.svg";
import octo from "@/components/assets/octo.svg";
import flami from "@/components/assets/Flamingo.svg";

import Image from "next/image";

export default function Register() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [age, setAge] = useState("");
    const [nationality, setNationality] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [error, setError] = useState("");

    return (
        <div className="flex flex-row  bg-[#fff6df] min-h-[100vh] justify-between">
            <div className="flex flex-col-reverse">
                <Image src={octo} alt="octo" style={{ height: "30vmin" }} />
            </div>
            <div className="flex flex-col items-center justify-start ">
                <Image src={log} alt="log" style={{ height: "20vmin" }} />
                <span className="text-[#1982C4] text-5xl m-2 mb-6 font-semibold">
                    Please tell us more about yourself!
                </span>
                <form action="">
                    <Input
                        type="text"
                        placeholder="First Name"
                        className="bg-transparent border-2 h-12 border-[#1982C4] m-2 placeholder:text-xl placeholder:font-bold placeholder:text-black w-[20vw]"
                        required
                    />
                    <Input
                        type="text"
                        placeholder="Last Name"
                        className="bg-transparent border-2 h-12 border-[#1982C4] m-2 placeholder:text-xl placeholder:font-bold placeholder:text-black w-[20vw]"
                        required
                    />
                    <Input
                        type="text"
                        placeholder="Age"
                        className="bg-transparent border-2 h-12 border-[#1982C4] m-2 placeholder:text-xl placeholder:font-bold placeholder:text-black w-[20vw]"
                        required
                    />
                    <Input
                        type="text"
                        placeholder="Nationality"
                        className="bg-transparent border-2 h-12 border-[#1982C4] m-2 placeholder:text-xl placeholder:font-bold placeholder:text-black w-[20vw]"
                        required
                    />
                    <Input
                        type="text"
                        placeholder="Contact No."
                        className="bg-transparent border-2 h-12 border-[#1982C4] m-2 placeholder:text-xl placeholder:font-bold placeholder:text-black w-[20vw]"
                        required
                    />
                    <Input
                        type="email"
                        placeholder="Email"
                        className="bg-transparent border-2 h-12 border-[#1982C4] m-2 placeholder:text-xl placeholder:font-bold placeholder:text-black w-[20vw]"
                        required
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        className="bg-transparent border-2 h-12 border-[#1982C4] m-2 placeholder:text-xl placeholder:font-bold placeholder:text-black w-[20vw]"
                        required
                    />
                    <ToggleGroup type="single">
                        <ToggleGroupItem value="male" className="px-8">
                            Male
                        </ToggleGroupItem>
                        <ToggleGroupItem value="female" className="px-8">
                            Female
                        </ToggleGroupItem>
                    </ToggleGroup>
                    <div className="flex flex-row justify-center">
                        <Button
                            variant="outline"
                            className="text-white text-lg bg-[#1982c4] border-2 border-[#333333] rounded-3xl font-bold hover:bg-white hover:text-[#1982c4]"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
            <div className="flex flex-col-reverse">
                <Image
                    src={flami}
                    alt="flamingo"
                    style={{ height: "30vmin" }}
                />
            </div>
        </div>
    );
}
