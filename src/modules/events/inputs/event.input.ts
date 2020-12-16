import graphqlTypeJson from "graphql-type-json";
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class EventInput {
  @Field()
  readonly title: string;

  @Field({ nullable: true })
  readonly description: string;

  @Field()
  readonly type: string;

  @Field({ nullable: true })
  readonly place: string;

  @Field()
  readonly reward: number;

  @Field()
  readonly placesLeft: number;

  @Field()
  readonly userIsJoined: boolean;

  @Field(() => graphqlTypeJson)
  readonly tags: string[];

  @Field()
  readonly startsAt: Date;

  @Field()
  readonly endsAt: Date;F
}
