import {PageHandler} from "@/contract/PageSection";
import {IframePreviewType} from "@/contract/PageType";
import React from "react";
import {IframePreview} from "@/components/page/type/IframePreview";

export const IframePreviewHandler: PageHandler<IframePreviewType> = {
    render(data: IframePreviewType): React.JSX.Element {
        return (
            <IframePreview key={'iframe_p_' + data.src} src={data.src} title={data.title} width={data.width} height={data.height}></IframePreview>
        );
    },

    parseContent: (content) => {
        return content as IframePreviewType;
    },
};