import { DomainError } from "../../errors/domain-error";

export abstract class UserError extends DomainError {
    protected constructor(message: string, cause?: Error) {
        super(message, cause);
        this.domain = "User";
    }
}
