import { Field, InputType } from "@nestjs/graphql";
import { TagRelationType } from "src/modules/user-tags/entities/user-tag.entity";
// import { TagRelationType } from "../entities/event-tag.entity";

@InputType()
export class ProgramSubjectInput {
  @Field()
  readonly eventId: string;

  @Field()
  readonly programId: string;

  @Field()
  readonly subjectId: string;
}
