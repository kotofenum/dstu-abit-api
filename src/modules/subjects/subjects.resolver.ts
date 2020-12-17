import { SubjectsService } from "./subjects.service";
import { SubjectEntity } from "./entities/subject.entity";
import { Resolver, Query, Mutation, Args, ID } from "@nestjs/graphql";
import { SubjectDto } from "./dto/subject.dto";
import { SubjectInput } from "./inputs/subject.input";
import { AuthGuard } from "src/guards/auth.guard";
import { UseGuards } from "@nestjs/common";
import { AuthUser } from "src/decorators/auth-user.decorator";
import { UserEntity } from "../users/entities/user.entity";

@Resolver(() => SubjectEntity)
export class SubjectsResolver {
  constructor(private readonly subjectsService: SubjectsService) {}

  @Query(() => [SubjectDto])
  async subjects(): Promise<SubjectDto[]> {
    return this.subjectsService.getSubjects();
  }

  @Query(() => SubjectDto)
  async subject(@Args("uid", { type: () => ID }) uid: string): Promise<SubjectDto> {
    return this.subjectsService.getSubjectById(uid);
  }

  @Mutation(() => SubjectDto)
  async addSubject(
    @Args("input") input: SubjectInput,
    @AuthUser() user: UserEntity
  ): Promise<SubjectDto> {
    console.log(input);
    return this.subjectsService.createSubject(input, user);
  }
}
