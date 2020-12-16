import graphqlTypeJson from "graphql-type-json";
import { Field, InputType } from "@nestjs/graphql";
import { AccountType } from "src/modules/users/entities/user.entity";

@InputType()
export class CodeInput {
  @Field()
  readonly phone: string;

  @Field(() => AccountType)
  readonly type: AccountType;
}
