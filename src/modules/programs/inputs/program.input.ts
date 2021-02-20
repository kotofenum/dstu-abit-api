import { Field, InputType } from "@nestjs/graphql";
import { PlacesMeta } from "src/modules/majors/entities/major.entity";
import { ProgramDegree } from "../entities/program.entity";

@InputType()
export class ProgramInput {
  @Field()
  readonly title: string;

  @Field({ nullable: true })
  readonly score: number;

  @Field()
  readonly specialtyId: string;

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

  @Field()
  readonly fullTimeForm: boolean;

  @Field()
  readonly mixedForm: boolean;

  @Field()
  readonly extramuralForm: boolean;

  @Field(() => ProgramDegree)
  readonly degree: ProgramDegree;

  @Field()
  readonly studyPeriod: string;

  @Field()
  readonly languages: string;

  @Field({ nullable: true })
  readonly description: string;

  @Field({ nullable: true })
  readonly advantages: string;

  @Field({ nullable: true })
  readonly partners: string;

  @Field({ nullable: true })
  readonly projectsAndPractices: string;

  @Field({ nullable: true })
  readonly leadProfessors: string;

  @Field({ nullable: true })
  readonly graduates: string;

  @Field({ nullable: true })
  readonly unit: string;

  @Field({ nullable: true })
  readonly supervisor: string;
}
