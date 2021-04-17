import { Target } from "../types";

export function extractDocumentFromTarget(target: Target): Document {
    if (target instanceof Document) return target;

    const iframeEl =
        typeof target === "string"
            ? (document.querySelector(target) as HTMLIFrameElement)
            : target;
    let doc = iframeEl.contentWindow || iframeEl.contentDocument;
    return doc as Document;
}

export function targetIsIframe(target: Target): boolean {
    if (target instanceof HTMLElement) return target.tagName === "iframe";
    if (typeof target === "string") {
        const el = document.querySelector(target);
        return el?.tagName === "iframe";
    }
    // for later: test document
    return true;
}
