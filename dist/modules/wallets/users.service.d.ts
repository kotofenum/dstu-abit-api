import { UserEntity } from "./entities/user.entity";
import { Repository } from "typeorm";
import { UserInput } from "./inputs/user.input";
import { JwtService } from "@nestjs/jwt/dist/jwt.service";
export declare class UsersService {
    private jwtService;
    private readonly usersRepository;
    constructor(jwtService: JwtService, usersRepository: Repository<UserEntity>);
    createUser(data: UserInput): Promise<UserEntity>;
    getUsers(): Promise<UserEntity[]>;
    getUserById(id: string): Promise<UserEntity>;
    validateToken(token: string): Promise<{
        isValid: boolean;
        user?: UserEntity;
    }>;
}
