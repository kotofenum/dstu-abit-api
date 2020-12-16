import { Field, InputType } from '@nestjs/graphql';
import { ExerciseKey } from '../entities/exercise-origin.entity';

@InputType()
export class ExerciseOriginInput {
  @Field()
  readonly name: string

  @Field(() => ExerciseKey)
  readonly key: ExerciseKey;

  @Field()
  readonly videoUrl: string;
}
