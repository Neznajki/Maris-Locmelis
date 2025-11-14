
import React from 'react'
import { PageContainer } from '@/components/PageRenderer'
import AutoSizedPdf from '@/components/AutoSizedPdf';
import GetServerFileTime from '@/components/GetServerFileTime';
import CvPdf from '@/assets/MyCV.pdf'
import '@/assets/popupSpoiler.css'
import { CvTitle } from '@/pages/meta/Cv.meta'

export const Cv: React.FC = () => {
  return (
    <PageContainer title={CvTitle}>
      <div style={{ padding: 16 }}>
        found bug in CV filled from memory wrong dates probably date of leave from pingnetgames.com was 2013.12.?? so joining date was 2011.03.?? will update when eds.vid.gov.lv will work.
        <div className="popup-spoiler">
          <button className="popup-trigger">
            <a style={{ color: "#ededed" }} href={CvPdf} download="Maris_Locmelis_2025_10_19_CV.pdf" className="text-gray-600">Download pdf CV updated  {GetServerFileTime(CvPdf)}</a>
          </button>
        </div>
        <h1></h1>
        <AutoSizedPdf file={CvPdf} maxWidth={900} />
      </div>
    </PageContainer>
  )
}
export default Cv
