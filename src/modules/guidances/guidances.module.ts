import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { GuidancesResolver } from "./guidances.resolver";
import { GuidancesService } from "./guidances.service";
import { GuidanceEntity } from "./entities/guidance.entity";
import { AuthGuard } from "src/guards/auth.guard";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [TypeOrmModule.forFeature([GuidanceEntity]), AuthModule],
  providers: [GuidancesResolver, GuidancesService, AuthGuard],
  exports: [GuidancesService, AuthGuard],
})
export class GuidancesModule {}
