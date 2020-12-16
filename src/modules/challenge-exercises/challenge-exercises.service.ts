import { ExerciseOriginEntity } from "./../exercise-origins/entities/exercise-origin.entity";
import { ChallengeExerciseEntity } from "./entities/challenge-exercise.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ChallengeExerciseInput } from "./inputs/challenge-exercise.input";
import { ChallengeEntity } from "../challenges/entities/challenge.entity";

@Injectable()
export class ChallengeExercisesService {
  constructor(
    @InjectRepository(ChallengeExerciseEntity)
    private readonly challengeExercisesRepository: Repository<
      ChallengeExerciseEntity
    >
  ) {}

  async createChallengeExercise(
    data: ChallengeExerciseInput,
    exerciseOrigin: ExerciseOriginEntity,
    challenge: ChallengeEntity
  ): Promise<ChallengeExerciseEntity> {
    return await this.challengeExercisesRepository.save({
      origin: exerciseOrigin,
      challenge: challenge,
      type: data.type,
      goal: data.goal,
      customVideoUrl: data.customVideoUrl,
    });
  }

  async getChallengeExercises(): Promise<ChallengeExerciseEntity[]> {
    return await this.challengeExercisesRepository.find();
  }

  async getChallengeExerciseById(id: string): Promise<ChallengeExerciseEntity> {
    return await this.challengeExercisesRepository.findOne(id);
  }
}
