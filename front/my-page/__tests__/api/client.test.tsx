import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import {
    fetchMe,
    loginWithGooglePopup,
    loginWithGoogle,
    logout,
    fetchMenuItemsResponse,
    redirectToFallback,
} from "@/api/client";

function setEnv(env: Record<string, any>) {
    // Vitest exposes import.meta.env; it’s mutable enough for tests in Vite/Vitest projects.
    (import.meta as any).env = env;
}

describe("src/api/client.ts (100% coverage)", () => {
    beforeEach(() => {
        vi.useFakeTimers();
        vi.restoreAllMocks();

        // default env
        setEnv({
            VITE_API_BASE_URL: "https://api.example.com/",
            VITE_FALLBACK_URL: "https://fallback.example.com/",
        });

        // mock fetch
        (globalThis as any).fetch = vi.fn();

        // make location writable in jsdom
        const originalLocation = window.location;
        Object.defineProperty(window, "location", {
            value: { ...originalLocation, href: "https://app.example.com/", assign: vi.fn() },
            writable: true,
        });
    });

    afterEach(() => {
        vi.clearAllTimers();
        vi.useRealTimers();
    });

    describe("fetchMe", () => {
        it("not logged in", async () => {
            (globalThis.fetch as any).mockResolvedValueOnce(new Response(JSON.stringify(""), { status: 200, headers: { "content-type": "application/json" } }));

            const me = await fetchMe();
            expect(me).eq("");

            expect(globalThis.fetch).toHaveBeenCalledWith(
                "https://api.example.com/api/users/me",
                { credentials: "include" }
            );
        });

        it("throws for non-ok (not 401/403)", async () => {
            (globalThis.fetch as any).mockResolvedValueOnce(new Response("", { status: 500 }));

            await expect(fetchMe()).rejects.toThrow("me failed: 500");
        });

        it("returns json for ok response", async () => {
            const body = { id: 1, name: "Māris" };
            (globalThis.fetch as any).mockResolvedValueOnce(
                new Response(JSON.stringify(body), {
                    status: 200,
                    headers: { "content-type": "application/json" },
                })
            );

            const me = await fetchMe();
            expect(me).toEqual(body);
        });
    });

    describe("loginWithGooglePopup", () => {
        it("opens popup and calls callback after popup closes (clears interval)", () => {
            const callback = vi.fn();
            const popupRef: any = { closed: false };

            const openSpy = vi.spyOn(window, "open").mockReturnValue(popupRef);
            const clearIntervalSpy = vi.spyOn(globalThis, "clearInterval");

            loginWithGooglePopup(callback);

            expect(openSpy).toHaveBeenCalledWith(
                "https://api.example.com/login/google",
                "google-oauth",
                "width=500,height=600"
            );

            // not closed yet
            vi.advanceTimersByTime(500);
            expect(callback).not.toHaveBeenCalled();

            // close popup
            popupRef.closed = true;
            vi.advanceTimersByTime(500);

            expect(callback).toHaveBeenCalledTimes(1);
            expect(clearIntervalSpy).toHaveBeenCalledTimes(1);
        });

        it("does not throw if popup is blocked (window.open returns null)", () => {
            const callback = vi.fn();
            vi.spyOn(window, "open").mockReturnValue(null);

            expect(() => loginWithGooglePopup(callback)).not.toThrow();

            // interval keeps running because popup?.closed is undefined; ensure no callback
            vi.advanceTimersByTime(2000);
            expect(callback).not.toHaveBeenCalled();
        });
    });

    describe("loginWithGoogle", () => {
        it("sets window.location.href to `${base}login/google?redirect=/`", async () => {
            await loginWithGoogle();
            expect(window.location.href).toBe("https://api.example.com/login/google?redirect=/");
        });
    });

    describe("logout", () => {
        it("POSTs to `${base}logout` with credentials include and does not throw on ok", async () => {
            (globalThis.fetch as any).mockResolvedValueOnce(new Response("", { status: 200 }));

            await expect(logout()).resolves.toBeUndefined();

            expect(globalThis.fetch).toHaveBeenCalledWith("https://api.example.com/logout", {
                method: "POST",
                credentials: "include",
            });
        });

        it("does not throw on 302 even though Response.ok is false", async () => {
            (globalThis.fetch as any).mockResolvedValueOnce(new Response("", { status: 302 }));

            await expect(logout()).resolves.toBeUndefined();
        });

        it("throws on non-ok and non-302", async () => {
            (globalThis.fetch as any).mockResolvedValueOnce(new Response("", { status: 500 }));

            await expect(logout()).rejects.toThrow("logout failed: 500");
        });
    });

    describe("fetchMenuItemsResponse", () => {
        it("calls GET `${base}api/menu/items` and returns the fetch response", async () => {
            const resp = new Response("ok", { status: 200 });
            (globalThis.fetch as any).mockResolvedValueOnce(resp);

            const r = await fetchMenuItemsResponse();
            expect(r).toBe(resp);

            expect(globalThis.fetch).toHaveBeenCalledWith(
                "https://api.example.com/api/menu/items",
                { method: "GET" }
            );
        });
    });

    describe("redirectToFallback", () => {
        it("logs error and redirects when fallback url exists", () => {
            const err = new Error("boom");
            const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});
            const assignSpy = vi.spyOn(window.location, "assign");

            redirectToFallback(err);

            expect(consoleSpy).toHaveBeenCalledTimes(1);
            expect(assignSpy).toHaveBeenCalledWith("https://fallback.example.com/");
        });

        it("does not log if err is not provided, but still redirects when fallback exists", () => {
            const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});
            const assignSpy = vi.spyOn(window.location, "assign");

            redirectToFallback();

            expect(consoleSpy).not.toHaveBeenCalled();
            expect(assignSpy).toHaveBeenCalledWith("https://fallback.example.com/");
        });
    });
});