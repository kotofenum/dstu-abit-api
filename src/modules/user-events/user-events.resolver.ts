import { UserEventsService } from "./user-events.service";
import { UserEventEntity } from "./entities/user-event.entity";
import { Resolver, Query, Mutation, Args, ID } from "@nestjs/graphql";
import { UserEventDto } from "./dto/user-event.dto";
import { UserEventInput } from "./inputs/user-event.input";
import { AuthUser } from "src/decorators/auth-user.decorator";
import { UserEntity } from "../users/entities/user.entity";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/guards/auth.guard";

@Resolver(() => UserEventEntity)
export class UserEventsResolver {
  constructor(private readonly userEventsService: UserEventsService) {}

  @Query(() => [UserEventDto])
  async userEvents(): Promise<UserEventDto[]> {
    return this.userEventsService.getUserEvents();
  }

  @Query(() => [UserEventDto])
  @UseGuards(AuthGuard)
  async myUserEvents(@AuthUser() user: UserEntity): Promise<UserEventDto[]> {
    return this.userEventsService.getUserEventsForUser(user);
  }

  @Query(() => UserEventDto)
  async userEvent(
    @Args("uid", { type: () => ID }) uid: string
  ): Promise<UserEventDto> {
    return this.userEventsService.getUserEventById(uid);
  }

  @Mutation(() => UserEventDto)
  @UseGuards(AuthGuard)
  async visitEvent(
    @Args("input") input: UserEventInput,
    @AuthUser() user: UserEntity
  ): Promise<UserEventDto> {
    console.log("visit usa", user);
    return this.userEventsService.visitEvent(input, user);
  }

  @Mutation(() => UserEventDto)
  @UseGuards(AuthGuard)
  async leaveEvent(
    @Args("input") input: UserEventInput,
    @AuthUser() user: UserEntity
  ): Promise<UserEventDto> {
    return this.userEventsService.leaveEvent(input, user);
  }
}
