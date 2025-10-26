
import React from 'react'
import { PageContainer } from '@/components/PageRenderer'
import { CoverLetterTitle } from '@/pages/meta/CoverLetter.meta'

export const CoverLetter: React.FC = () => {
  return (
    <PageContainer title={CoverLetterTitle}>
      <p className="text-gray-600">As a Full Stack Developer with more than a decade of hands-on experience across fintech, insurance, and web applications, I bring a deep understanding of the entire software lifecycle—from design and architecture to deployment and optimization. Over the years I’ve worked with technologies such as Java, Spring Boot, React, PHP/Symfony, and AWS/Azure, consistently focusing on creating scalable, maintainable, and data-driven solutions.</p>
      <p className="text-gray-600">My background spans backend-heavy systems as well as front-end integration and DevOps automation. Whether developing APIs for high-throughput financial systems, optimizing database performance, or implementing CI/CD pipelines, I emphasize data analysis and decision-making as core tools for improving system reliability and business outcomes. I enjoy identifying bottlenecks, measuring their impact, and implementing precise optimizations that reduce complexity and cost.</p>
      <p className="text-gray-600">Beyond technical delivery, I value clarity, teamwork, and continuous improvement. Having led small development teams and collaborated in agile environments, I’m comfortable mentoring, documenting, and coordinating with diverse stakeholders to ensure that solutions meet both technical and strategic goals.</p>
      <p className="text-gray-600">I’m now seeking an opportunity where I can contribute my experience in full-stack development and analytical problem-solving while continuing to grow within modern cloud and containerized ecosystems. I’m particularly motivated by environments that value performance, learning, and thoughtful engineering.</p>
      <p className="text-gray-600">Thank you for taking the time to review my application. I would be glad to discuss how my skills and mindset can support your team’s success.</p>
      <p className="text-gray-600">Warm regards,</p>
      <p className="text-gray-600">Māris Ločmelis</p>
    </PageContainer>
  )
}
export default CoverLetter
