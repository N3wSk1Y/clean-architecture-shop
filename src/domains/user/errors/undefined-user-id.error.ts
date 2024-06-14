import { UserError } from "./user.error";

export class UndefinedUserIdError extends UserError {
    constructor(message: string, cause?: Error) {
        super(message, cause);
        this.name = "UndefinedUserIdError";
        this.domain = "User";
    }
}
