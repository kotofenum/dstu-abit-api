import { TagRelationType } from "src/modules/user-tags/entities/user-tag.entity";
export declare class EventTagInput {
    readonly eventId: string;
    readonly relationId: string;
    readonly relationType: TagRelationType;
}
