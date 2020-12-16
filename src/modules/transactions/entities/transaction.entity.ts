import { WalletEntity } from "src/modules/wallets/entities/wallet.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
} from "typeorm";

export enum TransactionPurpose {
  internalTransfer = "internal_transfer",
  depositFunds = "deposit_funds",
  withdrawFunds = "withdraw_funds",
  winningsPayout = "winnings_payout",
  enrollmentPayment = "enrollment_payment",
  transferForDistribution = "transfer_for_distribution",
  other = "other",
}

export enum TransactionStatus {
  queued = "queued",
  processing = "processing",
  suspended = "suspended",
  pending = "pending",
  rejected = "rejected",
  resolved = "resolved",
}

@Entity("transactions")
export class TransactionEntity {
  @PrimaryGeneratedColumn("uuid") uid: string;

  @Column()
  amount: number;

  @ManyToOne(
    () => WalletEntity,
    (wallet) => wallet.outgoing,
    {
      eager: true,
      nullable: true,
    }
  )
  from: WalletEntity;

  @ManyToOne(
    () => WalletEntity,
    (wallet) => wallet.incoming,
    {
      eager: true,
      nullable: true,
    }
  )
  to: WalletEntity;

  @Column({ default: TransactionPurpose.other })
  purpose: TransactionPurpose;

  @Column()
  status: TransactionStatus;

  @Column({ nullable: true })
  description: string;

  @CreateDateColumn()
  dateCreated: Date;

  @UpdateDateColumn()
  dateUpdated: Date;

  @DeleteDateColumn()
  dateDeleted: Date;
}
