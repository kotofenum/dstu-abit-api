import { CompetitionGroup } from './../entities/competition.entity';
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CompetitionInput {
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
