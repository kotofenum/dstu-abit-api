import { SpecialtyEntity } from "./entities/specialty.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { SpecialtyInput } from "./inputs/specialty.input";
import { UserEntity } from "../users/entities/user.entity";
import { MajorEntity, PlacesMeta } from "../majors/entities/major.entity";
import { MajorsService } from "../majors/majors.service";

const specs = [];

@Injectable()
export class SpecialtiesService {
  constructor(
    @InjectRepository(SpecialtyEntity)
    private readonly specialtiesRepository: Repository<SpecialtyEntity>,

    private readonly majorsService: MajorsService // TODO: убрать
  ) {}

  async createSpecialty(
    data: SpecialtyInput,
    major: MajorEntity
  ): Promise<SpecialtyEntity> {
    return await this.specialtiesRepository.save({
      title: data.title,
      code: data.code,
      major: major,
      fullTimePlaces: data.fullTimePlaces,
      fullTimeMeta: data.fullTimeMeta,
      mixedPlaces: data.mixedPlaces,
      mixedMeta: data.mixedMeta,
      extramuralPlaces: data.extramuralPlaces,
      extramuralMeta: data.extramuralMeta,
    });
  }

  async populate() {
    for (const spec of specs) {
      const major = await this.majorsService.getMajorBySpecialtyId(spec.code);
      await this.createSpecialty(
        {
          title: spec.specialty,
          code: spec.code,
          majorId: major.uid,
          fullTimePlaces: spec.fullTime?.amount,
          fullTimeMeta: spec.fullTime?.meta as PlacesMeta,
          mixedPlaces: spec.mixed?.amount,
          mixedMeta: spec.mixed?.meta as PlacesMeta,
          extramuralPlaces: spec.extramural?.amount,
          extramuralMeta: spec.extramural?.meta as PlacesMeta,
        },
        major
      );
    }
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
    return await this.specialtiesRepository.find({ where: { major: majorId } });
  }

  async getSpecialtyByCode(code: string): Promise<SpecialtyEntity> {
    return await this.specialtiesRepository.findOne({ where: { code: code } });
  }
}
