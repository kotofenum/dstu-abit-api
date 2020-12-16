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
exports.UserExercisesResolver = void 0;
const user_exercises_service_1 = require("./user-exercises.service");
const user_exercise_entity_1 = require("./entities/user-exercise.entity");
const graphql_1 = require("@nestjs/graphql");
const user_exercise_dto_1 = require("./dto/user-exercise.dto");
const user_exercise_input_1 = require("./inputs/user-exercise.input");
const auth_guard_1 = require("../../guards/auth.guard");
const common_1 = require("@nestjs/common");
const auth_user_decorator_1 = require("../../decorators/auth-user.decorator");
const user_entity_1 = require("../users/entities/user.entity");
const challenge_exercises_service_1 = require("../challenge-exercises/challenge-exercises.service");
const user_trainings_service_1 = require("../user-trainings/user-trainings.service");
let UserExercisesResolver = class UserExercisesResolver {
    constructor(userExercisesService, challengeExercisesService, userTrainingsService) {
        this.userExercisesService = userExercisesService;
        this.challengeExercisesService = challengeExercisesService;
        this.userTrainingsService = userTrainingsService;
    }
    async userExercises() {
        return this.userExercisesService.getUserExercises();
    }
    async userExercise(uid) {
        return this.userExercisesService.getUserExerciseById(uid);
    }
    async createUserExercise(input, user) {
        const challengeExercise = await this.challengeExercisesService.getChallengeExerciseById(input.challengeExerciseId);
        const userTraining = await this.userTrainingsService.getUserTrainingById(input.trainingId);
        return this.userExercisesService.createUserExercise(input, challengeExercise, userTraining);
    }
};
__decorate([
    graphql_1.Query(() => [user_exercise_dto_1.UserExerciseDto]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserExercisesResolver.prototype, "userExercises", null);
__decorate([
    graphql_1.Query(() => user_exercise_dto_1.UserExerciseDto),
    __param(0, graphql_1.Args("uid", { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserExercisesResolver.prototype, "userExercise", null);
__decorate([
    graphql_1.Mutation(() => user_exercise_dto_1.UserExerciseDto),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    __param(0, graphql_1.Args("input")),
    __param(1, auth_user_decorator_1.AuthUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_exercise_input_1.UserExerciseInput,
        user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], UserExercisesResolver.prototype, "createUserExercise", null);
UserExercisesResolver = __decorate([
    graphql_1.Resolver(() => user_exercise_entity_1.UserExerciseEntity),
    __metadata("design:paramtypes", [user_exercises_service_1.UserExercisesService,
        challenge_exercises_service_1.ChallengeExercisesService,
        user_trainings_service_1.UserTrainingsService])
], UserExercisesResolver);
exports.UserExercisesResolver = UserExercisesResolver;
//# sourceMappingURL=user-exercises.resolver.js.map