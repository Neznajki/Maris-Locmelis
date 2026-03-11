import {PageHandler} from "@/contract/PageSection";
import {LinkHrefType} from "@/contract/PageType";
import React from "react";
import LinkHref from "@/components/page/type/LinkHref";

export const LinkHrefHandler: PageHandler<LinkHrefType> = {
    render(data: LinkHrefType): React.JSX.Element {
        return (
            <LinkHref key={data.href} href={data.href} text={data.text} />
        );
    },

    parseContent: (content) => {
        return content as LinkHrefType;
    },
};