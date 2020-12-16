import { ObjectType, Field } from "@nestjs/graphql";
import graphqlTypeJson from "graphql-type-json";

@ObjectType()
export class EventDto {
  @Field()
  readonly uid: string;

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

  @Field(() => graphqlTypeJson, { nullable: true })
  readonly tags: string[];

  @Field()
  readonly startsAt: Date;

  @Field()
  readonly endsAt: Date;
}
