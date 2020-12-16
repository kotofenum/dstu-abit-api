import { ChallengePassEntity } from "./entities/challenge-pass.entity";
import { Repository } from "typeorm";
import { ChallengePassInput } from "./inputs/challenge-pass.input";
import { UserEntity } from "../users/entities/user.entity";
import { ChallengeEntity } from "../challenges/entities/challenge.entity";
import { TransactionsService } from "../transactions/transactions.service";
import { WalletEntity } from "../wallets/entities/wallet.entity";
export declare class ChallengePassesService {
    private readonly challengePassesRepository;
    private readonly transactionsService;
    constructor(challengePassesRepository: Repository<ChallengePassEntity>, transactionsService: TransactionsService);
    createChallengePass(data: ChallengePassInput, user: UserEntity, challenge: ChallengeEntity, wallet: WalletEntity): Promise<ChallengePassEntity>;
    getChallengePasses(): Promise<ChallengePassEntity[]>;
    getUserChallengePasses(user: UserEntity): Promise<ChallengePassEntity[]>;
    getUserChallengePassesForChallenge(user: UserEntity, challenge: ChallengeEntity, filterInactive?: boolean): Promise<ChallengePassEntity[]>;
    getChallengePassById(id: string): Promise<ChallengePassEntity>;
}
