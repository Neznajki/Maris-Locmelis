import React from "react";
import {Paragraph} from "@/components/Paragraph";

export const EmailHref: React.FC<{children: React.ReactNode }> = ({ children }) => {
    return (
        <Paragraph key={"mailto:" + children}>
            <a href={`mailto:${children}`} className="text-blue-600 underline">
                {children}
            </a>
        </Paragraph>
    );
}

export default EmailHref;
