import { UserTagsService } from "./user-tags.service";
import { UserTagEntity } from "./entities/user-tag.entity";
import { Resolver, Query, Mutation, Args, ID } from "@nestjs/graphql";
import { UserTagDto } from "./dto/user-tag.dto";
import { UserTagInput } from "./inputs/user-tag.input";
import { AuthGuard } from "src/guards/auth.guard";
import { UseGuards } from "@nestjs/common";
import { AuthUser } from "src/decorators/auth-user.decorator";
import { UserEntity } from "../users/entities/user.entity";
import { ConnectedUserTagsDto } from "./dto/connected-user-tags.dto";
import { UserTagResultDto } from "./dto/user-tag-result.dto";

@Resolver(() => UserTagEntity)
export class UserTagsResolver {
  constructor(private readonly userTagsService: UserTagsService) {}

  @Query(() => [UserTagDto])
  async userTags(): Promise<UserTagDto[]> {
    return this.userTagsService.getAllUserTags();
  }

  @Query(() => ConnectedUserTagsDto)
  @UseGuards(AuthGuard)
  async myUserTags(
    @AuthUser() user: UserEntity
  ): Promise<ConnectedUserTagsDto> {
    return this.userTagsService.getUserTags(user);
  }

  @Query(() => UserTagDto)
  async userTag(
    @Args("uid", { type: () => ID }) uid: string
  ): Promise<UserTagDto> {
    return this.userTagsService.getUserTagById(uid);
  }

  @Mutation(() => UserTagDto)
  @UseGuards(AuthGuard)
  async createUserTag(
    @Args("input") input: UserTagInput,
    @AuthUser() user: UserEntity
  ): Promise<UserTagDto> {
    return this.userTagsService.createUserTag(input, user);
  }

  @Mutation(() => UserTagResultDto)
  @UseGuards(AuthGuard)
  async removeUserTag(
    @Args("input") input: UserTagInput,
    @AuthUser() user: UserEntity
  ): Promise<UserTagResultDto> {
    return this.userTagsService.removeUserTag(input, user);
  }

  // @Mutation(() => UserTagDto)
  // @UseGuards(AuthGuard)
  // async finishUserTag(
  //   @Args("uid", { type: () => ID }) uid: string,
  //   @AuthUser() user: UserEntity
  // ): Promise<UserTagDto> {
  //   return this.userTagsService.finishUserTag(user, uid);
  // }
}
