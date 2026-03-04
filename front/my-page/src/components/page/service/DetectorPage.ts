import {PageHandler, PageSectionPart} from "@/contract/PageSection";
import {DownloadButtonHandler} from "@/components/page/handler/DownloadButtonHandler";
import {ParagraphHandler} from "@/components/page/handler/ParagraphHandler";
import {EmailHrefHandler} from "@/components/page/handler/EmailHrefHandler";
import {LinkHrefHandler} from "@/components/page/handler/LinkHrefHandler";

export default function getRenderComponent(pageSectionPart: PageSectionPart): PageHandler<any> {
    switch (pageSectionPart.type.feHandlerIndex) {
        case 'DownloadButton': return DownloadButtonHandler;
        case 'Paragraph': return ParagraphHandler;
        case 'EmailHref': return EmailHrefHandler;
        case 'LinkHref': return LinkHrefHandler;
        default: throw new Error(`Unknown handler: ${pageSectionPart.type.feHandlerIndex}`);
    }
}