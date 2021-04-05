import { UserEventsService } from "./user-events.service";
import { UserEventEntity } from "./entities/user-event.entity";
import { Resolver, Query, Mutation, Args, ID } from "@nestjs/graphql";
import { UserEventDto } from "./dto/user-event.dto";
import { UserEventInput } from "./inputs/user-event.input";
import { AuthUser } from "src/decorators/auth-user.decorator";
import { UserEntity } from "../users/entities/user.entity";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/guards/auth.guard";
import { UsersService } from "../users/users.service";
import { UserDto } from "../users/dto/user.dto";

@Resolver(() => UserEventEntity)
export class UserEventsResolver {
  constructor(private readonly userEventsService: UserEventsService,
    private readonly usersService: UsersService) {}

  @Query(() => [UserEventDto])
  async userEvents(): Promise<UserEventDto[]> {
    return this.userEventsService.getUserEvents();
  }

  @Query(() => [UserEventDto])
  @UseGuards(AuthGuard)
  async myUserEvents(@AuthUser() user: UserEntity): Promise<UserEventDto[]> {
    return this.userEventsService.getUserEventsForUser(user);
  }

  @Query(() => [UserEventDto])
  @UseGuards(AuthGuard)
  async eventsOfUser(@Args("uid", { type: () => ID }) uid: string): Promise<UserEventDto[]> {
    const user = await this.usersService.getUserById(uid)
    return this.userEventsService.getUserEventsForUser(user);
  }

  @Query(() => [UserDto])
  @UseGuards(AuthGuard)
  async usersOfEvent(@Args("uid", { type: () => ID }) uid: string): Promise<UserDto[]> {
    return this.userEventsService.getUserUsersOfEvent(uid);
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
