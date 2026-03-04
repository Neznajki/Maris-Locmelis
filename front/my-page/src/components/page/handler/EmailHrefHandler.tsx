import {PageHandler} from "@/contract/PageSection";
import {EmailHrefType} from "@/contract/PageType";
import React from "react";
import {Paragraph} from "@/components/Paragraph";

export const EmailHrefHandler: PageHandler<EmailHrefType> = {
    render(data: EmailHrefType): React.JSX.Element {
        return (
            <Paragraph>
                <a href={`mailto:${data}`} className="text-blue-600 underline">
                    {data}
                </a>
            </Paragraph>
        );
    },

    parseContent: (content) => {
        return content as EmailHrefType;
    },
};