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

  @Field({ nullable: true })
  readonly fullTimePlaces: number;

  @Field(() => PlacesMeta, { nullable: true })
  readonly fullTimeMeta: PlacesMeta;

  @Field({ nullable: true })
  readonly mixedPlaces: number;

  @Field(() => PlacesMeta, { nullable: true })
  readonly mixedMeta: PlacesMeta;

  @Field({ nullable: true })
  readonly extramuralPlaces: number;

  @Field(() => PlacesMeta, { nullable: true })
  readonly extramuralMeta: PlacesMeta;
}
