import { UserExercisesService } from "./user-exercises.service";
import { UserExerciseEntity } from "./entities/user-exercise.entity";
import { Resolver, Query, Mutation, Args, ID } from "@nestjs/graphql";
import { UserExerciseDto } from "./dto/user-exercise.dto";
import { UserExerciseInput } from "./inputs/user-exercise.input";
import { AuthGuard } from "src/guards/auth.guard";
import { UseGuards } from "@nestjs/common";
import { AuthUser } from "src/decorators/auth-user.decorator";
import { UserEntity } from "../users/entities/user.entity";
import { ChallengeExercisesService } from "../challenge-exercises/challenge-exercises.service";
import { UserTrainingsService } from "../user-trainings/user-trainings.service";

@Resolver(() => UserExerciseEntity)
export class UserExercisesResolver {
  constructor(
    private readonly userExercisesService: UserExercisesService,
    private readonly challengeExercisesService: ChallengeExercisesService,
    private readonly userTrainingsService: UserTrainingsService
  ) {}

  @Query(() => [UserExerciseDto])
  async userExercises(): Promise<UserExerciseDto[]> {
    return this.userExercisesService.getUserExercises();
  }

  @Query(() => UserExerciseDto)
  async userExercise(
    @Args("uid", { type: () => ID }) uid: string
  ): Promise<UserExerciseDto> {
    return this.userExercisesService.getUserExerciseById(uid);
  }

  @Mutation(() => UserExerciseDto)
  @UseGuards(AuthGuard)
  async createUserExercise(
    @Args("input") input: UserExerciseInput,
    @AuthUser() user: UserEntity
  ): Promise<UserExerciseDto> {
    const challengeExercise = await this.challengeExercisesService.getChallengeExerciseById(
      input.challengeExerciseId
    );
    const userTraining = await this.userTrainingsService.getUserTrainingById(
      input.trainingId
    );
    return this.userExercisesService.createUserExercise(
      input,
      challengeExercise,
      userTraining
    );
  }
}
