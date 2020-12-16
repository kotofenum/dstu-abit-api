import { EventEntity } from "./entities/event.entity";
import { Repository } from "typeorm";
import { EventInput } from "./inputs/event.input";
import { UserEntity } from "../users/entities/user.entity";
import { JoinEventInput } from "./inputs/join-event.input";
export declare class EventsService {
    private readonly eventsRepository;
    constructor(eventsRepository: Repository<EventEntity>);
    createEvent(data: EventInput, owner: UserEntity): Promise<EventEntity>;
    getEvents(): Promise<EventEntity[]>;
    getEventById(id: string): Promise<EventEntity>;
    getEventsByIds(ids: string[]): Promise<EventEntity[]>;
    joinEvent(data: JoinEventInput): Promise<EventEntity>;
    leftEvent(data: JoinEventInput): Promise<EventEntity>;
}
