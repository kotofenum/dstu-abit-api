import { Field, InputType } from "@nestjs/graphql";
import { TourType } from "../entities/tour.entity";

@InputType()
export class TourInput {
  @Field()
  readonly title: string;

  @Field()
  readonly description: string;

  @Field()
  readonly videoId: string;

  @Field(() => TourType)
  readonly type: TourType;
}
