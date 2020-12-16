import { ChallengePassesService } from "./challenge-passes.service";
import { ChallengePassEntity } from "./entities/challenge-pass.entity";
import { Resolver, Query, Mutation, Args, ID } from "@nestjs/graphql";
import { ChallengePassDto } from "./dto/challenge-pass.dto";
import { ChallengePassInput } from "./inputs/challenge-pass.input";
import { AuthGuard } from "src/guards/auth.guard";
import { BadRequestException, UseGuards } from "@nestjs/common";
import { AuthUser } from "src/decorators/auth-user.decorator";
import { UserEntity } from "../users/entities/user.entity";
import { ChallengesService } from "../challenges/challenges.service";
import { WalletsService } from "../wallets/wallets.service";

@Resolver(() => ChallengePassEntity)
export class ChallengePassesResolver {
  constructor(
    private readonly challengePassesService: ChallengePassesService,
    private readonly challengesService: ChallengesService,
    private readonly walletsService: WalletsService
  ) {}

  @Query(() => [ChallengePassDto])
  async challengePasses(): Promise<ChallengePassDto[]> {
    return this.challengePassesService.getChallengePasses();
  }

  @Query(() => [ChallengePassDto])
  @UseGuards(AuthGuard)
  async myChallengePasses(
    @AuthUser() user: UserEntity
  ): Promise<ChallengePassDto[]> {
    return this.challengePassesService.getUserChallengePasses(user);
  }

  @Query(() => ChallengePassDto)
  async challengePass(
    @Args("uid", { type: () => ID }) uid: string
  ): Promise<ChallengePassDto> {
    return this.challengePassesService.getChallengePassById(uid);
  }

  @Mutation(() => ChallengePassDto)
  @UseGuards(AuthGuard)
  async obtainChallengePass(
    @Args("input") input: ChallengePassInput,
    @AuthUser() user: UserEntity
  ): Promise<ChallengePassDto> {
    const challenge = await this.challengesService.getChallengeById(
      input.challengeId
    );

    const activeChallengePasses = await this.challengePassesService.getUserChallengePassesForChallenge(user, challenge)

    if (activeChallengePasses.length) {
      if (activeChallengePasses.length > 1) {
        console.warn(`User ID: $${user.uid} has several active passes for this challenge, passing the first one found`)
      }
      return activeChallengePasses[0]
    }

    const wallets = await this.walletsService.getUserWallets(user);
    const targetWallet = wallets[0];
 
    if (targetWallet.balance < challenge.price) {
      throw new BadRequestException('Insufficients funds for obtaining the challenge pass')
    }

    return this.challengePassesService.createChallengePass(
      input,
      user,
      challenge,
      targetWallet
    );
  }
}
