import { ObjectType, Field } from "@nestjs/graphql";
import { UserDto } from "src/modules/users/dto/user.dto";

@ObjectType()
export class PreuniversityRequestDto {
  @Field()
  readonly uid: string;

  @Field()
  readonly category: string;

  @Field({ nullable: true })
  readonly subcategory: string;

  @Field()
  readonly program: string;

  @Field()
  readonly user: UserDto;
}
