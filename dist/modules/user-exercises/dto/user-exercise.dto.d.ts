import { ChallengeExerciseDto } from "src/modules/challenge-exercises/dto/challenge-exercise.dto";
import { ExerciseFrame } from "../entities/user-exercise.entity";
import { UserTrainingDto } from "src/modules/user-trainings/dto/user-training.dto";
export declare class UserExerciseDto {
    readonly uid: string;
    readonly challengeExercise: ChallengeExerciseDto;
    readonly training: UserTrainingDto;
    readonly score: number;
    readonly frames: ExerciseFrame[];
    readonly startedAt: Date;
    readonly endedAt: Date;
}
