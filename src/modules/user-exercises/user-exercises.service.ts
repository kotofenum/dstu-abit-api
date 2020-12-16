import { UserExerciseEntity } from "./entities/user-exercise.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserExerciseInput } from "./inputs/user-exercise.input";
import { ChallengeExerciseEntity } from "../challenge-exercises/entities/challenge-exercise.entity";
import { UserTrainingEntity } from "../user-trainings/entities/user-training.entity";
import { UserTrainingsService } from "../user-trainings/user-trainings.service";

@Injectable()
export class UserExercisesService {
  constructor(
    @InjectRepository(UserExerciseEntity)
    private readonly userExercisesRepository: Repository<UserExerciseEntity>,
    @InjectRepository(UserTrainingEntity)
    private readonly userTrainingsRepository: Repository<UserTrainingEntity>
  ) {}

  async createUserExercise(
    data: UserExerciseInput,
    challengeExercise: ChallengeExerciseEntity,
    userTraining: UserTrainingEntity
  ): Promise<UserExerciseEntity> {
    return await this.userExercisesRepository.save({
      challengeExercise: challengeExercise,
      training: userTraining,
      score: 0,
    });
  }

  async getUserExercises(): Promise<UserExerciseEntity[]> {
    return await this.userExercisesRepository.find();
  }

  async getUserExerciseById(id: string): Promise<UserExerciseEntity> {
    return await this.userExercisesRepository.findOne(id);
  }

  async updateExerciseProgress(
    exerciseId: string,
    trainingId: string
  ): Promise<UserExerciseEntity> {
    try {
      console.log("EXERCISE ID: ", exerciseId);
      const exercise = await this.userExercisesRepository.findOneOrFail({
        uid: exerciseId,
      });

      exercise.score = exercise.score + 1;

      if (exercise.score >= exercise.challengeExercise.goal) {
        exercise.endedAt = new Date();

        const trainingExercises = await this.userExercisesRepository.find({
          where: { training: exercise.training },
        });
        console.log(trainingExercises.map((exer) => ({id: exer.uid, endedAt: exer.endedAt})))
        const allCompleted = trainingExercises
          .filter((ex) => ex.uid !== exercise.uid)
          .every((ex) => ex.endedAt);
        console.log(
          `All exercises completed in training ID: ${exercise.training.uid} — ${allCompleted}`
        );
        if (allCompleted) {
          exercise.training.endedAt = new Date();
          console.log(exercise.training.endedAt)
          await this.userTrainingsRepository.save(exercise.training)
        }

        // await this.userExercisesRepository.save(exercise.training)
      }

      return await this.userExercisesRepository.save(exercise);
    } catch (err) {
      throw err;
    }
  }
}
