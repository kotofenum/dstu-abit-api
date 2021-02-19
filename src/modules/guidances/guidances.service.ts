import { GuidanceEntity } from "./entities/guidance.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { GuidanceInput } from "./inputs/guidance.input";
import { EditGuidanceInput } from "./inputs/edit-guidance.input";

@Injectable()
export class GuidancesService {
  constructor(
    @InjectRepository(GuidanceEntity)
    private readonly guidancesRepository: Repository<GuidanceEntity>
  ) {}

  async createGuidance(data: GuidanceInput): Promise<GuidanceEntity> {
    return await this.guidancesRepository.save({
      title: data.title,
      date: data.date,
      description: data.description,
      link: data.link,
    });
  }

  async editGuidance(data: EditGuidanceInput): Promise<GuidanceEntity> {
    const guidance = await this.guidancesRepository.findOne(data.uid);

    guidance.title = data.title;
    guidance.date = data.date;
    guidance.description = data.description;

    if (data.link) {
      guidance.link = data.link;
    }

    return await this.guidancesRepository.save(guidance);
  }

  async getGuidances(): Promise<GuidanceEntity[]> {
    return await this.guidancesRepository.find();
  }

  async getGuidanceById(id: string): Promise<GuidanceEntity> {
    return await this.guidancesRepository.findOne(id);
  }
}
