import { DomainErrorImpl } from "../../../errors/domain.error.impl";

export abstract class BookError extends DomainErrorImpl {
    protected constructor(message: string, cause?: Error) {
        super(message, cause);
        this.domain = "Book";
    }
}
