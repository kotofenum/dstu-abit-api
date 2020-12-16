import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class WithdrawFundsInput {
  @Field()
  readonly amount: number;
}
