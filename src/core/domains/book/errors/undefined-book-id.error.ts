import { BookError } from "./book.error";

export class UndefinedBookIdError extends BookError {
    constructor(message: string, cause?: Error) {
        super(message, cause);
        this.name = "UndefinedBookIdError";
    }
}
