import { UserEntity } from "./entities/user.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserInput } from "./inputs/user.input";
import { JwtService } from "@nestjs/jwt/dist/jwt.service";
import { passportJwtSecret } from "jwks-rsa";
import { CreateUserInput } from "./inputs/create-user.input";
import { CodesService } from "../codes/codes.service";
import { CodeEntity } from "../codes/entities/code.entity";
import { UpdateUserInput } from "./inputs/update-user.input";
import { EditUserInput } from "./inputs/edit-user.input";
import { UserTagsService } from "../user-tags/user-tags.service";
import { UserWithInterestsDto } from "./dto/user-with-interests.dto";
import { TagRelationType, UserTagEntity } from "../user-tags/entities/user-tag.entity";
import { ConnectedUserTagsDto } from "../user-tags/dto/connected-user-tags.dto";
import { MajorsService } from "../majors/majors.service";
import { SpecialtiesService } from "../specialties/specialties.service";
import { ProgramsService } from "../programs/programs.service";
var jwt = require("jsonwebtoken");

@Injectable()
export class UsersWithInterestsService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>, 
    @InjectRepository(UserTagEntity)
    private readonly userTagsRepository: Repository<UserTagEntity>,
    private readonly majorsService: MajorsService,
    private readonly specialtiesService: SpecialtiesService,
    private readonly programsService: ProgramsService// private readonly codesService: CodesService
  ) {}

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

  async getUsersWithInterests(): Promise<UserWithInterestsDto[]> {
    const users = await this.usersRepository.find({
      relations: ["userEvents"],
    });

    const usersWithTags = Promise.all(users.map(async user => {
      const tags = await this.getUserTags(user)
      return {...user, majors: tags.majors, specialties: tags.specialties, programs: tags.programs}
    }))

    return usersWithTags;
  }
}
