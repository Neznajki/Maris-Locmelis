import React from "react";
import {YouTubePresentationType} from "@/contract/PageType";
import {Paragraph} from "@/components/Paragraph";

export const YouTubePresentation: React.FC<YouTubePresentationType> = ({ link, title, comment }) => {
    return (
        <Paragraph key={'video_' + link}>
            <h2>{title}</h2>
            <iframe
                width="640"
                height="360"
                src={link}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>
            <Paragraph key={'video_title_' + comment}>{comment}</Paragraph>
        </Paragraph>
    );
}

export default YouTubePresentation;