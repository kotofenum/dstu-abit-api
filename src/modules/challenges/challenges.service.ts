import { ChallengeEntity } from "./entities/challenge.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { ChallengeInput } from "./inputs/challenge.input";
import { UserEntity } from "../users/entities/user.entity";
import { ChallengePassesService } from "../challenge-passes/challenge-passes.service";

@Injectable()
export class ChallengesService {
  constructor(
    @InjectRepository(ChallengeEntity)
    private readonly challengesRepository: Repository<ChallengeEntity>, 
    private readonly challengePassesService: ChallengePassesService,
  ) {}

  async createChallenge(
    data: ChallengeInput,
    owner: UserEntity
  ): Promise<ChallengeEntity> {
    return await this.challengesRepository.save({
      title: data.title,
      description: data.description,
      owner: owner,
      price: data.price,
      config: data.config,
      startsAt: data.startsAt,
      endsAt: data.endsAt,
    });
  }

  async getChallenges(): Promise<ChallengeEntity[]> {
    return await this.challengesRepository.find({ relations: ["exercises"] });
  }

  async getUserChallenges(user: UserEntity): Promise<ChallengeEntity[]> {
    const challengePasses = await this.challengePassesService.getUserChallengePasses(user)
    const challengeIds = challengePasses.reduce<string[]>((acc, challengePass) => {
      if (!challengePass.revokedAt && !(acc.includes(challengePass.challenge.uid))) {
        return [...acc, challengePass.challenge.uid]
      } else {
        return acc
      }
    }, [])
    
    return await this.challengesRepository.find({
      relations: ["exercises"],
      where: { uid: In(challengeIds) },
    });
  }

  async getChallengeById(id: string): Promise<ChallengeEntity> {
    return await this.challengesRepository.findOne(id, {
      relations: ["exercises"],
    });
  }

  async checkUserPassForChallenge(challenge: ChallengeEntity, user: UserEntity): Promise<boolean> {
    const userChallengePasses = await this.challengePassesService.getUserChallengePasses(user)
    const targetChallengePass = userChallengePasses.find(challengePass => challengePass.challenge.uid === challenge.uid)
    return !!targetChallengePass?.obtainedAt && !targetChallengePass?.revokedAt
  }
}
