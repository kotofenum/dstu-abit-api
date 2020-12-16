import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { UsersResolver } from "./users.resolver";
import { UsersService } from "./users.service";
import { UserEntity } from "./entities/user.entity";
import { JwtModule } from "@nestjs/jwt/dist";
import { AuthGuard } from "src/guards/auth.guard";
import { WalletsService } from "../wallets/wallets.service";
import { WalletEntity } from "../wallets/entities/wallet.entity";
import { TransactionsService } from "../transactions/transactions.service";
import { TransactionEntity } from "../transactions/entities/transaction.entity";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [
    // JwtModule.register({
    //   publicKey: `-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7XiAR4ehLrXp2bhjo0Ou
    //   G/9q79T+rLs1iX9PLurCxIdzI75p2tGZqpVYQP2LNOiy314KcHR4j3J1tWXHaeBs
    //   OZr623qEKR6o8pu4YTWRpR3WRg3YxoNhTsDXiW2zE6IRftUvWE2nAkZ7/hk+Ak/P
    //   lEgohPeP/8rVITUaSLQpz0PMkW59dvjqpsj3XzO9sBsSeL54ZwSYhLPBn4LVeFCI
    //   tmhTZffd4MO6oCpNJnvGSNWPAJOEHAGMeQ+2oTsqJ5LTl+aFmR0LMAdkf53/VeQ0
    //   MMeQnowDImTdm3M8fDkE56T/Qoyq6vRSwFZ5cR4/a0JcytQATVsnUYvBJVD7eiZI
    //   RQIDAQAB\n-----END PUBLIC KEY-----`,
    //   signOptions: {
    //     audience: process.env.AUTH0_AUDIENCE,
    //     issuer: process.env.AUTH0_ISSUER_URL,
    //     algorithm: "RS256",
    //   },
    // }),
    AuthModule,
    TypeOrmModule.forFeature([UserEntity, WalletEntity, TransactionEntity]),
  ],
  providers: [UsersResolver, UsersService, WalletsService, TransactionsService],
  exports: [UsersService],
})
export class UsersModule {}
