import {PageHandler, PageSectionPart} from "@/contract/PageSection";
import {DownloadButtonHandler} from "@/components/page/handler/DownloadButtonHandler";
import {ParagraphHandler} from "@/components/page/handler/ParagraphHandler";
import {EmailHrefHandler} from "@/components/page/handler/EmailHrefHandler";
import {LinkHrefHandler} from "@/components/page/handler/LinkHrefHandler";
import {ImageHrefHandler} from "@/components/page/handler/ImageHrefHandler";
import {BulletPointHandler} from "@/components/page/handler/BulletPointHandler";

export default function getRenderComponent(pageSectionPart: PageSectionPart): PageHandler<any> {
    switch (pageSectionPart.type.feHandlerIndex) {
        case 'DownloadButton': return DownloadButtonHandler;
        case 'Paragraph': return ParagraphHandler;
        case 'EmailHref': return EmailHrefHandler;
        case 'LinkHref': return LinkHrefHandler;
        case 'ImageHref': return ImageHrefHandler;
        case 'BulletPoint': return BulletPointHandler;
        default: throw new Error(`Unknown handler: ${pageSectionPart.type.feHandlerIndex}`);
    }
}