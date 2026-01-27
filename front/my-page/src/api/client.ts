function getBaseUrl(): string {
  const base = (import.meta as any).env?.VITE_API_BASE_URL as string | undefined
  if (!base) return ''
  return base
}

function getApiUrl(): string {
  return getBaseUrl() + 'api/'
}

export async function fetchMe(): Promise<any | null> {
  const base = getApiUrl();
  const url = `${base}users/me`;
  const r = await fetch(url, { credentials: "include" });

  if (r.status === 401 || r.status === 403) return null;
  if (!r.ok) throw new Error(`me failed: ${r.status}`);

  return r.json();
}

export function loginWithGooglePopup(callback: Function) {
  const base = getBaseUrl();
  const popup = window.open(
      `${base}login/google`,
      'google-oauth',
      'width=500,height=600'
  );

  const timer = setInterval(() => {
    if (popup?.closed) {
      clearInterval(timer);
      callback();
    }
  }, 500);
}

export async function loginWithGoogle() {
  const base = getBaseUrl();
  window.location.href = `${base}login/google?redirect=/`;
}

export async function logout(): Promise<void> {
  const base = getBaseUrl();
  const url = `${base}logout`;

  const r = await fetch(url, {
    method: "POST",
    credentials: "include",
  });

  if (!r.ok && r.status !== 302) {
    throw new Error(`logout failed: ${r.status}`);
  }
}

export async function fetchMenuItemsResponse(): Promise<Response> {
  const base = getApiUrl()
  const url = `${base}menu/items`
  return fetch(url, { method: 'GET' })
}

export function redirectToFallback(err?: unknown) {
  if (err) console.error('Menu fetch failed, redirecting to fallback…', err)
  const fb = (import.meta as any).env?.VITE_FALLBACK_URL as string | undefined
  if (fb) {
    window.location.assign(fb)
  }
}
