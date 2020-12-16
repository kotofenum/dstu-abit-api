import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
export class MajorDto {
  @Field()
  readonly uid: string;

  @Field()
  readonly title: string;

  @Field()
  readonly code: string;

  @Field()
  readonly fundedPlaces: number;
}
