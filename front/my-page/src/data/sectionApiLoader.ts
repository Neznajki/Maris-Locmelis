import {fetchSectionContent, redirectToFallback} from "@/api/client";
import {PageSection} from "@/contract/PageSection";

export async function loadPageDataWithRetry(sectionPartId: number, retry: number = 0): Promise<PageSection | null> {
    let retryCountThreshold = 3;
    const res = await fetchSectionContent(sectionPartId);

    if (res.status === 500) {
        if (retry < retryCountThreshold) return loadPageDataWithRetry(sectionPartId, retry + 1);
        redirectToFallback('HTTP 500 from menu API');
        return null;
    }
    if (!res.ok) {
        console.error('Menu API returned non-OK status', res.status);
        return null;
    }

    try {
        let result = (await res.json()) as PageSection;

        if (!result || !result.parts || !result.title.length) {
            if (retry < retryCountThreshold) return loadPageDataWithRetry(sectionPartId, retry + 1);
            redirectToFallback('No page contents available after filtering')
        }

        return result;
    } catch (err) {
        console.error('Failed to load page contents', err)
        if (retry < retryCountThreshold) return loadPageDataWithRetry(sectionPartId, retry + 1);
        redirectToFallback(err)
        return null
    }
}