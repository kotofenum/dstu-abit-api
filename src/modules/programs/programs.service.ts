import { ProgramEntity } from "./entities/program.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { ProgramInput } from "./inputs/program.input";
import { UserEntity } from "../users/entities/user.entity";
import { SpecialtyEntity } from "../specialties/entities/specialty.entity";
import { MajorEntity } from "../majors/entities/major.entity";

@Injectable()
export class ProgramsService {
  constructor(
    @InjectRepository(ProgramEntity)
    private readonly programsRepository: Repository<ProgramEntity>
  ) {}

  async createProgram(
    data: ProgramInput,
    specialty: SpecialtyEntity
  ): Promise<ProgramEntity> {
    return await this.programsRepository.save({
      title: data.title,
      attendance: data.attendance,
      degree: data.degree,
      studyPeriod: data.studyPeriod,
      languages: data.languages,
      description: data.description,
      specialty: specialty,
    });
  }

  async getPrograms(): Promise<ProgramEntity[]> {
    return await this.programsRepository.find();
  }

  async getProgramById(id: string): Promise<ProgramEntity> {
    return await this.programsRepository.findOne(id);
  }

  async getProgramsByIds(ids: string[]): Promise<ProgramEntity[]> {
    return await this.programsRepository.findByIds(ids);
  }

  async getProgramsOfSpecialty(specialtyId: string): Promise<ProgramEntity[]> {
    return await this.programsRepository.find({
      where: { specialty: specialtyId },
    });
  }
}
