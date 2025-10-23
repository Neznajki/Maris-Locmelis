
import React from 'react'
import { PageContainer } from '@/components/PageRenderer'

export const ContactsTitle = 'Contacts'
export const Contacts: React.FC = () => {
  return (
    <PageContainer title={ContactsTitle}>
      <p className="text-gray-600">How to reach me.</p>
    </PageContainer>
  )
}
export default Contacts
