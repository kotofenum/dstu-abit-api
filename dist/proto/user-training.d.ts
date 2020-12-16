import { ChallengeExercise, ChallengeTraining } from "./challenge";
import { User } from "./user";
interface ExerciseFrame {
    confidence: number;
    keypoints: any[];
}
interface UserExercise {
    uid: string;
    exerciseOrigin: ChallengeExercise;
    score: number;
    frames: ExerciseFrame[];
    startedAt: Date;
    endedAt: Date;
}
export interface UserTraining {
    uid: string;
    trainingOrigin: ChallengeTraining;
    exercises: UserExercise[];
    user: User;
    startedAt: Date;
    endedAt: Date;
}
export {};
