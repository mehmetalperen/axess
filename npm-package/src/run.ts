import { RunOptions, Target } from "./utils/types";
import axe from "axe-core";
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
): Promise<axe.AxeResults> {
    const query = extractQueryFromTarget(target);
    const doc = extractDocumentFromTarget(target);
    const isIframe = targetIsIframe(target);
    const axeResults = await axe.run(query, { iframes: isIframe });
    return axeResults;
}
