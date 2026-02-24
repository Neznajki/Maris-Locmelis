import React from "react";
import {ParagraphType} from "@/contract/PageType";

export const Paragraph: React.FC<ParagraphType> = ({ content }) => {
    return (
        <p className="text-gray-600">
            {content}
        </p>
    )
}