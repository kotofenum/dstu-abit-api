import { MajorDto } from 'src/modules/majors/dto/major.dto';
import { ProgramDto } from '../../programs/dto/program.dto';
import { SpecialtyDto } from '../../specialties/dto/specialty.dto';
import { ChallengeDto } from '../../challenges/dto/challenge.dto';
import { ObjectType, Field } from '@nestjs/graphql';
import { UserDto } from 'src/modules/users/dto/user.dto';
import { UserExerciseDto } from 'src/modules/user-exercises/dto/user-exercise.dto';

@ObjectType()
export class ConnectedEventTagsDto {
  @Field(() => [MajorDto])
  readonly majors: MajorDto[];

  @Field(() => [SpecialtyDto])
  readonly specialties: SpecialtyDto[];

  @Field(() => [ProgramDto])
  readonly programs: ProgramDto[];
}
