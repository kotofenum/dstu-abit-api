import { ChallengesService } from "./challenges.service";
import { ChallengeDto } from "./dto/challenge.dto";
import { ChallengeInput } from "./inputs/challenge.input";
import { UserEntity } from "../users/entities/user.entity";
import { ChallengeWithExercisesDto } from "./dto/challengeWithExercises.dto";
export declare class ChallengesResolver {
    private readonly challengesService;
    constructor(challengesService: ChallengesService);
    challenges(): Promise<ChallengeWithExercisesDto[]>;
    myChallenges(user: UserEntity): Promise<ChallengeWithExercisesDto[]>;
    challenge(uid: string): Promise<ChallengeWithExercisesDto>;
    addChallenge(input: ChallengeInput, user: UserEntity): Promise<ChallengeDto>;
}
