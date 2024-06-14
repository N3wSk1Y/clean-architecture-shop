import { UserError } from "./user.error";

export class UsingTakenNameError extends UserError {
    constructor(message: string, cause?: Error) {
        super(message, cause);
        this.name = "UsingTakenNameError";
        this.domain = "User";
    }
}
