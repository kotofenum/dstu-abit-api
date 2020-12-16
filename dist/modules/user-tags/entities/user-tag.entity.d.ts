import { UserEntity } from "src/modules/users/entities/user.entity";
export declare enum TagRelationType {
    major = "major",
    specialty = "specialty",
    program = "program"
}
export declare class UserTagEntity {
    uid: string;
    relationId: string;
    relationType: TagRelationType;
    user: UserEntity;
    dateCreated: Date;
    dateUpdated: Date;
    dateDeleted: Date;
}
