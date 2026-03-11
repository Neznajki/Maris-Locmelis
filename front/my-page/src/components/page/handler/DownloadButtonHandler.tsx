import {PageHandler} from "@/contract/PageSection";
import {DownloadButtonType} from "@/contract/PageType";
import React from "react";
import DownloadButton from "@/components/page/type/DownloadButton";

export const DownloadButtonHandler: PageHandler<DownloadButtonType> = {
    render(data: DownloadButtonType): React.JSX.Element {
        return (
            <DownloadButton key={data.fileName} href={data.href} fileName={data.fileName} content={data.content}/>
        );
    },
    parseContent: (content) => {
        return content as DownloadButtonType;
    }
};