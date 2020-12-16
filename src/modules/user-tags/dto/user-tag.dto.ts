import { ChallengeDto } from '../../challenges/dto/challenge.dto';
import { ObjectType, Field } from '@nestjs/graphql';
import { UserDto } from 'src/modules/users/dto/user.dto';
import { UserExerciseDto } from 'src/modules/user-exercises/dto/user-exercise.dto';
import { TagRelationType } from '../entities/user-tag.entity';

@ObjectType()
export class UserTagDto {
  @Field()
  readonly uid: string;

  @Field()
  readonly relationId: string;

  @Field(() => TagRelationType)
  readonly relationType: TagRelationType;

  @Field()
  readonly user: UserDto;
}
