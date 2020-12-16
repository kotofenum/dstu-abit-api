import { TagRelationType } from "src/modules/user-tags/entities/user-tag.entity";
import { EventDto } from "src/modules/events/dto/event.dto";
export declare class EventTagDto {
    readonly uid: string;
    readonly event: EventDto;
    readonly relationId: string;
    readonly relationType: TagRelationType;
}
