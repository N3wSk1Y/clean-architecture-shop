import { DomainErrorModel } from "./domain.error.model";

export abstract class DomainError extends Error {
    public readonly caughtErrors: Error[] = [];

    public domain: string = "";

    protected constructor(message: string, cause?: Error) {
        super(message);
        if (cause) {
            this.caughtErrors.push(cause);
        }
        if (cause instanceof DomainError) {
            this.caughtErrors = this.caughtErrors.concat(cause.caughtErrors);
        }
    }

    public getInfo(): DomainErrorModel {
        return {
            name: this.name,
            message: this.message,
            domain: this.domain,
            caughtErrors: this.caughtErrors
        };
    }
}
