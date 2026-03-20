import React from "react";
import {ImageStoryType} from "@/contract/PageType";

export const ImageStory: React.FC<ImageStoryType> = ({ img, text, width, alt }) => {
    return (
        <>
            {text && <p style={{ padding: "10px" }}>{text}</p>}
            {img && <img style={{ width: width }}  alt={alt} src={img} />}
        </>
    );
}

export default ImageStory;
