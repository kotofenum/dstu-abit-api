import { ObjectType, Field } from '@nestjs/graphql';
import { ChallengeDto } from 'src/modules/challenges/dto/challenge.dto';
import { ExerciseOriginDto } from 'src/modules/exercise-origins/dto/exercise-origin.dto';
import { ExerciseType } from '../entities/challenge-exercise.entity';

@ObjectType()
export class ChallengeExerciseDto {
  @Field()
  readonly uid: string;

  @Field()
  readonly origin: ExerciseOriginDto;

  @Field()
  readonly challenge: ChallengeDto;

  @Field(() => ExerciseType)
  readonly type: ExerciseType;

  @Field()
  readonly goal: number;

  @Field({ nullable: true})
  readonly customVideoUrl: string;
}
