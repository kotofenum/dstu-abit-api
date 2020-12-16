import { UserTrainingEntity } from "./entities/user-training.entity";
import { Repository } from "typeorm";
import { UserTrainingInput } from "./inputs/user-training.input";
import { UserEntity } from "../users/entities/user.entity";
import { ChallengeEntity } from "../challenges/entities/challenge.entity";
import { UserExercisesService } from "../user-exercises/user-exercises.service";
import { ChallengeExercisesService } from "../challenge-exercises/challenge-exercises.service";
import { ChallengesService } from "../challenges/challenges.service";
export declare class UserTrainingsService {
    private readonly userTrainingsRepository;
    private readonly userExercisesService;
    private readonly challengeExercisesService;
    private readonly challengesService;
    constructor(userTrainingsRepository: Repository<UserTrainingEntity>, userExercisesService: UserExercisesService, challengeExercisesService: ChallengeExercisesService, challengesService: ChallengesService);
    createUserTraining(data: UserTrainingInput, user: UserEntity, challenge: ChallengeEntity): Promise<UserTrainingEntity>;
    finishUserTraining(user: UserEntity, trainingId: string): Promise<UserTrainingEntity>;
    getAllUserTrainings(): Promise<UserTrainingEntity[]>;
    getUserTrainings(user: UserEntity): Promise<UserTrainingEntity[]>;
    getUserTrainingsForChallenge(user: UserEntity, challengeId: string): Promise<UserTrainingEntity[]>;
    getUserTrainingById(id: string): Promise<UserTrainingEntity>;
}
