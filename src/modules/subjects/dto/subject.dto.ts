import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
export class SubjectDto {
  @Field()
  readonly uid: string;

  @Field()
  readonly title: string;
}
