import { AuthorModel } from "../../author/models/author.model";
import { BookModel } from "./book.model";

export type PublicBookModel = {
    author: AuthorModel;
} & BookModel;
