import { CodesService } from "./codes.service";
import { CodeDto } from "./dto/code.dto";
import { CodeInput } from "./inputs/code.input";
import { UserEntity } from "../users/entities/user.entity";
import { UsersService } from "../users/users.service";
import { ConfirmCodeInput } from "./inputs/confirm-code.input";
import { AccessDto } from "./dto/access";
import { LoginInput } from "./inputs/login.input";
export declare class CodesResolver {
    private readonly codesService;
    private readonly usersService;
    constructor(codesService: CodesService, usersService: UsersService);
    code(uid: string): Promise<CodeDto>;
    sendCode(input: CodeInput): Promise<CodeDto>;
    confirmCode(input: ConfirmCodeInput): Promise<AccessDto>;
    addCode(input: CodeInput, user: UserEntity): Promise<CodeDto>;
    login(input: LoginInput): Promise<AccessDto>;
}
