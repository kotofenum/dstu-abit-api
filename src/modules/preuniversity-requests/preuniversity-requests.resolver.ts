import { PreuniversityRequestsService } from "./preuniversity-requests.service";
import { PreuniversityRequestEntity } from "./entities/preuniversity-request.entity";
import { Resolver, Query, Mutation, Args, ID } from "@nestjs/graphql";
import { PreuniversityRequestDto } from "./dto/preuniversity-request.dto";
import { PreuniversityRequestInput } from "./inputs/preuniversity-request.input";
import { AuthUser } from "src/decorators/auth-user.decorator";
import { UserEntity } from "../users/entities/user.entity";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/guards/auth.guard";

@Resolver(() => PreuniversityRequestEntity)
export class PreuniversityRequestsResolver {
  constructor(private readonly preuniversityRequestsService: PreuniversityRequestsService) {}

  @Query(() => [PreuniversityRequestDto])
  async preuniversityRequests(): Promise<PreuniversityRequestDto[]> {
    return this.preuniversityRequestsService.getPreuniversityRequests();
  }

  @Query(() => PreuniversityRequestDto)
  async preuniversityRequest(@Args("uid", { type: () => ID }) uid: string): Promise<PreuniversityRequestDto> {
    return this.preuniversityRequestsService.getPreuniversityRequestById(uid);
  }

  @Mutation(() => PreuniversityRequestDto)
  @UseGuards(AuthGuard)
  async addPreuniversityRequest(
    @Args("input") input: PreuniversityRequestInput,
    @AuthUser() user: UserEntity
  ): Promise<PreuniversityRequestDto> {
    return this.preuniversityRequestsService.createPreuniversityRequest(input, user);
  }
}
