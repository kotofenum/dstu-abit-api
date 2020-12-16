import { TransactionEntity, TransactionPurpose } from "./entities/transaction.entity";
import { Repository } from "typeorm";
import { WalletEntity } from "../wallets/entities/wallet.entity";
export declare class TransactionsService {
    private readonly transactionsRepository;
    constructor(transactionsRepository: Repository<TransactionEntity>);
    transferFunds(amount: number, from?: WalletEntity, to?: WalletEntity, purpose?: TransactionPurpose): Promise<TransactionEntity>;
    getTransactions(): Promise<TransactionEntity[]>;
    getOutgoingWalletTransactions(wallet: WalletEntity): Promise<TransactionEntity[]>;
    getIncomingWalletTransactions(wallet: WalletEntity): Promise<TransactionEntity[]>;
    getTransactionById(id: string): Promise<TransactionEntity>;
}
