import React, { useEffect, useState } from 'react'
import { PageContainer } from '@/components/PageRenderer'
import { PageSection } from '@/contract/PageSection'
import { loadPageDataWithRetry } from '@/data/pageApiLoader'
import RenderPage from '@/components/page/service/RenderPage'

type PageByPathProps = {
  path: string
}

const PageByPath: React.FC<PageByPathProps> = ({ path }) => {
  const [content, setContent] = useState<PageSection>()

  useEffect(() => {
    const load = async () => {
      const response = await loadPageDataWithRetry(path)
      if (response) {
        setContent(response)
      }
    }
    load()
  }, [path])

  if (!content) {
    return null
  }

  content.parts.sort((a, b) => a.displayOrder - b.displayOrder)

  return (
    <PageContainer title={content.title}>
      <RenderPage pageSectionContent={content} />
    </PageContainer>
  )
}

export default PageByPath
