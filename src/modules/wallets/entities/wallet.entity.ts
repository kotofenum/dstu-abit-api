import { registerEnumType } from "@nestjs/graphql";
import { TransactionEntity } from "src/modules/transactions/entities/transaction.entity";
import { UserEntity } from "src/modules/users/entities/user.entity";
import { WalletType } from "src/proto/wallet";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";


registerEnumType(WalletType, {
  name: "WalletType",
})

@Entity("wallets")
export class WalletEntity {
  @PrimaryGeneratedColumn("uuid") uid: string;

  @Column()
  balance: number;

  @ManyToOne(
    () => UserEntity,
    (user) => user.wallets,
    {
      eager: true,
    }
  )
  owner: UserEntity;

  @Column()
  type: WalletType;

  @Column({
    default: false,
  })
  secure: boolean;

  @OneToMany(
    () => TransactionEntity,
    transaction => transaction.from,
    {
      cascade: true,
    },
  )
  @JoinColumn()
  outgoing: TransactionEntity[];

  @OneToMany(
    () => TransactionEntity,
    transaction => transaction.to,
    {
      cascade: true,
    },
  )
  @JoinColumn()
  incoming: TransactionEntity[];

  @CreateDateColumn()
  dateCreated: Date;

  @UpdateDateColumn()
  dateUpdated: Date;

  @DeleteDateColumn()
  dateDeleted: Date;
}
