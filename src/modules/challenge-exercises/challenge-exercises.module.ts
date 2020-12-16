import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { ChallengeExercisesResolver } from "./challenge-exercises.resolver";
import { ChallengeExercisesService } from "./challenge-exercises.service";
import { ChallengeExerciseEntity } from "./entities/challenge-exercise.entity";
import { AuthGuard } from "src/guards/auth.guard";
import { UsersModule } from "../users/users.module";
import { ExerciseOriginsService } from "../exercise-origins/exercise-origins.service";
import { ExerciseOriginEntity } from "../exercise-origins/entities/exercise-origin.entity";
import { ChallengesService } from "../challenges/challenges.service";
import { ChallengeEntity } from "../challenges/entities/challenge.entity";
import { ChallengePassesModule } from "../challenge-passes/challenge-passes.module";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [TypeOrmModule.forFeature([ChallengeExerciseEntity, ExerciseOriginEntity, ChallengeEntity]), AuthModule, ChallengePassesModule],
  providers: [ChallengeExercisesResolver, ChallengeExercisesService, ExerciseOriginsService, ChallengesService, AuthGuard],
  exports: [ChallengeExercisesService, AuthGuard],
})
export class ChallengeExercisesModule {}
