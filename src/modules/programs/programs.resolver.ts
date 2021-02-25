import { ProgramsService } from "./programs.service";
import { ProgramEntity } from "./entities/program.entity";
import { Resolver, Query, Mutation, Args, ID } from "@nestjs/graphql";
import { ProgramDto } from "./dto/program.dto";
import { ProgramInput } from "./inputs/program.input";
import { AuthGuard } from "src/guards/auth.guard";
import { UseGuards } from "@nestjs/common";
import { AuthUser } from "src/decorators/auth-user.decorator";
import { UserEntity } from "../users/entities/user.entity";
import { SpecialtiesService } from "../specialties/specialties.service";
import { MajorsService } from "../majors/majors.service";
import { ProgramsOfSpecialtyInput } from "./inputs/programsOfSpecialty.input";
import { ProgramWithSubjectsDto } from "./dto/program-with-subjects.dto";
import { AdminGuard } from "src/guards/admin.guard";
import { EditProgramInput } from "./inputs/edit-program.input";
import { EditProgramScoreInput } from "./inputs/edit-program-score.input";

@Resolver(() => ProgramEntity)
export class ProgramsResolver {
  constructor(
    private readonly programsService: ProgramsService,
    private readonly specialtiesService: SpecialtiesService
  ) {}

  @Query(() => [ProgramDto])
  async programs(): Promise<ProgramDto[]> {
    return this.programsService.getPrograms();
  }

  @Query(() => [ProgramWithSubjectsDto])
  async programsWithSubjects(): Promise<ProgramWithSubjectsDto[]> {
    return this.programsService.getProgramsWithSubjects();
  }

  @Query(() => ProgramDto)
  async program(
    @Args("uid", { type: () => ID }) uid: string
  ): Promise<ProgramDto> {
    return this.programsService.getProgramById(uid);
  }

  @Query(() => [ProgramDto])
  async programsOfSpecialty(
    @Args("input") input: ProgramsOfSpecialtyInput
  ): Promise<ProgramDto[]> {
    return this.programsService.getProgramsOfSpecialty(input.specialtyId);
  }

  @Mutation(() => ProgramDto)
  @UseGuards(AdminGuard)
  async addProgram(@Args("input") input: ProgramInput): Promise<ProgramDto> {
    const specialty = await this.specialtiesService.getSpecialtyById(
      input.specialtyId
    );

    return this.programsService.createProgram(input, specialty);
  }

  @Mutation(() => ProgramDto)
  @UseGuards(AdminGuard)
  async editProgram(
    @Args("input") input: EditProgramInput
  ): Promise<ProgramDto> {
    const specialty = await this.specialtiesService.getSpecialtyById(
      input.specialtyId
    );

    return this.programsService.editProgram(input, specialty);
  }

  @Mutation(() => ProgramDto)
  @UseGuards(AdminGuard)
  async editProgramScore(
    @Args("input") input: EditProgramScoreInput
  ): Promise<ProgramDto> {
    return this.programsService.editProgramScore(input);
  }
}
