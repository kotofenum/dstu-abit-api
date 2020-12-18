import { TourEntity } from "./entities/tour.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TourInput } from "./inputs/tour.input";

@Injectable()
export class ToursService {
  constructor(
    @InjectRepository(TourEntity)
    private readonly toursRepository: Repository<TourEntity>
  ) {}

  async createTour(data: TourInput): Promise<TourEntity> {
    return await this.toursRepository.save({
      title: data.title,
      description: data.description,
      videoId: data.videoId,
      type: data.type
    });
  }

  async getTours(): Promise<TourEntity[]> {
    return await this.toursRepository.find();
  }

  async getTourById(id: string): Promise<TourEntity> {
    return await this.toursRepository.findOne(id);
  }
}
