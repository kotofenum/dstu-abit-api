import { WalletEntity } from "src/modules/wallets/entities/wallet.entity";
export declare enum TransactionPurpose {
    internalTransfer = "internal_transfer",
    depositFunds = "deposit_funds",
    withdrawFunds = "withdraw_funds",
    winningsPayout = "winnings_payout",
    enrollmentPayment = "enrollment_payment",
    transferForDistribution = "transfer_for_distribution",
    other = "other"
}
export declare enum TransactionStatus {
    queued = "queued",
    processing = "processing",
    suspended = "suspended",
    pending = "pending",
    rejected = "rejected",
    resolved = "resolved"
}
export declare class TransactionEntity {
    uid: string;
    amount: number;
    from: WalletEntity;
    to: WalletEntity;
    purpose: TransactionPurpose;
    status: TransactionStatus;
    description: string;
    dateCreated: Date;
    dateUpdated: Date;
    dateDeleted: Date;
}
