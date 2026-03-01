
import React from 'react'
import { PageContainer } from '@/components/PageRenderer'
export const SiteTechStack: React.FC<{ title: React.ReactNode }> = ({ title }) => {
  return (
    <PageContainer title={title}>
      <ul className="list-disc pl-6 text-gray-700 space-y-1">
        <li>React + TypeScript</li>
        <li>Tailwind CSS</li>
        <li>Vite</li>
        <li>Github Repository</li>
        <li>Github Actions</li>
        <li>Azure Portal</li>
        <li>IntelIj</li>

        <li>Chat GPT</li>
      </ul>
    </PageContainer>
  )
}
export default SiteTechStack
