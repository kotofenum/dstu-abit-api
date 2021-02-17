import { Field, InputType } from "@nestjs/graphql";
import { AccountType } from "../entities/user.entity";

@InputType()
export class EditUserInput {
  @Field({ nullable: true })
  readonly country: string;

  @Field({ nullable: true })
  readonly locality: string;

  @Field({ nullable: true })
  readonly birthDate: Date;

  @Field({ nullable: true })
  readonly school: string;

  @Field({ nullable: true })
  readonly email: string;

  @Field({ nullable: true })
  readonly position: string;

  @Field({ nullable: true })
  readonly child: string;

  @Field({ nullable: true })
  readonly course: string;
}
