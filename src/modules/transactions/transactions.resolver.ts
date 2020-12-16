import { TransactionsService } from "./transactions.service";
import { TransactionEntity } from "./entities/transaction.entity";
import { Resolver, Query, Mutation, Args, ID } from "@nestjs/graphql";
import { TransactionDto } from "./dto/transaction.dto";

@Resolver(() => TransactionEntity)
export class TransactionsResolver {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Query(() => [TransactionDto])
  async transactions(): Promise<TransactionDto[]> {
    return this.transactionsService.getTransactions();
  }

  // @Query(() => [TransactionDto])
  // @UseGuards(AuthGuard)
  // async myTransactions(@AuthUser() user: UserEntity): Promise<TransactionDto[]> {
  //   return this.transactionsService.getUserTransactions(user);
  // }

  @Query(() => TransactionDto)
  async transaction(
    @Args("uid", { type: () => ID }) uid: string
  ): Promise<TransactionDto> {
    return this.transactionsService.getTransactionById(uid);
  }
}
