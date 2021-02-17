import { ObjectType, Field } from "@nestjs/graphql";
import { EventDto } from "src/modules/events/dto/event.dto";
import { UserDto } from "src/modules/users/dto/user.dto";

@ObjectType()
export class UserEventDto {
  @Field()
  readonly uid: string;

  @Field()
  readonly user: UserDto;

  @Field()
  readonly event: EventDto;

  @Field()
  readonly attending: boolean;
}
