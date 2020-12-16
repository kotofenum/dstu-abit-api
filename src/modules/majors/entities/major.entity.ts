import { registerEnumType } from "@nestjs/graphql";
import { ProgramEntity } from "src/modules/programs/entities/program.entity";
import { SpecialtyEntity } from "src/modules/specialties/entities/specialty.entity";
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

export enum PlacesMeta {
  unobtainable = "unobtainable",
  undeveloped = "undeveloped",
  hasDegree = "hasDegree",
  secondaryMajor = "secondaryMajor",
  shortTerm = "shortTerm",
  unknown = "unknown"
}

registerEnumType(PlacesMeta, {
  name: "PlacesMeta",
})

@Entity("majors")
export class MajorEntity {
  @PrimaryGeneratedColumn("uuid") uid: string;

  @Column()
  title: string;

  @Column({ unique: true })
  code: string;

  @Column({ nullable: true})
  fullTimePlaces: number;

  @Column({ nullable: true})
  fullTimeMeta: PlacesMeta;

  @Column({ nullable: true})
  mixedPlaces: number;

  @Column({ nullable: true})
  mixedMeta: PlacesMeta;

  @Column({ nullable: true})
  extramuralPlaces: number;

  @Column({ nullable: true})
  extramuralMeta: PlacesMeta;

  @OneToMany(
    () => SpecialtyEntity,
    (specialty) => specialty.major,
    {
      cascade: true,
    }
  )
  @JoinColumn()
  specialties: SpecialtyEntity[];

  @CreateDateColumn()
  dateCreated: Date;

  @UpdateDateColumn()
  dateUpdated: Date;

  @DeleteDateColumn()
  dateDeleted: Date;
}
