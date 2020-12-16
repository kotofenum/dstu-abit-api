import { ChallengeDto } from './../../challenges/dto/challenge.dto';
import { ObjectType, Field } from '@nestjs/graphql';
import { UserDto } from 'src/modules/users/dto/user.dto';
import { UserExerciseDto } from 'src/modules/user-exercises/dto/user-exercise.dto';

@ObjectType()
export class UserTrainingDto {
  @Field()
  readonly uid: string;

  @Field()
  readonly challenge: ChallengeDto;

  @Field(() => [UserExerciseDto])
  readonly exercises: UserExerciseDto[];

  @Field()
  readonly user: UserDto;
  
  @Field({ nullable: true })
  readonly startedAt: Date;

  @Field({ nullable: true })
  readonly endedAt: Date;
}
