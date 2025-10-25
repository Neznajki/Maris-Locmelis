
import React from 'react'
import { PageContainer } from '@/components/PageRenderer'
import RocketInvestigation from '@/assets/fun/rocket_investigation.jpg'
import RocketRide from '@/assets/fun/rocket_ride.jpg'

export const FunTitle = 'Fun Page'
export const Fun: React.FC = () => {
  return (
    <PageContainer title={FunTitle}>
      <div style={{ display: "inline-flex", alignItems: "center", whiteSpace: "nowrap" }}>
        <img src={RocketInvestigation} /> <p style={{ padding: 10 }}> 10 seconds later</p> <img src={RocketRide} />
      </div>
    </PageContainer>
  )
}
export default Fun
