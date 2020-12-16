import { ChallengeDto } from "../../challenges/dto/challenge.dto";
import { ObjectType, Field } from "@nestjs/graphql";
import { UserDto } from "src/modules/users/dto/user.dto";
import { UserExerciseDto } from "src/modules/user-exercises/dto/user-exercise.dto";
import { TagRelationType } from "src/modules/user-tags/entities/user-tag.entity";
import { EventDto } from "src/modules/events/dto/event.dto";

@ObjectType()
export class EventTagDto {
  @Field()
  readonly uid: string;

  @Field()
  readonly event: EventDto;

  @Field()
  readonly relationId: string;

  @Field(() => TagRelationType)
  readonly relationType: TagRelationType;
}
