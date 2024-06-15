import { RepositoryError } from "./repository.error";
import { RepositoryErrorModel } from "./repository.error.model";

export abstract class RepositoryErrorImpl extends Error implements RepositoryError {
    public readonly caughtErrors: Error[] = [];

    public model: string = "";

    protected constructor(message: string, cause?: Error) {
        super(message);
        if (cause) {
            this.caughtErrors.push(cause);
        }
        if (cause instanceof RepositoryErrorImpl) {
            this.caughtErrors = this.caughtErrors.concat(cause.caughtErrors);
        }
    }

    public getInfo(): RepositoryErrorModel {
        return {
            name: this.name,
            message: this.message,
            model: this.model,
            caughtErrors: this.caughtErrors
        };
    }
}
