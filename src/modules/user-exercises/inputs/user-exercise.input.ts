import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserExerciseInput {
  @Field()
  readonly challengeExerciseId: string;

  @Field()
  readonly trainingId: string;
}
