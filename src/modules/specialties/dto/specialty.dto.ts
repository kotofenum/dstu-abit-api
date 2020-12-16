import { ObjectType, Field } from "@nestjs/graphql";
import { MajorDto } from "src/modules/majors/dto/major.dto";

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
}
