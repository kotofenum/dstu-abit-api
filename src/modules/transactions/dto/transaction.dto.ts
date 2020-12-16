import { ObjectType, Field } from "@nestjs/graphql";
import { WalletDto } from "src/modules/wallets/dto/wallet.dto";
import {
  TransactionPurpose,
  TransactionStatus,
} from "../entities/transaction.entity";

@ObjectType()
export class TransactionDto {
  @Field()
  readonly uid: string;

  @Field()
  readonly amount: number;

  @Field({ nullable: true })
  readonly from: WalletDto;

  @Field({ nullable: true })
  readonly to: WalletDto;

  @Field()
  readonly purpose: TransactionPurpose;

  @Field()
  readonly status: TransactionStatus;

  @Field({ nullable: true })
  readonly description: string;
}
