import { ChallengeDto } from 'src/modules/challenges/dto/challenge.dto';
import { ExerciseOriginDto } from 'src/modules/exercise-origins/dto/exercise-origin.dto';
import { ExerciseType } from '../entities/challenge-exercise.entity';
export declare class ChallengeExerciseDto {
    readonly uid: string;
    readonly origin: ExerciseOriginDto;
    readonly challenge: ChallengeDto;
    readonly type: ExerciseType;
    readonly goal: number;
    readonly customVideoUrl: string;
}
