import { UserEventDto } from './../../user-events/dto/user-event.dto';
import { ObjectType, Field } from "@nestjs/graphql";
import { AccountType } from "../entities/user.entity";

@ObjectType()
export class UserWithInterestsDto {
  @Field()
  readonly uid: string;

  @Field({ nullable: true })
  readonly firstName: string;

  @Field({ nullable: true })
  readonly lastName: string;

  @Field({ nullable: true })
  readonly patronym: string;

  @Field(() => AccountType)
  readonly type: AccountType;

  @Field({ nullable: true })
  readonly birthDate: Date;

  @Field({ nullable: true })
  readonly country: string;

  @Field({ nullable: true })
  readonly locality: string;

  @Field({ nullable: true })
  readonly email: string;

  @Field({ nullable: true })
  readonly pwd: string;

  @Field({ nullable: true })
  readonly school: string;

  @Field({ nullable: true })
  readonly position: string;

  @Field({ nullable: true })
  readonly child: string;

  @Field({ nullable: true })
  readonly course: string;

  @Field()
  readonly phone: string;

  @Field()
  readonly emailVerified: boolean;

  @Field()
  readonly phoneVerified: boolean;

  @Field()
  readonly isAdmin: boolean;

  @Field({ nullable: true })
  readonly picture: string;

  @Field(() => [UserEventDto])
  readonly userEvents: UserEventDto[];
}
