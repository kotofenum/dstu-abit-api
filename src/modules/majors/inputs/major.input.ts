import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class MajorInput {
  @Field()
  readonly title: string;

  @Field()
  readonly code: string;

  @Field()
  readonly fundedPlaces: number;
}
