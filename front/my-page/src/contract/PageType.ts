import {ReactNode} from "react";

export interface SectionPartType extends Type {
    nodes: ReactNode[],
    displayText: string
}

export interface DownloadButtonType extends Type {
    href: string,
    fileName: string,
    content: string
}

export interface ParagraphType extends Type, String {
}

export interface Type {

}