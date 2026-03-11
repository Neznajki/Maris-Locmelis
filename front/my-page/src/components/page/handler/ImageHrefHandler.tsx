import {PageHandler} from "@/contract/PageSection";
import {ImageHrefType} from "@/contract/PageType";
import React from "react";
import {Paragraph} from "@/components/Paragraph";

export const ImageHrefHandler: PageHandler<ImageHrefType> = {
    render(data: ImageHrefType): React.JSX.Element {
        return (
            <Paragraph key={'image_href' + data.href + "_" + data.imageHref}>
                <a href={data.href} className="text-blue-600 underline fit-content center" target="_blank">
                    <img alt={data.alt} src={data.imageHref}/>
                </a>
            </Paragraph>
        );
    },

    parseContent: (content) => {
        return content as ImageHrefType;
    },
};