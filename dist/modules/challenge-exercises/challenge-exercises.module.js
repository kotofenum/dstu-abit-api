"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChallengeExercisesModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const challenge_exercises_resolver_1 = require("./challenge-exercises.resolver");
const challenge_exercises_service_1 = require("./challenge-exercises.service");
const challenge_exercise_entity_1 = require("./entities/challenge-exercise.entity");
const auth_guard_1 = require("../../guards/auth.guard");
const exercise_origins_service_1 = require("../exercise-origins/exercise-origins.service");
const exercise_origin_entity_1 = require("../exercise-origins/entities/exercise-origin.entity");
const challenges_service_1 = require("../challenges/challenges.service");
const challenge_entity_1 = require("../challenges/entities/challenge.entity");
const challenge_passes_module_1 = require("../challenge-passes/challenge-passes.module");
const auth_module_1 = require("../auth/auth.module");
let ChallengeExercisesModule = class ChallengeExercisesModule {
};
ChallengeExercisesModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([challenge_exercise_entity_1.ChallengeExerciseEntity, exercise_origin_entity_1.ExerciseOriginEntity, challenge_entity_1.ChallengeEntity]), auth_module_1.AuthModule, challenge_passes_module_1.ChallengePassesModule],
        providers: [challenge_exercises_resolver_1.ChallengeExercisesResolver, challenge_exercises_service_1.ChallengeExercisesService, exercise_origins_service_1.ExerciseOriginsService, challenges_service_1.ChallengesService, auth_guard_1.AuthGuard],
        exports: [challenge_exercises_service_1.ChallengeExercisesService, auth_guard_1.AuthGuard],
    })
], ChallengeExercisesModule);
exports.ChallengeExercisesModule = ChallengeExercisesModule;
//# sourceMappingURL=challenge-exercises.module.js.map