import { UserRepository } from "./user.repository.interface";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserModel } from "./models/user.model";
import { UsingTakenUsernameError } from "./errors/using-taken-username.error";
import { PublicUserModel } from "./models/public-user.model";
import { UndefinedUserIdError } from "./errors/undefined-user-id.error";

export class UserService {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    public async getAll(): Promise<PublicUserModel[]> {
        return await this.userRepository.getAllPublic();
    }

    public async getPublicById(userId: number): Promise<PublicUserModel> {
        const user = await this.getById(userId);
        return {
            id: user.id,
            name: user.name
        };
    }

    private async getById(userId: number): Promise<UserModel> {
        const user = await this.userRepository.getById(userId);
        if (!user) throw new UndefinedUserIdError(`Пользователя с ID ${userId} не существует.`);

        return user;
    }

    public async register(userData: CreateUserDto): Promise<PublicUserModel> {
        if (await this.userRepository.existsByName(userData.name)) {
            throw new UsingTakenUsernameError("Пользователь с таким именем уже существует.");
        }

        return await this.create(userData);
    }

    private async create(userData: CreateUserDto): Promise<UserModel> {
        return await this.userRepository.create(userData);
    }
}
