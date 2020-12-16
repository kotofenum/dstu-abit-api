import { ChallengePassEntity } from "src/modules/challenge-passes/entities/challenge-pass.entity";
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

@Entity("users")
export class UserEntity {
  @PrimaryGeneratedColumn("uuid") uid: string;

  @Index()
  @Column({
    unique: true,
  })
  oauthId: string;

  @Column("varchar", { length: 100 })
  firstName: string;

  @Column("varchar", { length: 100 })
  lastName: string;

  @Column("varchar", { length: 100, nullable: true }) // TODO: временно
  patronym: string;

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

  @Column()
  email: string;

  @Column({ nullable: true }) // TODO: временно
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

  @Column()
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

  @CreateDateColumn()
  dateCreated: Date;

  @UpdateDateColumn()
  dateUpdated: Date;

  @DeleteDateColumn()
  dateDeleted: Date;
}
