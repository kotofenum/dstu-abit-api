import graphqlTypeJson from "graphql-type-json";
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class EditEventInput {
  @Field()
  readonly eventId: string;

  @Field({ nullable: true })
  readonly description: string;
  
  @Field({ nullable: true })
  readonly title: string;

  @Field({ nullable: true })
  readonly link: string;
}
