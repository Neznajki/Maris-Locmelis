
import React, {ReactNode, useEffect, useState} from 'react'
import {PageSection} from "@/contract/PageSection";
import {PageContainer} from "@/components/PageRenderer";
import parsePageToElements from "@/components/page/service/ParsingPage";

export const RenderPage: React.FC<{ pageSectionContent: PageSection }> = ({pageSectionContent}) => {
    const [jsxElements, setJsxElements] = useState<ReactNode[]>([]);

    useEffect(() => {
        setJsxElements(parsePageToElements(pageSectionContent));
    }, [pageSectionContent]);

    return (
        <PageContainer title={pageSectionContent.title}>
            {jsxElements.map(e => e)}
        </PageContainer>
    );
}

export default RenderPage;