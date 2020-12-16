import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserTrainingInput {
  @Field()
  readonly challengeId: string;
}
