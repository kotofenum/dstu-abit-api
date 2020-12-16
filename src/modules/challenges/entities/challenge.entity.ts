import { ChallengeExerciseEntity } from "src/modules/challenge-exercises/entities/challenge-exercise.entity";
import { ChallengePassEntity } from "src/modules/challenge-passes/entities/challenge-pass.entity";
import { UserTrainingEntity } from "src/modules/user-trainings/entities/user-training.entity";
import { UserEntity } from "src/modules/users/entities/user.entity";
import { ChallengeConfig } from "src/proto/challenge";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";

@Entity("challenges")
export class ChallengeEntity {
  @PrimaryGeneratedColumn("uuid") uid: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(
    () => UserEntity,
    (user) => user.wallets,
    {
      eager: true,
    }
  )
  owner: UserEntity;

  @Column()
  price: number;

  // @OneToMany(
  //   () => WalletEntity,
  //   wallet => wallet.challengeOwner,
  //   {
  //     cascade: true,
  //   },
  // )
  // @JoinColumn()
  // wallets: WalletEntity[];

  @OneToMany(
    () => ChallengeExerciseEntity,
    (challengeExercise) => challengeExercise.challenge,
    {
      cascade: true,
    }
  )
  @JoinColumn()
  exercises: ChallengeExerciseEntity[];

  @Column("simple-json")
  config: ChallengeConfig;

  @Column()
  startsAt: Date;

  @Column()
  endsAt: Date;

  @OneToMany(
    () => ChallengePassEntity,
    (challengePass) => challengePass.challenge,
    {
      cascade: true,
    }
  )
  @JoinColumn()
  passes: ChallengePassEntity[];

  @OneToMany(
    () => UserTrainingEntity,
    (userTraining) => userTraining.challenge,
    {
      cascade: true,
    }
  )
  @JoinColumn()
  userTrainings: UserTrainingEntity[];

  @CreateDateColumn()
  dateCreated: Date;

  @UpdateDateColumn()
  dateUpdated: Date;

  @DeleteDateColumn()
  dateDeleted: Date;
}
