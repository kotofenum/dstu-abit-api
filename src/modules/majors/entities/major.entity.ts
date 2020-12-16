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

@Entity("majors")
export class MajorEntity {
  @PrimaryGeneratedColumn("uuid") uid: string;

  @Column()
  title: string;

  @Column({ unique: true })
  code: string;

  @Column()
  fundedPlaces: number;

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
