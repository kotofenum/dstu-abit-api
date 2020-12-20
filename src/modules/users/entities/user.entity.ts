import { VisitEntity } from './../../visits/entities/visit.entity';
import { registerEnumType } from "@nestjs/graphql";
import { ChallengePassEntity } from "src/modules/challenge-passes/entities/challenge-pass.entity";
import { CodeEntity } from "src/modules/codes/entities/code.entity";
import { ExerciseOriginEntity } from "src/modules/exercise-origins/entities/exercise-origin.entity";
import { UserTagEntity } from "src/modules/user-tags/entities/user-tag.entity";
import { UserTrainingEntity } from "src/modules/user-trainings/entities/user-training.entity";
import { WalletEntity } from "src/modules/wallets/entities/wallet.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Index,
  OneToMany,
  JoinColumn,
} from "typeorm";


export enum AccountType {
  enrolee = "enrolee",
  parent = "parent",
  teacher = "teacher",
}

registerEnumType(AccountType, {
  name: "AccountType",
})

@Entity("users")
export class UserEntity {
  @PrimaryGeneratedColumn("uuid") uid: string;

  @Column("varchar", { length: 100, nullable: true })
  firstName: string;

  @Column("varchar", { length: 100, nullable: true })
  lastName: string;

  @Column("varchar", { length: 100, nullable: true }) // TODO: временно
  patronym: string;

  // @Index()
  @Column({ default: AccountType.enrolee})
  type: AccountType;

  @Column({ nullable: true }) // TODO: временно
  birthDate: Date;

  @Column({ nullable: true }) // TODO: временно
  country: string;

  @Column({ nullable: true }) // TODO: временно
  locality: string;

  @Column({ nullable: true })
  course: string;

  @Column({ nullable: true })
  child: string;

  @Column({ nullable: true })
  position: string;

  @Column({ nullable: true }) // TODO: убрать!
  pwd: string;

  // @Column('varchar', { length: 100 })
  // username: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  school: string;

  @Column({ nullable: false }) // TODO: временно
  phone: string;

  @Index()
  @Column({
    default: false,
  })
  emailVerified: boolean;

  @Index()
  @Column({
    default: false,
  })
  phoneVerified: boolean;

  @Column({ nullable: true })
  picture: string;

  @OneToMany(
    () => WalletEntity,
    (wallet) => wallet.owner,
    {
      cascade: true,
    }
  )
  @JoinColumn()
  wallets: WalletEntity[];

  @OneToMany(
    () => VisitEntity,
    (visit) => visit.user,
    {
      cascade: true,
    }
  )
  @JoinColumn()
  visits: VisitEntity[];

  @OneToMany(
    () => ExerciseOriginEntity,
    (exerciseOrigin) => exerciseOrigin.owner,
    {
      cascade: true,
    }
  )
  @JoinColumn()
  exerciseOrigins: ExerciseOriginEntity[];

  @OneToMany(
    () => ChallengePassEntity,
    (challengePass) => challengePass.user,
    {
      cascade: true,
    }
  )
  @JoinColumn()
  challengePasses: ChallengePassEntity[];

  @OneToMany(
    () => UserTrainingEntity,
    (training) => training.user,
    {
      cascade: true,
    }
  )
  @JoinColumn()
  trainings: UserTrainingEntity[];

  @OneToMany(
    () => UserTagEntity,
    (tag) => tag.user,
    {
      cascade: true,
    }
  )
  @JoinColumn()
  tags: UserTagEntity[];

  @OneToMany(
    () => CodeEntity,
    (code) => code.issuer,
    {
      cascade: true,
    }
  )
  @JoinColumn()
  codes: CodeEntity[];

  @CreateDateColumn()
  dateCreated: Date;

  @UpdateDateColumn()
  dateUpdated: Date;

  @DeleteDateColumn()
  dateDeleted: Date;
}
