
import React from 'react'
import { PageContainer } from '@/components/PageRenderer'
import { Paragraph } from '@/components/Paragraph'
import PopupSpoiler from '@/components/PopupSpoiler'
import '@/assets/popupSpoiler.css'
import '@/styles/WhatsDonePageCss.css'
import PageData from '@/data/api/WhatsDone.json'

export const WhatsDonePage: React.FC<{ title: React.ReactNode }> = ({ title }) => {
  return (
    <PageContainer title={title}>
      <div className="WhatsDonePage">
          {PageData.title.map(p => (
            <Paragraph key={"wdp_" + p.id}>{p.text}</Paragraph>
          ))}
      <br/><br/>
      <PopupSpoiler title="PingnetGames">
        Social Network Games (created everything everything related to server) <br/>
        Please notice payments systems and admin pages where we are editing is also server side tasks <br/>
        All I had here ssh connection to some magic PC and I was forced to make it work. No help besides google and 1 magic kick from top.<br/>
        there was some small help when Lines of Life kicked off and got 40k+ stable online (my knowledge was not enough to configure high load SQL server) (solution cache writes and flush them once 10-20 seconds, was enough to handle 40k+ users without any locks)<br/>
        FYI: Game Lines of Life registered users got from 0 to 1kk(1 000 000)+ in about 2 weeks, so probably it is normal <br/>

        <PopupSpoiler title="Piratello">
          <a href="https://m.vk.com/club45597928" target="_blank">
            Piratello (official game group)
          </a><br />

          <a href="/piratello_game.html" target="_blank">
             Piratello (cached version)
          </a><br />
          &lt;-- created everything everything related to server
        </PopupSpoiler>
        {"      "}
        <PopupSpoiler title="Guess Word">
          (everything related to development was implemented by me including admin page where we structure game levels, with FE everything works. (vanilla JS)<br/>
          <a href="https://www.draugiem.lv/applications/15013460/" target="_blank">
            Guess Word (draugiem.lv)
          </a><br />
          <a href="/guess_word.html" target="_blank">
            Guess Word (cached version)
          </a><br />

          had prod ready implementation in <a href="https://nk.pl/">nk.pl maybe not launched</a>
          <br />
          had prod ready implementation in <a href="https://m.vk.com/">vk.com launched</a>
          <br />
          had prod ready implementation in <a href="https://fb.com/">fb.com not launched (did not pass verification or whatever)</a>
        </PopupSpoiler>
        {"      "}
        <PopupSpoiler title="Lines of Life">
          <a href="https://m.ok.ru/group/52959658967161" target="_blank">
            lines of life (official game group)
          </a><br />

          <a href="/lines_of_life.html" target="_blank">
            lines of life (cached version)
          </a><br />
          &lt;-- created everything everything related to server up to point (... found bug in CV filled from memory wrong dates probably date of leave was 2013.12.?? so joining date was 2011.03.??)
        </PopupSpoiler>

      </PopupSpoiler>
      <br />
      <br />

        <PopupSpoiler title="Dyninno and Dynatech">
          {PageData.Dynatech.map(p => (
            <Paragraph key={"dyn_" + p.id}>{p.text}</Paragraph>
          ))}
        </PopupSpoiler><br/><br/>

        <PopupSpoiler title="Stock Guru">
          {PageData.StockGuru.map(p => (
            <Paragraph key={"sg_" + p.id}>{p.text}</Paragraph>
          ))}
        </PopupSpoiler><br/><br/>

        <PopupSpoiler title="Unemployed">
          {PageData.Unemployed.map(p => (
            <Paragraph key={"u1_" + p.id}>{p.text}</Paragraph>
          ))}
        </PopupSpoiler><br/><br/>

        <PopupSpoiler title="IT Labs // AGC Soft">
          {PageData.AGC.map(p => (
            <Paragraph key={"agc_"+p.id}>{p.text}</Paragraph>
          ))}
        </PopupSpoiler><br/><br/>

        <PopupSpoiler title="C.T.CO">
          {PageData.CTCO.map(p => (
            <Paragraph key={"ctco_" + p.id}>{p.text}</Paragraph>
          ))}
        </PopupSpoiler><br/><br/>

        <PopupSpoiler title="Sapiens">
          {PageData.Sapiens.map(p => (
            <Paragraph key={"homo_" + p.id}>{p.text}</Paragraph>
          ))}
        </PopupSpoiler><br/><br/>

        <PopupSpoiler title="2025.10.19 something gone wrong.">
          {PageData.SomethingGoneWrong.map(p => (
            <Paragraph key={"u2_" + p.id}>{p.text}</Paragraph>
          ))}
        </PopupSpoiler><br/><br/>
      </div>
    </PageContainer>
  )
}
export default WhatsDonePage
