import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { ChallengePassesResolver } from "./challenge-passes.resolver";
import { ChallengePassesService } from "./challenge-passes.service";
import { ChallengePassEntity } from "./entities/challenge-pass.entity";
import { AuthGuard } from "src/guards/auth.guard";
import { UsersModule } from "../users/users.module";
import { ChallengesService } from "../challenges/challenges.service";
import { ChallengeEntity } from "../challenges/entities/challenge.entity";
import { WalletsService } from "../wallets/wallets.service";
import { WalletEntity } from "../wallets/entities/wallet.entity";
import { TransactionsService } from "../transactions/transactions.service";
import { TransactionEntity } from "../transactions/entities/transaction.entity";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ChallengePassEntity,
      ChallengeEntity,
      WalletEntity,
      TransactionEntity
    ]),
    AuthModule,
  ],
  providers: [
    ChallengePassesResolver,
    ChallengePassesService,
    ChallengesService,
    WalletsService,
    TransactionsService,
    AuthGuard,
  ],
  exports: [ChallengePassesService, AuthGuard],
})
export class ChallengePassesModule {}
