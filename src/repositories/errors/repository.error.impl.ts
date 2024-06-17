import { RepositoryError } from "./repository.error";
import { RepositoryErrorModel } from "./repository.error.model";

export abstract class RepositoryErrorImpl extends Error implements RepositoryError {
    public readonly caughtErrors: Error[] = [];
    private readonly model: string = "";

    public get ModelName(): string {
        return this.model;
    }

    protected constructor(message: string, model: string, cause?: Error) {
        super(message);
        this.model = model;
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
