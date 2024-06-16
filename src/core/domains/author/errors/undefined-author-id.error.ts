import { AuthorError } from "./author.error";

export class UndefinedAuthorIdError extends AuthorError {
    constructor(message: string, cause?: Error) {
        super(message, cause);
        this.name = "UndefinedAuthorIdError";
    }
}
