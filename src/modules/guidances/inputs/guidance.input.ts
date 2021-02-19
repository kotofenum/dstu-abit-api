import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class GuidanceInput {
  @Field()
  readonly title: string;

  @Field()
  readonly date: string;

  @Field()
  readonly description: string;

  @Field({ nullable: true })
  readonly link: string;
}
