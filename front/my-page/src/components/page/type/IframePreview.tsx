import React from "react";
import {IframePreviewType} from "@/contract/PageType";
import {Paragraph} from "@/components/Paragraph";

export const IframePreview: React.FC<IframePreviewType> = ({ src, title, height, width }) => {
    return (
        <Paragraph key={'iframe_' + src}>
            <iframe
                src="/cv/cv.html"
                width={width}
                height={height}
                style={{ border: "none" }}
                title={title}
            />
        </Paragraph>
    );
}