import { ChallengeEntity } from "src/modules/challenges/entities/challenge.entity";
import { UserExerciseEntity } from "src/modules/user-exercises/entities/user-exercise.entity";
import { UserEntity } from "src/modules/users/entities/user.entity";
export declare class UserTrainingEntity {
    uid: string;
    challenge: ChallengeEntity;
    exercises: UserExerciseEntity[];
    user: UserEntity;
    startedAt: Date;
    endedAt: Date;
    dateCreated: Date;
    dateUpdated: Date;
    dateDeleted: Date;
}
