import { UserModel } from "./models/user.model";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { PublicUserModel } from "./models/public-user.model";

export interface IUserRepository {
    getAll(): Promise<UserModel[]>;
    getAllPublic(): Promise<PublicUserModel[]>;
    getById(id: number): Promise<UserModel>;
    create(userData: CreateUserDto): Promise<UserModel>;
    update(userData: UpdateUserDto): Promise<UserModel>;
    delete(id: number): Promise<UserModel>;
    existsByName(name: string): Promise<boolean>;
}
