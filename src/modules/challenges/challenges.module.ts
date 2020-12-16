import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { ChallengesResolver } from "./challenges.resolver";
import { ChallengesService } from "./challenges.service";
import { ChallengeEntity } from "./entities/challenge.entity";
import { AuthGuard } from "src/guards/auth.guard";
import { UsersModule } from "../users/users.module";
import { ChallengePassesModule } from "../challenge-passes/challenge-passes.module";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [TypeOrmModule.forFeature([ChallengeEntity]), AuthModule, ChallengePassesModule],
  providers: [ChallengesResolver, ChallengesService, AuthGuard],
  exports: [ChallengesService, AuthGuard],
})
export class ChallengesModule {}
