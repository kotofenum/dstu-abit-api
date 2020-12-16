import { TransactionsService } from "./transactions.service";
import { TransactionDto } from "./dto/transaction.dto";
export declare class TransactionsResolver {
    private readonly transactionsService;
    constructor(transactionsService: TransactionsService);
    transactions(): Promise<TransactionDto[]>;
    transaction(uid: string): Promise<TransactionDto>;
}
