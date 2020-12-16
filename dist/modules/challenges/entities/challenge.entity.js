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
exports.ChallengeEntity = void 0;
const challenge_exercise_entity_1 = require("../../challenge-exercises/entities/challenge-exercise.entity");
const challenge_pass_entity_1 = require("../../challenge-passes/entities/challenge-pass.entity");
const user_training_entity_1 = require("../../user-trainings/entities/user-training.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const challenge_1 = require("../../../proto/challenge");
const typeorm_1 = require("typeorm");
let ChallengeEntity = class ChallengeEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], ChallengeEntity.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ChallengeEntity.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], ChallengeEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.UserEntity, (user) => user.wallets, {
        eager: true,
    }),
    __metadata("design:type", user_entity_1.UserEntity)
], ChallengeEntity.prototype, "owner", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ChallengeEntity.prototype, "price", void 0);
__decorate([
    typeorm_1.OneToMany(() => challenge_exercise_entity_1.ChallengeExerciseEntity, (challengeExercise) => challengeExercise.challenge, {
        cascade: true,
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Array)
], ChallengeEntity.prototype, "exercises", void 0);
__decorate([
    typeorm_1.Column("simple-json"),
    __metadata("design:type", Object)
], ChallengeEntity.prototype, "config", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], ChallengeEntity.prototype, "startsAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], ChallengeEntity.prototype, "endsAt", void 0);
__decorate([
    typeorm_1.OneToMany(() => challenge_pass_entity_1.ChallengePassEntity, (challengePass) => challengePass.challenge, {
        cascade: true,
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Array)
], ChallengeEntity.prototype, "passes", void 0);
__decorate([
    typeorm_1.OneToMany(() => user_training_entity_1.UserTrainingEntity, (userTraining) => userTraining.challenge, {
        cascade: true,
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Array)
], ChallengeEntity.prototype, "userTrainings", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], ChallengeEntity.prototype, "dateCreated", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], ChallengeEntity.prototype, "dateUpdated", void 0);
__decorate([
    typeorm_1.DeleteDateColumn(),
    __metadata("design:type", Date)
], ChallengeEntity.prototype, "dateDeleted", void 0);
ChallengeEntity = __decorate([
    typeorm_1.Entity("challenges")
], ChallengeEntity);
exports.ChallengeEntity = ChallengeEntity;
//# sourceMappingURL=challenge.entity.js.map