import { ExerciseOriginsService } from "./exercise-origins.service";
import { ExerciseOriginEntity } from "./entities/exercise-origin.entity";
import { Resolver, Query, Mutation, Args, ID } from "@nestjs/graphql";
import { ExerciseOriginDto } from "./dto/exercise-origin.dto";
import { ExerciseOriginInput } from "./inputs/exercise-origin.input";
import { AuthGuard } from "src/guards/auth.guard";
import { UseGuards } from "@nestjs/common";
import { AuthUser } from "src/decorators/auth-user.decorator";
import { UserEntity } from "../users/entities/user.entity";

@Resolver(() => ExerciseOriginEntity)
export class ExerciseOriginsResolver {
  constructor(private readonly exerciseOriginsService: ExerciseOriginsService) {}

  @Query(() => [ExerciseOriginDto])
  async exerciseOrigins(): Promise<ExerciseOriginDto[]> {
    return this.exerciseOriginsService.getExerciseOrigins();
  }

  @Query(() => ExerciseOriginDto)
  async exerciseOrigin(
    @Args("uid", { type: () => ID }) uid: string
  ): Promise<ExerciseOriginDto> {
    return this.exerciseOriginsService.getExerciseOriginById(uid);
  }

  @Mutation(() => ExerciseOriginDto)
  @UseGuards(AuthGuard)
  async addExerciseOrigin(
    @Args("input") input: ExerciseOriginInput,
    @AuthUser() user: UserEntity
  ): Promise<ExerciseOriginDto> {
    return this.exerciseOriginsService.createExerciseOrigin(input, user);
  }
}
