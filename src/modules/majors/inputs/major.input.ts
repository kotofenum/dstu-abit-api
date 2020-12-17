import { Field, InputType } from "@nestjs/graphql";
import { PlacesMeta } from "../entities/major.entity";

@InputType()
export class MajorInput {
  @Field()
  readonly title: string;

  @Field()
  readonly code: string;

  @Field()
  readonly fullTimePlaces: number;

  @Field(() => PlacesMeta)
  readonly fullTimeMeta: PlacesMeta;

  @Field()
  readonly mixedPlaces: number;

  @Field(() => PlacesMeta)
  readonly mixedMeta: PlacesMeta;

  @Field()
  readonly extramuralPlaces: number;

  @Field(() => PlacesMeta)
  readonly extramuralMeta: PlacesMeta;
}
