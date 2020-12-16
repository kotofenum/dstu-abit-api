"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChallengeExercisesResolver = void 0;
const challenge_exercises_service_1 = require("./challenge-exercises.service");
const challenge_exercise_entity_1 = require("./entities/challenge-exercise.entity");
const graphql_1 = require("@nestjs/graphql");
const challenge_exercise_dto_1 = require("./dto/challenge-exercise.dto");
const challenge_exercise_input_1 = require("./inputs/challenge-exercise.input");
const auth_guard_1 = require("../../guards/auth.guard");
const common_1 = require("@nestjs/common");
const auth_user_decorator_1 = require("../../decorators/auth-user.decorator");
const user_entity_1 = require("../users/entities/user.entity");
const exercise_origins_service_1 = require("../exercise-origins/exercise-origins.service");
const challenges_service_1 = require("../challenges/challenges.service");
let ChallengeExercisesResolver = class ChallengeExercisesResolver {
    constructor(challengeExercisesService, exerciseOriginsService, challengesService) {
        this.challengeExercisesService = challengeExercisesService;
        this.exerciseOriginsService = exerciseOriginsService;
        this.challengesService = challengesService;
    }
    async challengeExercises() {
        return this.challengeExercisesService.getChallengeExercises();
    }
    async challengeExercise(uid) {
        return this.challengeExercisesService.getChallengeExerciseById(uid);
    }
    async addChallengeExercise(input, user) {
        const exerciseOrigin = await this.exerciseOriginsService.getExerciseOriginById(input.exerciseOriginId);
        const challenge = await this.challengesService.getChallengeById(input.challengeId);
        return this.challengeExercisesService.createChallengeExercise(input, exerciseOrigin, challenge);
    }
};
__decorate([
    graphql_1.Query(() => [challenge_exercise_dto_1.ChallengeExerciseDto]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ChallengeExercisesResolver.prototype, "challengeExercises", null);
__decorate([
    graphql_1.Query(() => challenge_exercise_dto_1.ChallengeExerciseDto),
    __param(0, graphql_1.Args("uid", { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChallengeExercisesResolver.prototype, "challengeExercise", null);
__decorate([
    graphql_1.Mutation(() => challenge_exercise_dto_1.ChallengeExerciseDto),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    __param(0, graphql_1.Args("input")),
    __param(1, auth_user_decorator_1.AuthUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [challenge_exercise_input_1.ChallengeExerciseInput,
        user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], ChallengeExercisesResolver.prototype, "addChallengeExercise", null);
ChallengeExercisesResolver = __decorate([
    graphql_1.Resolver(() => challenge_exercise_entity_1.ChallengeExerciseEntity),
    __metadata("design:paramtypes", [challenge_exercises_service_1.ChallengeExercisesService,
        exercise_origins_service_1.ExerciseOriginsService,
        challenges_service_1.ChallengesService])
], ChallengeExercisesResolver);
exports.ChallengeExercisesResolver = ChallengeExercisesResolver;
//# sourceMappingURL=challenge-exercises.resolver.js.map