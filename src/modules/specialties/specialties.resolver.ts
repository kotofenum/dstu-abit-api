import { SpecialtiesService } from "./specialties.service";
import { SpecialtyEntity } from "./entities/specialty.entity";
import { Resolver, Query, Mutation, Args, ID } from "@nestjs/graphql";
import { SpecialtyDto } from "./dto/specialty.dto";
import { SpecialtyInput } from "./inputs/specialty.input";
import { AuthGuard } from "src/guards/auth.guard";
import { UseGuards } from "@nestjs/common";
import { AuthUser } from "src/decorators/auth-user.decorator";
import { UserEntity } from "../users/entities/user.entity";
import { MajorsService } from "../majors/majors.service";
import { SpecialtiesOfMajorInput } from "./inputs/specialtiesOfMajor.input";

@Resolver(() => SpecialtyEntity)
export class SpecialtiesResolver {
  constructor(
    private readonly specialtiesService: SpecialtiesService,
    private readonly majorsService: MajorsService
  ) {}

  @Query(() => [SpecialtyDto])
  async specialties(): Promise<SpecialtyDto[]> {
    return this.specialtiesService.getSpecialties();
  }

  @Query(() => SpecialtyDto)
  async specialty(
    @Args("uid", { type: () => ID }) uid: string
  ): Promise<SpecialtyDto> {
    return this.specialtiesService.getSpecialtyById(uid);
  }

  @Query(() => [SpecialtyDto])
  async specialtiesOfMajor(
    @Args("input") input: SpecialtiesOfMajorInput
  ): Promise<SpecialtyDto[]> {
    return this.specialtiesService.getSpecialtiesOfMajor(input.majorId);
  }

  @Mutation(() => SpecialtyDto)
  async addSpecialty(
    @Args("input") input: SpecialtyInput,
    @AuthUser() user: UserEntity
  ): Promise<SpecialtyDto> {
    console.log(input);
    const major = await this.majorsService.getMajorById(input.majorId);

    return this.specialtiesService.createSpecialty(input, major);
  }
}
