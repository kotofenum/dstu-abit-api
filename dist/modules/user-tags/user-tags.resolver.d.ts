import { UserTagsService } from "./user-tags.service";
import { UserTagDto } from "./dto/user-tag.dto";
import { UserTagInput } from "./inputs/user-tag.input";
import { UserEntity } from "../users/entities/user.entity";
import { ConnectedUserTagsDto } from "./dto/connected-user-tags.dto";
export declare class UserTagsResolver {
    private readonly userTagsService;
    constructor(userTagsService: UserTagsService);
    userTags(): Promise<UserTagDto[]>;
    myUserTags(user: UserEntity): Promise<ConnectedUserTagsDto>;
    userTag(uid: string): Promise<UserTagDto>;
    createUserTag(input: UserTagInput, user: UserEntity): Promise<UserTagDto>;
}
