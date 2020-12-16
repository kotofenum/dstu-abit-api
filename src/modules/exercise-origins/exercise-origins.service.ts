import { ExerciseOriginEntity } from "./entities/exercise-origin.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ExerciseOriginInput } from "./inputs/exercise-origin.input";
import { UserEntity } from "../users/entities/user.entity";

@Injectable()
export class ExerciseOriginsService {
  constructor(
    @InjectRepository(ExerciseOriginEntity)
    private readonly exerciseOriginsRepository: Repository<ExerciseOriginEntity>
  ) {}

  async createExerciseOrigin(
    data: ExerciseOriginInput,
    owner: UserEntity
  ): Promise<ExerciseOriginEntity> {
    return await this.exerciseOriginsRepository.save({
      name: data.name,
      owner: owner,
      key: data.key,
      videoUrl: data.videoUrl
    });
  }

  async getExerciseOrigins(): Promise<ExerciseOriginEntity[]> {
    return await this.exerciseOriginsRepository.find();
  }

  async getExerciseOriginById(id: string): Promise<ExerciseOriginEntity> {
    return await this.exerciseOriginsRepository.findOne(id);
  }
}
