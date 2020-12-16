import { ChallengePassesService } from "./challenge-passes.service";
import { ChallengePassDto } from "./dto/challenge-pass.dto";
import { ChallengePassInput } from "./inputs/challenge-pass.input";
import { UserEntity } from "../users/entities/user.entity";
import { ChallengesService } from "../challenges/challenges.service";
import { WalletsService } from "../wallets/wallets.service";
export declare class ChallengePassesResolver {
    private readonly challengePassesService;
    private readonly challengesService;
    private readonly walletsService;
    constructor(challengePassesService: ChallengePassesService, challengesService: ChallengesService, walletsService: WalletsService);
    challengePasses(): Promise<ChallengePassDto[]>;
    myChallengePasses(user: UserEntity): Promise<ChallengePassDto[]>;
    challengePass(uid: string): Promise<ChallengePassDto>;
    obtainChallengePass(input: ChallengePassInput, user: UserEntity): Promise<ChallengePassDto>;
}
