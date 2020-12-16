import { UserTrainingsService } from "./user-trainings.service";
import { UserTrainingDto } from "./dto/user-training.dto";
import { UserTrainingInput } from "./inputs/user-training.input";
import { UserEntity } from "../users/entities/user.entity";
import { ChallengesService } from "../challenges/challenges.service";
export declare class UserTrainingsResolver {
    private readonly userTrainingsService;
    private readonly challengesService;
    constructor(userTrainingsService: UserTrainingsService, challengesService: ChallengesService);
    userTrainings(): Promise<UserTrainingDto[]>;
    myUserTrainings(user: UserEntity): Promise<UserTrainingDto[]>;
    myUserTrainingsForChallenge(challengeId: string, user: UserEntity): Promise<UserTrainingDto[]>;
    userTraining(uid: string): Promise<UserTrainingDto>;
    createUserTraining(input: UserTrainingInput, user: UserEntity): Promise<UserTrainingDto>;
    finishUserTraining(uid: string, user: UserEntity): Promise<UserTrainingDto>;
}
