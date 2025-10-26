
import React from 'react'
import { PageContainer } from '@/components/PageRenderer'
import RocketInvestigation from '@/assets/fun/rocket_investigation.jpg'
import RocketRide from '@/assets/fun/rocket_ride.jpg'
import { FunTitle } from '@/pages/meta/Fun.meta'

export const Fun: React.FC = () => {
  return (
    <PageContainer title={FunTitle}>
      <div style={{ display: "inline-flex", alignItems: "center", whiteSpace: "nowrap" }}>
        <img src={RocketInvestigation} style={{ width: 300 }} /> <p style={{ padding: 10 }}> 10 seconds later</p> <img src={RocketRide} style={{ width: 300 }} />
      </div>
    </PageContainer>
  )
}
export default Fun
