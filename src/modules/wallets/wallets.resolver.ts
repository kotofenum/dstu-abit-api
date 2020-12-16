import { WalletsService } from "./wallets.service";
import { WalletEntity } from "./entities/wallet.entity";
import { Resolver, Query, Mutation, Args, ID } from "@nestjs/graphql";
import { WalletDto } from "./dto/wallet.dto";
import { WalletInput } from "./inputs/wallet.input";
import { AuthGuard } from "src/guards/auth.guard";
import { UseGuards } from "@nestjs/common";
import { AuthUser } from "src/decorators/auth-user.decorator";
import { UserEntity } from "../users/entities/user.entity";

@Resolver(() => WalletEntity)
export class WalletsResolver {
  constructor(private readonly walletsService: WalletsService) {}

  @Query(() => [WalletDto])
  async wallets(): Promise<WalletDto[]> {
    return this.walletsService.getWallets();
  }

  @Query(() => [WalletDto])
  @UseGuards(AuthGuard)
  async myWallets(@AuthUser() user: UserEntity): Promise<WalletDto[]> {
    return this.walletsService.getUserWallets(user);
  }

  @Query(() => WalletDto)
  async wallet(
    @Args("uid", { type: () => ID }) uid: string
  ): Promise<WalletDto> {
    return this.walletsService.getWalletById(uid);
  }

  @Mutation(() => WalletDto)
  @UseGuards(AuthGuard)
  async addWallet(
    // @Args("input") input: WalletInput,
    @AuthUser() user: UserEntity
  ): Promise<WalletDto> {
    return this.walletsService.createWallet({}, user);
  }
}
