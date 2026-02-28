
import React, {ReactNode, useEffect, useState} from 'react'
import {PageSection} from "@/contract/PageSection";
import {PageContainer} from "@/components/PageRenderer";
import getRenderComponent from "@/components/page/service/DetectorPage";
import {SectionPart} from "@/components/page/type/SectionPart";

export const RenderPage: React.FC<{ pageSectionContent: PageSection }> = ({pageSectionContent}) => {
    const [jsxElements, setJsxElements] = useState<ReactNode[]>([]);

    useEffect(() => {
        const load = async () => {
            const result = [];

            for(var element of pageSectionContent.parts) {
                var a = getRenderComponent(element);
                var jsxChildElements =  [];

                for(var content of element.contents) {
                    var parsedContent = a.parseContent(content.content);

                    jsxChildElements.push(a.render(parsedContent));
                }

                result.push(await SectionPart({nodes: jsxChildElements, displayText: element.displayText}));
            }

            setJsxElements(result);
        };

        load();
    }, []);

    return (
        <PageContainer title={pageSectionContent.title}>
            {jsxElements.map(e => e)}
        </PageContainer>
    );
}

export default RenderPage;