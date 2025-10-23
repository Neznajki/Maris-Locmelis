
import React from 'react'
import { PageContainer } from '@/components/PageRenderer'

export const PersonalityTitle = 'Recommendations'
export const Personality: React.FC = () => {
  return (
    <PageContainer title={PersonalityTitle}>
      <p className="text-gray-600">Every recommendation you give try to follow it by yourself</p>
      <p className="text-gray-600">SOLID, even if you can't try to do closest option</p>
      <p className="text-gray-600">Make code more readable (Clean Code, DRY)</p>
      <p className="text-gray-600">Try to follow KISS, but sometimes it's impossible than keep it complex</p>
      <p className="text-gray-600">Don't expect from others that they will do something you won't</p>
      <p className="text-gray-600">Before changing anything try to create something instead.</p>
      <p className="text-gray-600">When someone recommends you something ignore if everyone fix problem it's simple</p>
      <p className="text-gray-600">If you need respect from someone start from respecting this person</p>
      <p className="text-gray-600">If you would like to change something, think twice sometimes changing mind about this problem is easier and better</p>
      <p className="text-gray-600">YARGNI - use it always and you will find some free time.</p>
    </PageContainer>
  )
}
export default Personality
