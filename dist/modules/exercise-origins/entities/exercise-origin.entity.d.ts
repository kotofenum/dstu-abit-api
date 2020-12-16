import { ChallengeExerciseEntity } from "src/modules/challenge-exercises/entities/challenge-exercise.entity";
import { UserEntity } from "src/modules/users/entities/user.entity";
export declare enum ExerciseKey {
    squats = "squats",
    pushUps = "push_ups",
    plank = "plank",
    jumpingJacks = "jumping_jacks"
}
export declare class ExerciseOriginEntity {
    uid: string;
    name: string;
    owner: UserEntity;
    key: ExerciseKey;
    videoUrl: string;
    challengeExercises: ChallengeExerciseEntity[];
    dateCreated: Date;
    dateUpdated: Date;
    dateDeleted: Date;
}
