
import React from 'react'
import { PageContainer } from '@/components/PageRenderer'
import { AboutMeTitle } from '@/pages/meta/AboutMe.meta'
import { Paragraph } from '@/components/Paragraph'

export const AboutMe: React.FC = () => {
  return (
    <PageContainer title={AboutMeTitle}>
      <Paragraph>I was born at 1987. My hobbies is related to PC, (playing games, watching anime, listening educational videos)</Paragraph>
      <Paragraph>Love results hate processes, if process can be skipped I will skip it for sure.</Paragraph>
      <Paragraph>Like talking, you may ask me to stop and I will stop</Paragraph>
      <Paragraph>I'm trying to pay attention but sometimes I'm thinking and than you won't be able to reach me until I'm done.</Paragraph>
      <Paragraph>Hate reading books, love reading code.</Paragraph>
    </PageContainer>
  )
}
export default AboutMe
