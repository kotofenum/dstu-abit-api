import { ExerciseOriginEntity } from 'src/modules/exercise-origins/entities/exercise-origin.entity';
import { ChallengeEntity } from 'src/modules/challenges/entities/challenge.entity';
import { UserExerciseEntity } from 'src/modules/user-exercises/entities/user-exercise.entity';
export declare enum ExerciseType {
    detection = "detection",
    timer = "timer"
}
export declare class ChallengeExerciseEntity {
    uid: string;
    origin: ExerciseOriginEntity;
    challenge: ChallengeEntity;
    userExercises: UserExerciseEntity[];
    type: ExerciseType;
    goal: number;
    customVideoUrl: string;
    dateCreated: Date;
    dateUpdated: Date;
    dateDeleted: Date;
}
