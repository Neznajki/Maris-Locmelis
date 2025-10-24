
import React from 'react'
import { PageContainer } from '@/components/PageRenderer'
import AutoSizedPdf from '@/components/AutoSizedPdf';
import GetServerFileTime from '@/components/GetServerFileTime';
import CvPdf from '@/assets/MyCV.pdf'

export const CvTitle = 'My CV'
export const Cv: React.FC = () => {
  return (
    <PageContainer title={CvTitle}>
      <div style={{ padding: 16 }}>
        <h1><a href={CvPdf} download="Maris_Locmelis_2025_10_19_CV.pdf" className="text-gray-600">Download CV updated  {GetServerFileTime(CvPdf)}</a></h1>
        <AutoSizedPdf file={CvPdf} maxWidth={900} />
      </div>
    </PageContainer>
  )
}
export default Cv
