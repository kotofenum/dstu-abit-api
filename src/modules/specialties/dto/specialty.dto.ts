import { ObjectType, Field } from "@nestjs/graphql";
import { MajorDto } from "src/modules/majors/dto/major.dto";
import { PlacesMeta } from "src/modules/majors/entities/major.entity";

@ObjectType()
export class SpecialtyDto {
  @Field()
  readonly uid: string;

  @Field()
  readonly title: string;

  @Field()
  readonly code: string;

  @Field()
  readonly major: MajorDto;


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
