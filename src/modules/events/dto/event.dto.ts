import { ObjectType, Field } from "@nestjs/graphql";
import { EventType, ModuleType } from "../entities/event.entity";

@ObjectType()
export class EventDto {
  @Field()
  readonly uid: string;

  @Field()
  readonly title: string;

  @Field({ nullable: true })
  readonly description: string;

  @Field(() => EventType)
  readonly type: EventType;

  @Field(() => ModuleType)
  readonly module: ModuleType;

  @Field({ nullable: true })
  readonly faculty: string;

  @Field({ nullable: true })
  readonly link: string;

  @Field({ nullable: true })
  readonly reward: number;

  @Field({ nullable: true })
  readonly limit: number;

  @Field({ nullable: true })
  readonly placesLeft: number;

  @Field()
  readonly startsAt: Date;

  @Field()
  readonly endsAt: Date;
}
