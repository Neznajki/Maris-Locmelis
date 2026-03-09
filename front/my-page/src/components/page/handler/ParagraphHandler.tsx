import {PageHandler} from "@/contract/PageSection";
import {ParagraphType} from "@/contract/PageType";
import React from "react";
import {Paragraph} from "@/components/Paragraph";

export const ParagraphHandler: PageHandler<ParagraphType> = {
    render(data: ParagraphType): React.JSX.Element {
        return (
            <Paragraph key={data + ''}>{data}</Paragraph>
        );
    },

    parseContent: (content) => {
        return content as ParagraphType;
    },
};