import { DomainErrorImpl } from "../../../errors/domain.error.impl";

export abstract class AuthorError extends DomainErrorImpl {
    protected constructor(message: string, cause?: Error) {
        super(message, cause);
        this.domain = "Author";
    }
}
