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

@Entity("events")
export class EventEntity {
  @PrimaryGeneratedColumn("uuid") uid: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  type: string;

  @Column({ nullable: true })
  place: string;

  @Column()
  reward: number;

  @Column()
  placesLeft: number;

  @Column({ default: false })
  userIsJoined: boolean;

  @OneToMany(
    () => EventTagEntity,
    (eventTag) => eventTag.event,
    {
      cascade: true,
    }
  )
  @JoinColumn()
  eventTags: EventTagEntity[];

  @Column("simple-json")
  tags: string[];

  @Column()
  startsAt: Date;

  @Column()
  endsAt: Date;

  @CreateDateColumn()
  dateCreated: Date;

  @UpdateDateColumn()
  dateUpdated: Date;

  @DeleteDateColumn()
  dateDeleted: Date;
}
