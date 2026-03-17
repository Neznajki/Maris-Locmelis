
import React from 'react'
import PageByPath from "@/pages/PageByPath";
import {PlaySong} from "@/components/page/type/PlaySong";

export const Home: React.FC<{ title?: React.ReactNode }> = ({  }) => {
  return (
      <>
        <PlaySong songLink={"/music/Dzivo_brivi.mp3"}></PlaySong>
        <PageByPath path="/" />
      </>
  )
}
export default Home
