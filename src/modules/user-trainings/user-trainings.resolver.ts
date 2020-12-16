import { UserTrainingsService } from "./user-trainings.service";
import { UserTrainingEntity } from "./entities/user-training.entity";
import { Resolver, Query, Mutation, Args, ID } from "@nestjs/graphql";
import { UserTrainingDto } from "./dto/user-training.dto";
import { UserTrainingInput } from "./inputs/user-training.input";
import { AuthGuard } from "src/guards/auth.guard";
import { UseGuards } from "@nestjs/common";
import { AuthUser } from "src/decorators/auth-user.decorator";
import { UserEntity } from "../users/entities/user.entity";
import { ChallengesService } from "../challenges/challenges.service";
import { ChallengePassesService } from "../challenge-passes/challenge-passes.service";

@Resolver(() => UserTrainingEntity)
export class UserTrainingsResolver {
  constructor(
    private readonly userTrainingsService: UserTrainingsService,
    private readonly challengesService: ChallengesService,
  ) {}

  @Query(() => [UserTrainingDto])
  async userTrainings(): Promise<UserTrainingDto[]> {
    return this.userTrainingsService.getAllUserTrainings();
  }

  @Query(() => [UserTrainingDto])
  @UseGuards(AuthGuard)
  async myUserTrainings(
    @AuthUser() user: UserEntity
  ): Promise<UserTrainingDto[]> {
    return this.userTrainingsService.getUserTrainings(user);
  }

  @Query(() => [UserTrainingDto])
  @UseGuards(AuthGuard)
  async myUserTrainingsForChallenge(
    @Args("uid", { type: () => ID }) challengeId: string,
    @AuthUser() user: UserEntity,
  ): Promise<UserTrainingDto[]> {
    return this.userTrainingsService.getUserTrainingsForChallenge(user, challengeId);
  }

  @Query(() => UserTrainingDto)
  async userTraining(
    @Args("uid", { type: () => ID }) uid: string
  ): Promise<UserTrainingDto> {
    return this.userTrainingsService.getUserTrainingById(uid);
  }

  @Mutation(() => UserTrainingDto)
  @UseGuards(AuthGuard)
  async createUserTraining(
    @Args("input") input: UserTrainingInput,
    @AuthUser() user: UserEntity
  ): Promise<UserTrainingDto> {
    const challenge = await this.challengesService.getChallengeById(
      input.challengeId
    );
    return this.userTrainingsService.createUserTraining(input, user, challenge);
  }

  @Mutation(() => UserTrainingDto)
  @UseGuards(AuthGuard)
  async finishUserTraining(
    @Args("uid", { type: () => ID }) uid: string,
    @AuthUser() user: UserEntity
  ): Promise<UserTrainingDto> {
    return this.userTrainingsService.finishUserTraining(user, uid)
  }
}
