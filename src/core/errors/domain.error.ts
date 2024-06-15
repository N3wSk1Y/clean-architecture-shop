import { DomainErrorModel } from "./domain.error.model";

export interface DomainError {
    domain: string;
    caughtErrors: Error[];
    getInfo(): DomainErrorModel;
}
