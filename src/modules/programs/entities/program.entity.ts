import { registerEnumType } from "@nestjs/graphql";
import {
  MajorEntity,
  PlacesMeta,
} from "src/modules/majors/entities/major.entity";
import { ProgramSubjectEntity } from "src/modules/program-subjects/entities/program-subject.entity";
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

export enum ProgramDegree {
  bachelor = "bachelor",
  certified = "certified",
  master = "master",
}

registerEnumType(ProgramDegree, {
  name: "ProgramDegree",
});

@Entity("programs")
export class ProgramEntity {
  @PrimaryGeneratedColumn("uuid") uid: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  score: number;

  @Column({ nullable: true })
  fullTimePlaces: number;

  @Column({ nullable: true })
  fullTimeMeta: PlacesMeta;

  @Column({ nullable: true })
  mixedPlaces: number;

  @Column({ nullable: true })
  mixedMeta: PlacesMeta;

  @Column({ nullable: true })
  extramuralPlaces: number;

  @Column({ nullable: true })
  extramuralMeta: PlacesMeta;

  @Column()
  fullTimeForm: boolean;

  @Column()
  mixedForm: boolean;

  @Column()
  extramuralForm: boolean;

  @Column()
  degree: ProgramDegree;

  @Column()
  studyPeriod: string;

  @Column()
  languages: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  advantages: string;

  @Column({ nullable: true })
  partners: string;

  @Column({ nullable: true })
  projectsAndPractices: string;

  @Column({ nullable: true })
  leadProfessors: string;

  @Column({ nullable: true })
  graduates: string;

  @Column({ nullable: true })
  unit: string;

  @Column({ nullable: true })
  supervisor: string;

  @ManyToOne(
    () => SpecialtyEntity,
    (specialty) => specialty.programs,
    {
      eager: true,
    }
  )
  specialty: SpecialtyEntity;

  @OneToMany(
    () => ProgramSubjectEntity,
    (programSubject) => programSubject.program,
    {
      cascade: true,
    }
  )
  @JoinColumn()
  subjects: ProgramSubjectEntity[];

  @CreateDateColumn()
  dateCreated: Date;

  @UpdateDateColumn()
  dateUpdated: Date;

  @DeleteDateColumn()
  dateDeleted: Date;
}
