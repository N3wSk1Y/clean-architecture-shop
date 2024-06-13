import { IUserRepository } from "./user.repository.interface";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserModel } from "./models/user.model";
import { UsingTakenNameError } from "./errors/using-taken-name.error";

export class UserService {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    public async getAll(): Promise<UserModel[]> {
        return await this.userRepository.getAll();
    }

    public async getById(id: number): Promise<UserModel> {
        return await this.userRepository.getById(id);
    }

    public async create(userData: CreateUserDto): Promise<UserModel> {
        if (await this.userRepository.existsByName(userData.name)) {
            throw new UsingTakenNameError("Пользователь с таким именем уже существует.");
        }

        return await this.userRepository.create(userData);
    }
}
