import {ApiMenuEntry} from "@/contract/ApiMenuEntry";

function getBaseUrl(): string {
  const base = (import.meta as any).env?.VITE_API_BASE_URL as string | undefined
  if (!base) return ''
  return base
}

export async function fetchMenuItems(): Promise<ApiMenuEntry[]> {
  const base = getBaseUrl()
  const url = `${base}menu/items`
  const res = await fetch(url, { method: 'GET' })
  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`)
  }
  return res.json()
}

export function redirectToFallback(err?: unknown) {
  // eslint-disable-next-line no-console
  if (err) console.error('Menu fetch failed, redirecting to fallback…', err)
  const fb = (import.meta as any).env?.VITE_FALLBACK_URL as string | undefined
  if (fb) {
    window.location.assign(fb)
  }
}
