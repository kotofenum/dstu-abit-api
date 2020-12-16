import { UserTrainingEntity } from "./entities/user-training.entity";
import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserTrainingInput } from "./inputs/user-training.input";
import { UserEntity } from "../users/entities/user.entity";
import { ChallengeEntity } from "../challenges/entities/challenge.entity";
import { UserExercisesService } from "../user-exercises/user-exercises.service";
import { ChallengeConfig } from "src/proto/challenge";
import { ChallengeExercisesService } from "../challenge-exercises/challenge-exercises.service";
import { ChallengesService } from "../challenges/challenges.service";

@Injectable()
export class UserTrainingsService {
  constructor(
    @InjectRepository(UserTrainingEntity)
    private readonly userTrainingsRepository: Repository<UserTrainingEntity>,
    private readonly userExercisesService: UserExercisesService,
    private readonly challengeExercisesService: ChallengeExercisesService,
    private readonly challengesService: ChallengesService
  ) {}

  async createUserTraining(
    data: UserTrainingInput,
    user: UserEntity,
    challenge: ChallengeEntity
  ): Promise<UserTrainingEntity> {
    const isEligbleForTraining = await this.challengesService.checkUserPassForChallenge(
      challenge,
      user
    );

    if (!isEligbleForTraining) {
      throw new BadRequestException(
        "The user is not eligible for starting a training in this challenge"
      );
    }

    const userTraining = await this.userTrainingsRepository.save({
      challenge: challenge,
      user: user,
      startedAt: new Date(),
    });

    const challengeConfig = JSON.parse(
      (challenge.config as unknown) as string
    ) as ChallengeConfig;

    console.log("Challenge Exercise IDS: ", challengeConfig.exerciseIds);
    for (const challengeExerciseId of challengeConfig.exerciseIds) {
      console.log(
        "Looking for challenge exercise with ID",
        challengeExerciseId
      );
      const challengeExercise = await this.challengeExercisesService.getChallengeExerciseById(
        challengeExerciseId
      );

      console.log(
        "Found challenge exercise, its name is",
        challengeExercise.origin.name
      );

      const userExercise = await this.userExercisesService.createUserExercise(
        {
          challengeExerciseId,
          trainingId: userTraining.uid,
        },
        challengeExercise,
        userTraining
      );
      console.log(`User Exercise ID: ${userExercise.uid} created.`);
    }

    return await this.getUserTrainingById(userTraining.uid);
  }

  async finishUserTraining(
    user: UserEntity,
    trainingId: string
  ): Promise<UserTrainingEntity> {
    const userTraining = await this.userTrainingsRepository.findOne({
      relations: ["exercises"],
      where: { uid: trainingId, user: user },
    });

    userTraining.endedAt = new Date();
    return await this.userTrainingsRepository.save(userTraining);
  }

  async getAllUserTrainings(): Promise<UserTrainingEntity[]> {
    return await this.userTrainingsRepository.find({
      relations: ["exercises"],
    });
  }

  async getUserTrainings(user: UserEntity): Promise<UserTrainingEntity[]> {
    return await this.userTrainingsRepository.find({
      relations: ["exercises"],
      where: { user: user },
    });
  }

  async getUserTrainingsForChallenge(
    user: UserEntity,
    challengeId: string
  ): Promise<UserTrainingEntity[]> {
    const challenge = await this.challengesService.getChallengeById(
      challengeId
    );
    return await this.userTrainingsRepository.find({
      relations: ["exercises"],
      where: { user: user, challenge: challenge },
    });
  }

  async getUserTrainingById(id: string): Promise<UserTrainingEntity> {
    return await this.userTrainingsRepository.findOne(id, {
      relations: ["exercises"],
    });
  }
}
