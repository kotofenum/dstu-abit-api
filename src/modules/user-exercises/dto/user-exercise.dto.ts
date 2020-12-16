import graphqlTypeJson from "graphql-type-json";
import { ObjectType, Field } from "@nestjs/graphql";
import { ChallengeExerciseDto } from "src/modules/challenge-exercises/dto/challenge-exercise.dto";
import { ExerciseFrame } from "../entities/user-exercise.entity";
import { UserTrainingDto } from "src/modules/user-trainings/dto/user-training.dto";

@ObjectType()
export class UserExerciseDto {
  @Field()
  readonly uid: string;

  @Field()
  readonly challengeExercise: ChallengeExerciseDto;

  @Field()
  readonly training: UserTrainingDto;

  @Field()
  readonly score: number;

  @Field(() => graphqlTypeJson, { nullable: true })
  readonly frames: ExerciseFrame[];

  @Field({ nullable: true })
  readonly startedAt: Date;

  @Field({ nullable: true })
  readonly endedAt: Date;
}
