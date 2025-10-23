
import React from 'react'
import { PageContainer } from '@/components/PageRenderer'
import sunFlight from '@/assets/sunFlight.jpg'

export const HomeTitle = 'Home'
export const Home: React.FC = () => {
  return (
    <PageContainer title={HomeTitle}>
      <p className="text-gray-600">Hello there I'm Māris Ločmelis and this is page about my self</p>
      <a href="https://github.com/Neznajki" target="_blank" rel="noopener noreferrer">
        <img src={sunFlight} alt="Sunny Day !!" />
      </a>
    </PageContainer>
  )
}
export default Home
