import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DepositFundsInput {
  @Field()
  readonly amount: number;
}
