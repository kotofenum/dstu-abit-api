import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { TransactionsResolver } from "./transactions.resolver";
import { TransactionsService } from "./transactions.service";
import { TransactionEntity } from "./entities/transaction.entity";
import { AuthGuard } from "src/guards/auth.guard";
import { UsersModule } from "../users/users.module";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [TypeOrmModule.forFeature([TransactionEntity]), AuthModule],
  providers: [TransactionsResolver, TransactionsService, AuthGuard],
  exports: [TransactionsService, AuthGuard],
})
export class TransactionsModule {}
