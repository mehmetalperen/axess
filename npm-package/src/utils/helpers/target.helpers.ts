import { Target } from "../types";

export function extractQueryFromTarget(target: Target): string {
    if (typeof target === "string") return target;
    // for later: test for element
    return "iframe";
}

export function extractWindowFromTarget(target: Target): Window {
    if (target instanceof Window) return target;

    const iframeEl =
        typeof target === "string"
            ? (document.querySelector(target) as HTMLIFrameElement)
            : target;
    let window = iframeEl.contentWindow as Window;
    return window;
}

export function targetIsIframe(target: Target): boolean {
    if (target instanceof HTMLElement) return target.tagName === "iframe";
    if (typeof target === "string") {
        const el = document.querySelector(target);
        return el?.tagName === "iframe";
    }
    return true;
}
