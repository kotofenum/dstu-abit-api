import { ObjectType, Field } from "@nestjs/graphql";
import { CompetitionGroup } from "../entities/competition.entity";

@ObjectType()
export class CompetitionDto {
  @Field()
  readonly uid: string;

  @Field()
  readonly title: string;

  @Field()
  readonly date: string;

  @Field()
  readonly target: string;
  
  @Field({ nullable: true })
  readonly link: string;

  @Field(() => CompetitionGroup)
  readonly group: CompetitionGroup;
}
