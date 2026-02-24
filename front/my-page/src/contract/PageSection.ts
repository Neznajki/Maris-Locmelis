import {PageSectionPartContentResult} from "@/contract/PageType";

export interface PageSection {
    id: number
    title: string
    parts: PageSectionPart[]
}

export interface PageSectionPart {
    id: number
    section: PageSection
    type: PageSectionType
    contents: PageSectionPartContent[]
    displayOrder: number
    displayText: string
}

export interface PageSectionPartContent {
    id: number
    sectionPart: PageSectionPart
    content: string | object
    displayOrder: number
}

export interface PageSectionType {
    name: string
    fe_handler_index: string
}

export interface PageHandler {
    parseContent: (content: string | object) => PageSectionPartContentResult
    createContent: (part: PageSectionPartContent) => Element
}