import React from "react";
import {LinkHrefType} from "@/contract/PageType";
import {Paragraph} from "@/components/Paragraph";

export const LinkHref: React.FC<LinkHrefType> = ({ href, text }) => {
    return (
        <Paragraph key={"link_href" + href + "_" + text}>
            <a href={href} className="text-blue-600 underline" target="_blank">
                {text}
            </a>
        </Paragraph>
    );
}

export default LinkHref;
