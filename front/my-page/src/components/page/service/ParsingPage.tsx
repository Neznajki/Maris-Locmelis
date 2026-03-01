import { ReactNode } from "react";
import { PageSection } from "@/contract/PageSection";
import getRenderComponent from "@/components/page/service/DetectorPage";
import { SectionPart } from "@/components/page/type/SectionPart";

export function parsePageToElements(pageSectionContent: PageSection): ReactNode[] {
    const result: ReactNode[] = [];

    for (const element of pageSectionContent.parts) {
        const handler = getRenderComponent(element);
        const jsxChildElements: ReactNode[] = [];

        for (const content of element.contents) {
            const parsedContent = handler.parseContent(content.content);
            jsxChildElements.push(handler.render(parsedContent));
        }

        result.push(
            <SectionPart
                key={element.id}
                nodes={jsxChildElements}
                displayText={element.displayText}
            />
        );
    }

    return result;
}

export default parsePageToElements;