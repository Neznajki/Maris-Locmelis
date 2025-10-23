
import React from 'react'
import { PageContainer } from '@/components/PageRenderer'

export const PersonalityTitle = 'Personality'
export const Personality: React.FC = () => {
  return (
    <PageContainer title={PersonalityTitle}>
      <p className="text-gray-600">Traits, strengths, and working style.</p>
    </PageContainer>
  )
}
export default Personality
