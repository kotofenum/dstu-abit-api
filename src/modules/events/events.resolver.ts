import { EventsService } from "./events.service";
import { EventEntity } from "./entities/event.entity";
import { Resolver, Query, Mutation, Args, ID } from "@nestjs/graphql";
import { EventDto } from "./dto/event.dto";
import { EventInput } from "./inputs/event.input";
import { AuthGuard } from "src/guards/auth.guard";
import { UseGuards } from "@nestjs/common";
import { AuthUser } from "src/decorators/auth-user.decorator";
import { UserEntity } from "../users/entities/user.entity";
import { JoinEventInput } from "./inputs/join-event.input";
import { ModuleEventsInput } from "./inputs/moduleEvents.input";
import { EditEventInput } from "./inputs/edit-event.input";

@Resolver(() => EventEntity)
export class EventsResolver {
  constructor(private readonly eventsService: EventsService) {}

  @Query(() => [EventDto])
  async events(): Promise<EventDto[]> {
    return this.eventsService.getEvents();
  }

  @Query(() => [EventDto])
  async eventsForModule(
    @Args("input") input: ModuleEventsInput
  ): Promise<EventDto[]> {
    return this.eventsService.getEventsByModule(input.module);
  }

  @Query(() => EventDto)
  async event(@Args("uid", { type: () => ID }) uid: string): Promise<EventDto> {
    return this.eventsService.getEventById(uid);
  }

  @Mutation(() => EventDto)
  async addEvent(
    @Args("input") input: EventInput,
    @AuthUser() user: UserEntity
  ): Promise<EventDto> {
    console.log(input);
    return this.eventsService.createEvent(input);
  }

  @Mutation(() => EventDto)
  async editEvent(
    @Args("input") input: EditEventInput,
    @AuthUser() user: UserEntity
  ): Promise<EventDto> {
    console.log(input);
    return this.eventsService.editEvent(input);
  }

  // @Mutation(() => EventDto)
  // async joinEvent(@Args("input") input: JoinEventInput): Promise<EventDto> {
  //   return this.eventsService.joinEvent(input)
  // }

  // @Mutation(() => EventDto)
  // async leftEvent(@Args("input") input: JoinEventInput): Promise<EventDto> {
  //   return this.eventsService.leftEvent(input)
  // }
}
