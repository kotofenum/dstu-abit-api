"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const users_resolver_1 = require("./users.resolver");
const users_service_1 = require("./users.service");
const user_entity_1 = require("./entities/user.entity");
const auth_guard_1 = require("../../guards/auth.guard");
const wallets_service_1 = require("../wallets/wallets.service");
const wallet_entity_1 = require("../wallets/entities/wallet.entity");
const transactions_service_1 = require("../transactions/transactions.service");
const transaction_entity_1 = require("../transactions/entities/transaction.entity");
const auth_module_1 = require("../auth/auth.module");
const codes_module_1 = require("../codes/codes.module");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    common_1.Module({
        imports: [
            auth_module_1.AuthModule,
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.UserEntity, wallet_entity_1.WalletEntity, transaction_entity_1.TransactionEntity]),
            codes_module_1.CodesModule
        ],
        providers: [users_resolver_1.UsersResolver, users_service_1.UsersService, wallets_service_1.WalletsService, transactions_service_1.TransactionsService],
        exports: [users_service_1.UsersService],
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map