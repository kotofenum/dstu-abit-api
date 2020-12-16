import { Wallet } from "./wallet";

enum TransactionPurpose {
  transferFundsToWallet,
  debitFundsFromWallet,
  winningsPayout,
  enrollmentPayment,
  transferForDistribution,
  other
}

export interface Transaction {
  uid: string;
  amount: number;
  from: Wallet | 'outside';
  to: Wallet | 'outside';
  purpose: TransactionPurpose;
  description?: string;
}