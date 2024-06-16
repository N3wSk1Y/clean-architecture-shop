import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { PublicBookModel } from "./models/public-book.model";
import { BookModel } from "./models/book.model";

export interface BookRepository {
    getAll(): Promise<PublicBookModel[]>;
    getById(id: string): Promise<BookModel>;
    getPublicById(id: number): Promise<PublicBookModel>;
    create(authorId: number, bookData: CreateBookDto): Promise<PublicBookModel>;
    update(bookId: number, bookData: UpdateBookDto): Promise<PublicBookModel>;
    changeAuthor(bookId: number, authorId: number): Promise<PublicBookModel>;
    delete(bookId: number): Promise<PublicBookModel>;
}
