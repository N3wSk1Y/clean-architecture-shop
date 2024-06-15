import { RepositoryErrorModel } from "./repository.error.model";

export interface RepositoryError {
    model: string;
    caughtErrors: Error[];
    getInfo(): RepositoryErrorModel;
}
