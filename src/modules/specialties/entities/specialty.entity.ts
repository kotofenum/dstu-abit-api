import { MajorEntity, PlacesMeta } from "src/modules/majors/entities/major.entity";
import { ProgramEntity } from "src/modules/programs/entities/program.entity";
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

@Entity("specialties")
export class SpecialtyEntity {
  @PrimaryGeneratedColumn("uuid") uid: string;

  @Column()
  title: string;

  @Column({ unique: true })
  code: string;

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

  @ManyToOne(
    () => MajorEntity,
    (major) => major.specialties,
    {
      eager: true,
    }
  )
  major: MajorEntity;

  @OneToMany(
    () => ProgramEntity,
    (program) => program.specialty,
    {
      cascade: true,
    }
  )
  @JoinColumn()
  programs: ProgramEntity[];

  @CreateDateColumn()
  dateCreated: Date;

  @UpdateDateColumn()
  dateUpdated: Date;

  @DeleteDateColumn()
  dateDeleted: Date;
}
