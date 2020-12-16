"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const wallets_module_1 = require("./wallets/wallets.module");
const transactions_module_1 = require("./transactions/transactions.module");
const exercise_origins_module_1 = require("./exercise-origins/exercise-origins.module");
const challenge_exercises_module_1 = require("./challenge-exercises/challenge-exercises.module");
const challenges_module_1 = require("./challenges/challenges.module");
const challenge_passes_module_1 = require("./challenge-passes/challenge-passes.module");
const user_exercises_module_1 = require("./user-exercises/user-exercises.module");
const user_trainings_module_1 = require("./user-trainings/user-trainings.module");
const recognition_module_1 = require("./recognition/recognition.module");
const events_module_1 = require("./events/events.module");
const majors_module_1 = require("./majors/majors.module");
const specialties_module_1 = require("./specialties/specialties.module");
const auth_module_1 = require("./auth/auth.module");
const programs_module_1 = require("./programs/programs.module");
const user_tags_module_1 = require("./user-tags/user-tags.module");
const event_tags_module_1 = require("./event-tags/event-tags.module");
const codes_module_1 = require("./codes/codes.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(),
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: 'schema.gql',
                installSubscriptionHandlers: true,
                subscriptions: {
                    path: "/graphql/websocket",
                },
                context: ({ req }) => ({ req })
            }),
            users_module_1.UsersModule,
            wallets_module_1.WalletsModule,
            transactions_module_1.TransactionsModule,
            exercise_origins_module_1.ExerciseOriginsModule,
            challenge_exercises_module_1.ChallengeExercisesModule,
            challenges_module_1.ChallengesModule,
            challenge_passes_module_1.ChallengePassesModule,
            user_exercises_module_1.UserExercisesModule,
            user_trainings_module_1.UserTrainingsModule,
            recognition_module_1.RecognitionModule,
            events_module_1.EventsModule,
            majors_module_1.MajorsModule,
            specialties_module_1.SpecialtiesModule,
            programs_module_1.ProgramsModule,
            user_tags_module_1.UserTagsModule,
            event_tags_module_1.EventTagsModule,
            codes_module_1.CodesModule,
            auth_module_1.AuthModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map