import { SpecialtyEntity } from "./entities/specialty.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { SpecialtyInput } from "./inputs/specialty.input";
import { UserEntity } from "../users/entities/user.entity";
import { MajorEntity } from "../majors/entities/major.entity";

@Injectable()
export class SpecialtiesService {
  constructor(
    @InjectRepository(SpecialtyEntity)
    private readonly specialtiesRepository: Repository<SpecialtyEntity>
  ) {}

  async createSpecialty(
    data: SpecialtyInput,
    major: MajorEntity
  ): Promise<SpecialtyEntity> {
    return await this.specialtiesRepository.save({
      title: data.title,
      code: data.code,
      major: major,
    });
  }

  async getSpecialties(): Promise<SpecialtyEntity[]> {
    return await this.specialtiesRepository.find();
  }

  async getSpecialtyById(id: string): Promise<SpecialtyEntity> {
    return await this.specialtiesRepository.findOne(id);
  }

  async getSpecialtiesByIds(ids: string[]): Promise<SpecialtyEntity[]> {
    return await this.specialtiesRepository.findByIds(ids);
  }

  async getSpecialtiesOfMajor(majorId: string): Promise<SpecialtyEntity[]> {
    return await this.specialtiesRepository.find({where: {major: majorId}});
  }
}
