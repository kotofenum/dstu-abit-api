import { UserDto } from "src/modules/users/dto/user.dto";
export declare class CodeDto {
    readonly uid: string;
    readonly phone: string;
    readonly expireAt: Date;
    readonly issuer: UserDto;
}
