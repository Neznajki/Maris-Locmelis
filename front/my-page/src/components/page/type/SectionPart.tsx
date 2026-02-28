import React from "react";
import {SectionPartType} from "@/contract/PageType";

export const SectionPart: React.FC<SectionPartType> = ({nodes, displayText}) => {
    return (
        <div>
            <h2>{displayText}</h2>
            {nodes.map(n => n)}
        </div>
    )
}