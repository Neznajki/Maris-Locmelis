import {PageHandler, PageSectionPart} from "@/contract/PageSection";
import {DownloadButtonHandler} from "@/components/page/handler/DownloadButtonHandler";
import {ParagraphHandler} from "@/components/page/handler/ParagraphHandler";
import {Type} from "@/contract/PageType";

export default function getRenderComponent(pageSectionPart: PageSectionPart): PageHandler<Type> {
    switch (pageSectionPart.type.feHandlerIndex) {
        case 'DownloadButton': return DownloadButtonHandler;
        case 'Paragraph': return ParagraphHandler;
        default: throw new Error(`Unknown handler: ${pageSectionPart.type.feHandlerIndex}`);
    }
}