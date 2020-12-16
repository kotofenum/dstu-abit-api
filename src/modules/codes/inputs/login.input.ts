import graphqlTypeJson from "graphql-type-json";
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class LoginInput {
  @Field()
  readonly phone: string;

  @Field()
  readonly password: string;
}
