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
exports.TransactionsResolver = void 0;
const transactions_service_1 = require("./transactions.service");
const transaction_entity_1 = require("./entities/transaction.entity");
const graphql_1 = require("@nestjs/graphql");
const transaction_dto_1 = require("./dto/transaction.dto");
let TransactionsResolver = class TransactionsResolver {
    constructor(transactionsService) {
        this.transactionsService = transactionsService;
    }
    async transactions() {
        return this.transactionsService.getTransactions();
    }
    async transaction(uid) {
        return this.transactionsService.getTransactionById(uid);
    }
};
__decorate([
    graphql_1.Query(() => [transaction_dto_1.TransactionDto]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TransactionsResolver.prototype, "transactions", null);
__decorate([
    graphql_1.Query(() => transaction_dto_1.TransactionDto),
    __param(0, graphql_1.Args("uid", { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TransactionsResolver.prototype, "transaction", null);
TransactionsResolver = __decorate([
    graphql_1.Resolver(() => transaction_entity_1.TransactionEntity),
    __metadata("design:paramtypes", [transactions_service_1.TransactionsService])
], TransactionsResolver);
exports.TransactionsResolver = TransactionsResolver;
//# sourceMappingURL=transactions.resolver.js.map