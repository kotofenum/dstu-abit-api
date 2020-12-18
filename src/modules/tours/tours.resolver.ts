import { ToursService } from "./tours.service";
import { TourEntity } from "./entities/tour.entity";
import { Resolver, Query, Mutation, Args, ID } from "@nestjs/graphql";
import { TourDto } from "./dto/tour.dto";
import { TourInput } from "./inputs/tour.input";
import { AuthUser } from "src/decorators/auth-user.decorator";
import { UserEntity } from "../users/entities/user.entity";

@Resolver(() => TourEntity)
export class ToursResolver {
  constructor(private readonly toursService: ToursService) {}

  @Query(() => [TourDto])
  async tours(): Promise<TourDto[]> {
    return this.toursService.getTours();
  }

  @Query(() => TourDto)
  async tour(@Args("uid", { type: () => ID }) uid: string): Promise<TourDto> {
    return this.toursService.getTourById(uid);
  }

  @Mutation(() => TourDto)
  async addTour(
    @Args("input") input: TourInput,
    @AuthUser() user: UserEntity
  ): Promise<TourDto> {
    console.log(input);
    return this.toursService.createTour(input);
  }
}
