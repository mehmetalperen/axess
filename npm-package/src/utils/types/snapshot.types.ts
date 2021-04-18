import { AuditResult } from "./audit.types";

export interface Snapshot {
    before: AuditResult;
    after: AuditResult;
    violation: string;
}
