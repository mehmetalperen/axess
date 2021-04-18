import { AuditResult, RunOptions, Target } from "./utils/types";
import axe from "axe-core";
import {
    extractWindowFromTarget,
    extractQueryFromTarget,
    targetIsIframe,
    extractSnapshotFromAuditHistory,
} from "./utils/helpers";
import { defaultTags } from "./utils/constants";
import { createSnapshot } from "./utils/services";

let isRunning = false;
let isQueued = false;
let auditResultHistory: AuditResult[] = [];

/**
 * Runs accessibility test in a web page or iframe
 *
 *
 * @param target - The query for iframe element
 * @param options - Options for running web accessibility tests
 *
 * @beta
 */
export default async function run(
    target: Target = "iframe",
    options: RunOptions = {}
): Promise<AuditResult> {
    console.log("before isRunning check");
    if (isRunning) {
        isQueued = true;
        return null as any;
    }
    console.log("after isRunning check");

    isRunning = true;

    const query = extractQueryFromTarget(target);
    const window = extractWindowFromTarget(target);
    const isIframe = targetIsIframe(target);
    console.log({ window, query, isIframe });

    console.log("before running axe");
    const axeResults = await axe.run(query, {
        iframes: isIframe,
        runOnly: defaultTags,
        ...options,
    });
    console.log("after running axe");

    const auditResult: AuditResult = {
        ...axeResults,
        src: window.document.documentElement.innerHTML,
    };

    // @ts-ignore
    const renderTooltip = window.__renderTooltip;

    console.log("renderTooltip: ", renderTooltip);

    for (let violation of axeResults.violations) {
        for (let node of violation.nodes) {
            const query = node.target[1];
            if (query !== "html") renderTooltip(query, violation, node);
        }
    }

    isRunning = false;

    auditResultHistory.push(auditResult);

    const snapshot = extractSnapshotFromAuditHistory(auditResultHistory);
    if (snapshot) createSnapshot(snapshot);

    return auditResult;
}
