import React from "react";

const text = "Let’s train your voice!";

export default function trainpage() {
    return (
        <div className="max-h-[90vh] min-h-[90vh] bg-[#fff6df] flex flex-col justify-center items-center">
            <span className="text-[#1982C4] text-5xl font-semibold">
                {text}
            </span>
        </div>
    );
}
