import { Challenge } from "./challenge";
import { User } from "./user";
export interface ChallengePass {
    uid: string;
    challenge: Challenge;
    user: User;
    cost: number;
    obtainedAt: Date;
    revokedAt: Date;
}
