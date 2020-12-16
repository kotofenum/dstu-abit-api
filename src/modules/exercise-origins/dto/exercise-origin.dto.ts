import { ObjectType, Field } from '@nestjs/graphql';
import { UserDto } from 'src/modules/users/dto/user.dto';
import { ExerciseKey } from '../entities/exercise-origin.entity';

@ObjectType()
export class ExerciseOriginDto {
  @Field()
  readonly uid: string;

  @Field()
  readonly name: string;

  @Field()
  readonly owner: UserDto;

  @Field(() => ExerciseKey)
  readonly key: ExerciseKey;

  @Field()
  readonly videoUrl: string;
}
