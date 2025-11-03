
import React from 'react'
import { PageContainer } from '@/components/PageRenderer'
import { Paragraph } from '@/components/Paragraph'
import SoftSkills from '@/assets/360-Degree-Soft skill review Maris Locmelis Feb_2025.xlsx?url'
import PopupSpoiler from '@/components/PopupSpoiler'
import '@/assets/popupSpoiler.css'
import '@/styles/WhatsDonePageCss.css'
import { WhatsDoneTitle } from '@/pages/meta/WhatsDone.meta'
import PageData from '@/data/api/WhatsDone'

export const WhatsDonePage: React.FC = () => {
  return (
    <PageContainer title={WhatsDoneTitle}>
      <div className="WhatsDonePage">
          {PageData.title.map(p => (
            <Paragraph>{p.text}</Paragraph>
          ))}
<br/><br/>
        <PopupSpoiler title="PingnetGames">
          <Paragraph><a href="/piratello_game.html" target="_blank">Social Network Game Piratello</a> &lt;-- everything related to server</Paragraph>
          <Paragraph><a href="/lines_of_life.html" target="_blank">Social Network Game lines of life</a> &lt;-- everything related to server</Paragraph>
        </PopupSpoiler><br/><br/>

        <PopupSpoiler title="Dyninno and Dynatech">
          {PageData.Dynatech.map(p => (
            <Paragraph>{p.text}</Paragraph>
          ))}
        </PopupSpoiler><br/><br/>

        <PopupSpoiler title="Stock Guru">
          {PageData.StockGuru.map(p => (
            <Paragraph>{p.text}</Paragraph>
          ))}
        </PopupSpoiler><br/><br/>

        <PopupSpoiler title="Unemployed">
          {PageData.Unemployed.map(p => (
            <Paragraph>{p.text}</Paragraph>
          ))}
        </PopupSpoiler><br/><br/>

        <PopupSpoiler title="IT Labs // AGC Soft">
          {PageData.AGC.map(p => (
            <Paragraph>{p.text}</Paragraph>
          ))}
        </PopupSpoiler><br/><br/>

        <PopupSpoiler title="C.T.CO">
          {PageData.CTCO.map(p => (
            <Paragraph>{p.text}</Paragraph>
          ))}
        </PopupSpoiler><br/><br/>

        <PopupSpoiler title="Sapiens">
          {PageData.Sapiens.map(p => (
            <Paragraph>{p.text}</Paragraph>
          ))}
        </PopupSpoiler><br/><br/>

        <PopupSpoiler title="2025.10.19 something gone wrong.">
          {PageData.SomethingGoneWrong.map(p => (
            <Paragraph>{p.text}</Paragraph>
          ))}
        </PopupSpoiler><br/><br/>
      </div>
    </PageContainer>
  )
}
export default WhatsDonePage
