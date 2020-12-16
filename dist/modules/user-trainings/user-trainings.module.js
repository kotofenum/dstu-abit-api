"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTrainingsModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const user_trainings_resolver_1 = require("./user-trainings.resolver");
const user_trainings_service_1 = require("./user-trainings.service");
const user_training_entity_1 = require("./entities/user-training.entity");
const auth_guard_1 = require("../../guards/auth.guard");
const challenges_service_1 = require("../challenges/challenges.service");
const challenge_entity_1 = require("../challenges/entities/challenge.entity");
const user_exercises_service_1 = require("../user-exercises/user-exercises.service");
const user_exercise_entity_1 = require("../user-exercises/entities/user-exercise.entity");
const challenge_exercises_service_1 = require("../challenge-exercises/challenge-exercises.service");
const challenge_exercise_entity_1 = require("../challenge-exercises/entities/challenge-exercise.entity");
const challenge_passes_module_1 = require("../challenge-passes/challenge-passes.module");
const challenges_module_1 = require("../challenges/challenges.module");
const auth_module_1 = require("../auth/auth.module");
let UserTrainingsModule = class UserTrainingsModule {
};
UserTrainingsModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_training_entity_1.UserTrainingEntity, challenge_entity_1.ChallengeEntity, user_exercise_entity_1.UserExerciseEntity, challenge_exercise_entity_1.ChallengeExerciseEntity]), auth_module_1.AuthModule, challenges_module_1.ChallengesModule, challenge_passes_module_1.ChallengePassesModule],
        providers: [user_trainings_resolver_1.UserTrainingsResolver, user_trainings_service_1.UserTrainingsService, challenges_service_1.ChallengesService, user_exercises_service_1.UserExercisesService, challenge_exercises_service_1.ChallengeExercisesService, auth_guard_1.AuthGuard],
        exports: [user_trainings_service_1.UserTrainingsService, auth_guard_1.AuthGuard],
    })
], UserTrainingsModule);
exports.UserTrainingsModule = UserTrainingsModule;
//# sourceMappingURL=user-trainings.module.js.map