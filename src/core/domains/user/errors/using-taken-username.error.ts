import { UserError } from "./user.error";

export class UsingTakenUsernameError extends UserError {
    constructor(message: string, cause?: Error) {
        super(message, cause);
        this.name = "UsingTakenUsernameError";
    }
}
