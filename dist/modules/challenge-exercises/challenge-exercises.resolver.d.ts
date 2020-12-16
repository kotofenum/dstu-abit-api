import { ChallengeExercisesService } from "./challenge-exercises.service";
import { ChallengeExerciseDto } from "./dto/challenge-exercise.dto";
import { ChallengeExerciseInput } from "./inputs/challenge-exercise.input";
import { UserEntity } from "../users/entities/user.entity";
import { ExerciseOriginsService } from "../exercise-origins/exercise-origins.service";
import { ChallengesService } from "../challenges/challenges.service";
export declare class ChallengeExercisesResolver {
    private readonly challengeExercisesService;
    private readonly exerciseOriginsService;
    private readonly challengesService;
    constructor(challengeExercisesService: ChallengeExercisesService, exerciseOriginsService: ExerciseOriginsService, challengesService: ChallengesService);
    challengeExercises(): Promise<ChallengeExerciseDto[]>;
    challengeExercise(uid: string): Promise<ChallengeExerciseDto>;
    addChallengeExercise(input: ChallengeExerciseInput, user: UserEntity): Promise<ChallengeExerciseDto>;
}
