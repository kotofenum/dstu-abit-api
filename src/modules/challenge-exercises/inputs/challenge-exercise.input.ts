import { Field, InputType } from '@nestjs/graphql';
import { ExerciseType } from '../entities/challenge-exercise.entity';

@InputType()
export class ChallengeExerciseInput {
  @Field()
  readonly exerciseOriginId: string

  @Field()
  readonly challengeId: string

  @Field(() => ExerciseType)
  readonly type: ExerciseType;

  @Field()
  readonly goal: number;

  @Field({ nullable: true })
  readonly customVideoUrl: string;
}
