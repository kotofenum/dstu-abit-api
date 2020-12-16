import { ChallengeExercisesService } from "./challenge-exercises.service";
import { ChallengeExerciseEntity } from "./entities/challenge-exercise.entity";
import { Resolver, Query, Mutation, Args, ID } from "@nestjs/graphql";
import { ChallengeExerciseDto } from "./dto/challenge-exercise.dto";
import { ChallengeExerciseInput } from "./inputs/challenge-exercise.input";
import { AuthGuard } from "src/guards/auth.guard";
import { UseGuards } from "@nestjs/common";
import { AuthUser } from "src/decorators/auth-user.decorator";
import { UserEntity } from "../users/entities/user.entity";
import { ExerciseOriginsService } from "../exercise-origins/exercise-origins.service";
import { ChallengesService } from "../challenges/challenges.service";

@Resolver(() => ChallengeExerciseEntity)
export class ChallengeExercisesResolver {
  constructor(
    private readonly challengeExercisesService: ChallengeExercisesService,
    private readonly exerciseOriginsService: ExerciseOriginsService,
    private readonly challengesService: ChallengesService
  ) {}

  @Query(() => [ChallengeExerciseDto])
  async challengeExercises(): Promise<ChallengeExerciseDto[]> {
    return this.challengeExercisesService.getChallengeExercises();
  }

  @Query(() => ChallengeExerciseDto)
  async challengeExercise(
    @Args("uid", { type: () => ID }) uid: string
  ): Promise<ChallengeExerciseDto> {
    return this.challengeExercisesService.getChallengeExerciseById(uid);
  }

  @Mutation(() => ChallengeExerciseDto)
  @UseGuards(AuthGuard)
  async addChallengeExercise(
    @Args("input") input: ChallengeExerciseInput,
    @AuthUser() user: UserEntity
  ): Promise<ChallengeExerciseDto> {
    const exerciseOrigin = await this.exerciseOriginsService.getExerciseOriginById(
      input.exerciseOriginId
    );
    const challenge = await this.challengesService.getChallengeById(
      input.challengeId
    );
    return this.challengeExercisesService.createChallengeExercise(
      input,
      exerciseOrigin,
      challenge
    );
  }
}
