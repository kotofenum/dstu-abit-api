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
exports.ChallengePassesResolver = void 0;
const challenge_passes_service_1 = require("./challenge-passes.service");
const challenge_pass_entity_1 = require("./entities/challenge-pass.entity");
const graphql_1 = require("@nestjs/graphql");
const challenge_pass_dto_1 = require("./dto/challenge-pass.dto");
const challenge_pass_input_1 = require("./inputs/challenge-pass.input");
const auth_guard_1 = require("../../guards/auth.guard");
const common_1 = require("@nestjs/common");
const auth_user_decorator_1 = require("../../decorators/auth-user.decorator");
const user_entity_1 = require("../users/entities/user.entity");
const challenges_service_1 = require("../challenges/challenges.service");
const wallets_service_1 = require("../wallets/wallets.service");
let ChallengePassesResolver = class ChallengePassesResolver {
    constructor(challengePassesService, challengesService, walletsService) {
        this.challengePassesService = challengePassesService;
        this.challengesService = challengesService;
        this.walletsService = walletsService;
    }
    async challengePasses() {
        return this.challengePassesService.getChallengePasses();
    }
    async myChallengePasses(user) {
        return this.challengePassesService.getUserChallengePasses(user);
    }
    async challengePass(uid) {
        return this.challengePassesService.getChallengePassById(uid);
    }
    async obtainChallengePass(input, user) {
        const challenge = await this.challengesService.getChallengeById(input.challengeId);
        const activeChallengePasses = await this.challengePassesService.getUserChallengePassesForChallenge(user, challenge);
        if (activeChallengePasses.length) {
            if (activeChallengePasses.length > 1) {
                console.warn(`User ID: $${user.uid} has several active passes for this challenge, passing the first one found`);
            }
            return activeChallengePasses[0];
        }
        const wallets = await this.walletsService.getUserWallets(user);
        const targetWallet = wallets[0];
        if (targetWallet.balance < challenge.price) {
            throw new common_1.BadRequestException('Insufficients funds for obtaining the challenge pass');
        }
        return this.challengePassesService.createChallengePass(input, user, challenge, targetWallet);
    }
};
__decorate([
    graphql_1.Query(() => [challenge_pass_dto_1.ChallengePassDto]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ChallengePassesResolver.prototype, "challengePasses", null);
__decorate([
    graphql_1.Query(() => [challenge_pass_dto_1.ChallengePassDto]),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    __param(0, auth_user_decorator_1.AuthUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], ChallengePassesResolver.prototype, "myChallengePasses", null);
__decorate([
    graphql_1.Query(() => challenge_pass_dto_1.ChallengePassDto),
    __param(0, graphql_1.Args("uid", { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChallengePassesResolver.prototype, "challengePass", null);
__decorate([
    graphql_1.Mutation(() => challenge_pass_dto_1.ChallengePassDto),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    __param(0, graphql_1.Args("input")),
    __param(1, auth_user_decorator_1.AuthUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [challenge_pass_input_1.ChallengePassInput,
        user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], ChallengePassesResolver.prototype, "obtainChallengePass", null);
ChallengePassesResolver = __decorate([
    graphql_1.Resolver(() => challenge_pass_entity_1.ChallengePassEntity),
    __metadata("design:paramtypes", [challenge_passes_service_1.ChallengePassesService,
        challenges_service_1.ChallengesService,
        wallets_service_1.WalletsService])
], ChallengePassesResolver);
exports.ChallengePassesResolver = ChallengePassesResolver;
//# sourceMappingURL=challenge-passes.resolver.js.map