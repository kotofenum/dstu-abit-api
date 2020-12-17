import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { WalletsModule } from './wallets/wallets.module';
import { TransactionsModule } from './transactions/transactions.module';
import { ExerciseOriginsModule } from './exercise-origins/exercise-origins.module';
import { ChallengeExercisesModule } from './challenge-exercises/challenge-exercises.module';
import { ChallengesModule } from './challenges/challenges.module';
import { ChallengePassesModule } from './challenge-passes/challenge-passes.module';
import { UserExercisesModule } from './user-exercises/user-exercises.module';
import { UserTrainingsModule } from './user-trainings/user-trainings.module';
import { RecognitionModule } from './recognition/recognition.module';
import { EventsModule } from './events/events.module';
import { MajorsModule } from './majors/majors.module';
import { SpecialtiesModule } from './specialties/specialties.module';
import { AuthModule } from './auth/auth.module';
import { ProgramsModule } from './programs/programs.module';
import { UserTagsModule } from './user-tags/user-tags.module';
import { EventTagsModule } from './event-tags/event-tags.module';
import { CodesModule } from './codes/codes.module';
import { ProgramSubjectsModule } from './program-subjects/program-subjects.module';
import { SubjectsModule } from './subjects/subjects.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      installSubscriptionHandlers: true,
      subscriptions: {
        path: "/graphql/websocket",
      },
      context: ({ req }) => ({ req })
    }),
    UsersModule,
    WalletsModule,
    TransactionsModule,
    ExerciseOriginsModule,
    ChallengeExercisesModule,
    ChallengesModule,
    ChallengePassesModule,
    UserExercisesModule,
    UserTrainingsModule,
    RecognitionModule,
    EventsModule,
    MajorsModule,
    SpecialtiesModule,
    ProgramsModule,
    UserTagsModule,
    EventTagsModule,
    CodesModule,
    SubjectsModule,
    ProgramSubjectsModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
