import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { ExerciseOriginsResolver } from "./exercise-origins.resolver";
import { ExerciseOriginsService } from "./exercise-origins.service";
import { ExerciseOriginEntity } from "./entities/exercise-origin.entity";
import { AuthGuard } from "src/guards/auth.guard";
import { UsersModule } from "../users/users.module";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [TypeOrmModule.forFeature([ExerciseOriginEntity]), AuthModule],
  providers: [ExerciseOriginsResolver, ExerciseOriginsService, AuthGuard],
  exports: [ExerciseOriginsService, AuthGuard],
})
export class ExerciseOriginsModule {}
