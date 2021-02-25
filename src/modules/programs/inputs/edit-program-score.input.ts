import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class EditProgramScoreInput  {
  @Field()
  readonly uid: string;

  @Field()
  readonly score: number;
}
