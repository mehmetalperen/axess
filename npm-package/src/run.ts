import { RunOptions, Target } from "./utils/types";
import axe from "axe-core";
import {
    extractDocumentFromTarget,
    extractQueryFromTarget,
    configureDocument,
    sleep,
    targetIsIframe,
} from "./utils/helpers";

/**
 * Runs accessibility test in a web page or iframe
 *
 *
 * @param target - The document or query for iframe element
 * @param options - The second input number
 *
 * @beta
 */
export default async function run(
    target: Target,
    options: RunOptions = {}
): Promise<axe.AxeResults> {
    const query = extractQueryFromTarget(target);
    const doc = extractDocumentFromTarget(target);
    const isIframe = targetIsIframe(target);
    console.log({ doc, query, isIframe });
    configureDocument(doc);
    // await sleep(100);
    const axeResults = await axe.run(query, { iframes: isIframe, ...options });
    return axeResults;
}
