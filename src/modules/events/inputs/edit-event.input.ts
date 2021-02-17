import graphqlTypeJson from "graphql-type-json";
import { Field, InputType } from "@nestjs/graphql";
import { EventInput } from "./event.input";

@InputType()
export class EditEventInput extends EventInput {
  @Field()
  readonly eventId: string;
}
