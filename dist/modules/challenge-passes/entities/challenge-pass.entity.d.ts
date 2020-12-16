import { ChallengeEntity } from "src/modules/challenges/entities/challenge.entity";
import { UserEntity } from "src/modules/users/entities/user.entity";
export declare class ChallengePassEntity {
    uid: string;
    challenge: ChallengeEntity;
    user: UserEntity;
    cost: number;
    obtainedAt: Date;
    revokedAt: Date;
    dateCreated: Date;
    dateUpdated: Date;
    dateDeleted: Date;
}
