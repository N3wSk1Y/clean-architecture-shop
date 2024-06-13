import { DomainError } from "../../errors/domain-error";

export class UsingTakenNameError extends DomainError {
    constructor(message: string, cause?: Error) {
        super(message, cause);
        this.name = "UsingTakenNameError";
        this.domain = "User";
    }
}
