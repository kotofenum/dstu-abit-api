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
exports.WalletsResolver = void 0;
const wallets_service_1 = require("./wallets.service");
const wallet_entity_1 = require("./entities/wallet.entity");
const graphql_1 = require("@nestjs/graphql");
const wallet_dto_1 = require("./dto/wallet.dto");
const auth_guard_1 = require("../../guards/auth.guard");
const common_1 = require("@nestjs/common");
const auth_user_decorator_1 = require("../../decorators/auth-user.decorator");
const user_entity_1 = require("../users/entities/user.entity");
let WalletsResolver = class WalletsResolver {
    constructor(walletsService) {
        this.walletsService = walletsService;
    }
    async wallets() {
        return this.walletsService.getWallets();
    }
    async myWallets(user) {
        return this.walletsService.getUserWallets(user);
    }
    async wallet(uid) {
        return this.walletsService.getWalletById(uid);
    }
    async addWallet(user) {
        return this.walletsService.createWallet({}, user);
    }
};
__decorate([
    graphql_1.Query(() => [wallet_dto_1.WalletDto]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WalletsResolver.prototype, "wallets", null);
__decorate([
    graphql_1.Query(() => [wallet_dto_1.WalletDto]),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    __param(0, auth_user_decorator_1.AuthUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], WalletsResolver.prototype, "myWallets", null);
__decorate([
    graphql_1.Query(() => wallet_dto_1.WalletDto),
    __param(0, graphql_1.Args("uid", { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WalletsResolver.prototype, "wallet", null);
__decorate([
    graphql_1.Mutation(() => wallet_dto_1.WalletDto),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    __param(0, auth_user_decorator_1.AuthUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], WalletsResolver.prototype, "addWallet", null);
WalletsResolver = __decorate([
    graphql_1.Resolver(() => wallet_entity_1.WalletEntity),
    __metadata("design:paramtypes", [wallets_service_1.WalletsService])
], WalletsResolver);
exports.WalletsResolver = WalletsResolver;
//# sourceMappingURL=wallets.resolver.js.map