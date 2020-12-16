import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { UserTrainingsResolver } from "./user-trainings.resolver";
import { UserTrainingsService } from "./user-trainings.service";
import { UserTrainingEntity } from "./entities/user-training.entity";
import { AuthGuard } from "src/guards/auth.guard";
import { UsersModule } from "../users/users.module";
import { ChallengesService } from "../challenges/challenges.service";
import { ChallengeEntity } from "../challenges/entities/challenge.entity";
import { UserExercisesService } from "../user-exercises/user-exercises.service";
import { UserExerciseEntity } from "../user-exercises/entities/user-exercise.entity";
import { ChallengeExercisesService } from "../challenge-exercises/challenge-exercises.service";
import { ChallengeExerciseEntity } from "../challenge-exercises/entities/challenge-exercise.entity";
import { ChallengePassesModule } from "../challenge-passes/challenge-passes.module";
import { ChallengesModule } from "../challenges/challenges.module";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [TypeOrmModule.forFeature([UserTrainingEntity, ChallengeEntity, UserExerciseEntity, ChallengeExerciseEntity]), AuthModule, ChallengesModule, ChallengePassesModule],
  providers: [UserTrainingsResolver, UserTrainingsService, ChallengesService, UserExercisesService, ChallengeExercisesService, AuthGuard],
  exports: [UserTrainingsService, AuthGuard],
})
export class UserTrainingsModule {}
