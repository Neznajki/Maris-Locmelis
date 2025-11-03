
import React from 'react'
import { PageContainer } from '@/components/PageRenderer'
import { CoverLetterTitle } from '@/pages/meta/CoverLetter.meta'
import { Paragraph } from '@/components/Paragraph'
import PageData  from '@/data/api/CoverLetter'

export const CoverLetter: React.FC = () => {
  return (
    <PageContainer title={CoverLetterTitle}>
      {PageData.map(p => (
        <Paragraph key={p.id}>{p.text}</Paragraph>
      ))}
    </PageContainer>
  )
}
export default CoverLetter
