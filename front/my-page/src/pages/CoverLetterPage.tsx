
import React from 'react'
import { PageContainer } from '@/components/PageRenderer'
import { CoverLetterTitle } from '@/pages/meta/CoverLetter.meta'
import { Paragraph } from '@/components/Paragraph'

export const CoverLetter: React.FC = () => {
  return (
    <PageContainer title={CoverLetterTitle}>
      <Paragraph>As a Full Stack Developer with more than a decade of hands-on experience across fintech, insurance, and web applications, I bring a deep understanding of the entire software lifecycle—from design and architecture to deployment and optimization. Over the years I’ve worked with technologies such as Java, Spring Boot, React, PHP/Symfony, and AWS/Azure, consistently focusing on creating scalable, maintainable, and data-driven solutions.</Paragraph>
      <Paragraph>My background spans backend-heavy systems as well as front-end integration and DevOps automation. Whether developing APIs for high-throughput financial systems, optimizing database performance, or implementing CI/CD pipelines, I emphasize data analysis and decision-making as core tools for improving system reliability and business outcomes. I enjoy identifying bottlenecks, measuring their impact, and implementing precise optimizations that reduce complexity and cost.</Paragraph>
      <Paragraph>Beyond technical delivery, I value clarity, teamwork, and continuous improvement. Having led small development teams and collaborated in agile environments, I’m comfortable mentoring, documenting, and coordinating with diverse stakeholders to ensure that solutions meet both technical and strategic goals.</Paragraph>
      <Paragraph>I’m now seeking an opportunity where I can contribute my experience in full-stack development and analytical problem-solving while continuing to grow within modern cloud and containerized ecosystems. I’m particularly motivated by environments that value performance, learning, and thoughtful engineering.</Paragraph>
      <Paragraph>Thank you for taking the time to review my application. I would be glad to discuss how my skills and mindset can support your team’s success.</Paragraph>
      <Paragraph>Warm regards,</Paragraph>
      <Paragraph>Māris Ločmelis</Paragraph>
    </PageContainer>
  )
}
export default CoverLetter
