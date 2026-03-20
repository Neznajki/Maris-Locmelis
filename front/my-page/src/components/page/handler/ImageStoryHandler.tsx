import {PageHandler} from "@/contract/PageSection";
import {ImageStoryType} from "@/contract/PageType";
import React from "react";
import ImageStory from "@/components/page/type/ImageStory";

export const ImageStoryHandler: PageHandler<ImageStoryType> = {
    render(data: ImageStoryType): React.JSX.Element {
        return (
            <ImageStory key={data.text + "_" + data.img} img={data.img} text={data.text} alt={data.alt} width={data.width}/>
        );
    },

    parseContent: (content) => {
        return content as ImageStoryType;
    },

    pageType: "Story",
};