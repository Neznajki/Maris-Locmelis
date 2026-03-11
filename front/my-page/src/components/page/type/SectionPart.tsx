import React from "react";
import {SectionPartType} from "@/contract/PageType";

export const SectionPart: React.FC<SectionPartType> = ({nodes, displayText}) => {
    return (
        <section>
            <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>{displayText}</h2>
            {nodes.map(n => n)}
        </section>
    )
}