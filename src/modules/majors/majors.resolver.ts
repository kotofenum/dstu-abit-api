import { MajorsService } from "./majors.service";
import { MajorEntity } from "./entities/major.entity";
import { Resolver, Query, Mutation, Args, ID } from "@nestjs/graphql";
import { MajorDto } from "./dto/major.dto";
import { MajorInput } from "./inputs/major.input";
import { AuthGuard } from "src/guards/auth.guard";
import { UseGuards } from "@nestjs/common";
import { AuthUser } from "src/decorators/auth-user.decorator";
import { UserEntity } from "../users/entities/user.entity";

@Resolver(() => MajorEntity)
export class MajorsResolver {
  constructor(private readonly majorsService: MajorsService) {}

  @Query(() => [MajorDto])
  async majors(): Promise<MajorDto[]> {
    return this.majorsService.getMajors();
  }

  @Query(() => MajorDto)
  async major(@Args("uid", { type: () => ID }) uid: string): Promise<MajorDto> {
    return this.majorsService.getMajorById(uid);
  }

  @Mutation(() => MajorDto)
  async addMajor(
    @Args("input") input: MajorInput,
    @AuthUser() user: UserEntity
  ): Promise<MajorDto> {
    console.log(input);
    return this.majorsService.createMajor(input, user);
  }
}
