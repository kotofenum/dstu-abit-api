import { registerEnumType } from "@nestjs/graphql";
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
  Index,
} from "typeorm";

export enum TagRelationType {
  major = "major",
  specialty = "specialty",
  program = "program",
}

registerEnumType(TagRelationType, {
  name: "TagRelationType",
});

@Entity("user-tags")
export class UserTagEntity {
  @PrimaryGeneratedColumn("uuid") uid: string;

  @Column()
  relationId: string;

  @Index() // TODO: почему?
  @Column()
  relationType: TagRelationType;

  @ManyToOne(
    () => UserEntity,
    (user) => user.tags,
    {
      eager: true,
    }
  )
  user: UserEntity;
  
  @CreateDateColumn()
  dateCreated: Date;

  @UpdateDateColumn()
  dateUpdated: Date;

  @DeleteDateColumn()
  dateDeleted: Date;
}
