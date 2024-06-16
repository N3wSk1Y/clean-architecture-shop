import { BookRepository } from "./book.repository.interface";
import { UndefinedBookIdError } from "./errors/undefined-book-id.error";
import { CreateBookDto } from "./dto/create-book.dto";
import { AuthorService } from "../author/author.service";
import { PublicBookModel } from "./models/public-book.model";

export class BookService {
    private bookRepository: BookRepository;
    private authorService: AuthorService;

    constructor(bookRepository: BookRepository, authorService: AuthorService) {
        this.bookRepository = bookRepository;
        this.authorService = authorService;
    }

    public async getAll(): Promise<PublicBookModel[]> {
        return await this.bookRepository.getAll();
    }

    public async getById(bookId: number): Promise<PublicBookModel> {
        const book = await this.bookRepository.getPublicById(bookId);
        if (!book) throw new UndefinedBookIdError(`Книги с ID ${bookId} не существует.`);

        return book;
    }

    public async create(authorId: number, bookData: CreateBookDto): Promise<PublicBookModel> {
        const author = await this.authorService.getById(authorId);
        return await this.bookRepository.create(author.id, bookData);
    }
}
