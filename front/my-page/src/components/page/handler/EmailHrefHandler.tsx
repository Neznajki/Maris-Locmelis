import {PageHandler} from "@/contract/PageSection";
import {EmailHrefType} from "@/contract/PageType";
import React from "react";
import EmailHref from "@/components/page/type/EmailHref";

export const EmailHrefHandler: PageHandler<EmailHrefType> = {
    render(data: EmailHrefType): React.JSX.Element {
        return (
            <EmailHref key={data.toString()} data={data.toString()} />
        );
    },

    parseContent: (content) => {
        return content as EmailHrefType;
    },
};