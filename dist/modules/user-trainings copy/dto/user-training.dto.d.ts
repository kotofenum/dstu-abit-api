import { ChallengeDto } from './../../challenges/dto/challenge.dto';
import { UserDto } from 'src/modules/users/dto/user.dto';
import { UserExerciseDto } from 'src/modules/user-exercises/dto/user-exercise.dto';
export declare class UserTrainingDto {
    readonly uid: string;
    readonly challenge: ChallengeDto;
    readonly exercises: UserExerciseDto[];
    readonly user: UserDto;
    readonly startedAt: Date;
    readonly endedAt: Date;
}
