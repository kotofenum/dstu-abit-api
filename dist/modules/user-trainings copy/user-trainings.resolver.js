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
exports.UserTrainingsResolver = void 0;
const user_trainings_service_1 = require("./user-trainings.service");
const user_training_entity_1 = require("./entities/user-training.entity");
const graphql_1 = require("@nestjs/graphql");
const user_training_dto_1 = require("./dto/user-training.dto");
const user_training_input_1 = require("./inputs/user-training.input");
const auth_guard_1 = require("../../guards/auth.guard");
const common_1 = require("@nestjs/common");
const auth_user_decorator_1 = require("../../decorators/auth-user.decorator");
const user_entity_1 = require("../users/entities/user.entity");
const challenges_service_1 = require("../challenges/challenges.service");
let UserTrainingsResolver = class UserTrainingsResolver {
    constructor(userTrainingsService, challengesService) {
        this.userTrainingsService = userTrainingsService;
        this.challengesService = challengesService;
    }
    async userTrainings() {
        return this.userTrainingsService.getAllUserTrainings();
    }
    async myUserTrainings(user) {
        return this.userTrainingsService.getUserTrainings(user);
    }
    async myUserTrainingsForChallenge(challengeId, user) {
        return this.userTrainingsService.getUserTrainingsForChallenge(user, challengeId);
    }
    async userTraining(uid) {
        return this.userTrainingsService.getUserTrainingById(uid);
    }
    async createUserTraining(input, user) {
        const challenge = await this.challengesService.getChallengeById(input.challengeId);
        return this.userTrainingsService.createUserTraining(input, user, challenge);
    }
    async finishUserTraining(uid, user) {
        return this.userTrainingsService.finishUserTraining(user, uid);
    }
};
__decorate([
    graphql_1.Query(() => [user_training_dto_1.UserTrainingDto]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserTrainingsResolver.prototype, "userTrainings", null);
__decorate([
    graphql_1.Query(() => [user_training_dto_1.UserTrainingDto]),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    __param(0, auth_user_decorator_1.AuthUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], UserTrainingsResolver.prototype, "myUserTrainings", null);
__decorate([
    graphql_1.Query(() => [user_training_dto_1.UserTrainingDto]),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    __param(0, graphql_1.Args("uid", { type: () => graphql_1.ID })),
    __param(1, auth_user_decorator_1.AuthUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], UserTrainingsResolver.prototype, "myUserTrainingsForChallenge", null);
__decorate([
    graphql_1.Query(() => user_training_dto_1.UserTrainingDto),
    __param(0, graphql_1.Args("uid", { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserTrainingsResolver.prototype, "userTraining", null);
__decorate([
    graphql_1.Mutation(() => user_training_dto_1.UserTrainingDto),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    __param(0, graphql_1.Args("input")),
    __param(1, auth_user_decorator_1.AuthUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_training_input_1.UserTrainingInput,
        user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], UserTrainingsResolver.prototype, "createUserTraining", null);
__decorate([
    graphql_1.Mutation(() => user_training_dto_1.UserTrainingDto),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    __param(0, graphql_1.Args("uid", { type: () => graphql_1.ID })),
    __param(1, auth_user_decorator_1.AuthUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], UserTrainingsResolver.prototype, "finishUserTraining", null);
UserTrainingsResolver = __decorate([
    graphql_1.Resolver(() => user_training_entity_1.UserTrainingEntity),
    __metadata("design:paramtypes", [user_trainings_service_1.UserTrainingsService,
        challenges_service_1.ChallengesService])
], UserTrainingsResolver);
exports.UserTrainingsResolver = UserTrainingsResolver;
//# sourceMappingURL=user-trainings.resolver.js.map