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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionEntity = exports.TransactionStatus = exports.TransactionPurpose = void 0;
const wallet_entity_1 = require("../../wallets/entities/wallet.entity");
const typeorm_1 = require("typeorm");
var TransactionPurpose;
(function (TransactionPurpose) {
    TransactionPurpose["internalTransfer"] = "internal_transfer";
    TransactionPurpose["depositFunds"] = "deposit_funds";
    TransactionPurpose["withdrawFunds"] = "withdraw_funds";
    TransactionPurpose["winningsPayout"] = "winnings_payout";
    TransactionPurpose["enrollmentPayment"] = "enrollment_payment";
    TransactionPurpose["transferForDistribution"] = "transfer_for_distribution";
    TransactionPurpose["other"] = "other";
})(TransactionPurpose = exports.TransactionPurpose || (exports.TransactionPurpose = {}));
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["queued"] = "queued";
    TransactionStatus["processing"] = "processing";
    TransactionStatus["suspended"] = "suspended";
    TransactionStatus["pending"] = "pending";
    TransactionStatus["rejected"] = "rejected";
    TransactionStatus["resolved"] = "resolved";
})(TransactionStatus = exports.TransactionStatus || (exports.TransactionStatus = {}));
let TransactionEntity = class TransactionEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], TransactionEntity.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], TransactionEntity.prototype, "amount", void 0);
__decorate([
    typeorm_1.ManyToOne(() => wallet_entity_1.WalletEntity, (wallet) => wallet.outgoing, {
        eager: true,
        nullable: true,
    }),
    __metadata("design:type", wallet_entity_1.WalletEntity)
], TransactionEntity.prototype, "from", void 0);
__decorate([
    typeorm_1.ManyToOne(() => wallet_entity_1.WalletEntity, (wallet) => wallet.incoming, {
        eager: true,
        nullable: true,
    }),
    __metadata("design:type", wallet_entity_1.WalletEntity)
], TransactionEntity.prototype, "to", void 0);
__decorate([
    typeorm_1.Column({ default: TransactionPurpose.other }),
    __metadata("design:type", String)
], TransactionEntity.prototype, "purpose", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], TransactionEntity.prototype, "status", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], TransactionEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], TransactionEntity.prototype, "dateCreated", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], TransactionEntity.prototype, "dateUpdated", void 0);
__decorate([
    typeorm_1.DeleteDateColumn(),
    __metadata("design:type", Date)
], TransactionEntity.prototype, "dateDeleted", void 0);
TransactionEntity = __decorate([
    typeorm_1.Entity("transactions")
], TransactionEntity);
exports.TransactionEntity = TransactionEntity;
//# sourceMappingURL=transaction.entity.js.map