"use client";
import React from "react";
import { AudioRecorder } from "react-audio-voice-recorder";

const text = "Hello, Let’s start by analyzing your voice";

export default function speakpage() {
    const addAudioElement = (blob: Blob) => {
        const url = URL.createObjectURL(blob);
        const audio = document.createElement("audio");
        audio.src = url;
        audio.controls = false;
        document.body.appendChild(audio);
    };
    return (
        <div className="max-h-[90vh] min-h-[90vh] bg-[#fff6df] flex flex-col justify-center items-center">
            <span className="text-[#1982C4] text-5xl font-semibold text-center">
                {text}
            </span>
            <span className="m-4 border-2 border-black rounded-3xl">
                <AudioRecorder
                    onRecordingComplete={addAudioElement}
                    audioTrackConstraints={{
                        noiseSuppression: true,
                        echoCancellation: true,
                    }}
                    onNotAllowedOrFound={(err) => console.table(err)}
                    downloadFileExtension="wav"
                    mediaRecorderOptions={{
                        audioBitsPerSecond: 44100,
                    }}
                    showVisualizer={true}
                />
            </span>
        </div>
    );
}
