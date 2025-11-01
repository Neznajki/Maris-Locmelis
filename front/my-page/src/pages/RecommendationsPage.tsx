
import React from 'react'
import { PageContainer } from '@/components/PageRenderer'
import { Paragraph } from '@/components/Paragraph'
import { RecommendationsTitle } from '@/pages/meta/Recommendations.meta'

export const Recommendations: React.FC = () => {
  return (
    <PageContainer title={RecommendationsTitle}>
      <Paragraph>Every recommendation you give try to follow it by yourself</Paragraph>
      <Paragraph>SOLID, even if you can't try to do closest option</Paragraph>
      <Paragraph>Make code more readable (Clean Code, DRY)</Paragraph>
      <Paragraph>Try to follow KISS, but sometimes it's impossible than keep it complex</Paragraph>
      <Paragraph>Don't expect from others that they will do something you won't</Paragraph>
      <Paragraph>Before changing anything try to create something instead.</Paragraph>
      <Paragraph>When someone recommends you something ignore if everyone fix problem it's simple</Paragraph>
      <Paragraph>If you need respect from someone start from respecting this person</Paragraph>
      <Paragraph>If you would like to change something, think twice sometimes changing mind about this problem is easier and better</Paragraph>
      <Paragraph>YARGNI - use it always and you will find some free time.</Paragraph>
      <Paragraph>Don't take new tools while You doesn't master existing ones.</Paragraph>
    </PageContainer>
  )
}
export default Recommendations
