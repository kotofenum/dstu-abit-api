import { ChallengesService } from "./challenges.service";
import { ChallengeEntity } from "./entities/challenge.entity";
import { Resolver, Query, Mutation, Args, ID } from "@nestjs/graphql";
import { ChallengeDto } from "./dto/challenge.dto";
import { ChallengeInput } from "./inputs/challenge.input";
import { AuthGuard } from "src/guards/auth.guard";
import { UseGuards } from "@nestjs/common";
import { AuthUser } from "src/decorators/auth-user.decorator";
import { UserEntity } from "../users/entities/user.entity";
import { ChallengeWithExercisesDto } from "./dto/challengeWithExercises.dto";

@Resolver(() => ChallengeEntity)
export class ChallengesResolver {
  constructor(private readonly challengesService: ChallengesService) {}

  @Query(() => [ChallengeWithExercisesDto])
  async challenges(): Promise<ChallengeWithExercisesDto[]> {
    return this.challengesService.getChallenges();
  }

  @Query(() => [ChallengeWithExercisesDto])
  @UseGuards(AuthGuard)
  async myChallenges(@AuthUser() user: UserEntity): Promise<ChallengeWithExercisesDto[]> {
    return this.challengesService.getUserChallenges(user);
  }

  @Query(() => ChallengeWithExercisesDto)
  async challenge(
    @Args("uid", { type: () => ID }) uid: string
  ): Promise<ChallengeWithExercisesDto> {
    return this.challengesService.getChallengeById(uid);
  }

  @Mutation(() => ChallengeDto)
  @UseGuards(AuthGuard)
  async addChallenge(
    @Args("input") input: ChallengeInput,
    @AuthUser() user: UserEntity
  ): Promise<ChallengeDto> {
    console.log(input)
    return this.challengesService.createChallenge(input, user);
  }
}
