import axe, { RunOptions } from "axe-core";
import run from "./run";
import {
    configureWindow,
    extractIframeFromTarget,
    extractWindowFromTarget,
} from "./utils/helpers";
import { Target } from "./utils/types";

export default function register(
    target: Target = "iframe",
    options: RunOptions = {}
) {
    const iframe = extractIframeFromTarget(target);
    const window = extractWindowFromTarget(target);

    const originalOnLoad = iframe.onload;

    iframe.onload = function (...args) {
        // @ts-ignore
        originalOnLoad && originalOnLoad(...args);
        configureWindow(window);
        run(target, options);
    };
}
