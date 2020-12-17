import { ObjectType, Field } from "@nestjs/graphql";
import { UserDto } from "src/modules/users/dto/user.dto";

@ObjectType()
export class CodeDto {
  @Field()
  readonly uid: string;

  @Field()
  readonly code: string;

  @Field()
  readonly phone: string;

  @Field()
  readonly expireAt: Date;

  @Field()
  readonly issuer: UserDto;
}
