import { ExerciseType } from '../entities/challenge-exercise.entity';
export declare class ChallengeExerciseInput {
    readonly exerciseOriginId: string;
    readonly challengeId: string;
    readonly type: ExerciseType;
    readonly goal: number;
    readonly customVideoUrl: string;
}
