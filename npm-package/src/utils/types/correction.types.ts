export interface Correction {
    before: {
        html: string;
    };
    after: {
        html: string;
    };
    violation: string;
}
