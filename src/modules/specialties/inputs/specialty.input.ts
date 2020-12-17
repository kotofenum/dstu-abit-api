import { Field, InputType } from "@nestjs/graphql";
import { PlacesMeta } from "src/modules/majors/entities/major.entity";

@InputType()
export class SpecialtyInput {
  @Field()
  readonly title: string;

  @Field()
  readonly code: string;

  @Field()
  readonly majorId: string

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
