import { ObjectType, Field } from "@nestjs/graphql";
import { UserDto } from "src/modules/users/dto/user.dto";

@ObjectType()
export class AccessDto {
  @Field({ nullable: true })
  readonly access_token: string;
}
