import { ExerciseOriginEntity } from "./../exercise-origins/entities/exercise-origin.entity";
import { ChallengeExerciseEntity } from "./entities/challenge-exercise.entity";
import { Repository } from "typeorm";
import { ChallengeExerciseInput } from "./inputs/challenge-exercise.input";
import { ChallengeEntity } from "../challenges/entities/challenge.entity";
export declare class ChallengeExercisesService {
    private readonly challengeExercisesRepository;
    constructor(challengeExercisesRepository: Repository<ChallengeExerciseEntity>);
    createChallengeExercise(data: ChallengeExerciseInput, exerciseOrigin: ExerciseOriginEntity, challenge: ChallengeEntity): Promise<ChallengeExerciseEntity>;
    getChallengeExercises(): Promise<ChallengeExerciseEntity[]>;
    getChallengeExerciseById(id: string): Promise<ChallengeExerciseEntity>;
}
