import React, {useRef, useState} from "react";
import {PlaySongType} from "@/contract/PageType";

export const PlaySong: React.FC<PlaySongType> = ({ songLink }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const playPromiseRef = useRef<Promise<void> | null>(null);
    const [playing, setPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(1);

    const toggleMusic = () => {
        if (!audioRef || !audioRef.current) return;

        const audio = audioRef.current;
        const promise = playPromiseRef.current;

        if (playing) {
            //If the promise exists
            if (promise != null) {

                promise.then(function(_) {

                    audio.pause();
                    audio.currentTime = 0;
                });

            } else {
                audioRef.current.pause();
            }
        } else {
            playPromiseRef.current = audioRef.current.play();
        }

        setPlaying(!playing);
    };

    const updateProgress = () => {
        const audio = audioRef.current;
        if (!audio || !audio.duration) return;

        const percent = (audio.currentTime / audio.duration) * 100;
        setProgress(percent);
    };

    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        setVolume(value);

        if (audioRef.current) {
            audioRef.current.volume = value;
        }
    };

    return (
        <>
            <div className={"center"}>
                <button onClick={toggleMusic}>
                    {playing ? "🔊 Stop song" : "🔇 Play song (LV)"}
                </button>
            </div>
            <div style={{ width: "300px", margin: "20px auto" }} className={"center"}>
                <progress value={progress} max="100" style={{ width: "100%" }} />
            </div>
            <audio ref={audioRef} loop onTimeUpdate={updateProgress}>
                <source src={songLink} type="audio/mpeg"/>
            </audio>
            <div style={{ marginTop: "20px" }} className={"center"}>
                🔉
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={changeVolume}
                    style={{ width: "200px", margin: "0 10px" }}
                />
                🔊
            </div>
        </>
    )
}