import { Organizer } from "./organizer";
import { Wallet } from "./wallet";
declare enum FundingRule {
    daily = 0,
    weekly = 1,
    monthly = 2,
    finale = 3
}
interface FundingPolicy {
    preFundedBank: number;
    fundingRule: FundingRule;
}
declare enum MultiplierMode {
    fixed = 0,
    personalProgressive = 1,
    publicRegressiveFixed = 2
}
interface MultiplicationPolicy {
    multiplierMode: MultiplierMode;
    ignoreForeignMultiplicators: boolean;
    minRatio: number | null;
    maxRatio: number;
}
declare enum ExerciseKey {
    squats = "squats",
    pushUps = "push_ups",
    plank = "plank",
    jumpingJacks = "jumping_jacks"
}
interface ExerciseOrigin {
    uid: string;
    key: ExerciseKey;
    name: string;
    videoUrl: string;
    owner: Organizer;
}
declare enum ExerciseType {
    detection = "detection",
    timer = "timer"
}
export interface ChallengeExercise {
    uid: string;
    origin: ExerciseOrigin;
    type: ExerciseType;
    goal: number;
    customVideoUrl?: string;
}
export interface ChallengeTraining {
    uid: string;
    exercises: ChallengeExercise[];
}
export interface ChallengeConfig {
    gapsAllowed: number;
    fundingPolicy: FundingPolicy;
    multiplicationPolicy: MultiplicationPolicy;
    flexibleTraining: boolean;
    professionalTraining: boolean;
    exerciseIds: string[];
}
export interface Challenge {
    uid: string;
    title: string;
    owner: Organizer;
    price: number;
    config: ChallengeConfig;
    startsAt: Date;
    endsAt: Date;
    wallets: Wallet[];
}
export {};
