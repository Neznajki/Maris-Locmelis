
import React from 'react'
import { PageContainer } from '@/components/PageRenderer'
import { Paragraph } from '@/components/Paragraph'
import PageData  from '@/data/api/AboutMe.json'
import AlvaLogic from "@/assets/Alva Labs Logic Test Report - Māris Ločmelis (eng).pdf";
import AlvaPersonality from "@/assets/Alva Labs Personality Test Report - Māris Ločmelis (eng).pdf";

export const AboutMe: React.FC<{ title: React.ReactNode }> = ({ title }) => {
  return (
    <PageContainer title={title}>
      <div>
        <div className="popup-spoiler">
          <button className="popup-trigger">
            <a href={AlvaPersonality} download="Maris_Locmelis_2026_02_06_pers.pdf">Alva Personality Test Results</a>
          </button>
        </div>

        <div className="popup-spoiler">
          <button className="popup-trigger">
            <a href={AlvaLogic} download="Maris_Locmelis_2026_02_06_logi.pdf">Alva Logic Test Results</a>
          </button>
        </div>
      </div>
      {PageData.map(p => (
        <Paragraph key={p.id}>{p.text}</Paragraph>
      ))}
    </PageContainer>
  )
}
export default AboutMe
