import {PageHandler, PageSectionPart} from "@/contract/PageSection";
import {DownloadButtonHandler} from "@/components/page/handler/DownloadButtonHandler";
import {ParagraphHandler} from "@/components/page/handler/ParagraphHandler";

export default function getRenderComponent(pageSectionPart: PageSectionPart): PageHandler<any> {
    switch (pageSectionPart.type.feHandlerIndex) {
        case 'DownloadButton': return DownloadButtonHandler;
        case 'Paragraph': return ParagraphHandler;
        default: throw new Error(`Unknown handler: ${pageSectionPart.type.feHandlerIndex}`);
    }
}