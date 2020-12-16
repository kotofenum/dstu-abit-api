import { UserDto } from 'src/modules/users/dto/user.dto';
import { ExerciseKey } from '../entities/exercise-origin.entity';
export declare class ExerciseOriginDto {
    readonly uid: string;
    readonly name: string;
    readonly owner: UserDto;
    readonly key: ExerciseKey;
    readonly videoUrl: string;
}
