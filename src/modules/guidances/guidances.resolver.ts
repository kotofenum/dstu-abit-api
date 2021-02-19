import { GuidancesService } from "./guidances.service";
import { GuidanceEntity } from "./entities/guidance.entity";
import { Resolver, Query, Mutation, Args, ID } from "@nestjs/graphql";
import { GuidanceDto } from "./dto/guidance.dto";
import { GuidanceInput } from "./inputs/guidance.input";
import { UseGuards } from "@nestjs/common";
import { AdminGuard } from "src/guards/admin.guard";
import { EditGuidanceInput } from "./inputs/edit-guidance.input";

@Resolver(() => GuidanceEntity)
export class GuidancesResolver {
  constructor(private readonly guidancesService: GuidancesService) {}

  @Query(() => [GuidanceDto])
  async guidances(): Promise<GuidanceDto[]> {
    return this.guidancesService.getGuidances();
  }

  @Query(() => GuidanceDto)
  async guidance(
    @Args("uid", { type: () => ID }) uid: string
  ): Promise<GuidanceDto> {
    return this.guidancesService.getGuidanceById(uid);
  }

  @Mutation(() => GuidanceDto)
  @UseGuards(AdminGuard)
  async addGuidance(@Args("input") input: GuidanceInput): Promise<GuidanceDto> {
    return this.guidancesService.createGuidance(input);
  }

  @Mutation(() => GuidanceDto)
  @UseGuards(AdminGuard)
  async editGuidance(
    @Args("input") input: EditGuidanceInput
  ): Promise<GuidanceDto> {
    return this.guidancesService.editGuidance(input);
  }
}
