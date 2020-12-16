import { UserDto } from "src/modules/users/dto/user.dto";
import { ChallengeConfig } from "src/proto/challenge";
export declare class ChallengeDto {
    readonly uid: string;
    readonly title: string;
    readonly description: string;
    readonly owner: UserDto;
    readonly price: number;
    readonly config: ChallengeConfig;
    readonly startsAt: Date;
    readonly endsAt: Date;
}
