import { UserModel } from "./models/user.model";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { PublicUserModel } from "./models/public-user.model";

export interface UserRepository {
    getAll(): Promise<UserModel[]>;
    getAllPublic(): Promise<PublicUserModel[]>;
    getById(userId: number): Promise<UserModel>;
    create(userData: CreateUserDto): Promise<UserModel>;
    update(userData: UpdateUserDto): Promise<UserModel>;
    delete(userId: number): Promise<UserModel>;
    existsByName(name: string): Promise<boolean>;
}
