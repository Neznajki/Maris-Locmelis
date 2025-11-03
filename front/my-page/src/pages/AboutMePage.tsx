
import React from 'react'
import { PageContainer } from '@/components/PageRenderer'
import { AboutMeTitle } from '@/pages/meta/AboutMe.meta'
import { Paragraph } from '@/components/Paragraph'
import PageData  from '@/data/api/AboutMe'

export const AboutMe: React.FC = () => {
  return (
    <PageContainer title={AboutMeTitle}>
      {PageData.map(p => (
        <Paragraph key={p.id}>{p.text}</Paragraph>
      ))}
    </PageContainer>
  )
}
export default AboutMe
