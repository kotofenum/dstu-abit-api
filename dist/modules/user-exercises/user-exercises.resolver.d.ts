import { UserExercisesService } from "./user-exercises.service";
import { UserExerciseDto } from "./dto/user-exercise.dto";
import { UserExerciseInput } from "./inputs/user-exercise.input";
import { UserEntity } from "../users/entities/user.entity";
import { ChallengeExercisesService } from "../challenge-exercises/challenge-exercises.service";
import { UserTrainingsService } from "../user-trainings/user-trainings.service";
export declare class UserExercisesResolver {
    private readonly userExercisesService;
    private readonly challengeExercisesService;
    private readonly userTrainingsService;
    constructor(userExercisesService: UserExercisesService, challengeExercisesService: ChallengeExercisesService, userTrainingsService: UserTrainingsService);
    userExercises(): Promise<UserExerciseDto[]>;
    userExercise(uid: string): Promise<UserExerciseDto>;
    createUserExercise(input: UserExerciseInput, user: UserEntity): Promise<UserExerciseDto>;
}
