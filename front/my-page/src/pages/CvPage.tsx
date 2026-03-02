
import React from 'react'
import { PageContainer } from '@/components/PageRenderer'
import '@/assets/popupSpoiler.css'
import PopupSpoiler from "@/components/PopupSpoiler";

export const Cv: React.FC<{ title: React.ReactNode }> = ({ title }) => {
  return (
    <PageContainer title={title}>
      <PopupSpoiler title="Web Version">
          <button className="popup-trigger">
            <a style={{ color: "#ededed" }} href="/cv.html" download="Maris_Locmelis_2026_03_02_CV.pdf" className="text-gray-600">Download pdf CV updated 2026-03-02</a>
          </button>
          <iframe
              src="/cv.html"
              width="100%"
              height="800px"
              style={{ border: "none" }}
              title="CV"
          />
      </PopupSpoiler>
    </PageContainer>
  )
}
export default Cv
