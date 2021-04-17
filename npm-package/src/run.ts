import { Target } from "./utils/types";
import { run as runAxe } from "axe-core";
import { extractDocumentFromTarget, targetIsIframe } from "./utils/helpers";

/**
 * Runs accessibility test in a document
 *
 *
 * @param target - The document or path to iframe element
 * @param options - The second input number
 *
 * @beta
 */
export default function run(target?: Target) {
    const doc = target ? extractDocumentFromTarget(target) : document;
    const isIframe = target ? targetIsIframe(target) : false;
}
