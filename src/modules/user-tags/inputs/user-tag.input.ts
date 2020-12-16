import { Field, InputType } from '@nestjs/graphql';
import { TagRelationType } from '../entities/user-tag.entity';

@InputType()
export class UserTagInput {
  @Field()
  readonly relationId: string;

  @Field(() => TagRelationType)
  readonly relationType: TagRelationType;
}
