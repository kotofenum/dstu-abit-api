import { CodesService } from "./codes.service";
import { CodeEntity } from "./entities/code.entity";
import { Resolver, Query, Mutation, Args, ID } from "@nestjs/graphql";
import { CodeDto } from "./dto/code.dto";
import { CodeInput } from "./inputs/code.input";
import { AuthGuard } from "src/guards/auth.guard";
import { UseGuards } from "@nestjs/common";
import { AuthUser } from "src/decorators/auth-user.decorator";
import { UserEntity } from "../users/entities/user.entity";
import { UsersService } from "../users/users.service";
import { ConfirmCodeInput } from "./inputs/confirm-code.input";
import { AccessDto } from "./dto/access";
import { LoginInput } from "./inputs/login.input";

@Resolver(() => CodeEntity)
export class CodesResolver {
  constructor(private readonly codesService: CodesService, private readonly usersService: UsersService) {}

  // @Query(() => [CodeDto])
  // async codes(): Promise<CodeDto[]> {
  //   return this.codesService.getCodes();
  // }

  @Query(() => CodeDto)
  async code(@Args("uid", { type: () => ID }) uid: string): Promise<CodeDto> {
    return this.codesService.getCodeById(uid);
  }


  @Mutation(() => CodeDto)
  async sendCode(
    @Args("input") input: CodeInput,
  ): Promise<CodeDto> {
    console.log(input);
    const user = await this.usersService.upsertUser({phone: input.phone, type: input.type})
    return this.codesService.createCode(input, user);
  }

  @Mutation(() => AccessDto)
  async confirmCode(
    @Args("input") input: ConfirmCodeInput,
  ): Promise<AccessDto> {
    console.log(input);
    return this.codesService.confirmCode(input);
  }

  @Mutation(() => CodeDto)
  @UseGuards(AuthGuard)
  async addCode(
    @Args("input") input: CodeInput,
    @AuthUser() user: UserEntity
  ): Promise<CodeDto> {
    console.log(input);
    return this.codesService.createCode(input, user);
  }


  @Mutation(() => AccessDto)
  async login(
    @Args("input") input: LoginInput,
  ): Promise<AccessDto> {
    console.log(input);
    return this.codesService.login(input);
  }
}
