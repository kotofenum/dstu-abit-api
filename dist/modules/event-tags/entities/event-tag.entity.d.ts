import { EventEntity } from "src/modules/events/entities/event.entity";
import { TagRelationType } from "src/modules/user-tags/entities/user-tag.entity";
export declare class EventTagEntity {
    uid: string;
    event: EventEntity;
    relationId: string;
    relationType: TagRelationType;
    dateCreated: Date;
    dateUpdated: Date;
    dateDeleted: Date;
}
