import { RunOptions, Target } from "./utils/types";
import { run as runAxe, AxeResults } from "axe-core";
import {
    extractDocumentFromTarget,
    extractQueryFromTarget,
    targetIsIframe,
} from "./utils/helpers";

/**
 * Runs accessibility test in a document
 *
 *
 * @param target - The document or path to iframe element
 * @param options - The second input number
 *
 * @beta
 */
export default async function run(
    target: Target,
    options: RunOptions = {}
): Promise<AxeResults> {
    const query = extractQueryFromTarget(target);
    const doc = extractDocumentFromTarget(target);
    const isIframe = targetIsIframe(target);
    const axeResults = await runAxe(query, { iframes: isIframe });
    return axeResults;
}
