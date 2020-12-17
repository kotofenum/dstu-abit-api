import { SubjectEntity } from "./entities/subject.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { SubjectInput } from "./inputs/subject.input";
import { UserEntity } from "../users/entities/user.entity";

@Injectable()
export class SubjectsService {
  constructor(
    @InjectRepository(SubjectEntity)
    private readonly subjectsRepository: Repository<SubjectEntity>
  ) {}

  async createSubject(
    data: SubjectInput,
    owner: UserEntity
  ): Promise<SubjectEntity> {
    return await this.subjectsRepository.save({
      title: data.title,
    });
  }

  async getSubjects(): Promise<SubjectEntity[]> {
    return await this.subjectsRepository.find();
  }

  async getSubjectById(id: string): Promise<SubjectEntity> {
    return await this.subjectsRepository.findOne(id);
  }

  async getSubjectsByIds(ids: string[]): Promise<SubjectEntity[]> {
    return await this.subjectsRepository.findByIds(ids);
  }
}
