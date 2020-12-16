import { ObjectType, Field } from '@nestjs/graphql';
import { ChallengeDto } from 'src/modules/challenges/dto/challenge.dto';
import { UserDto } from 'src/modules/users/dto/user.dto';

@ObjectType()
export class ChallengePassDto {
  @Field()
  readonly uid: string;

  @Field()
  readonly challenge: ChallengeDto;

  @Field()
  readonly user: UserDto;

  @Field()
  readonly cost: number;

  @Field()
  readonly obtainedAt: Date;

  @Field({ nullable: true })
  readonly revokedAt: Date;
}
