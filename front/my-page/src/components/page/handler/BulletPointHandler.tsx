import {PageHandler} from "@/contract/PageSection";
import {BulletPointType} from "@/contract/PageType";
import React from "react";
import {BulletPoint} from "@/components/page/type/BulletPoint";

export const BulletPointHandler: PageHandler<BulletPointType> = {
    render(data: BulletPointType): React.JSX.Element {
        return (
            <BulletPoint key={data + ''}>{data}</BulletPoint>
        );
    },

    parseContent: (content) => {
        return content as BulletPointType;
    },

    pageType: "BulletPoint",
};