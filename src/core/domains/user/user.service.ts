import { IUserRepository } from "./user.repository.interface";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserModel } from "./models/user.model";
import { UsingTakenNameError } from "./errors/using-taken-name.error";
import { PublicUserModel } from "./models/public-user.model";
import { UndefinedUserIdError } from "./errors/undefined-user-id.error";

export class UserService {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    public async getAll(): Promise<PublicUserModel[]> {
        return await this.userRepository.getAllPublic();
    }

    public async getById(id: number): Promise<PublicUserModel> {
        try {
            const user = await this.userRepository.getById(id);
            return {
                id: user.id,
                name: user.name
            };
        } catch (e) {
            throw new UndefinedUserIdError(`Пользователя с ID ${id} не существует.`, e);
        }
    }

    public async register(userData: CreateUserDto): Promise<PublicUserModel> {
        if (await this.userRepository.existsByName(userData.name)) {
            throw new UsingTakenNameError("Пользователь с таким именем уже существует.");
        }

        return await this.create(userData);
    }

    private async create(userData: CreateUserDto): Promise<UserModel> {
        return await this.userRepository.create(userData);
    }
}
