import { AccountType } from "../entities/user.entity";
export declare class UserDto {
    readonly uid: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly patronym: string;
    readonly type: AccountType;
    readonly birthDate: Date;
    readonly country: string;
    readonly locality: string;
    readonly email: string;
    readonly pwd: string;
    readonly school: string;
    readonly position: string;
    readonly child: string;
    readonly course: string;
    readonly phone: string;
    readonly emailVerified: boolean;
    readonly phoneVerified: boolean;
    readonly picture: string;
}
