import { VisitsService } from "./visits.service";
import { VisitEntity } from "./entities/visit.entity";
import { Resolver, Query, Mutation, Args, ID } from "@nestjs/graphql";
import { VisitDto } from "./dto/visit.dto";
import { VisitInput } from "./inputs/visit.input";
import { AuthUser } from "src/decorators/auth-user.decorator";
import { UserEntity } from "../users/entities/user.entity";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/guards/auth.guard";

@Resolver(() => VisitEntity)
export class VisitsResolver {
  constructor(private readonly visitsService: VisitsService) {}

  @Query(() => [VisitDto])
  async visits(): Promise<VisitDto[]> {
    return this.visitsService.getVisits();
  }

  @Query(() => VisitDto)
  async visit(@Args("uid", { type: () => ID }) uid: string): Promise<VisitDto> {
    return this.visitsService.getVisitById(uid);
  }

  @Mutation(() => VisitDto)
  @UseGuards(AuthGuard)
  async addVisit(
    @Args("input") input: VisitInput,
    @AuthUser() user: UserEntity
  ): Promise<VisitDto> {
    console.log(input);
    return this.visitsService.createVisit(input, user);
  }
}
