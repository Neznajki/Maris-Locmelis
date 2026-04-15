import React, {useEffect, useState} from "react";
import {SectionType} from "@/contract/PageType";
import {PageSection} from "@/contract/PageSection";
import {loadPageDataWithRetry} from "@/data/sectionApiLoader";
import RenderPage from "@/components/page/service/RenderPage";
import PopupSpoiler from "@/components/PopupSpoiler";

export const Section: React.FC<SectionType> = ({ sectionId }) => {
    const [content, setContent] = useState<PageSection>()

    useEffect(() => {
        const load = async () => {
            const response = await loadPageDataWithRetry(sectionId)
            if (response) {
                setContent(response)
            }
        }
        load()
    }, [sectionId])

    if (!content) {
        return null
    }

    content.parts.sort((a, b) => a.displayOrder - b.displayOrder)

    return (
        <>
            <br/>
            <PopupSpoiler title={content.parts[0].displayText}>
                <RenderPage pageSectionContent={content} />
            </PopupSpoiler>
            <br/>
        </>
    )
}
export default Section