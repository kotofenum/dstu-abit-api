import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class SpecialtiesOfMajorInput {
  @Field()
  readonly majorId: string
}
