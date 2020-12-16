import { UserEntity } from "./entities/user.entity";
import { Repository } from "typeorm";
import { UserInput } from "./inputs/user.input";
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<UserEntity>);
    createUser(data: UserInput): Promise<UserEntity>;
    getUsers(): Promise<UserEntity[]>;
    getUserByPhone(phone: string): Promise<UserEntity>;
    getUserById(id: string): Promise<UserEntity>;
    validateToken(token: string): Promise<{
        isValid: boolean;
        user?: UserEntity;
    }>;
}
