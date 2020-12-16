import { Field, InputType } from "@nestjs/graphql";
import { AccountType } from "../entities/user.entity";

@InputType()
export class CreateUserInput {
  @Field()
  readonly phone: string;

  @Field(() => AccountType)
  readonly type: AccountType;
}
