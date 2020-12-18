import { ObjectType, Field } from "@nestjs/graphql";
import { TourType } from "../entities/tour.entity";

@ObjectType()
export class TourDto {
  @Field()
  readonly uid: string;

  @Field()
  readonly title: string;

  @Field()
  readonly description: string;

  @Field()
  readonly videoId: string;

  @Field(() => TourType)
  readonly type: TourType;
}
