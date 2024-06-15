import { AuthorRepository } from "./author.repository.interface";
import { AuthorModel } from "./models/author.model";
import { CreateAuthorDto } from "./dto/create-author.dto";
import { UsingTakenAuthorNameError } from "./errors/using-taken-author-name.error";
import { UpdateAuthorDto } from "./dto/update-author.dto";

export class AuthorService {
    private authorRepository: AuthorRepository;

    constructor(authorRepository: AuthorRepository) {
        this.authorRepository = authorRepository;
    }

    public async getAll(): Promise<AuthorModel[]> {
        return await this.authorRepository.getAll();
    }

    public async getById(authorId: number): Promise<AuthorModel> {
        return await this.authorRepository.getById(authorId);
    }

    public async create(authorData: CreateAuthorDto): Promise<AuthorModel> {
        if (await this.authorRepository.existsByName(authorData.name))
            throw new UsingTakenAuthorNameError("Автор с таким именем уже существует.");

        return await this.authorRepository.create(authorData);
    }

    public async update(authorId: number, authorData: UpdateAuthorDto): Promise<AuthorModel> {
        return await this.authorRepository.update(authorId, authorData);
    }
}
