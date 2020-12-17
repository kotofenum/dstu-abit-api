import { ProgramEntity } from "src/modules/programs/entities/program.entity";
import { SubjectEntity } from "src/modules/subjects/entities/subject.entity";
import { TagRelationType } from "src/modules/user-tags/entities/user-tag.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  Column,
} from "typeorm";

@Entity("program-subjects")
export class ProgramSubjectEntity {
  @PrimaryGeneratedColumn("uuid") uid: string;

  @ManyToOne(
    () => ProgramEntity,
    (program) => program.subjects,
    {
      eager: true,
    }
  )
  program: ProgramEntity;

  @ManyToOne(
    () => SubjectEntity,
    (subject) => subject.programs,
    {
      eager: true,
    }
  )
  subject: SubjectEntity;

  @Column()
  relationId: string;

  // @Index() // TODO: почему?
  @Column()
  relationType: TagRelationType;

  @CreateDateColumn()
  dateCreated: Date;

  @UpdateDateColumn()
  dateUpdated: Date;

  @DeleteDateColumn()
  dateDeleted: Date;
}
