
import React from 'react'
import '@/assets/popupSpoiler.css'
import PageByPath from "@/pages/PageByPath";

export const Cv: React.FC<{ title: React.ReactNode }> = () => {
  return (
      <PageByPath path="/cv" />
  )
}
export default Cv
