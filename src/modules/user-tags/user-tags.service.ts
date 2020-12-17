import { TagRelationType, UserTagEntity } from "./entities/user-tag.entity";
import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserTagInput } from "./inputs/user-tag.input";
import { UserEntity } from "../users/entities/user.entity";
import { ChallengeEntity } from "../challenges/entities/challenge.entity";
import { UserExercisesService } from "../user-exercises/user-exercises.service";
import { ChallengeConfig } from "src/proto/challenge";
import { ChallengeExercisesService } from "../challenge-exercises/challenge-exercises.service";
import { ChallengesService } from "../challenges/challenges.service";
import { MajorsService } from "../majors/majors.service";
import { SpecialtiesService } from "../specialties/specialties.service";
import { ProgramsService } from "../programs/programs.service";
import { ConnectedUserTagsDto } from "./dto/connected-user-tags.dto";

@Injectable()
export class UserTagsService {
  constructor(
    @InjectRepository(UserTagEntity)
    private readonly userTagsRepository: Repository<UserTagEntity>,
    private readonly majorsService: MajorsService,
    private readonly specialtiesService: SpecialtiesService,
    private readonly programsService: ProgramsService
  ) {}

  private async getTagIdFromInput(input: UserTagInput): Promise<string | null> {
    switch (input.relationType) {
      case TagRelationType.major: {
        const major = await this.majorsService.getMajorById(input.relationId);
        return major?.uid;
      }
      case TagRelationType.specialty: {
        const specialty = await this.specialtiesService.getSpecialtyById(
          input.relationId
        );
        return specialty?.uid;
      }
      case TagRelationType.program: {
        const program = await this.programsService.getProgramById(
          input.relationId
        );
        return program?.uid;
      }
    }
  }

  async createUserTag(
    data: UserTagInput,
    user: UserEntity
  ): Promise<UserTagEntity> {
    const relationId = await this.getTagIdFromInput(data);

    if (!relationId) {
      throw new BadRequestException(
        "No relation found for requested type and id"
      );
    }

    return await this.userTagsRepository.save({
      relationId: relationId,
      relationType: data.relationType,
      user: user,
    });
  }
  
  async removeUserTag(
    data: UserTagInput,
    user: UserEntity
  ): Promise<{ result: string }> {
    const userTag = await this.userTagsRepository.findOne({
      where: {
        relationId: data.relationId,
        relationType: data.relationType,
        user: user,
      },
    });

    if (userTag) {
      await this.userTagsRepository.remove(userTag);
      return { result: "ok" };
    } else {
      return { result: "error" };
      // throw new BadRequestException("no tag to remove");
    }
  }

  // async finishUserTag(
  //   user: UserEntity,
  //   trainingId: string
  // ): Promise<UserTagEntity> {
  //   const userTag = await this.userTagsRepository.findOne({
  //     relations: ["exercises"],
  //     where: { uid: trainingId, user: user },
  //   });

  //   userTag.endedAt = new Date();
  //   return await this.userTagsRepository.save(userTag);
  // }

  async getAllUserTags(): Promise<UserTagEntity[]> {
    return await this.userTagsRepository.find();
  }

  async getUserTags(user: UserEntity): Promise<ConnectedUserTagsDto> {
    // majors
    const majorTags = await this.userTagsRepository.find({
      where: { user: user, relationType: TagRelationType.major },
    });

    const majorTagIds = majorTags.map((tag) => tag.relationId);

    const majors = await this.majorsService.getMajorsByIds(majorTagIds);

    // specialties
    const specialtyTags = await this.userTagsRepository.find({
      where: { user: user, relationType: TagRelationType.specialty },
    });

    const specialtyTagIds = specialtyTags.map((tag) => tag.relationId);

    const specialties = await this.specialtiesService.getSpecialtiesByIds(
      specialtyTagIds
    );

    // programs
    const programTags = await this.userTagsRepository.find({
      where: { user: user, relationType: TagRelationType.program },
    });

    const programTagIds = programTags.map((tag) => tag.relationId);

    const programs = await this.programsService.getProgramsByIds(programTagIds);

    return { majors: majors, specialties: specialties, programs: programs };
  }

  async getUserTagById(id: string): Promise<UserTagEntity> {
    return await this.userTagsRepository.findOne(id);
  }
}
