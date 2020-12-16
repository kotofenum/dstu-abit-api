import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { UserExercisesResolver } from "./user-exercises.resolver";
import { UserExercisesService } from "./user-exercises.service";
import { UserExerciseEntity } from "./entities/user-exercise.entity";
import { AuthGuard } from "src/guards/auth.guard";
import { UsersModule } from "../users/users.module";
import { ChallengeExercisesService } from "../challenge-exercises/challenge-exercises.service";
import { ChallengeExerciseEntity } from "../challenge-exercises/entities/challenge-exercise.entity";
import { UserTrainingsService } from "../user-trainings/user-trainings.service";
import { UserTrainingEntity } from "../user-trainings/entities/user-training.entity";
import { ChallengesModule } from "../challenges/challenges.module";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [TypeOrmModule.forFeature([UserExerciseEntity, ChallengeExerciseEntity, UserTrainingEntity]), AuthModule, ChallengesModule],
  providers: [UserExercisesResolver, UserExercisesService, ChallengeExercisesService, UserTrainingsService, AuthGuard],
  exports: [UserExercisesService, AuthGuard],
})
export class UserExercisesModule {}
