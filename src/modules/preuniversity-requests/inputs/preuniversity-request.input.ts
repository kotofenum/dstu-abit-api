import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class PreuniversityRequestInput {
  @Field()
  readonly category: string;

  @Field({ nullable: true })
  readonly subcategory: string;

  @Field()
  readonly program: string;
}
