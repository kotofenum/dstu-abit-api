import graphqlTypeJson from "graphql-type-json";
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class JoinEventInput {
  @Field()
  readonly eventId: string;
}
