/* @vitest-environment jsdom */
import { describe, it, expect, vi, beforeEach } from "vitest";

// We mock React.lazy to capture the factory function passed to it.
// We'll make lazy(factory) simply return the factory itself so we can call it in tests.
vi.mock("react", async () => {
    return {
        lazy: (factory: any) => factory,
    };
});

// IMPORTANT: import after the react mock above
import { lazyPage } from "@/data/pageLoader"; // <- adjust path to your file

describe("lazyPage", () => {
    beforeEach(() => {
        vi.restoreAllMocks();
        vi.spyOn(console, "error").mockImplementation(() => {});
    });

    it("logs and throws if loader is missing", async () => {
        const name = "Missing";
        const path = `/src/pages/${name}Page.tsx`;

        const factory = lazyPage(name) as unknown as () => Promise<any>;

        await expect(factory()).rejects.toThrow(`Failed to lazy import page '${path}'`);
        expect(console.error).toHaveBeenCalledWith(`Failed to lazy import page '${path}'`);
    });
});