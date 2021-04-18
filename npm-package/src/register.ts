import { RunOptions } from "axe-core";
import { extractIframeFromTarget } from "./utils/helpers";
import { Target } from "./utils/types";

const observer = new MutationObserver(function (...args) {
    console.log("mutation detected");
    console.log(...args);
});

export default function register(
    target: Target = "iframe",
    options: RunOptions = {}
) {
    console.log("inside register()");
    const iframe = extractIframeFromTarget(target);
    observer.observe(iframe, {
        characterData: true,
        subtree: true,
        childList: true,
    });
}
