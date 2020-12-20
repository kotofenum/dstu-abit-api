import { registerEnumType } from "@nestjs/graphql";
import { EventEntity } from "src/modules/events/entities/event.entity";
import { UserEntity } from "src/modules/users/entities/user.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
} from "typeorm";

@Entity("visits")
export class VisitEntity {
  @PrimaryGeneratedColumn("uuid") uid: string;

  @ManyToOne(
    () => UserEntity,
    (user) => user.visits,
    {
      eager: true,
    }
  )
  user: UserEntity;

  @ManyToOne(
    () => EventEntity,
    (event) => event.visits,
    {
      eager: true,
    }
  )
  event: EventEntity;

  @CreateDateColumn()
  dateCreated: Date;

  @UpdateDateColumn()
  dateUpdated: Date;

  @DeleteDateColumn()
  dateDeleted: Date;
}
