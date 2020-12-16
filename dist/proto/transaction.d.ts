import { Wallet } from "./wallet";
declare enum TransactionPurpose {
    transferFundsToWallet = 0,
    debitFundsFromWallet = 1,
    winningsPayout = 2,
    enrollmentPayment = 3,
    transferForDistribution = 4,
    other = 5
}
export interface Transaction {
    uid: string;
    amount: number;
    from: Wallet | 'outside';
    to: Wallet | 'outside';
    purpose: TransactionPurpose;
    description?: string;
}
export {};
