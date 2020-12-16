import { Organizer } from "./organizer";
import { Wallet } from "./wallet";

enum FundingRule {
  daily,
  weekly,
  monthly,
  finale
}

interface FundingPolicy {
  preFundedBank: number;
  fundingRule: FundingRule;
}

enum MultiplierMode {
  fixed,
  personalProgressive,
  publicRegressiveFixed,
}

interface MultiplicationPolicy {
  multiplierMode: MultiplierMode;
  ignoreForeignMultiplicators: boolean;
  minRatio: number | null;
  maxRatio: number;
}

enum ExerciseKey {
  squats = "squats",
  pushUps = "push_ups",
  plank = "plank",
  jumpingJacks = "jumping_jacks",
}

interface ExerciseOrigin {
  uid: string;
  key: ExerciseKey;
  name: string;
  videoUrl: string;
  owner: Organizer
}

enum ExerciseType {
  detection = "detection",
  timer = "timer",
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
  // training: ChallengeTraining;
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
