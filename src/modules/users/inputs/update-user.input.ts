import { Field, InputType } from "@nestjs/graphql";
import { AccountType } from "../entities/user.entity";

@InputType()
export class UpdateUserInput {
  @Field()
  readonly firstName: string;

  @Field()
  readonly lastName: string;

  @Field()
  readonly patronym: string;

  @Field()
  readonly birthDate: Date;

  @Field()
  readonly country: string;

  @Field()
  readonly locality: string;

  @Field()
  readonly email: string;

  @Field()
  readonly pwd: string;

  @Field({ nullable: true })
  readonly school: string;

  @Field({ nullable: true })
  readonly position: string;

  @Field({ nullable: true })
  readonly child: string;

  @Field({ nullable: true })
  readonly course: string;
}
