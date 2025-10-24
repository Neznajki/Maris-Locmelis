const cache: Record<string, string> = {}

export default async function GetServerFileTime(url: string) {
  if (cache[url]) {
    return cache[url];
  }
  const response = await fetch(url, { method: 'HEAD' });
  const lastModified = response.headers.get('Last-Modified');
  if (lastModified) {
    cache[url] = lastModified;
    return lastModified;
  } else {
    cache[url] = "No Last-Modified header found.";
    return cache[url];
  }
}