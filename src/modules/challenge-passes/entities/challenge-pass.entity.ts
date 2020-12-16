import { registerEnumType } from "@nestjs/graphql";
import { ChallengeEntity } from "src/modules/challenges/entities/challenge.entity";
import { TransactionEntity } from "src/modules/transactions/entities/transaction.entity";
import { UserEntity } from "src/modules/users/entities/user.entity";
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

@Entity("challenge-passes")
export class ChallengePassEntity {
  @PrimaryGeneratedColumn("uuid") uid: string;

  @ManyToOne(
    () => ChallengeEntity,
    (challenge) => challenge.passes,
    {
      eager: true,
    }
  )
  challenge: ChallengeEntity;

  @ManyToOne(
    () => UserEntity,
    (user) => user.challengePasses,
    {
      eager: true,
    }
  )
  user: UserEntity;

  @Column()
  cost: number;

  @Column()
  obtainedAt: Date;

  @Column({ nullable: true })
  revokedAt: Date;

  @CreateDateColumn()
  dateCreated: Date;

  @UpdateDateColumn()
  dateUpdated: Date;

  @DeleteDateColumn()
  dateDeleted: Date;
}
