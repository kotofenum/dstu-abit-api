import { ObjectType, Field } from "@nestjs/graphql";
import { PlacesMeta } from "../entities/major.entity";

@ObjectType()
export class MajorDto {
  @Field()
  readonly uid: string;

  @Field()
  readonly title: string;

  @Field()
  readonly code: string;

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
