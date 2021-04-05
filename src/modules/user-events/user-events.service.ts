import { UserEventEntity } from "./entities/user-event.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEventInput } from "./inputs/user-event.input";
import { UserEntity } from "../users/entities/user.entity";
import { EventsService } from "../events/events.service";

@Injectable()
export class UserEventsService {
  constructor(
    @InjectRepository(UserEventEntity)
    private readonly userEventsRepository: Repository<UserEventEntity>,
    private readonly eventsService: EventsService,
  ) {}

  async visitEvent(
    data: UserEventInput,
    user: UserEntity
  ): Promise<UserEventEntity> {
    const event = await this.eventsService.getEventById(data.eventId);

    const userEvent = await this.userEventsRepository.findOne({
      where: { user: user, event: event, attending: true },
      order: { dateCreated: "DESC" },
    });

    if (!userEvent) {
      return await this.userEventsRepository.save({
        user: user,
        event: event,
        attending: true,
      });
    } else {
      return userEvent;
    }
  }

  async leaveEvent(
    data: UserEventInput,
    user: UserEntity
  ): Promise<UserEventEntity> {
    const event = await this.eventsService.getEventById(data.eventId);

    const userEvent = await this.userEventsRepository.findOne({
      where: { user: user, event: event },
      order: { dateCreated: "DESC" },
    });

    if (userEvent) {
      userEvent.attending = false;

      return await this.userEventsRepository.save(userEvent);
    } else {
      return await this.userEventsRepository.save({
        user: user,
        event: event,
        attending: true,
      });
    }
  }

  async getUserEvents(): Promise<UserEventEntity[]> {
    return await this.userEventsRepository.find();
  }

  async getUserEventsForUser(user: UserEntity): Promise<UserEventEntity[]> {
    return await this.userEventsRepository.find({ where: { user: user, attending: true } });
  }

  async getUserUsersOfEvent(eventId: string): Promise<UserEntity[]> {
    const event = await this.eventsService.getEventById(eventId);
    const userEvents = await this.userEventsRepository.find({ where: { event: event, attending: true } });
    const users = userEvents.map(userEvent => userEvent.user)
    return users
  }

  async getUserEventById(id: string): Promise<UserEventEntity> {
    return await this.userEventsRepository.findOne(id);
  }
}
