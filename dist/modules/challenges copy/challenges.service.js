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
const challenge_entity_1 = require("./entities/challenge.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const challenge_passes_service_1 = require("../challenge-passes/challenge-passes.service");
let ChallengesService = class ChallengesService {
    constructor(challengesRepository, challengePassesService) {
        this.challengesRepository = challengesRepository;
        this.challengePassesService = challengePassesService;
    }
    async createChallenge(data, owner) {
        return await this.challengesRepository.save({
            title: data.title,
            description: data.description,
            owner: owner,
            price: data.price,
            config: data.config,
            startsAt: data.startsAt,
            endsAt: data.endsAt,
        });
    }
    async getChallenges() {
        return await this.challengesRepository.find({ relations: ["exercises"] });
    }
    async getUserChallenges(user) {
        const challengePasses = await this.challengePassesService.getUserChallengePasses(user);
        const challengeIds = challengePasses.reduce((acc, challengePass) => {
            if (!challengePass.revokedAt && !(acc.includes(challengePass.challenge.uid))) {
                return [...acc, challengePass.challenge.uid];
            }
            else {
                return acc;
            }
        }, []);
        return await this.challengesRepository.find({
            relations: ["exercises"],
            where: { uid: typeorm_2.In(challengeIds) },
        });
    }
    async getChallengeById(id) {
        return await this.challengesRepository.findOne(id, {
            relations: ["exercises"],
        });
    }
    async checkUserPassForChallenge(challenge, user) {
        const userChallengePasses = await this.challengePassesService.getUserChallengePasses(user);
        const targetChallengePass = userChallengePasses.find(challengePass => challengePass.challenge.uid === challenge.uid);
        return !!(targetChallengePass === null || targetChallengePass === void 0 ? void 0 : targetChallengePass.obtainedAt) && !(targetChallengePass === null || targetChallengePass === void 0 ? void 0 : targetChallengePass.revokedAt);
    }
};
ChallengesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(challenge_entity_1.ChallengeEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        challenge_passes_service_1.ChallengePassesService])
], ChallengesService);
exports.ChallengesService = ChallengesService;
//# sourceMappingURL=challenges.service.js.map