import { AuthorModel } from "./models/author.model";
import { CreateAuthorDto } from "./dto/create-author.dto";
import { UpdateAuthorDto } from "./dto/update-author.dto";

export interface AuthorRepository {
    getAll(): Promise<AuthorModel[]>;
    getById(authorId: number): Promise<AuthorModel>;
    create(authorData: CreateAuthorDto): Promise<AuthorModel>;
    update(authorId: number, authorData: UpdateAuthorDto): Promise<AuthorModel>;
    delete(authorId: number): Promise<AuthorModel>;
    existsByName(name: string): Promise<boolean>;
}
