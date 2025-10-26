
import React from 'react'
import { PageContainer } from '@/components/PageRenderer'
import { ContactsTitle } from '@/pages/meta/Contacts.meta'

export const Contacts: React.FC = () => {
  return (
    <PageContainer title={ContactsTitle}>
      <p className="text-gray-600">How to reach me.</p>
      <a href="mailto:neznajki@gmail.com" className="text-blue-600 underline">
        neznajki@gmail.com
      </a>
      <div><a href="https://www.linkedin.com/in/ml-698627181/" target="_blank">Linked-In</a></div>

    </PageContainer>
  )
}
export default Contacts
