import React from "react";
import {SectionPartType} from "@/contract/PageType";

export const BulletPointPart: React.FC<SectionPartType> = ({nodes, displayText}) => {
    return (
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>{displayText}</h2>
            {nodes.map(n => n)}
        </ul>
    )
}