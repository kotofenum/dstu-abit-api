import { EventTagEntity } from "./entities/event-tag.entity";
import { Repository } from "typeorm";
import { EventTagInput } from "./inputs/event-tag.input";
import { UserEntity } from "../users/entities/user.entity";
import { MajorsService } from "../majors/majors.service";
import { SpecialtiesService } from "../specialties/specialties.service";
import { ProgramsService } from "../programs/programs.service";
import { EventEntity } from "../events/entities/event.entity";
import { EventsService } from "../events/events.service";
import { UserTagsService } from "../user-tags/user-tags.service";
export declare class EventTagsService {
    private readonly eventTagsRepository;
    private readonly eventsService;
    private readonly userTagsService;
    private readonly majorsService;
    private readonly specialtiesService;
    private readonly programsService;
    constructor(eventTagsRepository: Repository<EventTagEntity>, eventsService: EventsService, userTagsService: UserTagsService, majorsService: MajorsService, specialtiesService: SpecialtiesService, programsService: ProgramsService);
    private getTagIdFromInput;
    createEventTag(data: EventTagInput): Promise<EventTagEntity>;
    getAllEventTags(): Promise<EventTagEntity[]>;
    getEventTags(eventId: string): Promise<EventTagEntity[]>;
    getEventsForUserTags(user: UserEntity): Promise<EventEntity[]>;
    getEventTagById(id: string): Promise<EventTagEntity>;
}
