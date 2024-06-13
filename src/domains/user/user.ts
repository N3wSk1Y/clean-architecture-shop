import {CreateUserDto} from "./dto/create-user.dto";
import {UserModel} from "./models/user.model";

export class User {
    private readonly id: number;
    private readonly name: string;

    constructor(userData: CreateUserDto) {
        this.id = userData.id;
        this.name = userData.name;
    }

    public getModel(): UserModel {
        return {
            id: this.id,
            name: this.name,
        }
    }
}