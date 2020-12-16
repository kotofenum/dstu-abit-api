import { ChallengePassEntity } from "./entities/challenge-pass.entity";
import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ChallengePassInput } from "./inputs/challenge-pass.input";
import { UserEntity } from "../users/entities/user.entity";
import { ChallengeEntity } from "../challenges/entities/challenge.entity";
import { TransactionsService } from "../transactions/transactions.service";
import { WalletEntity } from "../wallets/entities/wallet.entity";
import {
  TransactionPurpose,
  TransactionStatus,
} from "../transactions/entities/transaction.entity";

@Injectable()
export class ChallengePassesService {
  constructor(
    @InjectRepository(ChallengePassEntity)
    private readonly challengePassesRepository: Repository<ChallengePassEntity>,
    private readonly transactionsService: TransactionsService
  ) {}

  async createChallengePass(
    data: ChallengePassInput,
    user: UserEntity,
    challenge: ChallengeEntity,
    wallet: WalletEntity
  ): Promise<ChallengePassEntity> {
    const transaction = await this.transactionsService.transferFunds(
      challenge.price,
      wallet,
      null,
      TransactionPurpose.enrollmentPayment
    );

    if (!(transaction.status === TransactionStatus.resolved)) {
      throw new BadRequestException(
        "Recieved transaction with status other than Resolved"
      );
    }

    return await this.challengePassesRepository.save({
      challenge: challenge,
      user: user,
      cost: challenge.price,
      obtainedAt: new Date(),
    });
  }

  async getChallengePasses(): Promise<ChallengePassEntity[]> {
    return await this.challengePassesRepository.find();
  }

  async getUserChallengePasses(
    user: UserEntity
  ): Promise<ChallengePassEntity[]> {
    return await this.challengePassesRepository.find({ user: user });
  }

  async getUserChallengePassesForChallenge(
    user: UserEntity,
    challenge: ChallengeEntity,
    filterInactive = false
  ): Promise<ChallengePassEntity[]> {
    const challengePasses = await this.challengePassesRepository.find({
      user: user,
      challenge: challenge,
    });

    return filterInactive
      ? challengePasses
      : challengePasses.filter((challengePass) => !challengePass.revokedAt);
  }

  async getChallengePassById(id: string): Promise<ChallengePassEntity> {
    return await this.challengePassesRepository.findOne(id);
  }
}
