import { UsersService } from "./users.service";
import { UserEntity } from "./entities/user.entity";
import { UserDto } from "./dto/user.dto";
import { UserInput } from "./inputs/user.input";
import { TransactionDto } from "../transactions/dto/transaction.dto";
import { DepositFundsInput } from "./inputs/deposit-funds.input";
import { WalletsService } from "../wallets/wallets.service";
import { TransactionsService } from "../transactions/transactions.service";
import { WithdrawFundsInput } from "./inputs/withdraw-funds.input";
export declare class UsersResolver {
    private readonly usersService;
    private readonly walletsService;
    private readonly transactionsService;
    constructor(usersService: UsersService, walletsService: WalletsService, transactionsService: TransactionsService);
    users(): Promise<UserDto[]>;
    user(uid: string): Promise<UserDto>;
    addUser(input: UserInput, user: UserEntity): Promise<UserDto>;
    depositFunds(input: DepositFundsInput, user: UserEntity): Promise<TransactionDto>;
    withdrawFunds(input: WithdrawFundsInput, user: UserEntity): Promise<TransactionDto>;
    balanceUpdated(): AsyncIterator<unknown, any, undefined>;
}
