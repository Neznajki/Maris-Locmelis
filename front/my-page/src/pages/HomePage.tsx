
import React from 'react'
import { PageContainer } from '@/components/PageRenderer'
import { Paragraph } from '@/components/Paragraph'
import sunFlight from '@/assets/sunFlight.jpg'
import { HomeTitle } from '@/pages/meta/Home.meta'

export const Home: React.FC = () => {
  return (
    <PageContainer title={HomeTitle}>
      <Paragraph>Hello there I'm Māris Ločmelis and this is page about my self</Paragraph>
      <a href="https://github.com/Neznajki" target="_blank" rel="noopener noreferrer">
        <img src={sunFlight} alt="Sunny Day !!" />
      </a>
    </PageContainer>
  )
}
export default Home
