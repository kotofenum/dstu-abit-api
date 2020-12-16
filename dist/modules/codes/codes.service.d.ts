import { CodeEntity } from "./entities/code.entity";
import { HttpService } from "@nestjs/common";
import { Repository } from "typeorm";
import { CodeInput } from "./inputs/code.input";
import { UserEntity } from "../users/entities/user.entity";
import { ConfirmCodeInput } from "./inputs/confirm-code.input";
import { AuthService } from "../auth/auth.service";
import { UsersService } from "../users/users.service";
import { LoginInput } from "./inputs/login.input";
export declare class CodesService {
    private readonly codesRepository;
    private readonly authService;
    private readonly usersService;
    private readonly httpService;
    constructor(codesRepository: Repository<CodeEntity>, authService: AuthService, usersService: UsersService, httpService: HttpService);
    createCode(data: CodeInput, user: UserEntity): Promise<CodeEntity>;
    confirmCode(data: ConfirmCodeInput): Promise<{
        access_token: string | null;
    }>;
    login(data: LoginInput): Promise<{
        access_token: string | null;
    }>;
    getLastCodeForPhone(phone: string): Promise<CodeEntity>;
    getCodeById(id: string): Promise<CodeEntity>;
    getCodesByIds(ids: string[]): Promise<CodeEntity[]>;
    sendCodeViaSMS(phone: string, code: string): Promise<boolean>;
}
