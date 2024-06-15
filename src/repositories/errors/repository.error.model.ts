export type RepositoryErrorModel = {
    name: string;
    message: string;
    model: string;
    caughtErrors: Error[];
};
