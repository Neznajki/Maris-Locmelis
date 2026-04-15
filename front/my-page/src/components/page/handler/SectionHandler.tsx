import {PageHandler} from "@/contract/PageSection";
import {SectionType} from "@/contract/PageType";
import React from "react";
import Section from "@/components/page/type/Section";

export const SectionHandler: PageHandler<SectionType> = {
    render(data: SectionType): React.JSX.Element {
        return (
            <Section key={'section_' + data.sectionId} sectionId={data.sectionId}></Section>
        );
    },

    parseContent: (content) => {
        return content as SectionType;
    },
};