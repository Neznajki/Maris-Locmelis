
import React from 'react'
import { PageContainer } from '@/components/PageRenderer'
import { ContactsTitle } from '@/pages/meta/Contacts.meta'
import { Paragraph } from '@/components/Paragraph'

export const Contacts: React.FC = () => {
  return (
    <PageContainer title={ContactsTitle}>
      <Paragraph>How to reach me.</Paragraph>
      <a href="mailto:neznajki@gmail.com" className="text-blue-600 underline">
        neznajki@gmail.com
      </a>
      <div><a href="https://www.linkedin.com/in/ml-698627181/" target="_blank">Linked-In</a></div>

    </PageContainer>
  )
}
export default Contacts
