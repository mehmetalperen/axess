import { AuditResult, Snapshot } from "../types";

export function extractSnapshotFromAuditHistory(
    auditResultHistory: AuditResult[]
): Snapshot | null {
    if (auditResultHistory.length < 2) return null;
    const lastAuditResult = auditResultHistory[auditResultHistory.length - 1];
    const secondLastAuditResult =
        auditResultHistory[auditResultHistory.length - 2];
    const lastAuditResultViolations = new Set(
        lastAuditResult.violations.map((v) => v.id)
    );
    const secondLastAuditResultViolations = new Set(
        secondLastAuditResult.violations.map((v) => v.id)
    );

    const introducedViolation = lastAuditResult.violations.find(
        (v) => !secondLastAuditResultViolations.has(v.id)
    );
    if (introducedViolation) return null;
    const removedViolation = secondLastAuditResult.violations.find(
        (v) => !lastAuditResultViolations.has(v.id)
    );
    if (!removedViolation) return null;
    const solvedViolation = lastAuditResult.passes.find(
        (p) => p.id === removedViolation.id
    );

    if (!solvedViolation) return null;

    return {
        before: secondLastAuditResult,
        after: lastAuditResult,
        violation: solvedViolation.id,
    };
}
