import { MajorEntity } from "./entities/major.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { MajorInput } from "./inputs/major.input";
import { UserEntity } from "../users/entities/user.entity";

@Injectable()
export class MajorsService {
  constructor(
    @InjectRepository(MajorEntity)
    private readonly majorsRepository: Repository<MajorEntity>
  ) {}

  async createMajor(data: MajorInput, owner: UserEntity): Promise<MajorEntity> {
    return await this.majorsRepository.save({
      title: data.title,
      code: data.code,
    });
  }

  async getMajors(): Promise<MajorEntity[]> {
    return await this.majorsRepository.find();
  }

  async getMajorById(id: string): Promise<MajorEntity> {
    return await this.majorsRepository.findOne(id);
  }

  async getMajorsByIds(ids: string[]): Promise<MajorEntity[]> {
    return await this.majorsRepository.findByIds(ids);
  }
}
