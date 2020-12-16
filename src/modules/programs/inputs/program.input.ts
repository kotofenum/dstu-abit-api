import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class ProgramInput {
  @Field()
  readonly title: string;

  @Field()
  readonly attendance: boolean;

  @Field()
  readonly degree: string;

  @Field()
  readonly studyPeriod: number;

  @Field()
  readonly languages: string;

  @Field()
  readonly description: string;

  @Field()
  readonly specialtyId: string;
}
