import { ChallengeDto } from 'src/modules/challenges/dto/challenge.dto';
import { UserDto } from 'src/modules/users/dto/user.dto';
export declare class ChallengePassDto {
    readonly uid: string;
    readonly challenge: ChallengeDto;
    readonly user: UserDto;
    readonly cost: number;
    readonly obtainedAt: Date;
    readonly revokedAt: Date;
}
