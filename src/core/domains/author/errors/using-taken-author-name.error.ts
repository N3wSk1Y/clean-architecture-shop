import { AuthorError } from "./author.error";

export class UsingTakenAuthorNameError extends AuthorError {
    constructor(message: string, cause?: Error) {
        super(message, cause);
        this.name = "UsingTakenAuthorNameError";
    }
}
