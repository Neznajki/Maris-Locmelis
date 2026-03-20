
import React from 'react'
import PageByPath from "@/pages/PageByPath";
import {PlaySong} from "@/components/page/type/PlaySong";

export const Fun: React.FC = () => {
  return (
    <>
      <PlaySong
        songLink={"/music/OneRepublic-Good_Life.mp3"}
        songArtist={"OneRepublic"}
        songLang={"EN"}
        songTitle={"Good Life"}
      ></PlaySong>
      <PageByPath path="/fun" />
    </>
  )
}
export default Fun
