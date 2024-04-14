import React from "react";
import Image from "next/image";
import log from "@/components/assets/log.svg";
import hfish from "@/components/assets/h-fish.svg";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

export default function terms() {
    return (
        <div className="flex flex-row justify-center bg-[#fff6df] min-h-[100vh] ">
            <div className="flex flex-col justify-between items-center">
                <Image src={log} alt="logo" className="mt-4" />
                <span className="sm:text-3xl xl:text-4xl font-semibold text-[#1982c4] text-center	my-2 mx-2">
                    Before we start please consider reading our Terms and
                    Conditions
                </span>
                <ScrollArea className="h-[40vh] w-[70vw] bg-[#D9D9D9] rounded-md border p-4">
                    Introduction: This is a legal agreement (Terms of Use or
                    Agreement) between You (User, you, or your) and [Your
                    Company Name] (we, us, or our) for your use of the [Service
                    Name] website (the Service). Use of the Service: You may use
                    the Service for your personal, non-commercial use only. You
                    may not modify, copy, distribute, transmit, display,
                    perform, reproduce, publish, license, create derivative
                    works from, transfer, or sell any information, software,
                    products, or services obtained from the Service. You are
                    responsible for maintaining the confidentiality of your
                    account and password and for restricting access to your
                    computer to prevent unauthorized access to the Service. You
                    agree to accept responsibility for all activities that occur
                    under your account or password. User Content: You are solely
                    responsible for any content or information you upload, post,
                    or otherwise transmit through the Service . You grant us a
                    non-exclusive, royalty-free, worldwide, perpetual license to
                    use, modify, reproduce, distribute, display, and perform
                    User Content in connection with the Service. Disclaimer: THE
                    SERVICE IS PROVIDED AS I AND AS AVAILABLE, WITHOUT WARRANTY
                    OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
                    TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                    PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT
                    THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR
                    VIRUS-FREE. WE DO NOT WARRANT THAT THE RESULTS THAT MAY BE
                    OBTAINED FROM THE USE OF THE SERVICE WILL BE ACCURATE OR
                    RELIABLE. Limitation of Liability: IN NO EVENT SHALL WE BE
                    LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
                    CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR IN
                    CONNECTION WITH THE USE OF THE SERVICE, EVEN IF WE HAVE BEEN
                    ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. Termination: We
                    may terminate your access to the Service at any time, for
                    any reason, or for no reason. Governing Law: This Agreement
                    shall be governed by and construed in accordance with the
                    laws of [Your State], without regard to its conflict of law
                    provisions. Entire Agreement: This Agreement constitutes the
                    entire agreement between you and us regarding the use of the
                    Service. Changes to the Terms of Use: We may update these
                    Terms of Use from time to time. We will notify you of any
                    changes by posting the new Terms of Use on the Service. You
                    are advised to review the Terms of Use periodically for any
                    changes. Your continued use of the Service after the posting
                    of the revised Terms of Use constitutes your acceptance of
                    the revised Terms of Use. Contact Us: If you have any
                    questions about these Terms of Use, please contact us at
                    [Your Email Address].
                </ScrollArea>
                <div className="flex flex-row mt-4 justify-center w-[100vw]">
                    <div className="flex flex-row justify-between w-[20%]">
                        <Button
                            variant="outline"
                            className="text-[#fff6df] text-lg bg-[#1982c4] border border-[#333333] font-bold mr-2"
                        >
                            Agree
                        </Button>
                        <Button
                            variant="outline"
                            className="text-black text-lg bg-[#fff6df] border border-[#1982c4] font-bold "
                        >
                            Disagree
                        </Button>
                    </div>
                </div>
                <div className="flex flex-row justify-start w-[100vw]">
                    <Image src={hfish} alt="fishy" />
                </div>
            </div>
        </div>
    );
}
