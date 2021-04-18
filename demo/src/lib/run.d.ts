import { RunOptions, Target } from "./utils/types";
import axe from "axe-core";
/**
 * Runs accessibility test in a web page or iframe
 *
 *
 * @param target - The query for iframe element
 * @param options - Options for running web accessibility tests
 *
 * @beta
 */
export default function run(target?: Target, options?: RunOptions): Promise<axe.AxeResults>;
//# sourceMappingURL=run.d.ts.map