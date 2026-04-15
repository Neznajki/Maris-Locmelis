import {PageHandler, PageSectionPart} from "@/contract/PageSection";
import {DownloadButtonHandler} from "@/components/page/handler/DownloadButtonHandler";
import {ParagraphHandler} from "@/components/page/handler/ParagraphHandler";
import {EmailHrefHandler} from "@/components/page/handler/EmailHrefHandler";
import {LinkHrefHandler} from "@/components/page/handler/LinkHrefHandler";
import {ImageHrefHandler} from "@/components/page/handler/ImageHrefHandler";
import {BulletPointHandler} from "@/components/page/handler/BulletPointHandler";
import {YouTubePresentationHandler} from "@/components/page/handler/YouTubePresentationHandler";
import {PlaySongHandler} from "@/components/page/handler/PlaySongHandler";
import {IframePreviewHandler} from "@/components/page/handler/IframePreviewHandler";
import {ImageStoryHandler} from "@/components/page/handler/ImageStoryHandler";
import {SectionHandler} from "@/components/page/handler/SectionHandler";

export default function getRenderComponent(pageSectionPart: PageSectionPart): PageHandler<any> {
    switch (pageSectionPart.type.feHandlerIndex) {
        case 'DownloadButton': return DownloadButtonHandler;
        case 'Paragraph': return ParagraphHandler;
        case 'EmailHref': return EmailHrefHandler;
        case 'LinkHref': return LinkHrefHandler;
        case 'ImageHref': return ImageHrefHandler;
        case 'BulletPoint': return BulletPointHandler;
        case 'YouTubePresentation': return YouTubePresentationHandler;
        case 'PlaySong': return PlaySongHandler;
        case 'IframePreview': return IframePreviewHandler;
        case 'ImageStory': return ImageStoryHandler;
        case 'Section': return SectionHandler;
        default: throw new Error(`Unknown handler: ${pageSectionPart.type.feHandlerIndex}`);
    }
}