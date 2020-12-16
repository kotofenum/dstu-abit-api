import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class UserDto {
  @Field()
  readonly uid: string;

  @Field()
  readonly firstName: string;

  @Field()
  readonly lastName: string;

  @Field()
  readonly email: string;

  @Field()
  readonly phone: string;

  @Field()
  readonly emailVerified: boolean;

  @Field()
  readonly phoneVerified: boolean;

  @Field()
  readonly picture: string;
}
