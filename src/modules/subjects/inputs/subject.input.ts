import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class SubjectInput {
  @Field()
  readonly title: string;
}
