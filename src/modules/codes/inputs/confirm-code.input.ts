import graphqlTypeJson from "graphql-type-json";
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class ConfirmCodeInput {
  @Field()
  readonly phone: string;

  @Field()
  readonly code: string;
}
