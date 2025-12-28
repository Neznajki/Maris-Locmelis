
import React from 'react'
import { PageContainer } from '@/components/PageRenderer'
import { Paragraph } from '@/components/Paragraph'
import PageData  from '@/data/api/AboutMe.json'

export const AboutMe: React.FC<{ title: React.ReactNode }> = ({ title }) => {
  return (
    <PageContainer title={title}>
      {PageData.map(p => (
        <Paragraph key={p.id}>{p.text}</Paragraph>
      ))}
    </PageContainer>
  )
}
export default AboutMe
