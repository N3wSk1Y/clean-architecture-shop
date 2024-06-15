import { DomainErrorModel } from "./domain.error.model";
import { DomainError } from "./domain.error";

export abstract class DomainErrorImpl extends Error implements DomainError {
    public readonly caughtErrors: Error[] = [];

    public domain: string = "";

    protected constructor(message: string, cause?: Error) {
        super(message);
        if (cause) {
            this.caughtErrors.push(cause);
        }
        if (cause instanceof DomainErrorImpl) {
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
