import React from 'react'
import PageByPath from '@/pages/PageByPath'
import {PlaySong} from "@/components/page/type/PlaySong";

export const AboutMe: React.FC<{ title: React.ReactNode }> = () => (
    <>
        <PlaySong
            songLink={"/music/Nickelback_Rockstar.mp3"}
            songArtist={"Nickelback"}
            songLang={"EN"}
            songTitle={"Rockstar"}
        ></PlaySong>
        <PageByPath path="/about" />
    </>
)

export default AboutMe
