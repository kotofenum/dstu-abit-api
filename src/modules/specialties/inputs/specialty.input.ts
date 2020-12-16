import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class SpecialtyInput {
  @Field()
  readonly title: string;

  @Field()
  readonly code: string;

  @Field()
  readonly majorId: string
}
