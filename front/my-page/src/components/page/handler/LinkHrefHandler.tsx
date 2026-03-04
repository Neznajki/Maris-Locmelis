import {PageHandler} from "@/contract/PageSection";
import {LinkHrefType} from "@/contract/PageType";
import React from "react";
import {Paragraph} from "@/components/Paragraph";

export const LinkHrefHandler: PageHandler<LinkHrefType> = {
    render(data: LinkHrefType): React.JSX.Element {
        return (
            <Paragraph>
                <a href={data.href} className="text-blue-600 underline" target="_blank">
                    {data.text}
                </a>
            </Paragraph>
        );
    },

    parseContent: (content) => {
        return content as LinkHrefType;
    },
};