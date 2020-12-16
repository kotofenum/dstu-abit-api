import { EventTagEntity } from "src/modules/event-tags/entities/event-tag.entity";
export declare class EventEntity {
    uid: string;
    title: string;
    description: string;
    type: string;
    place: string;
    reward: number;
    placesLeft: number;
    userIsJoined: boolean;
    eventTags: EventTagEntity[];
    tags: string[];
    startsAt: Date;
    endsAt: Date;
    dateCreated: Date;
    dateUpdated: Date;
    dateDeleted: Date;
}
