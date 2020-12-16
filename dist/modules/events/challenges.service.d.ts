import { ChallengeEntity } from "./entities/event.entity";
import { Repository } from "typeorm";
import { ChallengeInput } from "./inputs/challenge.input";
import { UserEntity } from "../users/entities/user.entity";
import { ChallengePassesService } from "../challenge-passes/challenge-passes.service";
export declare class ChallengesService {
    private readonly challengesRepository;
    private readonly challengePassesService;
    constructor(challengesRepository: Repository<ChallengeEntity>, challengePassesService: ChallengePassesService);
    createChallenge(data: ChallengeInput, owner: UserEntity): Promise<ChallengeEntity>;
    getChallenges(): Promise<ChallengeEntity[]>;
    getUserChallenges(user: UserEntity): Promise<ChallengeEntity[]>;
    getChallengeById(id: string): Promise<ChallengeEntity>;
    checkUserPassForChallenge(challenge: ChallengeEntity, user: UserEntity): Promise<boolean>;
}
