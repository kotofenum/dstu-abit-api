import { ProgramSubjectEntity } from "./entities/program-subject.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class ProgramSubjectsService {
  constructor(
    @InjectRepository(ProgramSubjectEntity)
    private readonly programSubjectsRepository: Repository<ProgramSubjectEntity>
  ) {}

  async getAllProgramSubjects(): Promise<ProgramSubjectEntity[]> {
    return await this.programSubjectsRepository.find();
  }

  async getProgramSubjects(eventId: string): Promise<ProgramSubjectEntity[]> {
    return await this.programSubjectsRepository.find({
      where: { eventId: eventId },
    });
  }

  async getProgramSubjectById(id: string): Promise<ProgramSubjectEntity> {
    return await this.programSubjectsRepository.findOne(id);
  }
}
