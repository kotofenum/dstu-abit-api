import { UserDto } from "src/modules/users/dto/user.dto";
import { ChallengeConfig } from "src/proto/challenge";
import { ChallengeExerciseDto } from "src/modules/challenge-exercises/dto/challenge-exercise.dto";
export declare class ChallengeDto {
    readonly uid: string;
    readonly title: string;
    readonly description: string;
    readonly owner: UserDto;
    readonly price: number;
    readonly exercises: ChallengeExerciseDto[];
    readonly config: ChallengeConfig;
    readonly startsAt: Date;
    readonly endsAt: Date;
}
