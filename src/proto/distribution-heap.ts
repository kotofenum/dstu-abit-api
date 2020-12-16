import { Challenge } from "./challenge";
import { Transaction } from "./transaction";
import { User } from "./user";
import { Wallet } from "./wallet";

interface Winner {
  user: User;
  amount: number;
  finalRate: number;
  transaction: Transaction;
}

interface DistributionHeap {
  uid: string;
  challenge: Challenge
  wallet: Wallet
  baseRate: number;
  createdAt: Date;
  distributingAt: Date;
  closedAt: Date;
}