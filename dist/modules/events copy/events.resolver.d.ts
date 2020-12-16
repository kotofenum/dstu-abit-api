import { EventsService } from "./events.service";
import { EventDto } from "./dto/event.dto";
import { EventInput } from "./inputs/event.input";
import { UserEntity } from "../users/entities/user.entity";
import { JoinEventInput } from "./inputs/join-event.input";
export declare class EventsResolver {
    private readonly eventsService;
    constructor(eventsService: EventsService);
    events(): Promise<EventDto[]>;
    event(uid: string): Promise<EventDto>;
    addEvent(input: EventInput, user: UserEntity): Promise<EventDto>;
    joinEvent(input: JoinEventInput): Promise<EventDto>;
    leftEvent(input: JoinEventInput): Promise<EventDto>;
}
