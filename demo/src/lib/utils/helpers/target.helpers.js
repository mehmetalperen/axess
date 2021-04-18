"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.targetIsIframe = exports.extractWindowFromTarget = exports.extractIframeFromTarget = exports.extractQueryFromTarget = void 0;
function extractQueryFromTarget(target) {
    if (typeof target === "string")
        return target;
    // for later: test for element
    return "iframe";
}
exports.extractQueryFromTarget = extractQueryFromTarget;
function extractIframeFromTarget(target) {
    if (typeof target === "string")
        return document.querySelector(target);
    return target;
}
exports.extractIframeFromTarget = extractIframeFromTarget;
function extractWindowFromTarget(target) {
    if (target instanceof Window)
        return target;
    var iframeEl = typeof target === "string"
        ? document.querySelector(target)
        : target;
    var window = iframeEl.contentWindow;
    return window;
}
exports.extractWindowFromTarget = extractWindowFromTarget;
function targetIsIframe(target) {
    if (target instanceof HTMLElement)
        return target.tagName === "iframe";
    // if (typeof target === "string") {
    //     const el = document.querySelector(target);
    //     return el?.tagName === "iframe";
    // }
    return true;
}
exports.targetIsIframe = targetIsIframe;
//# sourceMappingURL=target.helpers.js.map