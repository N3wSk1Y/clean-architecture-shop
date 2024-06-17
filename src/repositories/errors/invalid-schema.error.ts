import { RepositoryErrorImpl } from "./repository.error.impl";

export class InvalidSchemaError extends RepositoryErrorImpl {
    constructor(message: string, model: string, cause?: Error) {
        super(message, model, cause);
        this.name = "InvalidSchemaError";
    }
}
