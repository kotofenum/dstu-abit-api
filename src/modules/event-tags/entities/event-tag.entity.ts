import { registerEnumType } from "@nestjs/graphql";
import { ChallengeEntity } from "src/modules/challenges/entities/challenge.entity";
import { EventEntity } from "src/modules/events/entities/event.entity";
import { UserExerciseEntity } from "src/modules/user-exercises/entities/user-exercise.entity";
import { TagRelationType } from "src/modules/user-tags/entities/user-tag.entity";
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
  Index,
} from "typeorm";

// export enum TagRelationType {
//   major = "major",
//   specialty = "specialty",
//   program = "program",
// }

// registerEnumType(TagRelationType, {
//   name: "TagRelationType",
// });

@Entity("event-tags")
export class EventTagEntity {
  @PrimaryGeneratedColumn("uuid") uid: string;

  @ManyToOne(
    () => EventEntity,
    (event) => event.tags,
    {
      eager: true,
    }
  )
  event: EventEntity;

  @Column()
  relationId: string;

  @Index() // TODO: почему?
  @Column()
  relationType: TagRelationType;

  @CreateDateColumn()
  dateCreated: Date;

  @UpdateDateColumn()
  dateUpdated: Date;

  @DeleteDateColumn()
  dateDeleted: Date;
}
