import {Type} from "@/contract/PageType";
import {ReactNode} from "react";

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
    feHandlerIndex: string
}

export interface PageHandler<T extends Type> {
    parseContent: (content: string | object) => T
    render: (content: T) => ReactNode,
    pageType?: "Section" | string
}