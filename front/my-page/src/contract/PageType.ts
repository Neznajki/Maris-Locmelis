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

export interface EmailHrefType extends Type, String {
}

export interface LinkHrefType extends Type {
    href: string,
    text: string
}

export interface ImageHrefType extends Type {
    href: string,
    alt: string,
    imageHref: string
}

export interface ParagraphType extends Type, String {
}

export interface BulletPointType extends Type, String {
}

export interface YouTubePresentationType extends Type {
    link: string,
    title: string,
    comment: string
}

export interface PlaySongType extends Type {
    songLink: string
}

export interface Type {

}