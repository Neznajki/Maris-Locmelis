import React, {useEffect, useState} from 'react'
import {PageContainer} from '@/components/PageRenderer'
import {PageSection} from "@/contract/PageSection";
import {loadPageDataWithRetry} from "@/data/pageApiLoader";
import {RenderPage} from "@/components/page/service/RenderPage";

export const AboutMe: React.FC<{ title: React.ReactNode }> = () => {
    const [content, setContent] = useState<PageSection>();

    useEffect(() => {
        const load = async () => {
            const response = await loadPageDataWithRetry("/about");

            if (response) {
                setContent(response);
            }
        };

        load();
    }, []);

    if (!content) {
        return;
    }

    content.parts.sort((a, b) => a.displayOrder - b.displayOrder)

    return (
        <PageContainer title={content.title}>
            <RenderPage pageSectionContent={content}/>
        </PageContainer>
    )
}
export default AboutMe
