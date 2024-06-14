export type DomainErrorModel = {
    name: string;
    message: string;
    domain: string;
    caughtErrors: Error[];
};
