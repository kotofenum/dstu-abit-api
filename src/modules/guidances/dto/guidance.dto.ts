import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
export class GuidanceDto {
  @Field()
  readonly uid: string;

  @Field()
  readonly title: string;

  @Field()
  readonly date: string;

  @Field()
  readonly description: string;

  @Field({ nullable: true })
  readonly link: string;
}
