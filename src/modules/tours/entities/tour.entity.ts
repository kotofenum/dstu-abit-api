import { registerEnumType } from "@nestjs/graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";

export enum TourType {
  inhouse = "inhouse",
  partner = "partner",
}

registerEnumType(TourType, {
  name: "TourType",
});

@Entity("tours")
export class TourEntity {
  @PrimaryGeneratedColumn("uuid") uid: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  videoId: string;

  @Column()
  type: TourType;

  @CreateDateColumn()
  dateCreated: Date;

  @UpdateDateColumn()
  dateUpdated: Date;

  @DeleteDateColumn()
  dateDeleted: Date;
}
