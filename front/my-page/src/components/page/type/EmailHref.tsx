import React from "react";
import {Paragraph} from "@/components/Paragraph";

export const EmailHref: React.FC<{data: string}> = ({ data }) => {
    return (
        <Paragraph key={"mailto:" + data}>
            <a href={`mailto:${data}`} className="text-blue-600 underline">
                {data}
            </a>
        </Paragraph>
    );
}

export default EmailHref;
