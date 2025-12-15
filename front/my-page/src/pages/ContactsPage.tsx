
import React from 'react'
import { PageContainer } from '@/components/PageRenderer'
import { Paragraph } from '@/components/Paragraph'

export const Contacts: React.FC<{ title: React.ReactNode }> = ({ title }) => {
  return (
    <PageContainer title={title}>
      <Paragraph>How to reach me.</Paragraph>
      <a href="mailto:dev@maris-locmelis.lv" className="text-blue-600 underline">
        dev@maris-locmelis.lv
      </a><br/>
      AKA<br/>
      <a href="mailto:neznajki@gmail.com" className="text-blue-600 underline">
        neznajki@gmail.com
      </a>
      <div><a href="https://www.linkedin.com/in/ml-698627181/" target="_blank">Linked-In</a></div>

    </PageContainer>
  )
}
export default Contacts
