import { ReactNode } from "react";
import { PageSection } from "@/contract/PageSection";
import getRenderComponent from "@/components/page/service/DetectorPage";
import { SectionPart } from "@/components/page/part/SectionPart";
import {BulletPointPart} from "@/components/page/part/BulletPointPart";
import {StoryPart} from "@/components/page/part/StoryPart";

export function parsePageToElements(pageSectionContent: PageSection): ReactNode[] {
    const result: ReactNode[] = [];

    for (const element of pageSectionContent.parts) {
        const handler = getRenderComponent(element);
        const jsxChildElements: ReactNode[] = [];

        for (const content of element.contents) {
            const parsedContent = handler.parseContent(content.content);
            jsxChildElements.push(handler.render(parsedContent));
        }

        let sectionContainer;
        if (handler.pageType == "BulletPoint") {
            sectionContainer = <BulletPointPart
                key={element.id}
                nodes={jsxChildElements}
                displayText={element.displayText}
            />;
        } if (handler.pageType == "Story") {
            sectionContainer = <StoryPart
                key={element.id}
                nodes={jsxChildElements}
                displayText={element.displayText}
            />;
        } else {
            sectionContainer = <SectionPart
                key={element.id}
                nodes={jsxChildElements}
                displayText={element.displayText}
            />;
        }
        result.push(sectionContainer);
    }

    return result;
}

export default parsePageToElements;