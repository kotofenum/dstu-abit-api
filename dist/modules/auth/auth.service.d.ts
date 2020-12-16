import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { UserEntity } from "../users/entities/user.entity";
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(username: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
    validateToken(token: string): Promise<{
        isValid: boolean;
        user?: UserEntity;
    }>;
}
