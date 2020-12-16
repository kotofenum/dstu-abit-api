import { ChallengePassEntity } from "src/modules/challenge-passes/entities/challenge-pass.entity";
import { CodeEntity } from "src/modules/codes/entities/code.entity";
import { ExerciseOriginEntity } from "src/modules/exercise-origins/entities/exercise-origin.entity";
import { UserTagEntity } from "src/modules/user-tags/entities/user-tag.entity";
import { UserTrainingEntity } from "src/modules/user-trainings/entities/user-training.entity";
import { WalletEntity } from "src/modules/wallets/entities/wallet.entity";
export declare enum AccountType {
    enrolee = "enrolee",
    parent = "parent",
    teacher = "teacher"
}
export declare class UserEntity {
    uid: string;
    firstName: string;
    lastName: string;
    patronym: string;
    type: AccountType;
    birthDate: Date;
    country: string;
    locality: string;
    course: string;
    child: string;
    position: string;
    pwd: string;
    email: string;
    school: string;
    phone: string;
    emailVerified: boolean;
    phoneVerified: boolean;
    picture: string;
    wallets: WalletEntity[];
    exerciseOrigins: ExerciseOriginEntity[];
    challengePasses: ChallengePassEntity[];
    trainings: UserTrainingEntity[];
    tags: UserTagEntity[];
    codes: CodeEntity[];
    dateCreated: Date;
    dateUpdated: Date;
    dateDeleted: Date;
}
