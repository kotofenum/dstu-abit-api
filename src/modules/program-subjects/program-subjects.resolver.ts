import { ProgramSubjectsService } from "./program-subjects.service";
import { ProgramSubjectEntity } from "./entities/program-subject.entity";
import { Resolver, Query, Mutation, Args, ID } from "@nestjs/graphql";
import { ProgramSubjectDto } from "./dto/program-subject.dto";
@Resolver(() => ProgramSubjectEntity)
export class ProgramSubjectsResolver {
  constructor(
    private readonly programSubjectsService: ProgramSubjectsService
  ) {}

  @Query(() => [ProgramSubjectDto])
  async programSubjects(): Promise<ProgramSubjectDto[]> {
    return this.programSubjectsService.getAllProgramSubjects();
  }

  @Query(() => ProgramSubjectDto)
  async userTag(
    @Args("uid", { type: () => ID }) uid: string
  ): Promise<ProgramSubjectDto> {
    return this.programSubjectsService.getProgramSubjectById(uid);
  }

  @Query(() => ProgramSubjectDto)
  async tieSubj(): Promise<ProgramSubjectDto[]> {
    this.programSubjectsService.tieSubjcts();
    return [];
  }
}
