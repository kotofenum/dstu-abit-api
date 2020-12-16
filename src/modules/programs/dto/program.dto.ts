import { ObjectType, Field } from "@nestjs/graphql";
import { MajorDto } from "src/modules/majors/dto/major.dto";
import { SpecialtyDto } from "src/modules/specialties/dto/specialty.dto";

@ObjectType()
export class ProgramDto {
  @Field()
  readonly uid: string;

  @Field()
  readonly title: string;

  @Field()
  readonly attendance: boolean;

  @Field()
  readonly degree: string;

  @Field()
  readonly studyPeriod: number;

  @Field()
  readonly languages: string;

  @Field()
  readonly description: string;

  @Field()
  readonly specialty: SpecialtyDto;
}
