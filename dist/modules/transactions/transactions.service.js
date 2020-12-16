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
exports.TransactionsService = void 0;
const transaction_entity_1 = require("./entities/transaction.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let TransactionsService = class TransactionsService {
    constructor(transactionsRepository) {
        this.transactionsRepository = transactionsRepository;
    }
    async transferFunds(amount, from, to, purpose) {
        if (!from && !to) {
            throw new common_1.BadRequestException("No internal wallets specified for the transaction");
        }
        else {
            const transaction = await this.transactionsRepository.create({
                amount: amount,
                from: from,
                to: to,
                purpose: purpose || transaction_entity_1.TransactionPurpose.other,
                status: transaction_entity_1.TransactionStatus.queued,
            });
            transaction.status = transaction_entity_1.TransactionStatus.processing;
            await this.transactionsRepository.save(transaction);
            const connection = typeorm_2.getConnection();
            const queryRunner = connection.createQueryRunner();
            await queryRunner.connect();
            await queryRunner.startTransaction();
            try {
                if (to) {
                    to.balance += amount;
                }
                if (from) {
                    if (from.balance < amount) {
                        throw new common_1.BadRequestException("Insufficient funds for withdraw operation");
                    }
                    from.balance -= amount;
                }
                if (to) {
                    await queryRunner.manager.save(to);
                }
                if (from) {
                    await queryRunner.manager.save(from);
                }
                transaction.status = transaction_entity_1.TransactionStatus.resolved;
                await queryRunner.manager.save(transaction);
                await queryRunner.commitTransaction();
                const updatedTransaction = await this.getTransactionById(transaction.uid);
                return updatedTransaction;
            }
            catch (err) {
                await queryRunner.rollbackTransaction();
                transaction.status = transaction_entity_1.TransactionStatus.rejected;
                await this.transactionsRepository.save(transaction);
                throw err;
            }
            finally {
                await queryRunner.release();
            }
        }
    }
    async getTransactions() {
        return await this.transactionsRepository.find();
    }
    async getOutgoingWalletTransactions(wallet) {
        return await this.transactionsRepository.find({ from: wallet });
    }
    async getIncomingWalletTransactions(wallet) {
        return await this.transactionsRepository.find({ to: wallet });
    }
    async getTransactionById(id) {
        return await this.transactionsRepository.findOne(id);
    }
};
TransactionsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(transaction_entity_1.TransactionEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TransactionsService);
exports.TransactionsService = TransactionsService;
//# sourceMappingURL=transactions.service.js.map