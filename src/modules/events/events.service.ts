import { EventEntity } from "./entities/event.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { EventInput } from "./inputs/event.input";
import { UserEntity } from "../users/entities/user.entity";
import { JoinEventInput } from "./inputs/join-event.input";

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(EventEntity)
    private readonly eventsRepository: Repository<EventEntity>
  ) {}

  async createEvent(data: EventInput, owner: UserEntity): Promise<EventEntity> {
    return await this.eventsRepository.save({
      title: data.title,
      description: data.description,
      type: data.type,
      place: data.place,
      reward: data.reward,
      placesLeft: data.placesLeft,
      userIsJoined: data.userIsJoined,
      tags: data.tags,
      startsAt: data.startsAt,
      endsAt: data.endsAt,
    });
  }

  async getEvents(): Promise<EventEntity[]> {
    return await this.eventsRepository.find();
  }

  async getEventById(id: string): Promise<EventEntity> {
    return await this.eventsRepository.findOne(id);
  }

  async getEventsByIds(ids: string[]): Promise<EventEntity[]> {
    return await this.eventsRepository.findByIds(ids);
  }

  async joinEvent(data: JoinEventInput): Promise<EventEntity> {
    const event = await this.eventsRepository.findOne(data.eventId);
    if (event.placesLeft > 0 && !event.userIsJoined) {
      event.userIsJoined = true;
      event.placesLeft = event.placesLeft - 1;
      return await this.eventsRepository.save(event)
    } else {
      return event
    }
  }

  async leftEvent(data: JoinEventInput): Promise<EventEntity> {
    const event = await this.eventsRepository.findOne(data.eventId);
    if (event.userIsJoined) {
      event.userIsJoined = false;
      event.placesLeft = event.placesLeft + 1;
      return await this.eventsRepository.save(event)
    } else {
      return event
    }
  }
}
