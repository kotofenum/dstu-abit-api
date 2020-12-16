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
exports.UserEntity = void 0;
const challenge_pass_entity_1 = require("../../challenge-passes/entities/challenge-pass.entity");
const exercise_origin_entity_1 = require("../../exercise-origins/entities/exercise-origin.entity");
const user_tag_entity_1 = require("../../user-tags/entities/user-tag.entity");
const user_training_entity_1 = require("../../user-trainings/entities/user-training.entity");
const wallet_entity_1 = require("../../wallets/entities/wallet.entity");
const typeorm_1 = require("typeorm");
let UserEntity = class UserEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], UserEntity.prototype, "uid", void 0);
__decorate([
    typeorm_1.Index(),
    typeorm_1.Column({
        unique: true,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "oauthId", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 100 }),
    __metadata("design:type", String)
], UserEntity.prototype, "firstName", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 100 }),
    __metadata("design:type", String)
], UserEntity.prototype, "lastName", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 100, nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "patronym", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Date)
], UserEntity.prototype, "birthDate", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "country", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "locality", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "course", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "child", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "position", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "pwd", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "phone", void 0);
__decorate([
    typeorm_1.Index(),
    typeorm_1.Column({
        default: false,
    }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "emailVerified", void 0);
__decorate([
    typeorm_1.Index(),
    typeorm_1.Column({
        default: false,
    }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "phoneVerified", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserEntity.prototype, "picture", void 0);
__decorate([
    typeorm_1.OneToMany(() => wallet_entity_1.WalletEntity, (wallet) => wallet.owner, {
        cascade: true,
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Array)
], UserEntity.prototype, "wallets", void 0);
__decorate([
    typeorm_1.OneToMany(() => exercise_origin_entity_1.ExerciseOriginEntity, (exerciseOrigin) => exerciseOrigin.owner, {
        cascade: true,
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Array)
], UserEntity.prototype, "exerciseOrigins", void 0);
__decorate([
    typeorm_1.OneToMany(() => challenge_pass_entity_1.ChallengePassEntity, (challengePass) => challengePass.user, {
        cascade: true,
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Array)
], UserEntity.prototype, "challengePasses", void 0);
__decorate([
    typeorm_1.OneToMany(() => user_training_entity_1.UserTrainingEntity, (training) => training.user, {
        cascade: true,
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Array)
], UserEntity.prototype, "trainings", void 0);
__decorate([
    typeorm_1.OneToMany(() => user_tag_entity_1.UserTagEntity, (tag) => tag.user, {
        cascade: true,
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Array)
], UserEntity.prototype, "tags", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], UserEntity.prototype, "dateCreated", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], UserEntity.prototype, "dateUpdated", void 0);
__decorate([
    typeorm_1.DeleteDateColumn(),
    __metadata("design:type", Date)
], UserEntity.prototype, "dateDeleted", void 0);
UserEntity = __decorate([
    typeorm_1.Entity("users")
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map