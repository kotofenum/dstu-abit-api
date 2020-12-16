import { UsersService } from "./users.service";
import { UserEntity } from "./entities/user.entity";
import { UserDto } from "./dto/user.dto";
import { UserInput } from "./inputs/user.input";
export declare class UsersResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    users(): Promise<UserDto[]>;
    user(uid: string): Promise<UserDto>;
    addUser(input: UserInput, user: UserEntity): Promise<UserDto>;
}
