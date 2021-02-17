import { Field, InputType } from "@nestjs/graphql";
@InputType()
export class UserEventInput {
  @Field()
  readonly eventId: string;
}
