
import type { ComponentType, LazyExoticComponent, ReactNode } from 'react'

export type MenuTitle = string | ReactNode

export interface OneDItem {
  kind: 'item'
  id: string
  path: string
  title: MenuTitle
  body: ComponentType<any> | LazyExoticComponent<ComponentType<any>>
}

export interface TwoDSection {
  id: string
  path: string
  title: MenuTitle
  body: ComponentType<any> | LazyExoticComponent<ComponentType<any>>
}

export interface TwoDItem {
  kind: 'group'
  id: string
  title: MenuTitle
  sections: TwoDSection[]
}

export type MenuItem = OneDItem | TwoDItem

export function allRoutes(items: MenuItem[]) {
  const out: { id: string, path: string }[] = []
  items.forEach(i => {
    if (i.kind === 'item') out.push({ id: i.id, path: i.path })
    else i.sections.forEach(s => out.push({ id: s.id, path: s.path }))
  })
  return out
}
