import { ExerciseOriginEntity } from 'src/modules/exercise-origins/entities/exercise-origin.entity';
import { registerEnumType } from "@nestjs/graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Index,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { ChallengeEntity } from 'src/modules/challenges/entities/challenge.entity';
import { UserExerciseEntity } from 'src/modules/user-exercises/entities/user-exercise.entity';

export enum ExerciseType {
  detection = "detection",
  timer = "timer",
}

registerEnumType(ExerciseType, {
  name: "ExerciseType",
})

@Entity("challenge-exercise")
export class ChallengeExerciseEntity {
  @PrimaryGeneratedColumn("uuid") uid: string;

  @ManyToOne(
    () => ExerciseOriginEntity,
    (exerciseOrigin) => exerciseOrigin.challengeExercises,
    {
      eager: true,
    }
  )
  origin: ExerciseOriginEntity;

  @ManyToOne(
    () => ChallengeEntity,
    (challenge) => challenge.exercises,
    {
      eager: true,
    }
  )
  challenge: ChallengeEntity;

  @OneToMany(
    () => UserExerciseEntity,
    userExercise => userExercise.challengeExercise,
    {
      cascade: true,
    },
  )
  @JoinColumn()
  userExercises: UserExerciseEntity[];

  @Index()
  @Column()
  type: ExerciseType;

  @Column()
  goal: number;

  @Column({ nullable: true })
  customVideoUrl: string;

  @CreateDateColumn()
  dateCreated: Date;

  @UpdateDateColumn()
  dateUpdated: Date;

  @DeleteDateColumn()
  dateDeleted: Date;
}
