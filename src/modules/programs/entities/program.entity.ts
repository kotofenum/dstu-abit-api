import { MajorEntity } from "src/modules/majors/entities/major.entity";
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

@Entity("programs")
export class ProgramEntity {
  @PrimaryGeneratedColumn("uuid") uid: string;

  @Column()
  title: string;

  @Column({ default: true })
  attendance: boolean;

  @Column()
  degree: string;

  @Column()
  studyPeriod: number; // TODO: тут сложнее, еще для заочки свои значения есть, не целые причем

  @Column()
  languages: string;

  @Column()
  description: string;

  @ManyToOne(
    () => SpecialtyEntity,
    (specialty) => specialty.programs,
    {
      eager: true,
    }
  )
  specialty: SpecialtyEntity;

  @CreateDateColumn()
  dateCreated: Date;

  @UpdateDateColumn()
  dateUpdated: Date;

  @DeleteDateColumn()
  dateDeleted: Date;
}
