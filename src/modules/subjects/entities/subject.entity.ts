import { registerEnumType } from "@nestjs/graphql";
import { ProgramSubjectEntity } from "src/modules/program-subjects/entities/program-subject.entity";
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

@Entity("subjects")
export class SubjectEntity {
  @PrimaryGeneratedColumn("uuid") uid: string;

  @OneToMany(
    () => ProgramSubjectEntity,
    (programSubject) => programSubject.subject,
    {
      cascade: true,
    }
  )
  @JoinColumn()
  programs: ProgramSubjectEntity[];

  @Column()
  title: string;

  @CreateDateColumn()
  dateCreated: Date;

  @UpdateDateColumn()
  dateUpdated: Date;

  @DeleteDateColumn()
  dateDeleted: Date;
}
