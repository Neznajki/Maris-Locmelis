import {PageHandler} from "@/contract/PageSection";
import {YouTubePresentationType} from "@/contract/PageType";
import React from "react";
import YouTubePresentation from "@/components/page/type/YouTubePresentation";

export const YouTubePresentationHandler: PageHandler<YouTubePresentationType> = {
    render(data: YouTubePresentationType): React.JSX.Element {
        return (
            <YouTubePresentation key={'ytp_' + data.link} link={data.link} title={data.title} comment={data.comment}></YouTubePresentation>
        );
    },

    parseContent: (content) => {
        return content as YouTubePresentationType;
    },
};