import { UserWithInterestsDto } from './dto/user-with-interests.dto';
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
import { CreateUserInput } from "./inputs/create-user.input";
import { UpdateUserInput } from "./inputs/update-user.input";
import { EditUserInput } from "./inputs/edit-user.input";
import { UsersWithInterestsService } from './users-with-interests.service';

@Resolver(() => UserEntity)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly walletsService: WalletsService,
    private readonly transactionsService: TransactionsService,
    private readonly usersWithInterestsService: UsersWithInterestsService,
  ) {}

  @Query(() => [UserDto])
  async users(): Promise<UserDto[]> {
    return this.usersService.getUsers();
  }

  @Query(() => UserDto)
  async user(@Args("uid", { type: () => ID }) uid: string): Promise<UserDto> {
    return this.usersService.getUserById(uid);
  }

  @Query(() => [UserWithInterestsDto])
  async usersWithInterests(): Promise<UserWithInterestsDto[]> {
    return this.usersWithInterestsService.getUsersWithInterests();
  }

  @Query(() => UserDto)
  @UseGuards(AuthGuard)
  async me(@AuthUser() user: UserEntity): Promise<UserDto> {
    return this.usersService.getUserById(user.uid);
  }

  @Mutation(() => UserDto)
  async createUser(@Args("input") input: CreateUserInput): Promise<UserDto> {
    return this.usersService.upsertUser(input);
  }

  @Mutation(() => UserDto)
  @UseGuards(AuthGuard)
  async updateUser(
    @Args("input") input: UpdateUserInput,
    @AuthUser() user: UserEntity
  ): Promise<UserDto> {
    return this.usersService.updateUser(input, user);
  }

  @Mutation(() => UserDto)
  @UseGuards(AuthGuard)
  async editUser(
    @Args("input") input: EditUserInput,
    @AuthUser() user: UserEntity
  ): Promise<UserDto> {
    return this.usersService.editUser(input, user);
  }

  // @Mutation(() => UserDto)
  // async confirmCode(
  //   @Args("input") input: CreateUserInput
  // ): Promise<UserDto> {
  //     return this.usersService.upsertUser(input);
  // }

  // @Mutation(() => UserDto)
  // @UseGuards(AuthGuard)
  // async addUser(
  //   @Args("input") input: UserInput,
  //   @AuthUser() user: UserEntity
  // ): Promise<UserDto> {
  //   if (!user) {
  //     return this.usersService.createUser(input);
  //   } else {
  //     return user;
  //   }
  // }

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
