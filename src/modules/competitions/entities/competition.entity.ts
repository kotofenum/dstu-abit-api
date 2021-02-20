import { registerEnumType } from "@nestjs/graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";

export enum CompetitionGroup {
  "january" = "january",
  "february" = "february",
  "march" = "march",
  "april" = "april",
  "may" = "may",
  "other" = "other",
}

registerEnumType(CompetitionGroup, {
  name: "CompetitionGroup",
});

@Entity("competitions")
export class CompetitionEntity {
  @PrimaryGeneratedColumn("uuid") uid: string;

  @Column()
  title: string;

  @Column()
  date: string;

  @Column()
  target: string;

  @Column({ nullable: true })
  link: string;

  @Column()
  group: CompetitionGroup;

  @CreateDateColumn()
  dateCreated: Date;

  @UpdateDateColumn()
  dateUpdated: Date;

  @DeleteDateColumn()
  dateDeleted: Date;
}
