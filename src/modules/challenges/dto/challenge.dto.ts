import { ObjectType, Field } from "@nestjs/graphql";
import { UserDto } from "src/modules/users/dto/user.dto";
import graphqlTypeJson from "graphql-type-json";
import { ChallengeConfig } from "src/proto/challenge";
import { ChallengeExerciseDto } from "src/modules/challenge-exercises/dto/challenge-exercise.dto";

@ObjectType()
export class ChallengeDto {
  @Field()
  readonly uid: string;

  @Field()
  readonly title: string;

  @Field({ nullable: true })
  readonly description: string;

  @Field()
  readonly owner: UserDto;

  @Field()
  readonly price: number;

  @Field(() => graphqlTypeJson, { nullable: true })
  readonly config: ChallengeConfig;

  @Field()
  readonly startsAt: Date;

  @Field()
  readonly endsAt: Date;
}
