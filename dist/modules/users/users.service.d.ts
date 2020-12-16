import { UserEntity } from "./entities/user.entity";
import { Repository } from "typeorm";
import { UserInput } from "./inputs/user.input";
import { CreateUserInput } from "./inputs/create-user.input";
import { UpdateUserInput } from "./inputs/update-user.input";
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<UserEntity>);
    createUser(data: UserInput): Promise<UserEntity>;
    updateUser(data: UpdateUserInput, user: UserEntity): Promise<UserEntity>;
    confirmUser(user: UserEntity): Promise<UserEntity>;
    upsertUser(data: CreateUserInput): Promise<UserEntity>;
    getUsers(): Promise<UserEntity[]>;
    getUserByPhone(phone: string): Promise<UserEntity>;
    getUserById(id: string): Promise<UserEntity>;
    validateToken(token: string): Promise<{
        isValid: boolean;
        user?: UserEntity;
    }>;
}
