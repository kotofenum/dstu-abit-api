import { registerEnumType } from "@nestjs/graphql";
import { ChallengeExerciseEntity } from "src/modules/challenge-exercises/entities/challenge-exercise.entity";
import { UserEntity } from "src/modules/users/entities/user.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Index,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";

export enum ExerciseKey {
  squats = "squats",
  pushUps = "push_ups",
  plank = "plank",
  jumpingJacks = "jumping_jacks",
}

registerEnumType(ExerciseKey, {
  name: "ExerciseKey",
})

@Entity("exercise-origin")
export class ExerciseOriginEntity {
  @PrimaryGeneratedColumn("uuid") uid: string;

  @Column()
  name: string;

  @ManyToOne(
    () => UserEntity,
    (user) => user.exerciseOrigins,
    {
      eager: true,
    }
  )
  owner: UserEntity;

  @Index()
  @Column()
  key: ExerciseKey;

  @Column()
  videoUrl: string;

  @OneToMany(
    () => ChallengeExerciseEntity,
    challengeExercise => challengeExercise.origin,
    {
      cascade: true,
    },
  )
  @JoinColumn()
  challengeExercises: ChallengeExerciseEntity[];

  @CreateDateColumn()
  dateCreated: Date;

  @UpdateDateColumn()
  dateUpdated: Date;

  @DeleteDateColumn()
  dateDeleted: Date;
}
