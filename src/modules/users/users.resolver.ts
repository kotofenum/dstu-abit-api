import { UsersService } from "./users.service";
import { UserEntity } from "./entities/user.entity";
import {
  Resolver,
  Query,
  Mutation,
  Args,
  ID,
  Subscription,
} from "@nestjs/graphql";
import { UserDto } from "./dto/user.dto";
import { UserInput } from "./inputs/user.input";
import { AuthGuard } from "src/guards/auth.guard";
import { UseGuards } from "@nestjs/common";
import { AuthUser } from "src/decorators/auth-user.decorator";
import { TransactionDto } from "../transactions/dto/transaction.dto";
import { DepositFundsInput } from "./inputs/deposit-funds.input";
import { WalletsService } from "../wallets/wallets.service";
import { TransactionsService } from "../transactions/transactions.service";
import { WithdrawFundsInput } from "./inputs/withdraw-funds.input";
import { TransactionPurpose } from "../transactions/entities/transaction.entity";
import { socket } from "src/main";
import { WalletDto } from "../wallets/dto/wallet.dto";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";

@Resolver(() => UserEntity)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly walletsService: WalletsService,
    private readonly transactionsService: TransactionsService
  ) {}

  @Query(() => [UserDto])
  async users(): Promise<UserDto[]> {
    return this.usersService.getUsers();
  }

  @Query(() => UserDto)
  async user(@Args("uid", { type: () => ID }) uid: string): Promise<UserDto> {
    return this.usersService.getUserById(uid);
  }

  @Mutation(() => UserDto)
  @UseGuards(AuthGuard)
  async addUser(
    @Args("input") input: UserInput,
    @AuthUser() user: UserEntity
  ): Promise<UserDto> {
    if (!user) {
      return this.usersService.createUser(input);
    } else {
      return user;
    }
  }

  @Mutation(() => TransactionDto)
  @UseGuards(AuthGuard)
  async depositFunds(
    @Args("input") input: DepositFundsInput,
    @AuthUser() user: UserEntity
  ): Promise<TransactionDto> {
    const wallets = await this.walletsService.getUserWallets(user);
    const targetWallet = wallets[0];

    if (targetWallet) {
      const transaction = await this.transactionsService.transferFunds(
        input.amount,
        undefined,
        targetWallet,
        TransactionPurpose.depositFunds
      );

      await socket.publish("balanceUpdated", {
        balanceUpdated: transaction.to,
      });

      return transaction;
    }

    return null;
  }

  @Mutation(() => TransactionDto)
  @UseGuards(AuthGuard)
  async withdrawFunds(
    @Args("input") input: WithdrawFundsInput,
    @AuthUser() user: UserEntity
  ): Promise<TransactionDto> {
    const wallets = await this.walletsService.getUserWallets(user);
    const targetWallet = wallets[0];

    if (targetWallet) {
      const transaction = await this.transactionsService.transferFunds(
        input.amount,
        targetWallet,
        undefined,
        TransactionPurpose.withdrawFunds
      );

      await socket.publish("balanceUpdated", {
        balanceUpdated: transaction.from,
      });

      return transaction;
    }

    return null;
  }

  @Subscription(() => WalletDto, {
    filter: (payload, vars, context) => {
      console.log(payload, vars, context);
      return true;
    },
  })
  balanceUpdated() {
    return socket.asyncIterator("balanceUpdated");
  }
}
