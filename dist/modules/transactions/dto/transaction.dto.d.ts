import { WalletDto } from "src/modules/wallets/dto/wallet.dto";
import { TransactionPurpose, TransactionStatus } from "../entities/transaction.entity";
export declare class TransactionDto {
    readonly uid: string;
    readonly amount: number;
    readonly from: WalletDto;
    readonly to: WalletDto;
    readonly purpose: TransactionPurpose;
    readonly status: TransactionStatus;
    readonly description: string;
}
