import graphqlTypeJson from "graphql-type-json";
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class EditEventInput {
  @Field()
  readonly eventId: string;

  @Field({ nullable: true })
  readonly description: string;
}