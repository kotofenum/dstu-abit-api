import { Field, InputType } from "@nestjs/graphql";
@InputType()
export class VisitInput {
  @Field()
  readonly eventId: string;
}
