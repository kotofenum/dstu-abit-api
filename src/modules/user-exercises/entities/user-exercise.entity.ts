import { ChallengeExerciseEntity } from "src/modules/challenge-exercises/entities/challenge-exercise.entity";
import { UserTrainingEntity } from "src/modules/user-trainings/entities/user-training.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
} from "typeorm";

export interface ExerciseFrame {
  confidence: number;
  keypoints: any[];
}

@Entity("user-exercises")
export class UserExerciseEntity {
  @PrimaryGeneratedColumn("uuid") uid: string;

  @ManyToOne(
    () => ChallengeExerciseEntity,
    (challengeExercise) => challengeExercise.userExercises,
    {
      eager: true,
    }
  )
  challengeExercise: ChallengeExerciseEntity;

  @ManyToOne(
    () => UserTrainingEntity,
    (userTraining) => userTraining.exercises,
    {
      eager: true,
    }
  )
  training: UserTrainingEntity;

  @Column()
  score: number;

  @Column("simple-json", { nullable: true })
  frames: ExerciseFrame[];

  @Column({ nullable: true })
  startedAt: Date;

  @Column({ nullable: true })
  endedAt: Date;

  @CreateDateColumn()
  dateCreated: Date;

  @UpdateDateColumn()
  dateUpdated: Date;

  @DeleteDateColumn()
  dateDeleted: Date;
}
