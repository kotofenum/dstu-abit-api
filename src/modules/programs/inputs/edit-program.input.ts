import { Field, InputType } from "@nestjs/graphql";
import { PlacesMeta } from "src/modules/majors/entities/major.entity";
import { ProgramDegree } from "../entities/program.entity";
import { ProgramInput } from "./program.input";

@InputType()
export class EditProgramInput extends ProgramInput {
  @Field()
  readonly uid: string;
}
