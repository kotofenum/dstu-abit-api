import { ChallengeExerciseEntity } from "src/modules/challenge-exercises/entities/challenge-exercise.entity";
import { UserTrainingEntity } from "src/modules/user-trainings/entities/user-training.entity";
export interface ExerciseFrame {
    confidence: number;
    keypoints: any[];
}
export declare class UserExerciseEntity {
    uid: string;
    challengeExercise: ChallengeExerciseEntity;
    training: UserTrainingEntity;
    score: number;
    frames: ExerciseFrame[];
    startedAt: Date;
    endedAt: Date;
    dateCreated: Date;
    dateUpdated: Date;
    dateDeleted: Date;
}
