import React from "react";
import {ImageHrefType} from "@/contract/PageType";
import {Paragraph} from "@/components/Paragraph";

export const ImageHref: React.FC<ImageHrefType> = ({ href, alt, imageHref }) => {
    return (
        <Paragraph key={'image_href' + href + "_" + imageHref}>
            <a href={href} className="text-blue-600 underline fit-content center" target="_blank">
                <img alt={alt} src={imageHref}/>
            </a>
        </Paragraph>
    );
}

export default ImageHref;
