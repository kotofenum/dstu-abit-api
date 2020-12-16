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
exports.ChallengePassesService = void 0;
const challenge_pass_entity_1 = require("./entities/challenge-pass.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const transactions_service_1 = require("../transactions/transactions.service");
const transaction_entity_1 = require("../transactions/entities/transaction.entity");
let ChallengePassesService = class ChallengePassesService {
    constructor(challengePassesRepository, transactionsService) {
        this.challengePassesRepository = challengePassesRepository;
        this.transactionsService = transactionsService;
    }
    async createChallengePass(data, user, challenge, wallet) {
        const transaction = await this.transactionsService.transferFunds(challenge.price, wallet, null, transaction_entity_1.TransactionPurpose.enrollmentPayment);
        if (!(transaction.status === transaction_entity_1.TransactionStatus.resolved)) {
            throw new common_1.BadRequestException("Recieved transaction with status other than Resolved");
        }
        return await this.challengePassesRepository.save({
            challenge: challenge,
            user: user,
            cost: challenge.price,
            obtainedAt: new Date(),
        });
    }
    async getChallengePasses() {
        return await this.challengePassesRepository.find();
    }
    async getUserChallengePasses(user) {
        return await this.challengePassesRepository.find({ user: user });
    }
    async getUserChallengePassesForChallenge(user, challenge, filterInactive = false) {
        const challengePasses = await this.challengePassesRepository.find({
            user: user,
            challenge: challenge,
        });
        return filterInactive
            ? challengePasses
            : challengePasses.filter((challengePass) => !challengePass.revokedAt);
    }
    async getChallengePassById(id) {
        return await this.challengePassesRepository.findOne(id);
    }
};
ChallengePassesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(challenge_pass_entity_1.ChallengePassEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        transactions_service_1.TransactionsService])
], ChallengePassesService);
exports.ChallengePassesService = ChallengePassesService;
//# sourceMappingURL=challenge-passes.service.js.map