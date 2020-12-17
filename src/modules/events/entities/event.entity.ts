import { registerEnumType } from "@nestjs/graphql";
import { EventTagEntity } from "src/modules/event-tags/entities/event-tag.entity";
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

export enum EventType {
  "presentation" = "presentation",
  "discussion" = "discussion",
  "roundTable" = "roundTable",
  "webinar" = "webinar",
  "workshop" = "workshop",
  "masterClass" = "masterClass",
  "lecture" = "lecture",
  "quiz" = "quiz",
  "video" = "video",
  "tour" = "tour",
  "olympiad" = "olympiad",
  "consultation" = "consultation",
  "meeting" = "meeting",
  "presentationQuiz" = "presentationQuiz",
  "roomToor" = "roomToor",
}

registerEnumType(EventType, {
  name: "EventType",
});

export enum ModuleType {
  "dstuOnline" = "dstuOnline",
  "talents" = "talents",
  "helloFaculty" = "helloFaculty",
  "admissionsCampaign" = "admissionsCampaign",
  "preUniversity" = "preUniversity",
  "sportLeisureMore" = "sportLeisureMore",
}

registerEnumType(ModuleType, {
  name: "ModuleType",
});

@Entity("events")
export class EventEntity {
  @PrimaryGeneratedColumn("uuid") uid: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  type: EventType;

  @Column()
  module: ModuleType;

  @Column({ nullable: true })
  faculty: string;

  @Column({ nullable: true })
  link: string;

  @Column({ nullable: true })
  reward: number;

  @Column({ nullable: true })
  limit: number;

  @Column({ nullable: true })
  placesLeft: number;

  @OneToMany(
    () => EventTagEntity,
    (eventTag) => eventTag.event,
    {
      cascade: true,
    }
  )
  @JoinColumn()
  eventTags: EventTagEntity[];

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
