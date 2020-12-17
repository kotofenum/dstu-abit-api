import { MajorEntity, PlacesMeta } from "./entities/major.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { MajorInput } from "./inputs/major.input";
import { UserEntity } from "../users/entities/user.entity";

const data = {};

@Injectable()
export class MajorsService {
  constructor(
    @InjectRepository(MajorEntity)
    private readonly majorsRepository: Repository<MajorEntity>
  ) {}

  async createMajor(data: MajorInput): Promise<MajorEntity> {
    return await this.majorsRepository.save({
      title: data.title,
      code: data.code,
      fullTimePlaces: data.fullTimePlaces,
      fullTimeMeta: data.fullTimeMeta,
      mixedPlaces: data.mixedPlaces,
      mixedMeta: data.mixedMeta,
      extramuralPlaces: data.extramuralPlaces,
      extramuralMeta: data.extramuralMeta,
    });
  }

  async populate() {
    for (const key of Object.keys(data)) {
      await this.createMajor({
        title: key,
        code: data[key].code,
        fullTimePlaces: data[key].fullTime.amount,
        fullTimeMeta: data[key].fullTime.meta as PlacesMeta,
        mixedPlaces: data[key].mixed.amount,
        mixedMeta: data[key].mixed.meta as PlacesMeta,
        extramuralPlaces: data[key].extramural.amount,
        extramuralMeta: data[key].extramural.meta as PlacesMeta,
      });
    }
  }

  async getMajors(): Promise<MajorEntity[]> {
    return await this.majorsRepository.find();
  }

  async getMajorBySpecialtyId(id: string): Promise<MajorEntity> {
    const firstDigits = id.substr(0, 2);
    return await this.majorsRepository.findOne({
      where: { code: firstDigits + ".00.00" },
    });
  }

  async getMajorById(id: string): Promise<MajorEntity> {
    return await this.majorsRepository.findOne(id);
  }

  async getMajorsByIds(ids: string[]): Promise<MajorEntity[]> {
    return await this.majorsRepository.findByIds(ids);
  }
}
