"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChallengesModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const challenges_resolver_1 = require("./challenges.resolver");
const challenges_service_1 = require("./challenges.service");
const challenge_entity_1 = require("./entities/challenge.entity");
const auth_guard_1 = require("../../guards/auth.guard");
const challenge_passes_module_1 = require("../challenge-passes/challenge-passes.module");
const auth_module_1 = require("../auth/auth.module");
let ChallengesModule = class ChallengesModule {
};
ChallengesModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([challenge_entity_1.ChallengeEntity]), auth_module_1.AuthModule, challenge_passes_module_1.ChallengePassesModule],
        providers: [challenges_resolver_1.ChallengesResolver, challenges_service_1.ChallengesService, auth_guard_1.AuthGuard],
        exports: [challenges_service_1.ChallengesService, auth_guard_1.AuthGuard],
    })
], ChallengesModule);
exports.ChallengesModule = ChallengesModule;
//# sourceMappingURL=challenges.module.js.map