import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class WalletInput {
  @Field()
  readonly ownerUid?: string;
}
