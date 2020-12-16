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
const challenges_service_1 = require("./challenges.service");
const challenge_entity_1 = require("./entities/challenge.entity");
const graphql_1 = require("@nestjs/graphql");
const challenge_dto_1 = require("./dto/challenge.dto");
const challenge_input_1 = require("./inputs/challenge.input");
const auth_guard_1 = require("../../guards/auth.guard");
const common_1 = require("@nestjs/common");
const auth_user_decorator_1 = require("../../decorators/auth-user.decorator");
const user_entity_1 = require("../users/entities/user.entity");
const challengeWithExercises_dto_1 = require("./dto/challengeWithExercises.dto");
let ChallengesResolver = class ChallengesResolver {
    constructor(challengesService) {
        this.challengesService = challengesService;
    }
    async challenges() {
        return this.challengesService.getChallenges();
    }
    async myChallenges(user) {
        return this.challengesService.getUserChallenges(user);
    }
    async challenge(uid) {
        return this.challengesService.getChallengeById(uid);
    }
    async addChallenge(input, user) {
        console.log(input);
        return this.challengesService.createChallenge(input, user);
    }
};
__decorate([
    graphql_1.Query(() => [challengeWithExercises_dto_1.ChallengeWithExercisesDto]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ChallengesResolver.prototype, "challenges", null);
__decorate([
    graphql_1.Query(() => [challengeWithExercises_dto_1.ChallengeWithExercisesDto]),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    __param(0, auth_user_decorator_1.AuthUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], ChallengesResolver.prototype, "myChallenges", null);
__decorate([
    graphql_1.Query(() => challengeWithExercises_dto_1.ChallengeWithExercisesDto),
    __param(0, graphql_1.Args("uid", { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChallengesResolver.prototype, "challenge", null);
__decorate([
    graphql_1.Mutation(() => challenge_dto_1.ChallengeDto),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    __param(0, graphql_1.Args("input")),
    __param(1, auth_user_decorator_1.AuthUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [challenge_input_1.ChallengeInput,
        user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], ChallengesResolver.prototype, "addChallenge", null);
ChallengesResolver = __decorate([
    graphql_1.Resolver(() => challenge_entity_1.ChallengeEntity),
    __metadata("design:paramtypes", [challenges_service_1.ChallengesService])
], ChallengesResolver);
exports.ChallengesResolver = ChallengesResolver;
//# sourceMappingURL=challenges.resolver.js.map