import { RepositoryErrorModel } from "./repository.error.model";

export interface RepositoryError {
    ModelName: string;
    caughtErrors: Error[];
    getInfo(): RepositoryErrorModel;
}
