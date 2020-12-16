import { ChallengeExerciseEntity } from "src/modules/challenge-exercises/entities/challenge-exercise.entity";
import { ChallengePassEntity } from "src/modules/challenge-passes/entities/challenge-pass.entity";
import { UserTrainingEntity } from "src/modules/user-trainings/entities/user-training.entity";
import { UserEntity } from "src/modules/users/entities/user.entity";
import { ChallengeConfig } from "src/proto/challenge";
export declare class ChallengeEntity {
    uid: string;
    title: string;
    description: string;
    owner: UserEntity;
    price: number;
    exercises: ChallengeExerciseEntity[];
    config: ChallengeConfig;
    startsAt: Date;
    endsAt: Date;
    passes: ChallengePassEntity[];
    userTrainings: UserTrainingEntity[];
    dateCreated: Date;
    dateUpdated: Date;
    dateDeleted: Date;
}
