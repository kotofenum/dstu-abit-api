import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class ProgramsOfSpecialtyInput {
  @Field()
  readonly specialtyId: string
}
