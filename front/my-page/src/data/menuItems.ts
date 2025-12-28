import type { MenuItem, TwoDSection } from '@/types/menu'
import { fetchMenuItemsResponse, redirectToFallback } from '@/api/client'
import type {ApiMenuEntry, CommonMenuFields} from '@/contract/ApiMenuEntry'
import { lazyPage } from '@/data/pageLoader'

function resolveBody(name: string | null | undefined) {
  if (!name) return null
  try {
    return lazyPage(name)
  } catch (e) {
    console.warn('Unknown body component, skipping:', name, e)
    return null
  }
}

export async function loadMenuItems(): Promise<MenuItem[]> {
  function addSubMenuItem(items: CommonMenuFields[], sections: TwoDSection[]) {
    for (const submenuItem of items) {
      if (!submenuItem.path) {
        console.warn('Skipping section without path', submenuItem);
        continue
      }
      const cTitle = submenuItem.title;
      const cBody = resolveBody(submenuItem.bodyComponent)
      if (!cTitle || !cBody) {
        console.warn('Skipping section due to missing title/body', submenuItem);
        continue
      }
      sections.push({id: submenuItem.id, path: submenuItem.path, title: cTitle, body: cBody})
    }
  }

  try {
    const res = await fetchMenuItemsResponse()
    if (res.status === 500) {
      redirectToFallback('HTTP 500 from menu API')
      return []
    }
    if (!res.ok) {
      console.error('Menu API returned non-OK status', res.status)
      return []
    }
    const apiItems = (await res.json()) as ApiMenuEntry[]

    const out: MenuItem[] = []
    for (const mainMenuItem of apiItems) {
      const title = mainMenuItem.title;
      if (mainMenuItem.path) {
        const body = resolveBody(mainMenuItem.bodyComponent)
        if (!title || !body) {
          console.warn('Skipping menu item due to missing title/body', mainMenuItem)
          continue
        }

        out.push({ kind: 'item', id: mainMenuItem.id, path: mainMenuItem.path, title, body })
        continue
      }

      if (!mainMenuItem.items) {
        continue;
      }

      const sections: TwoDSection[] = []
      addSubMenuItem(mainMenuItem.items, sections);

      if (!title || sections.length === 0) {
        console.warn('Skipping group due to missing title or empty sections', mainMenuItem)
        continue
      }
      out.push({ kind: 'group', id: mainMenuItem.id, title, sections })
    }

    if (out.length === 0) {
      redirectToFallback('No menu items available after filtering')
    }

    return out
  } catch (err) {
    console.error('Failed to load menu items', err)
    redirectToFallback(err)
    return []
  }
}