import React from "react";
import {YouTubePresentationType} from "@/contract/PageType";
import {Paragraph} from "@/components/Paragraph";

export const YouTubePresentation: React.FC<YouTubePresentationType> = ({ link, title, comment }) => {
    return (
        <Paragraph key={'video_' + link}>
            <h2>{title}</h2>
            <iframe
                style={{
                    margin: 20,
                    width: "100%",
                    aspectRatio: "16/9",
                    border: "none"
                }}
                referrerPolicy="strict-origin-when-cross-origin"
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