import { ObjectType, Field } from "@nestjs/graphql";
import { ProgramDto } from "src/modules/programs/dto/program.dto";
import { SubjectDto } from "src/modules/subjects/dto/subject.dto";

@ObjectType()
export class ProgramSubjectDto {
  @Field()
  readonly uid: string;

  @Field()
  readonly program: ProgramDto;

  @Field()
  readonly subject: SubjectDto;
}
