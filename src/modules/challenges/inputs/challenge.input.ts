import graphqlTypeJson from "graphql-type-json";
import { Field, InputType } from "@nestjs/graphql";
import { ChallengeConfig } from "src/proto/challenge";

@InputType()
export class ChallengeInput {
  @Field()
  readonly title: string;

  @Field({ nullable: true })
  readonly description: string;

  @Field()
  readonly price: number;

  @Field(() => graphqlTypeJson)
  readonly config: ChallengeConfig;

  @Field()
  readonly startsAt: Date;

  @Field()
  readonly endsAt: Date;
}
