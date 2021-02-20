import { CompetitionsService } from "./competitions.service";
import { CompetitionEntity } from "./entities/competition.entity";
import { Resolver, Query, Mutation, Args, ID } from "@nestjs/graphql";
import { CompetitionDto } from "./dto/competition.dto";
import { CompetitionInput } from "./inputs/competition.input";
import { UseGuards } from "@nestjs/common";
import { AdminGuard } from "src/guards/admin.guard";
import { EditCompetitionInput } from "./inputs/edit-competition.input";

@Resolver(() => CompetitionEntity)
export class CompetitionsResolver {
  constructor(private readonly competitionsService: CompetitionsService) {}

  @Query(() => [CompetitionDto])
  async competitions(): Promise<CompetitionDto[]> {
    return this.competitionsService.getCompetitions();
  }

  @Query(() => CompetitionDto)
  async competition(
    @Args("uid", { type: () => ID }) uid: string
  ): Promise<CompetitionDto> {
    return this.competitionsService.getCompetitionById(uid);
  }

  @Mutation(() => CompetitionDto)
  @UseGuards(AdminGuard)
  async addCompetition(@Args("input") input: CompetitionInput): Promise<CompetitionDto> {
    return this.competitionsService.createCompetition(input);
  }

  @Mutation(() => CompetitionDto)
  @UseGuards(AdminGuard)
  async editCompetition(
    @Args("input") input: EditCompetitionInput
  ): Promise<CompetitionDto> {
    return this.competitionsService.editCompetition(input);
  }

  @Mutation(() => CompetitionDto)
  @UseGuards(AdminGuard)
  async populateCompetitions(): Promise<CompetitionDto[]> {
    return this.competitionsService.populate();
  }
}
