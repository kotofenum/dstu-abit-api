import { Field, InputType } from "@nestjs/graphql";
import { ModuleType } from "../entities/event.entity";

@InputType()
export class ModuleEventsInput {

  @Field(() => ModuleType)
  readonly module: ModuleType;
}
