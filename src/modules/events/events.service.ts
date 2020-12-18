import { EventEntity, EventType, ModuleType } from "./entities/event.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { EventInput } from "./inputs/event.input";
import { MajorsService } from "../majors/majors.service";
import { EditEventInput } from "./inputs/edit-event.input";

const evnts = [];

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(EventEntity)
    private readonly eventsRepository: Repository<EventEntity>
  ) {}

  async createEvent(data: EventInput): Promise<EventEntity> {
    return await this.eventsRepository.save({
      title: data.title,
      description: data.description,
      type: data.type,
      module: data.module,
      faculty: data.faculty,
      link: data.link,
      reward: data.reward,
      limit: data.limit,
      placesLeft: data.limit,
      startsAt: data.startsAt,
      endsAt: data.endsAt,
    });
  }

  async editEvent(data: EditEventInput): Promise<EventEntity> {
    const event = await this.eventsRepository.findOne(data.eventId);
    event.description = data.description;

    return await this.eventsRepository.save(event);
  }

  async populate() {
    for (const event of evnts) {
      await this.createEvent({
        title: event.name,
        description: event.description,
        type: event.type as EventType,
        module: event.module as ModuleType,
        faculty: event.faculty,
        link: event.link,
        reward: event.reward,
        limit: event.limit,
        placesLeft: event.limit,
        startsAt: new Date(event.start),
        endsAt: new Date(event.end),
      });
    }
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

  async getEventsByModule(module: ModuleType): Promise<EventEntity[]> {
    return await this.eventsRepository.find({ where: { module: module } });
  }

  async getEventByTitle(title: string): Promise<EventEntity> {
    return await this.eventsRepository.findOne({ where: { title: title } });
  }

  // async joinEvent(data: JoinEventInput): Promise<EventEntity> {
  //   const event = await this.eventsRepository.findOne(data.eventId);
  //   if (event.placesLeft > 0 && !event.userIsJoined) {
  //     event.userIsJoined = true;
  //     event.placesLeft = event.placesLeft - 1;
  //     return await this.eventsRepository.save(event);
  //   } else {
  //     return event;
  //   }
  // }

  // async leftEvent(data: JoinEventInput): Promise<EventEntity> {
  //   const event = await this.eventsRepository.findOne(data.eventId);
  //   if (event.userIsJoined) {
  //     event.userIsJoined = false;
  //     event.placesLeft = event.placesLeft + 1;
  //     return await this.eventsRepository.save(event);
  //   } else {
  //     return event;
  //   }
  // }
}
