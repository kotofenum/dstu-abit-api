import { UserExerciseEntity } from "./entities/user-exercise.entity";
import { Repository } from "typeorm";
import { UserExerciseInput } from "./inputs/user-exercise.input";
import { ChallengeExerciseEntity } from "../challenge-exercises/entities/challenge-exercise.entity";
import { UserTrainingEntity } from "../user-trainings/entities/user-training.entity";
export declare class UserExercisesService {
    private readonly userExercisesRepository;
    private readonly userTrainingsRepository;
    constructor(userExercisesRepository: Repository<UserExerciseEntity>, userTrainingsRepository: Repository<UserTrainingEntity>);
    createUserExercise(data: UserExerciseInput, challengeExercise: ChallengeExerciseEntity, userTraining: UserTrainingEntity): Promise<UserExerciseEntity>;
    getUserExercises(): Promise<UserExerciseEntity[]>;
    getUserExerciseById(id: string): Promise<UserExerciseEntity>;
    updateExerciseProgress(exerciseId: string, trainingId: string): Promise<UserExerciseEntity>;
}
