import { EventTagsService } from "./event-tags.service";
import { EventTagEntity } from "./entities/event-tag.entity";
import { Resolver, Query, Mutation, Args, ID } from "@nestjs/graphql";
import { EventTagDto } from "./dto/user-tag.dto";
import { EventTagInput } from "./inputs/event-tag.input";
import { AuthGuard } from "src/guards/auth.guard";
import { UseGuards } from "@nestjs/common";
import { AuthUser } from "src/decorators/auth-user.decorator";
import { UserEntity } from "../users/entities/user.entity";
import { ConnectedEventTagsDto } from "./dto/connected-event-tags.dto";
import { EventDto } from "../events/dto/event.dto";

@Resolver(() => EventTagEntity)
export class EventTagsResolver {
  constructor(
    private readonly eventTagsService: EventTagsService,
  ) {}

  @Query(() => [EventTagDto])
  async eventTags(): Promise<EventTagDto[]> {
    return this.eventTagsService.getAllEventTags();
  }

  // @Query(() => ConnectedEventTagsDto)
  // @UseGuards(AuthGuard)
  // async myEventTags(@AuthUser() user: UserEntity): Promise<ConnectedEventTagsDto> {
  //   return this.eventTagsService.getEventTags(user);
  // }


  @Query(() => EventTagDto)
  async userTag(
    @Args("uid", { type: () => ID }) uid: string
  ): Promise<EventTagDto> {
    return this.eventTagsService.getEventTagById(uid);
  }

  @Mutation(() => EventTagDto)
  @UseGuards(AuthGuard)
  async createEventTag(
    @Args("input") input: EventTagInput,
    @AuthUser() user: UserEntity
  ): Promise<EventTagDto> {
    return this.eventTagsService.createEventTag(input);
  }


  @Query(() => [EventDto])
  @UseGuards(AuthGuard)
  async eventsForUserTags(
    @AuthUser() user: UserEntity
  ): Promise<EventDto[]> {
    return this.eventTagsService.getEventsForUserTags(user);
  }
}
