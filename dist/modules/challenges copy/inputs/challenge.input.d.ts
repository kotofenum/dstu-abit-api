import { ChallengeConfig } from "src/proto/challenge";
export declare class ChallengeInput {
    readonly title: string;
    readonly description: string;
    readonly price: number;
    readonly config: ChallengeConfig;
    readonly startsAt: Date;
    readonly endsAt: Date;
}
