
import React from 'react'
import { PageContainer } from '@/components/PageRenderer'
import { Paragraph } from '@/components/Paragraph'
import { RecommendationsTitle } from '@/pages/meta/Recommendations.meta'
import PageData  from '@/data/api/Recommendations'

export const Recommendations: React.FC = () => {
  return (
    <PageContainer title={RecommendationsTitle}>
        {PageData.map(p => (
          <Paragraph key={p.id}>{p.text}</Paragraph>
        ))}
    </PageContainer>
  )
}
export default Recommendations
