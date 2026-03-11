import {PageHandler} from "@/contract/PageSection";
import {ImageHrefType} from "@/contract/PageType";
import React from "react";
import ImageHref from "@/components/page/type/ImageHref";

export const ImageHrefHandler: PageHandler<ImageHrefType> = {
    render(data: ImageHrefType): React.JSX.Element {
        return (
            <ImageHref key={data.href + "_" + data.alt} href={data.href} alt={data.alt} imageHref={data.imageHref} />
        );
    },

    parseContent: (content) => {
        return content as ImageHrefType;
    },
};