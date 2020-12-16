import { UsersService } from "./users.service";
import { UserEntity } from "./entities/user.entity";
import { UserDto } from "./dto/user.dto";
import { TransactionDto } from "../transactions/dto/transaction.dto";
import { DepositFundsInput } from "./inputs/deposit-funds.input";
import { WalletsService } from "../wallets/wallets.service";
import { TransactionsService } from "../transactions/transactions.service";
import { WithdrawFundsInput } from "./inputs/withdraw-funds.input";
import { CreateUserInput } from "./inputs/create-user.input";
import { UpdateUserInput } from "./inputs/update-user.input";
export declare class UsersResolver {
    private readonly usersService;
    private readonly walletsService;
    private readonly transactionsService;
    constructor(usersService: UsersService, walletsService: WalletsService, transactionsService: TransactionsService);
    users(): Promise<UserDto[]>;
    user(uid: string): Promise<UserDto>;
    createUser(input: CreateUserInput): Promise<UserDto>;
    updateUser(input: UpdateUserInput, user: UserEntity): Promise<UserDto>;
    depositFunds(input: DepositFundsInput, user: UserEntity): Promise<TransactionDto>;
    withdrawFunds(input: WithdrawFundsInput, user: UserEntity): Promise<TransactionDto>;
    balanceUpdated(): AsyncIterator<unknown, any, undefined>;
}
