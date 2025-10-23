
import React from 'react'
import { PageContainer } from '@/components/PageRenderer'

export const AboutMeTitle = 'About Me'
export const AboutMe: React.FC = () => {
  return (
    <PageContainer title={AboutMeTitle}>
      <p className="text-gray-600">I was born at 1987. My hobbies is related to PC, (playing games, watching anime, listening educational videos)</p>
      <p className="text-gray-600">Love results hate processes, if process can be skipped I will skip it for sure.</p>
      <p className="text-gray-600">Like talking, you may ask me to stop and I will stop</p>
      <p className="text-gray-600">I'm trying to pay attention but sometimes I'm thinking and than you won't be able to reach me until I'm done.</p>
      <p className="text-gray-600">Hate reading books, love reading code.</p>
    </PageContainer>
  )
}
export default AboutMe
