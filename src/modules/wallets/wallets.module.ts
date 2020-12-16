import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { WalletsResolver } from "./wallets.resolver";
import { WalletsService } from "./wallets.service";
import { WalletEntity } from "./entities/wallet.entity";
import { AuthGuard } from "src/guards/auth.guard";
import { UsersModule } from "../users/users.module";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [TypeOrmModule.forFeature([WalletEntity]), AuthModule],
  providers: [WalletsResolver, WalletsService, AuthGuard],
  exports: [WalletsService, AuthGuard],
})
export class WalletsModule {}
