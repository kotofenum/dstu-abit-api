import { UserDto } from 'src/modules/users/dto/user.dto';
import { TagRelationType } from '../entities/user-tag.entity';
export declare class UserTagDto {
    readonly uid: string;
    readonly relationId: string;
    readonly relationType: TagRelationType;
    readonly user: UserDto;
}
