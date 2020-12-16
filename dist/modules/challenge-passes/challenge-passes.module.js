"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChallengePassesModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const challenge_passes_resolver_1 = require("./challenge-passes.resolver");
const challenge_passes_service_1 = require("./challenge-passes.service");
const challenge_pass_entity_1 = require("./entities/challenge-pass.entity");
const auth_guard_1 = require("../../guards/auth.guard");
const challenges_service_1 = require("../challenges/challenges.service");
const challenge_entity_1 = require("../challenges/entities/challenge.entity");
const wallets_service_1 = require("../wallets/wallets.service");
const wallet_entity_1 = require("../wallets/entities/wallet.entity");
const transactions_service_1 = require("../transactions/transactions.service");
const transaction_entity_1 = require("../transactions/entities/transaction.entity");
const auth_module_1 = require("../auth/auth.module");
let ChallengePassesModule = class ChallengePassesModule {
};
ChallengePassesModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                challenge_pass_entity_1.ChallengePassEntity,
                challenge_entity_1.ChallengeEntity,
                wallet_entity_1.WalletEntity,
                transaction_entity_1.TransactionEntity
            ]),
            auth_module_1.AuthModule,
        ],
        providers: [
            challenge_passes_resolver_1.ChallengePassesResolver,
            challenge_passes_service_1.ChallengePassesService,
            challenges_service_1.ChallengesService,
            wallets_service_1.WalletsService,
            transactions_service_1.TransactionsService,
            auth_guard_1.AuthGuard,
        ],
        exports: [challenge_passes_service_1.ChallengePassesService, auth_guard_1.AuthGuard],
    })
], ChallengePassesModule);
exports.ChallengePassesModule = ChallengePassesModule;
//# sourceMappingURL=challenge-passes.module.js.map