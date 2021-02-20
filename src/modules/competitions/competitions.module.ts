import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { CompetitionsResolver } from "./competitions.resolver";
import { CompetitionsService } from "./competitions.service";
import { CompetitionEntity } from "./entities/competition.entity";
import { AuthGuard } from "src/guards/auth.guard";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [TypeOrmModule.forFeature([CompetitionEntity]), AuthModule],
  providers: [CompetitionsResolver, CompetitionsService, AuthGuard],
  exports: [CompetitionsService, AuthGuard],
})
export class CompetitionsModule {}
