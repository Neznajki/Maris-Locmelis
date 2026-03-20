import React from "react";
import {SectionPartType} from "@/contract/PageType";

export const StoryPart: React.FC<SectionPartType> = ({nodes, displayText}) => {
    return (
        <section>
            <h2 style={{ textAlign: 'center', fontWeight: 'bold', }}>{displayText}</h2>
            <article style={{ whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', marginTop: '10px'}}>
                {nodes.map(n => n)}
            </article>
        </section>
    )
}