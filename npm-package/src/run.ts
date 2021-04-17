import { RunOptions, Target } from "./utils/types";
import axe from "axe-core";
import {
    extractWindowFromTarget,
    extractQueryFromTarget,
    configureWindow,
    sleep,
    targetIsIframe,
} from "./utils/helpers";
import { defaultTags } from "./utils/constants";

/**
 * Runs accessibility test in a web page or iframe
 *
 *
 * @param target - The query for iframe element
 * @param options - The second input number
 *
 * @beta
 */
export default async function run(
    target: Target = "iframe",
    options: RunOptions = {}
): Promise<axe.AxeResults> {
    const query = extractQueryFromTarget(target);
    const window = extractWindowFromTarget(target);
    const isIframe = targetIsIframe(target);
    console.log({ window, query, isIframe });
    configureWindow(window);
    // await sleep(100);
    const axeResults = await axe.run(query, {
        iframes: isIframe,
        runOnly: defaultTags,
        ...options,
    });
    return axeResults;
}
