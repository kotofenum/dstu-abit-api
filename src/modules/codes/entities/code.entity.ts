import { ChallengeExerciseEntity } from "src/modules/challenge-exercises/entities/challenge-exercise.entity";
import { ChallengePassEntity } from "src/modules/challenge-passes/entities/challenge-pass.entity";
import { EventTagEntity } from "src/modules/event-tags/entities/event-tag.entity";
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

@Entity("codes")
export class CodeEntity {
  @PrimaryGeneratedColumn("uuid") uid: string;

  @Column()
  phone: string;

  @Column()
  code: string;

  @Column()
  expireAt: Date;

  @ManyToOne(
    () => UserEntity,
    (user) => user.codes,
    {
      eager: true,
    }
  )
  issuer: UserEntity;
  
  @CreateDateColumn()
  dateCreated: Date;

  @UpdateDateColumn()
  dateUpdated: Date;

  @DeleteDateColumn()
  dateDeleted: Date;
}
