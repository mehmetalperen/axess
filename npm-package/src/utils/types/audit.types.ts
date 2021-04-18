import { AxeResults } from "axe-core";

export interface AuditResult extends AxeResults {
    src: string;
}
