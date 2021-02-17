import { UserEntity } from "src/modules/users/entities/user.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
} from "typeorm";

@Entity("preuniversity-requests")
export class PreuniversityRequestEntity {
  @PrimaryGeneratedColumn("uuid") uid: string;

  @Column()
  category: string;

  @Column({ nullable: true })
  subcategory: string;

  @Column()
  program: string;

  @ManyToOne(
    () => UserEntity,
    (user) => user.preuniversityRequests,
    {
      eager: true,
    }
  )
  user: UserEntity;

  @CreateDateColumn()
  dateCreated: Date;

  @UpdateDateColumn()
  dateUpdated: Date;

  @DeleteDateColumn()
  dateDeleted: Date;
}
