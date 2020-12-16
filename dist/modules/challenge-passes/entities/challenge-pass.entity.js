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
exports.ChallengePassEntity = void 0;
const challenge_entity_1 = require("../../challenges/entities/challenge.entity");
const transaction_entity_1 = require("../../transactions/entities/transaction.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
let ChallengePassEntity = class ChallengePassEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], ChallengePassEntity.prototype, "uid", void 0);
__decorate([
    typeorm_1.ManyToOne(() => challenge_entity_1.ChallengeEntity, (challenge) => challenge.passes, {
        eager: true,
    }),
    __metadata("design:type", challenge_entity_1.ChallengeEntity)
], ChallengePassEntity.prototype, "challenge", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.UserEntity, (user) => user.challengePasses, {
        eager: true,
    }),
    __metadata("design:type", user_entity_1.UserEntity)
], ChallengePassEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ChallengePassEntity.prototype, "cost", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], ChallengePassEntity.prototype, "obtainedAt", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Date)
], ChallengePassEntity.prototype, "revokedAt", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], ChallengePassEntity.prototype, "dateCreated", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], ChallengePassEntity.prototype, "dateUpdated", void 0);
__decorate([
    typeorm_1.DeleteDateColumn(),
    __metadata("design:type", Date)
], ChallengePassEntity.prototype, "dateDeleted", void 0);
ChallengePassEntity = __decorate([
    typeorm_1.Entity("challenge-passes")
], ChallengePassEntity);
exports.ChallengePassEntity = ChallengePassEntity;
//# sourceMappingURL=challenge-pass.entity.js.map