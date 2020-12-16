import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ChallengePassInput {
  @Field()
  readonly challengeId: string;
}
