import { ChallengeEntity } from "src/modules/challenges/entities/challenge.entity";
import { UserExerciseEntity } from "src/modules/user-exercises/entities/user-exercise.entity";
import { UserEntity } from "src/modules/users/entities/user.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
  Column,
} from "typeorm";

@Entity("user-trainings")
export class UserTrainingEntity {
  @PrimaryGeneratedColumn("uuid") uid: string;

  @ManyToOne(
    () => ChallengeEntity,
    (challenge) => challenge.userTrainings,
    {
      eager: true,
    }
  )
  challenge: ChallengeEntity;

  @OneToMany(
    () => UserExerciseEntity,
    userExercise => userExercise.training,
    {
      cascade: true,
    },
  )
  @JoinColumn()
  exercises: UserExerciseEntity[];

  @ManyToOne(
    () => UserEntity,
    (user) => user.trainings,
    {
      eager: true,
    }
  )
  user: UserEntity;

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
