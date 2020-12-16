import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class TransactionInput {
  @Field()
  readonly amount: number;

  @Field()
  readonly fromWalletId?: string;

  @Field()
  readonly toWalletId?: string;
}
