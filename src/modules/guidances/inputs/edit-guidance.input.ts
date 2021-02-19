import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class EditGuidanceInput {
  @Field()
  readonly uid: string;

  @Field()
  readonly title: string;

  @Field()
  readonly date: string;

  @Field()
  readonly description: string;

  @Field({ nullable: true })
  readonly link: string;
}
