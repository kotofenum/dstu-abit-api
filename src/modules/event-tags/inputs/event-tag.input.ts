import { Field, InputType } from "@nestjs/graphql";
import { TagRelationType } from "src/modules/user-tags/entities/user-tag.entity";
// import { TagRelationType } from "../entities/event-tag.entity";

@InputType()
export class EventTagInput {
  @Field()
  readonly eventId: string;

  @Field()
  readonly relationId: string;

  @Field(() => TagRelationType)
  readonly relationType: TagRelationType;
}
