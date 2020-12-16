import { UserEntity } from "src/modules/users/entities/user.entity";
export declare class CodeEntity {
    uid: string;
    phone: string;
    code: string;
    expireAt: Date;
    issuer: UserEntity;
    dateCreated: Date;
    dateUpdated: Date;
    dateDeleted: Date;
}
