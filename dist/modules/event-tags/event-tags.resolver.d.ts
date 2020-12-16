import { EventTagsService } from "./event-tags.service";
import { EventTagDto } from "./dto/user-tag.dto";
import { EventTagInput } from "./inputs/event-tag.input";
import { UserEntity } from "../users/entities/user.entity";
import { EventDto } from "../events/dto/event.dto";
export declare class EventTagsResolver {
    private readonly eventTagsService;
    constructor(eventTagsService: EventTagsService);
    eventTags(): Promise<EventTagDto[]>;
    userTag(uid: string): Promise<EventTagDto>;
    createEventTag(input: EventTagInput, user: UserEntity): Promise<EventTagDto>;
    eventsForUserTags(user: UserEntity): Promise<EventDto[]>;
}
