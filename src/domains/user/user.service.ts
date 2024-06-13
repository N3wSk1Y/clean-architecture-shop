import {IUserRepository} from "./user.repository.interface";
import {User} from "./user";

export class UserService {
    private userRepository: IUserRepository

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    public async getAll(): Promise<User[]> {
        return await this.userRepository.getAll()
    }
}