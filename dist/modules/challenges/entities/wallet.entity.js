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
exports.WalletEntity = void 0;
const graphql_1 = require("@nestjs/graphql");
const transaction_entity_1 = require("../../transactions/entities/transaction.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const wallet_1 = require("../../../proto/wallet");
const typeorm_1 = require("typeorm");
graphql_1.registerEnumType(wallet_1.WalletType, {
    name: "WalletType",
});
let WalletEntity = class WalletEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], WalletEntity.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], WalletEntity.prototype, "balance", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.UserEntity, (user) => user.wallets, {
        eager: true,
    }),
    __metadata("design:type", user_entity_1.UserEntity)
], WalletEntity.prototype, "owner", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], WalletEntity.prototype, "type", void 0);
__decorate([
    typeorm_1.Column({
        default: false,
    }),
    __metadata("design:type", Boolean)
], WalletEntity.prototype, "secure", void 0);
__decorate([
    typeorm_1.OneToMany(() => transaction_entity_1.TransactionEntity, transaction => transaction.from, {
        cascade: true,
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Array)
], WalletEntity.prototype, "outgoing", void 0);
__decorate([
    typeorm_1.OneToMany(() => transaction_entity_1.TransactionEntity, transaction => transaction.to, {
        cascade: true,
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Array)
], WalletEntity.prototype, "incoming", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], WalletEntity.prototype, "dateCreated", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], WalletEntity.prototype, "dateUpdated", void 0);
__decorate([
    typeorm_1.DeleteDateColumn(),
    __metadata("design:type", Date)
], WalletEntity.prototype, "dateDeleted", void 0);
WalletEntity = __decorate([
    typeorm_1.Entity("wallets")
], WalletEntity);
exports.WalletEntity = WalletEntity;
//# sourceMappingURL=wallet.entity.js.map